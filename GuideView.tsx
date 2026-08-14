import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  ArrowLeft, 
  Clock, 
  DollarSign, 
  Bookmark, 
  BookmarkCheck, 
  CheckCircle2, 
  Circle, 
  Leaf, 
  Share2, 
  Sparkles, 
  Wrench, 
  Check, 
  ShieldAlert, 
  Flame, 
  Lightbulb,
  PartyPopper,
  ArrowUpRight
} from 'lucide-react';
import { ReuseIdea, AnalyzedObject } from '../types';

interface GuideViewProps {
  idea: ReuseIdea;
  parentObject?: AnalyzedObject;
  onBack: () => void;
  onToggleBookmark: (idea: ReuseIdea) => void;
  isBookmarked: boolean;
}

export const GuideView: React.FC<GuideViewProps> = ({
  idea,
  parentObject,
  onBack,
  onToggleBookmark,
  isBookmarked
}) => {
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [checkedMaterials, setCheckedMaterials] = useState<Set<string>>(new Set());
  const [isProjectCompleted, setIsProjectCompleted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const toggleStep = (stepNumber: number) => {
    const next = new Set(completedSteps);
    if (next.has(stepNumber)) {
      next.delete(stepNumber);
    } else {
      next.add(stepNumber);
    }
    setCompletedSteps(next);
  };

  const toggleMaterial = (mat: string) => {
    const next = new Set(checkedMaterials);
    if (next.has(mat)) {
      next.delete(mat);
    } else {
      next.add(mat);
    }
    setCheckedMaterials(next);
  };

  const handleCompleteProject = () => {
    setIsProjectCompleted(true);
    // Mark all steps complete
    const allStepNums = new Set(idea.steps.map(s => s.stepNumber));
    setCompletedSteps(allStepNums);

    // Fire celebratory confetti!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div id="guide-view" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Top Navigation Row */}
      <div className="flex items-center justify-between border-b border-[#121212]/15 pb-4">
        <button
          id="guide-back-btn"
          onClick={onBack}
          className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#121212] hover:text-[#8B4513] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Specimen Folio</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            id="guide-share-btn"
            onClick={handleShare}
            className="px-3.5 py-1.5 border border-[#121212]/20 hover:border-[#121212] bg-[#F2F1EC] text-[#121212] transition-colors text-[10px] uppercase tracking-widest font-bold flex items-center gap-1.5 cursor-pointer"
            title="Share Guide Link"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5 text-[#8B4513]" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copiedLink ? 'Copied' : 'Share Folio'}</span>
          </button>

          <button
            id="guide-bookmark-toggle-btn"
            onClick={() => onToggleBookmark(idea)}
            className={`px-4 py-1.5 text-[10px] uppercase tracking-widest font-bold border transition-colors flex items-center gap-1.5 cursor-pointer ${
              isBookmarked
                ? 'bg-[#121212] text-[#FAF9F6] border-[#121212]'
                : 'bg-[#F2F1EC] text-[#121212] border-[#121212]/20 hover:border-[#121212]'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5 fill-current" />
            <span>{isBookmarked ? 'Archived in Ledger' : 'Archive Blueprint'}</span>
          </button>
        </div>
      </div>

      {/* Guide Header Banner */}
      <div className="space-y-4 text-left">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-1 bg-[#121212] text-[#FAF9F6] text-[10px] uppercase tracking-widest font-bold">
            {idea.category}
          </span>
          <span className="px-2.5 py-1 bg-[#F2F1EC] text-[#121212] text-[10px] uppercase tracking-widest font-semibold border border-[#121212]/15">
            Difficulty: {idea.difficulty}
          </span>
          <span className="px-2.5 py-1 bg-[#F2F1EC] text-[#121212] text-[10px] uppercase tracking-widest font-semibold border border-[#121212]/15 flex items-center gap-1">
            <Clock className="w-3 h-3 text-[#8B4513]" />
            {idea.timeEstimate}
          </span>
          <span className="px-2.5 py-1 bg-[#F2F1EC] text-[#8B4513] text-[10px] uppercase tracking-widest font-mono font-bold border border-[#121212]/15 flex items-center gap-1">
            <DollarSign className="w-3 h-3 text-[#8B4513]" />
            Cost: {idea.costEstimate}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif text-[#121212] font-normal tracking-tight">
          {idea.title}
        </h1>

        <p className="font-serif italic text-sm sm:text-base text-[#121212]/75 leading-relaxed max-w-3xl">
          {idea.description}
        </p>

        {/* Environmental savings pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F2F1EC] border border-[#121212]/15 text-[#121212] text-xs font-serif">
          <Leaf className="w-4 h-4 text-[#8B4513]" />
          <span>Fulfilling this monograph prevents <strong>~{idea.carbonSavedKg} kg</strong> of CO₂ from atmospheric release.</span>
        </div>
      </div>

      {/* Hero Visual Comparison: Before & After Bento */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#F2F1EC] border border-[#121212]/15 p-5 space-y-3 text-left">
          <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#121212]/60">
            Specimen Plate A — Ingested Artifact
          </div>
          <div className="aspect-16/10 overflow-hidden bg-stone-200 border border-[#121212]/15 relative">
            <img
              src={idea.beforeImg}
              alt="Raw Material"
              className="w-full h-full object-cover grayscale"
            />
            <span className="absolute bottom-2 left-2 bg-[#121212]/90 text-[#FAF9F6] text-[9px] uppercase tracking-widest font-bold px-2.5 py-1">
              Raw State
            </span>
          </div>
        </div>

        <div className="bg-[#F2F1EC] border border-[#121212]/15 p-5 space-y-3 text-left">
          <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8B4513] flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            Specimen Plate B — Upcycled Result
          </div>
          <div className="aspect-16/10 overflow-hidden bg-stone-200 border border-[#121212]/15 relative">
            <img
              src={idea.afterImg}
              alt="Transformed Upcycling"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-2 left-2 bg-[#8B4513] text-[#FAF9F6] text-[9px] uppercase tracking-widest font-bold px-2.5 py-1">
              Transformed Masterwork
            </span>
          </div>
        </div>
      </div>

      {/* Main Two-Column Layout: Materials on Left, Steps on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Materials & Tools Checklist */}
        <div className="lg:col-span-4 space-y-6">
          
          <div className="bg-[#FAF9F6] border border-[#121212]/15 p-6 space-y-5 text-left">
            <div className="flex items-center justify-between border-b border-[#121212]/10 pb-3">
              <h3 className="font-serif text-base text-[#121212] font-bold">
                Required Inventory
              </h3>
              <span className="text-[10px] uppercase tracking-widest font-mono text-[#8B4513] font-bold">
                {checkedMaterials.size}/{idea.materials.length} Sourced
              </span>
            </div>

            <div className="space-y-2.5">
              {idea.materials.map((mat, i) => {
                const isChecked = checkedMaterials.has(mat);
                return (
                  <div
                    key={i}
                    onClick={() => toggleMaterial(mat)}
                    className={`flex items-start gap-3 p-2 border transition-colors cursor-pointer ${
                      isChecked ? 'bg-[#F2F1EC] border-[#121212]/20 text-[#121212]/50' : 'bg-[#FAF9F6] border-[#121212]/10 hover:border-[#121212]/30 text-[#121212]'
                    }`}
                  >
                    <div className="mt-0.5">
                      {isChecked ? (
                        <CheckCircle2 className="w-4 h-4 text-[#8B4513]" />
                      ) : (
                        <Circle className="w-4 h-4 text-[#121212]/30" />
                      )}
                    </div>
                    <span className={`text-xs font-serif ${isChecked ? 'line-through text-[#121212]/40' : ''}`}>
                      {mat}
                    </span>
                  </div>
                );
              })}
            </div>

            {idea.toolsNeeded && idea.toolsNeeded.length > 0 && (
              <div className="pt-4 border-t border-[#121212]/10">
                <div className="text-[10px] uppercase tracking-widest font-bold text-[#121212]/70 mb-2.5 flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-[#8B4513]" />
                  <span>Atelier Apparatus</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {idea.toolsNeeded.map((tool, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-[#F2F1EC] text-[#121212] text-[10px] uppercase tracking-wider font-semibold border border-[#121212]/15">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Safety & Circular Tip */}
          <div className="bg-[#F2F1EC] border border-[#121212]/15 p-5 space-y-2 text-left">
            <div className="text-[10px] uppercase tracking-widest font-bold text-[#8B4513] flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4" />
              <span>Atelier Advisory</span>
            </div>
            <p className="font-serif italic text-xs text-[#121212]/80 leading-relaxed">
              When removing factory adhesive labels, soak the specimen in tepid water with a teaspoon of bicarbonate soda to cleanly release polymers without abrasive scraping.
            </p>
          </div>

        </div>

        {/* Right Column: Step-by-Step Interactive Timeline */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-[#FAF9F6] border border-[#121212]/15 p-6 sm:p-8 space-y-6 text-left">
            
            <div className="flex items-center justify-between border-b border-[#121212]/10 pb-4">
              <h2 className="font-serif text-xl sm:text-2xl text-[#121212]">
                Chronological Execution Protocol
              </h2>
              <span className="text-[10px] uppercase tracking-widest font-mono font-bold text-[#8B4513] px-3 py-1 bg-[#F2F1EC] border border-[#121212]/15">
                {completedSteps.size} of {idea.steps.length} Steps Complete
              </span>
            </div>

            {/* Steps Timeline */}
            <div className="space-y-6">
              {idea.steps.map((step) => {
                const isStepDone = completedSteps.has(step.stepNumber);

                return (
                  <div
                    key={step.stepNumber}
                    id={`step-card-${step.stepNumber}`}
                    className={`p-5 border transition-all ${
                      isStepDone
                        ? 'border-[#121212]/30 bg-[#F2F1EC]'
                        : 'border-[#121212]/15 bg-[#FAF9F6]'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Step Number Badge */}
                      <button
                        onClick={() => toggleStep(step.stepNumber)}
                        className={`w-8 h-8 flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 transition-colors cursor-pointer border ${
                          isStepDone
                            ? 'bg-[#121212] text-[#FAF9F6] border-[#121212]'
                            : 'bg-[#FAF9F6] text-[#121212] border-[#121212]/20 hover:border-[#121212]'
                        }`}
                        title={isStepDone ? "Mark Incomplete" : "Mark as Done"}
                      >
                        {isStepDone ? <Check className="w-4 h-4" /> : `0${step.stepNumber}`}
                      </button>

                      {/* Content */}
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className={`font-serif text-base text-[#121212] font-bold ${isStepDone ? 'line-through text-[#121212]/50' : ''}`}>
                            {step.title}
                          </h3>
                          <button
                            onClick={() => toggleStep(step.stepNumber)}
                            className="text-[10px] uppercase tracking-widest font-bold text-[#8B4513] hover:text-[#121212] cursor-pointer"
                          >
                            {isStepDone ? 'Completed ✓' : 'Mark Done'}
                          </button>
                        </div>

                        <p className="font-serif text-xs sm:text-sm text-[#121212]/80 leading-relaxed">
                          {step.instruction}
                        </p>

                        {step.tip && (
                          <div className="p-3 bg-[#F2F1EC] border border-[#121212]/10 text-xs font-serif italic text-[#121212]/75 flex items-start gap-2">
                            <span className="font-sans font-bold uppercase text-[9px] tracking-widest text-[#8B4513] not-italic flex-shrink-0">Note:</span>
                            <span>{step.tip}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Project Celebration Action */}
            <div className="pt-6 border-t border-[#121212]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="font-serif italic text-xs text-[#121212]/60 text-center sm:text-left">
                Executed all fabrication steps? Formalize project completion to record carbon abatement.
              </div>

              <button
                id="mark-project-completed-btn"
                onClick={handleCompleteProject}
                disabled={isProjectCompleted}
                className={`px-6 py-3.5 text-xs uppercase tracking-widest font-bold border transition-all cursor-pointer flex items-center gap-2 ${
                  isProjectCompleted
                    ? 'bg-[#121212] text-[#FAF9F6] border-[#121212] opacity-80 cursor-default'
                    : 'bg-[#121212] text-[#FAF9F6] border-[#121212] hover:bg-transparent hover:text-[#121212]'
                }`}
              >
                <PartyPopper className="w-4 h-4" />
                <span>{isProjectCompleted ? 'Masterwork Concluded ✦' : 'Formalize Masterwork Concluded ✦'}</span>
              </button>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

