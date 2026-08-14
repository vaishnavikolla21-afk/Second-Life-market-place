import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ScanLine, 
  ShoppingBag, 
  CheckCircle2, 
  Leaf, 
  ShieldCheck, 
  TrendingUp, 
  Recycle, 
  Layers, 
  Clock, 
  DollarSign, 
  Eye, 
  Flame,
  Globe2,
  Compass,
  ArrowUpRight
} from 'lucide-react';
import { AnalyzedObject, ReuseIdea } from '../types';

interface HomeViewProps {
  onStartAnalysis: (presetObject?: AnalyzedObject) => void;
  onExploreMarketplace: () => void;
  onSelectIdea: (idea: ReuseIdea, parentObject?: AnalyzedObject) => void;
  presetObjects: AnalyzedObject[];
}

export const HomeView: React.FC<HomeViewProps> = ({
  onStartAnalysis,
  onExploreMarketplace,
  onSelectIdea,
  presetObjects
}) => {
  const [heroToggleAfter, setHeroToggleAfter] = useState(false);
  const featuredObject = presetObjects[0]; // Plastic bottle
  const featuredIdea = featuredObject.ideas[0]; // Self-Watering Planter

  return (
    <div id="home-view" className="space-y-20 pb-24">
      
      {/* 1. Hero Section: Editorial Cover Monograph */}
      <section className="pt-8 md:pt-16 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Hairline & Issue Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-10 border-b border-[#121212]/15 text-xs text-[#121212]/70">
            <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8B4513]">
              Essay № 01 — The Architecture of Reuse
            </div>
            <div className="font-serif italic text-xs mt-1 sm:mt-0 text-[#121212]/60">
              Transforming domestic discarded matter through artificial intelligence vision.
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Value Prop */}
            <div className="lg:col-span-7 space-y-8 text-left">
              
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-bold text-[#8B4513]">
                  <span>Circular AI Monograph</span>
                  <span>•</span>
                  <span>Open Archival Access</span>
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-[#121212] tracking-tight leading-[1.06]">
                  Don’t discard it. <br />
                  <span className="italic font-normal text-[#8B4513]">Give it a second life.</span>
                </h1>
              </div>

              {/* Editorial Pullquote Subtitle */}
              <p className="font-serif italic text-lg sm:text-xl text-[#121212]/80 leading-relaxed max-w-2xl">
                "Every manufactured article holds unspent utility. Our multimodal vision architecture deciphers polymer compositions, certifies integrity, and authors five bespoke upcycling masterplans or facilitates direct local rehoming."
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  id="hero-analyze-cta"
                  onClick={() => onStartAnalysis()}
                  className="flex items-center justify-center gap-3 px-8 py-3.5 bg-[#121212] text-[#FAF9F6] border border-[#121212] hover:bg-transparent hover:text-[#121212] text-xs uppercase tracking-widest font-bold transition-all cursor-pointer"
                >
                  <ScanLine className="w-4 h-4" />
                  <span>Analyze an Object</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  id="hero-marketplace-cta"
                  onClick={onExploreMarketplace}
                  className="flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent text-[#121212] border border-[#121212]/30 hover:border-[#121212] hover:bg-[#F2F1EC] text-xs uppercase tracking-widest font-bold transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 text-[#8B4513]" />
                  <span>Explore Marketplace</span>
                </button>
              </div>

              {/* Trust & Eco metrics row */}
              <div className="pt-4 flex flex-wrap items-center gap-8 text-[11px] uppercase tracking-wider text-[#121212]/60 font-semibold border-t border-[#121212]/10">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#8B4513] rounded-full" />
                  <span>Free Non-Commercial Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#121212] rounded-full" />
                  <span>Zero Landfill Waste Objective</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Hero Transformation Card (Plate 01) */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Editorial Plate Frame */}
                <div className="bg-[#F2F1EC] border border-[#121212]/15 p-6 sm:p-7 space-y-5">
                  
                  {/* Plate Header Label */}
                  <div className="flex items-center justify-between border-b border-[#121212]/10 pb-3 text-[10px] uppercase tracking-[0.25em] font-bold text-[#121212]">
                    <div className="flex items-center gap-2">
                      <span className="text-[#8B4513]">Plate 01</span>
                      <span>—</span>
                      <span>Case Study</span>
                    </div>
                    <span className="font-mono text-[#121212]/60">№ 849-PET</span>
                  </div>

                  {/* Image Container with Before / After toggle */}
                  <div className="relative aspect-4/3 overflow-hidden bg-stone-200 border border-[#121212]/10 group">
                    <img
                      src={heroToggleAfter ? featuredIdea.afterImg : featuredObject.imageUrl}
                      alt={heroToggleAfter ? "Transformed Planter" : "Raw Plastic Bottle"}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Toggle overlay badge */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2 bg-[#121212]/90 backdrop-blur-xs text-[#FAF9F6]">
                      <span className="text-[10px] uppercase tracking-widest font-bold">
                        {heroToggleAfter ? '• Upcycled Result' : '• Raw Household Matter'}
                      </span>
                      <button
                        id="hero-toggle-transform-btn"
                        onClick={() => setHeroToggleAfter(!heroToggleAfter)}
                        className="px-3 py-1 bg-[#FAF9F6] text-[#121212] text-[10px] uppercase tracking-widest font-bold hover:bg-white transition-colors cursor-pointer"
                      >
                        {heroToggleAfter ? 'View Raw' : 'View Result'}
                      </button>
                    </div>

                    <div className="absolute top-3 right-3 bg-[#121212] text-[#FAF9F6] text-[9px] uppercase tracking-[0.2em] font-bold px-2.5 py-1">
                      PET-01 Polymer
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="space-y-4 pt-1">
                    <div>
                      <h3 className="font-serif text-2xl text-[#121212] tracking-tight">
                        Self-Watering Botanical Vessel
                      </h3>
                      <p className="font-serif italic text-xs text-[#121212]/70 mt-0.5">
                        Transformed from standard 1L polyethylene terephthalate container
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center py-2.5 bg-[#FAF9F6] border border-[#121212]/10">
                      <div>
                        <div className="text-[9px] text-[#121212]/50 font-bold uppercase tracking-widest">Cost</div>
                        <div className="text-xs font-bold text-[#121212] mt-0.5">$0.00</div>
                      </div>
                      <div className="border-x border-[#121212]/10">
                        <div className="text-[9px] text-[#121212]/50 font-bold uppercase tracking-widest">CO₂ Offset</div>
                        <div className="text-xs font-bold text-[#8B4513] mt-0.5">0.85 kg</div>
                      </div>
                      <div>
                        <div className="text-[9px] text-[#121212]/50 font-bold uppercase tracking-widest">Time</div>
                        <div className="text-xs font-bold text-[#121212] mt-0.5">15 min</div>
                      </div>
                    </div>

                    <button
                      id="hero-view-sample-guide-btn"
                      onClick={() => onSelectIdea(featuredIdea, featuredObject)}
                      className="w-full py-3 bg-[#121212] text-[#FAF9F6] hover:bg-[#8B4513] text-xs uppercase tracking-widest font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Study Assembly Blueprint</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Quick Demo Presets Bar: The Specimen Ledger */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121212] text-[#FAF9F6] p-8 sm:p-12 border border-[#121212]">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-8 pb-6 border-b border-white/15">
            <div className="space-y-2">
              <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#D4AF37]">
                Specimen Gallery & Pre-Loaded Analyses
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-normal">
                Examine Standard Domestic Artifacts
              </h2>
              <p className="font-serif italic text-sm text-[#FAF9F6]/70 max-w-xl">
                Select any archival specimen below to trigger immediate polymer deconstruction and reveal five curated blueprints.
              </p>
            </div>
            
            <button
              onClick={() => onStartAnalysis()}
              className="px-6 py-3 bg-[#FAF9F6] text-[#121212] text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-[#8B4513] transition-colors cursor-pointer whitespace-nowrap"
            >
              Upload Custom Photograph +
            </button>
          </div>

          {/* Presets Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {presetObjects.map((obj, idx) => (
              <div
                key={obj.id}
                id={`preset-card-${obj.id}`}
                onClick={() => onStartAnalysis(obj)}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 p-4 cursor-pointer transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="aspect-4/3 overflow-hidden bg-black relative border border-white/10">
                    <img
                      src={obj.imageUrl}
                      alt={obj.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                    <span className="absolute top-2 right-2 px-2 py-0.5 bg-[#121212]/90 text-[9px] font-bold uppercase tracking-widest text-[#D4AF37]">
                      {obj.recyclingCode || 'Recyclable'}
                    </span>
                    <span className="absolute bottom-2 left-2 text-[9px] font-mono text-white/70">
                      REF. 0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <div className="font-serif text-lg text-[#FAF9F6] group-hover:text-[#D4AF37] transition-colors">
                      {obj.name}
                    </div>
                    <div className="text-[11px] text-[#FAF9F6]/60 truncate font-mono mt-0.5">
                      {obj.materialComposition}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">
                  <span>5 Blueprints</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. How It Works: The Tri-Fold Monograph Method */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8B4513]">
            Methodology & Protocol
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#121212]">
            The Three-Step Circular Method
          </h2>
          <p className="font-serif italic text-sm text-[#121212]/70">
            A deliberate sequence for diverting domestic materials away from incineration and landfills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Step 1 */}
          <div className="bg-[#F2F1EC] border border-[#121212]/15 p-8 space-y-4 hover:border-[#121212] transition-colors">
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8B4513] font-bold pb-2 border-b border-[#121212]/10">
              Phase 01 — Capture
            </div>
            <h3 className="font-serif text-2xl text-[#121212]">
              Photograph or Ingest
            </h3>
            <p className="font-serif text-sm text-[#121212]/75 leading-relaxed">
              Capture or upload any bottle, vessel, vintage hardware, textile off-cut, or wooden artifact directly via camera or browser.
            </p>
            <div className="pt-2 text-[10px] uppercase tracking-widest font-bold text-[#121212]/60">
              Accepts PNG, JPG, WEBP formats
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-[#F2F1EC] border border-[#121212]/15 p-8 space-y-4 hover:border-[#121212] transition-colors">
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8B4513] font-bold pb-2 border-b border-[#121212]/10">
              Phase 02 — Deconstruct
            </div>
            <h3 className="font-serif text-2xl text-[#121212]">
              Multimodal Material Audit
            </h3>
            <p className="font-serif text-sm text-[#121212]/75 leading-relaxed">
              Gemini vision inspects structural polymers, alloys, coatings, food-safety grades, and municipal recycling indicators.
            </p>
            <div className="pt-2 text-[10px] uppercase tracking-widest font-bold text-[#121212]/60">
              98%+ Polymer Verification Accuracy
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#F2F1EC] border border-[#121212]/15 p-8 space-y-4 hover:border-[#121212] transition-colors">
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8B4513] font-bold pb-2 border-b border-[#121212]/10">
              Phase 03 — Reallocate
            </div>
            <h3 className="font-serif text-2xl text-[#121212]">
              Execute or Rehome
            </h3>
            <p className="font-serif text-sm text-[#121212]/75 leading-relaxed">
              Follow step-by-step masterclass blueprints with required household tools, or dispatch to local neighbors in the circular exchange.
            </p>
            <div className="pt-2 text-[10px] uppercase tracking-widest font-bold text-[#121212]/60">
              Verifiable Carbon Reduction Ledger
            </div>
          </div>

        </div>
      </section>

      {/* 4. Community Impact Statistics Ledger */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-b border-[#121212]/15 py-12">
          
          <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8B4513] text-center mb-8">
            The Circular Archival Registry — Lifetime Metric Ledger
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-[#121212]/10">
            <div className="pt-4 lg:pt-0">
              <div className="text-4xl sm:text-5xl font-serif text-[#121212] font-normal">
                142,500+
              </div>
              <div className="text-xs uppercase tracking-widest text-[#121212]/60 font-semibold mt-2">
                Objects Diverted
              </div>
            </div>

            <div className="pt-4 lg:pt-0">
              <div className="text-4xl sm:text-5xl font-serif text-[#8B4513] font-normal">
                84,200 kg
              </div>
              <div className="text-xs uppercase tracking-widest text-[#121212]/60 font-semibold mt-2">
                CO₂ Emissions Abated
              </div>
            </div>

            <div className="pt-4 lg:pt-0">
              <div className="text-4xl sm:text-5xl font-serif text-[#121212] font-normal">
                18,900+
              </div>
              <div className="text-xs uppercase tracking-widest text-[#121212]/60 font-semibold mt-2">
                Blueprints Completed
              </div>
            </div>

            <div className="pt-4 lg:pt-0">
              <div className="text-4xl sm:text-5xl font-serif text-[#121212] font-normal">
                $210,000+
              </div>
              <div className="text-xs uppercase tracking-widest text-[#121212]/60 font-semibold mt-2">
                Community Value Saved
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

