import React from 'react';
import { Leaf, Recycle, ShieldCheck, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: 'home' | 'analyzer' | 'marketplace' | 'list-item' | 'profile') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#121212] text-[#FAF9F6] pt-14 pb-10 border-t border-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="space-y-1">
              <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#D2B48C]">
                Monograph & Gazette
              </div>
              <div className="font-serif text-2xl tracking-tight text-[#FAF9F6] font-normal">
                Second-Life Archive
              </div>
            </div>

            <p className="font-serif italic text-xs sm:text-sm text-[#FAF9F6]/70 max-w-sm leading-relaxed">
              An archival repository and vision laboratory dedicated to preserving the life of material artifacts through optical analysis, step-by-step restoration monographs, and neighborhood circular stewardship.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#D2B48C] font-mono">
              <span className="flex items-center gap-1.5">
                <Recycle className="w-3.5 h-3.5" />
                Zero Landfill Protocol
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                Gemini Vision Verified
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6 text-xs text-left">
            <div className="space-y-3">
              <div className="font-bold text-[#FAF9F6] uppercase tracking-[0.2em] text-[10px]">Registry</div>
              <ul className="space-y-2 font-serif text-[#FAF9F6]/70">
                <li>
                  <button onClick={() => onNavigate('home')} className="hover:text-[#FAF9F6] hover:underline transition-colors cursor-pointer">
                    Frontispiece
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('analyzer')} className="hover:text-[#FAF9F6] hover:underline transition-colors cursor-pointer">
                    Examination Chamber
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('marketplace')} className="hover:text-[#FAF9F6] hover:underline transition-colors cursor-pointer">
                    Curated Folio
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('list-item')} className="hover:text-[#FAF9F6] hover:underline transition-colors cursor-pointer">
                    Inscribe Specimen
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="font-bold text-[#FAF9F6] uppercase tracking-[0.2em] text-[10px]">Classifications</div>
              <ul className="space-y-2 font-serif text-[#FAF9F6]/70">
                <li><span className="hover:text-[#FAF9F6] cursor-pointer">Plastics (PET / HDPE)</span></li>
                <li><span className="hover:text-[#FAF9F6] cursor-pointer">Textiles & Heritage Denim</span></li>
                <li><span className="hover:text-[#FAF9F6] cursor-pointer">Vitreous Glass & Storage</span></li>
                <li><span className="hover:text-[#FAF9F6] cursor-pointer">Reclaimed Joinery & Metals</span></li>
              </ul>
            </div>
          </div>

          {/* Circular Community Impact Card */}
          <div className="md:col-span-3 p-5 bg-[#1C1C1C] border border-[#FAF9F6]/15 space-y-2.5 text-left">
            <div className="text-[10px] font-bold text-[#D2B48C] uppercase tracking-[0.2em]">
              Civic Abatement Target
            </div>
            <div className="text-xl font-serif font-normal text-[#FAF9F6]">
              1,000,000 kg CO₂
            </div>
            <div className="w-full bg-[#FAF9F6]/20 h-1 overflow-hidden">
              <div className="bg-[#FAF9F6] h-full w-[84%]" />
            </div>
            <p className="font-serif italic text-[11px] text-[#FAF9F6]/60 pt-1 leading-relaxed">
              84.2% of the collective preservation target attained across 142,500 cataloged specimens.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#FAF9F6]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF9F6]/50">
          <div className="font-serif">
            © {new Date().getFullYear()} Second-Life Gazette & Archive — Inscribed with Gemini Optical Intelligence.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#FAF9F6]/70 hover:text-[#FAF9F6] uppercase tracking-widest text-[10px] font-bold transition-colors cursor-pointer"
          >
            <span>Ascend to Masthead</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

