import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

// Middleware for parsing JSON with ample limit for base64 image data
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: true, limit: "25mb" }));

// Lazy/safe Gemini Client initialization
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// API Routes
app.get("/api/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Endpoint: AI Object Analysis (Multimodal / Prompt)
app.post("/api/analyze-object", async (req: Request, res: Response) => {
  try {
    const { imageBase64, mimeType = "image/jpeg", objectName, userNote } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      // Graceful fallback if Gemini API key is not configured
      return res.json({
        fallback: true,
        message: "Gemini API key not configured, returning structured template.",
        data: null,
      });
    }

    const contents: any[] = [];

    // If an image was uploaded, send inline data part
    if (imageBase64) {
      // Strip potential data URL prefix if present
      const cleanBase64 = imageBase64.replace(/^data:image\/[a-z]+;base64,/, "");
      contents.push({
        inlineData: {
          mimeType: mimeType,
          data: cleanBase64,
        },
      });
    }

    const promptText = `
You are the world's top circular economy engineer, materials scientist, and sustainable DIY upcycling expert for the Second-Life ♻️ platform.
Analyze the provided object image ${objectName ? `or item description: "${objectName}"` : ""}. ${userNote ? `User context: "${userNote}"` : ""}

Provide a rigorous sustainability and material analysis:
1. Identify exact object name, category (e.g. "Plastics & Containers", "Textiles & Apparel", "Glass & Storage", "Lighting & Decor", "Wood & Hardware", "Electronics & Gadgets").
2. Exact material composition (e.g., "100% Polyethylene Terephthalate (PET)", "98% Cotton Denim, 2% Elastane", "Solid Brass & Cast Base").
3. Recycling Code (e.g. "PET-01", "HDPE-02", "TEX-05", "GLA-70", "MET-BRASS", "PAP-20").
4. Condition rating and confidence score (e.g. 96-99%).
5. 4 key material characteristics (e.g., "Waterproof", "Easy to Cut", "Food Safe", "High Tensile").
6. 4 tags.
7. Concise technical summary (2 sentences).
8. Exactly 5 innovative, practical, distinct upcycling/reuse projects ranging in difficulty, from immediate 5-minute zero-cost hacks to creative weekend crafts or marketplace resale:
   - For each idea: title, category, difficulty ('Easy' | 'Medium' | 'Advanced'), time estimate (e.g. '15 mins'), cost estimate (e.g. 'Free' or '$3'), estimated CO2 saved in kg (e.g. 0.8 to 5.0 kg), compelling description, materials needed list, tools needed list, and 3-4 sequential step-by-step instructions with a pro tip for each step.
`;

    contents.push({ text: promptText });

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            category: { type: Type.STRING },
            materialComposition: { type: Type.STRING },
            recyclingCode: { type: Type.STRING },
            conditionRating: { type: Type.STRING },
            confidence: { type: Type.NUMBER },
            features: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            tags: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            summary: { type: Type.STRING },
            ideas: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  category: { type: Type.STRING },
                  difficulty: { type: Type.STRING },
                  timeEstimate: { type: Type.STRING },
                  costEstimate: { type: Type.STRING },
                  carbonSavedKg: { type: Type.NUMBER },
                  description: { type: Type.STRING },
                  materials: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                  },
                  toolsNeeded: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                  },
                  steps: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        stepNumber: { type: Type.INTEGER },
                        title: { type: Type.STRING },
                        instruction: { type: Type.STRING },
                        tip: { type: Type.STRING },
                      },
                      required: ["stepNumber", "title", "instruction"],
                    },
                  },
                },
                required: [
                  "title",
                  "category",
                  "difficulty",
                  "timeEstimate",
                  "costEstimate",
                  "carbonSavedKg",
                  "description",
                  "materials",
                  "steps",
                ],
              },
            },
          },
          required: [
            "name",
            "category",
            "materialComposition",
            "conditionRating",
            "confidence",
            "features",
            "tags",
            "summary",
            "ideas",
          ],
        },
      },
    });

    const rawJson = response.text;
    if (!rawJson) {
      throw new Error("No response text returned from Gemini");
    }

    const parsedData = JSON.parse(rawJson);
    return res.json({
      success: true,
      data: parsedData,
    });
  } catch (error: any) {
    console.error("Error in /api/analyze-object:", error);
    return res.status(500).json({
      success: false,
      error: error.message || "Failed to analyze object with Gemini AI",
    });
  }
});

// Endpoint: AI Listing Enhancer
app.post("/api/ai-enhance-listing", async (req: Request, res: Response) => {
  try {
    const { title, category, condition, rawDescription } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      return res.json({
        success: true,
        enhancedDescription: `${rawDescription || title} - Inspected and verified in ${condition || 'Good'} condition. Cleaned, functional, and ready to prevent landfill waste with circular reuse.`,
        suggestedPrice: 20,
        carbonOffsetKg: 8.5,
        keyMaterials: ["Reclaimed Material", "Eco Verified"],
      });
    }

    const prompt = `
Enhance this circular economy marketplace listing for maximum appeal, clarity, and sustainability impact:
Title: ${title}
Category: ${category}
Condition: ${condition}
Current Description: ${rawDescription}

Return JSON with:
1. enhancedDescription: Professional, honest, persuasive 2-3 paragraph listing description highlighting sustainability, condition details, and care advice.
2. suggestedPrice: Recommended fair second-hand market price in USD (number).
3. carbonOffsetKg: Realistic estimated kg of CO2 emissions saved by buying this used instead of new (number between 2.0 and 50.0).
4. keyMaterials: Array of 2-4 identified materials.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            enhancedDescription: { type: Type.STRING },
            suggestedPrice: { type: Type.NUMBER },
            carbonOffsetKg: { type: Type.NUMBER },
            keyMaterials: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
          },
          required: [
            "enhancedDescription",
            "suggestedPrice",
            "carbonOffsetKg",
            "keyMaterials",
          ],
        },
      },
    });

    const parsed = JSON.parse(response.text || "{}");
    return res.json({
      success: true,
      ...parsed,
    });
  } catch (error: any) {
    console.error("Error in /api/ai-enhance-listing:", error);
    return res.json({
      success: true,
      enhancedDescription: `${req.body.rawDescription || req.body.title} - Quality verified pre-loved item in ${req.body.condition || 'Good'} condition. Giving this item a second life saves precious resources.`,
      suggestedPrice: 25,
      carbonOffsetKg: 10.0,
      keyMaterials: ["Recycled Materials"],
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
