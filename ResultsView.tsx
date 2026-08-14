import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  DollarSign, 
  Bookmark, 
  Check, 
  ShoppingBag, 
  Layers, 
  Leaf,
  Share2,
  BookmarkCheck,
  Flame,
  Award,
  ArrowUpRight
} from 'lucide-react';
import { AnalyzedObject, ReuseIdea } from '../types';

interface ResultsViewProps {
  analyzedObject: AnalyzedObject;
  onBackToAnalyzer: () => void;
  onSelectIdea: (idea: ReuseIdea) => void;
  onToggleBookmarkIdea: (idea: ReuseIdea) => void;
  onListOnMarketplace: (object: AnalyzedObject) => void;
  savedIdeaIds: Set<string>;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  analyzedObject,
  onBackToAnalyzer,
  onSelectIdea,
  onToggleBookmarkIdea,
  onListOnMarketplace,
  savedIdeaIds
}) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleBookmark = (e: React.MouseEvent, idea: ReuseIdea) => {
    e.stopPropagation();
    onToggleBookmarkIdea(idea);
    const isNowSaved = !savedIdeaIds.has(idea.id);
    setToastMessage(isNowSaved ? `Archived "${idea.title}" to your ledger.` : `Removed "${idea.title}" from ledger.`);
    setTimeout(() => setToastMessage(null), 2500);
  };

  return (
    <div id="results-view" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Toast notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#121212] text-[#FAF9F6] text-xs font-serif px-5 py-3 border border-[#FAF9F6]/20 shadow-2xl flex items-center gap-2.5">
          <BookmarkCheck className="w-4 h-4 text-[#8B4513]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Back Navigation Bar */}
      <div className="flex items-center justify-between border-b border-[#121212]/15 pb-4">
        <button
          id="back-to-analyzer-btn"
          onClick={onBackToAnalyzer}
          className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#121212] hover:text-[#8B4513] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Examination Chamber</span>
        </button>

        <button
          id="list-item-from-results-btn"
          onClick={() => onListOnMarketplace(analyzedObject)}
          className="flex items-center gap-2 px-4 py-2 bg-[#F2F1EC] text-[#121212] border border-[#121212]/20 hover:border-[#121212] text-xs uppercase tracking-widest font-bold transition-colors cursor-pointer"
        >
          <ShoppingBag className="w-3.5 h-3.5 text-[#8B4513]" />
          <span>Draft Exchange Listing</span>
        </button>
      </div>

      {/* Object Identification Summary Monograph */}
      <div className="bg-[#F2F1EC] border border-[#121212]/15 p-6 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Object Image Frame */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="aspect-square overflow-hidden bg-stone-200 border border-[#121212]/15 relative group">
              <img
                src={analyzedObject.imageUrl}
                alt={analyzedObject.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <span className="absolute bottom-2 left-2 px-2.5 py-1 bg-[#121212]/90 text-[#FAF9F6] text-[9px] uppercase tracking-widest font-bold font-mono">
                {analyzedObject.recyclingCode || 'Verified Polymer'}
              </span>
            </div>
          </div>

          {/* Object Details */}
          <div className="md:col-span-8 lg:col-span-9 space-y-4 text-left">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 bg-[#121212] text-[#FAF9F6] text-[10px] uppercase tracking-widest font-bold">
                {analyzedObject.category}
              </span>
              <span className="px-2.5 py-1 bg-[#FAF9F6] text-[#121212] text-[10px] uppercase tracking-widest font-semibold border border-[#121212]/15">
                {analyzedObject.conditionRating}
              </span>
              <span className="px-2.5 py-1 bg-[#FAF9F6] text-[#8B4513] text-[10px] uppercase tracking-widest font-mono font-bold border border-[#121212]/15">
                {analyzedObject.confidence}% AI Certainty
              </span>
            </div>

            <div>
              <h1 className="text-2xl sm:text-4xl font-serif text-[#121212] font-normal">
                {analyzedObject.name}
              </h1>
              <p className="font-serif italic text-xs sm:text-sm text-[#121212]/75 mt-1.5 max-w-3xl leading-relaxed">
                {analyzedObject.summary}
              </p>
            </div>

            {/* Tags & Material Specs */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#121212]/60 mr-1">Material Composition:</span>
              <span className="font-mono text-xs font-bold text-[#121212] bg-[#FAF9F6] border border-[#121212]/15 px-2.5 py-1">
                {analyzedObject.materialComposition}
              </span>
              {analyzedObject.features.map((feat, i) => (
                <span key={i} className="px-2.5 py-1 bg-[#FAF9F6] text-[#121212] text-[10px] uppercase tracking-wider font-semibold border border-[#121212]/10">
                  ✓ {feat}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* 5 Reuse Ideas Section Header */}
      <div className="border-b border-[#121212]/15 pb-4 space-y-2 text-left">
        <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8B4513]">
          Curated Upcycling Folio
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif text-[#121212] font-normal">
          Five Curated Upcycling Blueprints
        </h2>
        <p className="font-serif italic text-xs sm:text-sm text-[#121212]/70">
          Select any blueprint below to inspect the complete step-by-step assembly guide, tools required, and carbon abatement.
        </p>
      </div>

      {/* 5 Ideas Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {analyzedObject.ideas.map((idea, index) => {
          const isSaved = savedIdeaIds.has(idea.id);

          return (
            <div
              key={idea.id}
              id={`idea-card-${idea.id}`}
              onClick={() => onSelectIdea(idea)}
              className="group bg-[#FAF9F6] border border-[#121212]/15 hover:border-[#121212] p-5 transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Image & Bookmark Header */}
                <div className="relative aspect-16/10 overflow-hidden bg-stone-200 border border-[#121212]/10">
                  <img
                    src={idea.afterImg}
                    alt={idea.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-102 transition-all duration-300"
                  />
                  
                  {/* Number Plate */}
                  <div className="absolute top-2.5 left-2.5 w-6 h-6 bg-[#121212] text-[#FAF9F6] text-[10px] font-mono font-bold flex items-center justify-center">
                    0{index + 1}
                  </div>

                  {/* Bookmark Button */}
                  <button
                    id={`bookmark-btn-${idea.id}`}
                    onClick={(e) => handleBookmark(e, idea)}
                    className={`absolute top-2.5 right-2.5 p-2 backdrop-blur-xs transition-colors cursor-pointer ${
                      isSaved
                        ? 'bg-[#121212] text-[#FAF9F6]'
                        : 'bg-[#FAF9F6]/90 hover:bg-[#FAF9F6] text-[#121212]'
                    }`}
                    title={isSaved ? "Saved to Profile" : "Save for later"}
                  >
                    <Bookmark className="w-3.5 h-3.5 fill-current" />
                  </button>

                  <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-[#121212]/90 text-[#FAF9F6] text-[9px] uppercase tracking-widest font-bold">
                    {idea.category}
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-1 text-left">
                  <h3 className="font-serif text-lg text-[#121212] font-normal group-hover:text-[#8B4513] transition-colors">
                    {idea.title}
                  </h3>
                  <p className="font-serif italic text-xs text-[#121212]/70 line-clamp-2 leading-relaxed">
                    {idea.description}
                  </p>
                </div>

                {/* Specs Pill Grid */}
                <div className="grid grid-cols-3 gap-2 py-2 border-y border-[#121212]/10 text-center">
                  <div className="p-2 bg-[#F2F1EC]">
                    <div className="text-[9px] text-[#121212]/50 uppercase tracking-widest font-bold">Difficulty</div>
                    <div className="font-serif text-xs font-bold text-[#121212] mt-0.5">{idea.difficulty}</div>
                  </div>
                  <div className="p-2 bg-[#F2F1EC]">
                    <div className="text-[9px] text-[#121212]/50 uppercase tracking-widest font-bold">Time</div>
                    <div className="font-serif text-xs font-bold text-[#121212] mt-0.5">{idea.timeEstimate}</div>
                  </div>
                  <div className="p-2 bg-[#F2F1EC]">
                    <div className="text-[9px] text-[#121212]/50 uppercase tracking-widest font-bold">Cost</div>
                    <div className="font-mono text-xs font-bold text-[#8B4513] mt-0.5">{idea.costEstimate}</div>
                  </div>
                </div>

              </div>

              {/* Card Action Footer */}
              <div className="mt-4 pt-3 border-t border-[#121212]/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-mono font-bold text-[#8B4513]">
                  <Leaf className="w-3.5 h-3.5" />
                  <span>+{idea.carbonSavedKg}kg CO₂ abated</span>
                </div>

                <div className="text-[10px] uppercase tracking-widest font-bold text-[#121212] group-hover:text-[#8B4513] flex items-center gap-1">
                  <span>Inspect Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};

