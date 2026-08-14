import React, { useState } from 'react';
import { 
  Sparkles, 
  ShoppingBag, 
  Plus, 
  User, 
  Search, 
  Menu, 
  X, 
  Leaf,
  ScanLine,
  Bookmark
} from 'lucide-react';
import { UserProfile } from '../types';

interface NavbarProps {
  currentTab: 'home' | 'analyzer' | 'results' | 'marketplace' | 'list-item' | 'profile';
  onNavigate: (tab: 'home' | 'analyzer' | 'results' | 'marketplace' | 'list-item' | 'profile') => void;
  user: UserProfile;
  savedIdeasCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onNavigate,
  user,
  savedIdeasCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: 'home' | 'analyzer' | 'results' | 'marketplace' | 'list-item' | 'profile') => {
    onNavigate(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header id="main-header" className="sticky top-0 z-50 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#121212]/10 transition-colors">
      
      {/* Top Editorial Issue Meta Bar */}
      <div className="hidden sm:flex justify-between items-center px-6 lg:px-12 py-1.5 border-b border-[#121212]/5 text-[10px] uppercase tracking-[0.25em] text-[#121212]/60 font-semibold bg-[#F2F1EC]/60">
        <div>Issue № 24 — Circular Edition 2026</div>
        <div className="flex items-center gap-4">
          <span className="text-[#8B4513] font-bold">Vol. IV — AI Material Monograph</span>
          <span>•</span>
          <span>{user.co2SavedKg} kg CO₂ Archived</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Masthead */}
          <div 
            id="brand-logo"
            onClick={() => handleNavClick('home')}
            className="flex items-baseline gap-3 cursor-pointer group select-none"
          >
            <div className="text-2xl sm:text-3xl font-serif italic lowercase tracking-tight text-[#121212] group-hover:opacity-80 transition-opacity">
              second-life<span className="text-[#8B4513] not-italic text-xl">.</span>
            </div>
            <span className="hidden lg:inline text-[9px] uppercase tracking-[0.3em] text-[#121212]/50 font-bold border-l border-[#121212]/15 pl-3">
              Circular Repository
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-semibold text-[#121212]">
            <button
              id="nav-home-btn"
              onClick={() => handleNavClick('home')}
              className={`py-2 transition-all cursor-pointer ${
                currentTab === 'home'
                  ? 'border-b border-[#121212] text-[#121212] font-bold'
                  : 'text-[#121212]/60 hover:text-[#121212]'
              }`}
            >
              Overview
            </button>

            <button
              id="nav-analyzer-btn"
              onClick={() => handleNavClick('analyzer')}
              className={`py-2 transition-all cursor-pointer flex items-center gap-1.5 ${
                currentTab === 'analyzer' || currentTab === 'results'
                  ? 'border-b border-[#121212] text-[#121212] font-bold'
                  : 'text-[#121212]/60 hover:text-[#121212]'
              }`}
            >
              <span>AI Analyzer</span>
            </button>

            <button
              id="nav-marketplace-btn"
              onClick={() => handleNavClick('marketplace')}
              className={`py-2 transition-all cursor-pointer flex items-center gap-1.5 ${
                currentTab === 'marketplace'
                  ? 'border-b border-[#121212] text-[#121212] font-bold'
                  : 'text-[#121212]/60 hover:text-[#121212]'
              }`}
            >
              <span>Marketplace</span>
            </button>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* List Item CTA */}
            <button
              id="nav-list-item-btn"
              onClick={() => handleNavClick('list-item')}
              className={`flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-bold border transition-all cursor-pointer ${
                currentTab === 'list-item'
                  ? 'bg-transparent text-[#121212] border-[#121212]'
                  : 'bg-[#121212] text-[#FAF9F6] border-[#121212] hover:bg-transparent hover:text-[#121212]'
              }`}
            >
              <Plus className="w-3.5 h-3.5" />
              <span>List Item</span>
            </button>

            {/* Profile Avatar Button */}
            <button
              id="nav-profile-btn"
              onClick={() => handleNavClick('profile')}
              className={`flex items-center gap-3 p-1.5 pl-3 border transition-all cursor-pointer ${
                currentTab === 'profile'
                  ? 'border-[#121212] bg-[#F2F1EC]'
                  : 'border-[#121212]/20 hover:border-[#121212] bg-[#FAF9F6]'
              }`}
            >
              <div className="text-left hidden lg:block">
                <div className="text-[11px] font-bold text-[#121212] uppercase tracking-wider leading-tight">{user.name}</div>
                <div className="text-[9px] text-[#8B4513] font-bold uppercase tracking-widest">{user.tier}</div>
              </div>
              <img
                src={user.avatar}
                alt={user.name}
                className="w-7 h-7 object-cover grayscale contrast-125 border border-[#121212]/30"
              />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#121212] border border-[#121212]/20 hover:bg-[#F2F1EC]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="md:hidden border-t border-[#121212]/10 bg-[#FAF9F6] px-6 pt-4 pb-6 space-y-3">
          <div className="text-[10px] uppercase tracking-[0.25em] text-[#8B4513] font-bold mb-2">Index Navigation</div>
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left py-2.5 text-xs uppercase tracking-widest font-semibold flex items-center justify-between border-b border-[#121212]/5 ${
              currentTab === 'home' ? 'text-[#121212] font-bold border-[#121212]' : 'text-[#121212]/70'
            }`}
          >
            <span>Overview</span>
            <span>01</span>
          </button>
          <button
            onClick={() => handleNavClick('analyzer')}
            className={`w-full text-left py-2.5 text-xs uppercase tracking-widest font-semibold flex items-center justify-between border-b border-[#121212]/5 ${
              currentTab === 'analyzer' || currentTab === 'results' ? 'text-[#121212] font-bold border-[#121212]' : 'text-[#121212]/70'
            }`}
          >
            <span>AI Object Analyzer</span>
            <span>02</span>
          </button>
          <button
            onClick={() => handleNavClick('marketplace')}
            className={`w-full text-left py-2.5 text-xs uppercase tracking-widest font-semibold flex items-center justify-between border-b border-[#121212]/5 ${
              currentTab === 'marketplace' ? 'text-[#121212] font-bold border-[#121212]' : 'text-[#121212]/70'
            }`}
          >
            <span>Circular Marketplace</span>
            <span>03</span>
          </button>
          <button
            onClick={() => handleNavClick('list-item')}
            className={`w-full text-left py-2.5 text-xs uppercase tracking-widest font-semibold flex items-center justify-between border-b border-[#121212]/5 ${
              currentTab === 'list-item' ? 'text-[#121212] font-bold border-[#121212]' : 'text-[#121212]/70'
            }`}
          >
            <span>List an Item</span>
            <span>04</span>
          </button>
          <button
            onClick={() => handleNavClick('profile')}
            className={`w-full text-left py-2.5 text-xs uppercase tracking-widest font-semibold flex items-center justify-between ${
              currentTab === 'profile' ? 'text-[#121212] font-bold' : 'text-[#121212]/70'
            }`}
          >
            <span>Member Dossier</span>
            <span>05</span>
          </button>
        </div>
      )}
    </header>
  );
};

