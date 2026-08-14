import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  UploadCloud, 
  Sparkles, 
  Leaf, 
  MapPin, 
  DollarSign, 
  Check, 
  X, 
  HelpCircle, 
  Layers, 
  Camera, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Gift
} from 'lucide-react';
import { MarketplaceItem, AnalyzedObject, UserProfile } from '../types';

interface ListItemViewProps {
  onPublishListing: (newItem: MarketplaceItem) => void;
  onCancel: () => void;
  currentUser: UserProfile;
  prefillObject?: AnalyzedObject | null;
}

export const ListItemView: React.FC<ListItemViewProps> = ({
  onPublishListing,
  onCancel,
  currentUser,
  prefillObject
}) => {
  const [photos, setPhotos] = useState<string[]>(
    prefillObject ? [prefillObject.imageUrl] : [
      'https://images.unsplash.com/photo-1580481077195-742299dd7686?auto=format&fit=crop&w=800&q=80'
    ]
  );
  const [title, setTitle] = useState(prefillObject ? prefillObject.name : '');
  const [category, setCategory] = useState(
    prefillObject ? (prefillObject.category.includes('Plastics') ? 'Kitchen' : prefillObject.category.includes('Textiles') ? 'Clothing' : 'Furniture') : 'Furniture'
  );
  const [condition, setCondition] = useState<'Like New' | 'Great' | 'Good' | 'Fair' | 'Upcycled'>('Great');
  const [description, setDescription] = useState(prefillObject ? prefillObject.summary : '');
  const [isFree, setIsFree] = useState(false);
  const [price, setPrice] = useState<number>(35);
  const [location, setLocation] = useState('Portland, OR');
  const [zipCode, setZipCode] = useState('97201');
  const [carbonOffsetKg, setCarbonOffsetKg] = useState<number>(12.5);
  const [materials, setMaterials] = useState<string[]>(
    prefillObject ? [prefillObject.materialComposition] : ['Wood', 'Metal hardware']
  );

  const [isEnhancingWithAI, setIsEnhancingWithAI] = useState(false);
  const [aiEnhancedFeedback, setAiEnhancedFeedback] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const categoriesList = ['Kitchen', 'Garden', 'Tech', 'Furniture', 'Clothing', 'Upcycled', 'Books', 'Home Decor', 'Other'];
  const conditionOptions: Array<'Like New' | 'Great' | 'Good' | 'Fair' | 'Upcycled'> = [
    'Like New',
    'Great',
    'Good',
    'Fair',
    'Upcycled'
  ];

  const handleAddPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (ev.target?.result) {
          setPhotos((prev) => [...prev, ev.target!.result as string]);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleRemovePhoto = (index: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  // AI Listing Enhancer
  const handleAIEnhance = async () => {
    if (!title) {
      alert('Please enter a listing title first.');
      return;
    }

    setIsEnhancingWithAI(true);
    try {
      const res = await fetch('/api/ai-enhance-listing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          category,
          condition,
          rawDescription: description
        })
      });
      const data = await res.json();
      if (data.success) {
        if (data.enhancedDescription) setDescription(data.enhancedDescription);
        if (data.suggestedPrice && !isFree) setPrice(data.suggestedPrice);
        if (data.carbonOffsetKg) setCarbonOffsetKg(data.carbonOffsetKg);
        if (data.keyMaterials) setMaterials(data.keyMaterials);
        setAiEnhancedFeedback('Specimen copy, empirical valuation, and carbon mitigation enhanced ✨');
        setTimeout(() => setAiEnhancedFeedback(null), 4000);
      }
    } catch (err) {
      console.error(err);
      // Fallback
      setDescription(
        `${title} — Thoroughly documented, verified intact in ${condition} condition. Accessible for transfer in ${location}. Rehoming diverts approximately ${carbonOffsetKg} kg lifecycle CO₂ emissions.`
      );
      setAiEnhancedFeedback('Listing monograph enriched.');
      setTimeout(() => setAiEnhancedFeedback(null), 3000);
    } finally {
      setIsEnhancingWithAI(false);
    }
  };

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      alert('Please enter a title for your item.');
      return;
    }
    if (photos.length === 0) {
      alert('Please provide at least one photo.');
      return;
    }

    const newItem: MarketplaceItem = {
      id: `item-${Date.now()}`,
      title: title.trim(),
      price: isFree ? 0 : Number(price) || 0,
      isFree,
      category,
      condition,
      location,
      zipCode: zipCode || '97201',
      description: description.trim() || `${title} in ${condition} condition recorded for circular preservation.`,
      photos,
      aiVerified: true,
      materials,
      seller: {
        name: currentUser.name,
        avatar: currentUser.avatar,
        rating: 5.0,
        reviewCount: 1,
        joinedDate: 'This issue',
        location,
        badges: ['Verified Collector', 'Circular Steward']
      },
      datePosted: 'Just now',
      carbonOffsetKg: carbonOffsetKg || 10.0,
      views: 1,
      saves: 0
    };

    // Confetti celebration
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.5 }
    });

    onPublishListing(newItem);
  };

  return (
    <div id="list-item-view" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Header Banner */}
      <div className="space-y-2 text-left border-b border-[#121212]/15 pb-8">
        <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8B4513]">
          Catalog Registry — Intake Form 04
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif text-[#121212] font-normal tracking-tight">
          Inscribe Specimen to Ledger
        </h1>
        <p className="font-serif italic text-xs sm:text-sm text-[#121212]/70 max-w-2xl">
          Register domestic artifacts for circular re-allocation. Leverage spectroscopic intelligence to calibrate market valuation and carbon abatement metrics.
        </p>
      </div>

      {/* Auto-fill banner if prefilled */}
      {prefillObject && (
        <div className="p-4 bg-[#F2F1EC] border border-[#121212]/20 flex items-center justify-between text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#121212] text-[#FAF9F6] flex items-center justify-center font-bold flex-shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-serif font-bold text-[#121212]">Auto-populated from Vision Examination</div>
              <div className="text-[11px] font-serif italic text-[#121212]/70">Imported audited structural composition for: {prefillObject.name}</div>
            </div>
          </div>
        </div>
      )}

      {/* Form Container */}
      <form onSubmit={handlePublish} className="bg-[#F2F1EC] border border-[#121212]/20 p-6 sm:p-8 space-y-8 text-left">
        
        {/* Section 1: Photos */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-[10px] font-bold text-[#121212] uppercase tracking-widest">
              Visual Plates (At least 1 required)
            </label>
            <span className="text-[11px] font-mono text-[#121212]/60">
              {photos.length} plates archived
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {photos.map((p, idx) => (
              <div key={idx} className="relative aspect-square overflow-hidden bg-stone-200 border border-[#121212]/20 group">
                <img src={p} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0" />
                <button
                  type="button"
                  onClick={() => handleRemovePhoto(idx)}
                  className="absolute top-2 right-2 p-1 bg-[#121212] text-[#FAF9F6] hover:bg-[#8B4513] transition-colors cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
                {idx === 0 && (
                  <span className="absolute bottom-2 left-2 px-2 py-0.5 bg-[#121212] text-[#FAF9F6] text-[9px] uppercase tracking-widest font-bold">
                    Primary
                  </span>
                )}
              </div>
            ))}

            {/* Upload Target Box */}
            <div
              onClick={() => fileInputRef.current?.click()}
              className="aspect-square border border-dashed border-[#121212]/30 hover:border-[#121212] bg-[#FAF9F6] flex flex-col items-center justify-center cursor-pointer transition-all p-3 text-center"
            >
              <Camera className="w-6 h-6 text-[#121212]/50 mb-1" />
              <span className="text-xs font-serif font-bold text-[#121212]">Attach Plate</span>
              <span className="text-[9px] font-mono text-[#121212]/50">JPG, PNG</span>
            </div>
          </div>

          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            className="hidden"
            onChange={handleAddPhoto}
          />
        </div>

        {/* Section 2: Basic Info */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
          
          {/* Title */}
          <div className="sm:col-span-8 space-y-1.5">
            <label className="text-[10px] font-bold text-[#121212] uppercase tracking-widest">
              Specimen Nomenclature *
            </label>
            <input
              type="text"
              id="listing-title-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Cast Iron Tea Vessel, Oak Joinery Bench"
              required
              className="w-full px-4 py-2.5 bg-[#FAF9F6] text-xs sm:text-sm font-serif border border-[#121212]/20 focus:border-[#121212] focus:outline-none"
            />
          </div>

          {/* Category */}
          <div className="sm:col-span-4 space-y-1.5">
            <label className="text-[10px] font-bold text-[#121212] uppercase tracking-widest">
              Classification
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2.5 bg-[#FAF9F6] text-xs font-serif border border-[#121212]/20 focus:border-[#121212] focus:outline-none cursor-pointer"
            >
              {categoriesList.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

        </div>

        {/* Condition selector chips */}
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-[#121212] uppercase tracking-widest">
            Structural Integrity & Preservation Condition
          </label>
          <div className="flex flex-wrap gap-2">
            {conditionOptions.map((opt) => {
              const isSelected = condition === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setCondition(opt)}
                  className={`px-4 py-2 text-[10px] uppercase tracking-widest font-bold border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#121212] text-[#FAF9F6] border-[#121212]'
                      : 'bg-[#FAF9F6] text-[#121212] border-[#121212]/20 hover:border-[#121212]'
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>

        {/* Description & AI Enhance */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-[10px] font-bold text-[#121212] uppercase tracking-widest">
              Archival Monograph & Physical Properties
            </label>
            
            <button
              type="button"
              id="ai-enhance-listing-btn"
              onClick={handleAIEnhance}
              disabled={isEnhancingWithAI}
              className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold text-[#121212] bg-[#FAF9F6] hover:bg-[#121212] hover:text-[#FAF9F6] border border-[#121212] px-3 py-1.5 transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isEnhancingWithAI ? 'Enhancing...' : 'Curate via AI Engine'}</span>
            </button>
          </div>

          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Inscribe details regarding patina, dimensions, provenance, and restoration potential..."
            className="w-full p-4 bg-[#FAF9F6] text-xs sm:text-sm font-serif border border-[#121212]/20 focus:border-[#121212] focus:outline-none leading-relaxed text-[#121212]"
          />

          {aiEnhancedFeedback && (
            <div className="text-xs font-serif text-[#121212] bg-[#FAF9F6] border border-[#121212]/20 p-2.5 flex items-center gap-2">
              <Check className="w-4 h-4 text-[#8B4513]" />
              <span>{aiEnhancedFeedback}</span>
            </div>
          )}
        </div>

        {/* Section 3: Pricing & Logistics */}
        <div className="pt-6 border-t border-[#121212]/15 space-y-6">
          <h3 className="text-xs font-bold text-[#121212] uppercase tracking-widest">
            Valuation & Geo-Coordinates
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
            
            {/* Free Toggle */}
            <div className="sm:col-span-6 p-4 bg-[#FAF9F6] border border-[#121212]/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Gift className="w-5 h-5 text-[#8B4513]" />
                <div>
                  <div className="text-xs font-serif font-bold text-[#121212]">Complimentary Transfer</div>
                  <div className="text-[10px] font-serif italic text-[#121212]/60">Zero-cost community heritage gift</div>
                </div>
              </div>

              <input
                type="checkbox"
                id="free-item-toggle"
                checked={isFree}
                onChange={(e) => setIsFree(e.target.checked)}
                className="w-4 h-4 accent-[#121212] cursor-pointer"
              />
            </div>

            {/* Price ($) */}
            <div className="sm:col-span-6 space-y-1.5">
              <label className="text-[10px] font-bold text-[#121212] uppercase tracking-widest">
                Valuation ($ USD)
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#121212]/50 font-mono text-sm">$</span>
                <input
                  type="number"
                  min="0"
                  step="1"
                  disabled={isFree}
                  value={isFree ? 0 : price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className={`w-full pl-8 pr-4 py-2.5 text-xs font-mono font-bold border ${
                    isFree ? 'bg-stone-200 text-stone-400 border-[#121212]/10' : 'bg-[#FAF9F6] text-[#121212] border-[#121212]/20 focus:border-[#121212] focus:outline-none'
                  }`}
                />
              </div>
            </div>

            {/* Location */}
            <div className="sm:col-span-6 space-y-1.5">
              <label className="text-[10px] font-bold text-[#121212] uppercase tracking-widest">
                Metropolitan Jurisdiction
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-[#8B4513] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Portland, OR (Pearl District)"
                  className="w-full pl-9 pr-4 py-2.5 text-xs font-serif bg-[#FAF9F6] border border-[#121212]/20 focus:border-[#121212] focus:outline-none text-[#121212]"
                />
              </div>
            </div>

            {/* ZIP Code */}
            <div className="sm:col-span-6 space-y-1.5">
              <label className="text-[10px] font-bold text-[#121212] uppercase tracking-widest">
                Postal Code
              </label>
              <input
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="97201"
                className="w-full px-4 py-2.5 text-xs font-mono bg-[#FAF9F6] border border-[#121212]/20 focus:border-[#121212] focus:outline-none text-[#121212]"
              />
            </div>

          </div>

          {/* Environmental Carbon Impact Callout */}
          <div className="p-4 bg-[#FAF9F6] border border-[#121212]/15 flex items-center justify-between text-xs text-[#121212]">
            <div className="flex items-center gap-3">
              <Leaf className="w-4 h-4 text-[#8B4513] flex-shrink-0" />
              <div className="font-serif">
                <span className="font-bold">Estimated Carbon Abatement: </span>
                <span>Transferring this specimen preserves approximately ~<strong className="font-mono">{carbonOffsetKg} kg CO₂</strong> against prime manufacturing.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="pt-6 border-t border-[#121212]/15 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="w-full sm:w-auto px-6 py-3 border border-[#121212]/30 text-[#121212] text-xs uppercase tracking-widest font-bold hover:bg-[#FAF9F6] transition-colors cursor-pointer"
          >
            Cancel
          </button>

          <button
            type="submit"
            id="publish-listing-btn"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#121212] hover:bg-transparent hover:text-[#121212] text-[#FAF9F6] border border-[#121212] text-xs uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Inscribe Specimen into Folio →</span>
          </button>
        </div>

      </form>

    </div>
  );
};

