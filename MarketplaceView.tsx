import React, { useState, useMemo } from 'react';
import { 
  Search, 
  PlusCircle, 
  Filter, 
  MapPin, 
  Leaf, 
  Heart, 
  Sparkles, 
  SlidersHorizontal,
  X,
  Star,
  CheckCircle2,
  TrendingDown,
  Gift,
  ArrowUpRight
} from 'lucide-react';
import { MarketplaceItem } from '../types';
import { ItemDetailModal } from './ItemDetailModal';

interface MarketplaceViewProps {
  items: MarketplaceItem[];
  onNavigateListItem: () => void;
  savedItemIds: Set<string>;
  onToggleSaveItem: (item: MarketplaceItem) => void;
}

export const MarketplaceView: React.FC<MarketplaceViewProps> = ({
  items,
  onNavigateListItem,
  savedItemIds,
  onToggleSaveItem
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Items');
  const [priceFilter, setPriceFilter] = useState<string>('all');
  const [conditionFilter, setConditionFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('recent');
  const [selectedItemForModal, setSelectedItemForModal] = useState<MarketplaceItem | null>(null);

  const categories = [
    'All Items',
    'Kitchen',
    'Garden',
    'Tech',
    'Furniture',
    'Clothing',
    'Upcycled',
    'Free Items'
  ];

  // Filtering & Sorting logic
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Category check
      if (selectedCategory === 'Free Items' && !item.isFree) return false;
      if (selectedCategory !== 'All Items' && selectedCategory !== 'Free Items' && item.category !== selectedCategory) {
        return false;
      }

      // Search query check
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchDesc = item.description.toLowerCase().includes(q);
        const matchLoc = item.location.toLowerCase().includes(q);
        const matchCat = item.category.toLowerCase().includes(q);
        if (!matchTitle && !matchDesc && !matchLoc && !matchCat) return false;
      }

      // Price filter
      if (priceFilter === 'free' && !item.isFree) return false;
      if (priceFilter === 'under25' && (item.price > 25 || item.isFree)) return false;
      if (priceFilter === 'under50' && (item.price > 50 || item.isFree)) return false;
      if (priceFilter === 'over50' && item.price <= 50) return false;

      // Condition filter
      if (conditionFilter !== 'all' && item.condition !== conditionFilter) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'co2-desc') return b.carbonOffsetKg - a.carbonOffsetKg;
      return 0; // default recent
    });
  }, [items, selectedCategory, searchQuery, priceFilter, conditionFilter, sortBy]);

  return (
    <div id="marketplace-view" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* 1. Header Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-[#121212]/15 pb-8 text-left">
        <div className="space-y-2">
          <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8B4513]">
            Civic Circular Ledger — Local Material Exchange
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#121212] font-normal tracking-tight">
            Exchange & Recover Artifacts
          </h1>
          <p className="font-serif italic text-xs sm:text-sm text-[#121212]/70 max-w-2xl">
            Acquire verified pre-loved resources from local patrons, mitigate domestic expenditure, and eliminate industrial manufacturing emissions.
          </p>
        </div>

        <button
          id="marketplace-list-item-cta"
          onClick={onNavigateListItem}
          className="flex items-center gap-2.5 px-6 py-3.5 bg-[#121212] text-[#FAF9F6] border border-[#121212] hover:bg-transparent hover:text-[#121212] text-xs uppercase tracking-widest font-bold transition-all cursor-pointer whitespace-nowrap"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Register An Artifact</span>
        </button>
      </div>

      {/* 2. Search and Filter Bar */}
      <div className="bg-[#F2F1EC] p-5 border border-[#121212]/15 space-y-4">
        
        {/* Top input & drop downs row */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-[#121212]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="marketplace-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search kitchen, garden, timber, alloys, optics..."
              className="w-full pl-10 pr-10 py-2.5 bg-[#FAF9F6] text-xs font-serif text-[#121212] border border-[#121212]/20 focus:border-[#121212] focus:outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#121212]/40 hover:text-[#121212] p-1 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Price Filter Dropdown */}
          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="w-full sm:w-auto px-4 py-2.5 bg-[#FAF9F6] text-xs uppercase tracking-wider font-bold text-[#121212] border border-[#121212]/20 focus:border-[#121212] focus:outline-none cursor-pointer"
          >
            <option value="all">All Valuations</option>
            <option value="free">Complimentary Only</option>
            <option value="under25">Under $25</option>
            <option value="under50">Under $50</option>
            <option value="over50">$50 and Above</option>
          </select>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full sm:w-auto px-4 py-2.5 bg-[#FAF9F6] text-xs uppercase tracking-wider font-bold text-[#121212] border border-[#121212]/20 focus:border-[#121212] focus:outline-none cursor-pointer"
          >
            <option value="recent">Sequence: Chronological</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="co2-desc">CO₂ Offset Abatement</option>
          </select>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                id={`cat-pill-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 text-[10px] uppercase tracking-widest font-bold whitespace-nowrap transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-[#121212] text-[#FAF9F6] border-[#121212]'
                    : 'bg-[#FAF9F6] hover:bg-[#FAF9F6]/80 text-[#121212] border-[#121212]/15'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

      </div>

      {/* 3. Items Counter */}
      <div className="flex items-center justify-between text-xs text-[#121212]/60 font-serif px-1">
        <div>
          Cataloging <strong className="font-mono text-[#121212] font-bold">{filteredItems.length}</strong> audited community items
        </div>
        {selectedCategory !== 'All Items' && (
          <button
            onClick={() => { setSelectedCategory('All Items'); setSearchQuery(''); setPriceFilter('all'); }}
            className="text-[#8B4513] hover:underline font-bold text-[10px] uppercase tracking-widest cursor-pointer"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* 4. Product Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const isSaved = savedItemIds.has(item.id);

            return (
              <div
                key={item.id}
                id={`item-card-${item.id}`}
                onClick={() => setSelectedItemForModal(item)}
                className="group bg-[#FAF9F6] border border-[#121212]/15 hover:border-[#121212] p-4 transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-3 text-left">
                  
                  {/* Photo Container */}
                  <div className="relative aspect-4/3 overflow-hidden bg-stone-200 border border-[#121212]/15">
                    <img
                      src={item.photos[0]}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-102 transition-all duration-300"
                    />

                    {/* Price Pill */}
                    <div className="absolute top-2.5 left-2.5">
                      {item.isFree ? (
                        <span className="px-2.5 py-1 bg-[#121212] text-[#FAF9F6] text-[10px] font-mono font-bold uppercase tracking-widest">
                          FREE
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 bg-[#FAF9F6] text-[#121212] text-xs font-mono font-bold border border-[#121212]/20">
                          ${item.price}
                        </span>
                      )}
                    </div>

                    {/* Heart Button */}
                    <button
                      id={`save-item-btn-${item.id}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleSaveItem(item);
                      }}
                      className={`absolute top-2.5 right-2.5 p-2 backdrop-blur-xs transition-colors cursor-pointer ${
                        isSaved ? 'bg-[#121212] text-[#FAF9F6]' : 'bg-[#FAF9F6]/90 hover:bg-[#FAF9F6] text-[#121212]'
                      }`}
                      title={isSaved ? "Saved" : "Save Item"}
                    >
                      <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
                    </button>

                    {/* Condition tag */}
                    <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 bg-[#121212]/90 text-[#FAF9F6] text-[9px] uppercase tracking-wider font-bold">
                      {item.condition}
                    </div>

                    {/* AI Verified badge */}
                    {item.aiVerified && (
                      <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 bg-[#8B4513] text-[#FAF9F6] text-[9px] uppercase tracking-wider font-bold flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" />
                        Audited
                      </div>
                    )}
                  </div>

                  {/* Title and Category */}
                  <div>
                    <div className="text-[9px] font-bold text-[#8B4513] uppercase tracking-[0.2em]">
                      {item.category}
                    </div>
                    <h3 className="font-serif text-base text-[#121212] font-bold group-hover:text-[#8B4513] transition-colors line-clamp-1 mt-0.5">
                      {item.title}
                    </h3>
                    <p className="font-serif italic text-xs text-[#121212]/70 line-clamp-2 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Location & CO2 Offset */}
                  <div className="flex items-center justify-between text-xs text-[#121212]/60 pt-1 border-t border-[#121212]/10">
                    <span className="flex items-center gap-1 truncate max-w-[140px] font-serif">
                      <MapPin className="w-3 h-3 text-[#8B4513] flex-shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </span>
                    <span className="text-[10px] text-[#8B4513] font-mono font-bold flex items-center gap-0.5">
                      <Leaf className="w-3 h-3" />
                      {item.carbonOffsetKg}kg CO₂
                    </span>
                  </div>

                </div>

                {/* Seller & Action Footer */}
                <div className="mt-3.5 pt-3 border-t border-[#121212]/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={item.seller.avatar}
                      alt={item.seller.name}
                      className="w-5 h-5 object-cover border border-[#121212]/20"
                    />
                    <div className="text-[11px] font-serif font-bold text-[#121212] truncate max-w-[100px]">
                      {item.seller.name}
                    </div>
                  </div>

                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#121212] group-hover:text-[#8B4513]">
                    Examine →
                  </span>
                </div>

              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-[#F2F1EC] border border-[#121212]/15 p-12 text-center space-y-4">
          <div className="w-12 h-12 bg-[#121212] text-[#FAF9F6] mx-auto flex items-center justify-center">
            <Search className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="font-serif text-xl text-[#121212]">No specimens match the active ledger filter</h3>
            <p className="font-serif italic text-xs text-[#121212]/60">Refine search nomenclature or reset parameters.</p>
          </div>
          <button
            onClick={() => { setSelectedCategory('All Items'); setSearchQuery(''); setPriceFilter('all'); }}
            className="px-5 py-2.5 bg-[#121212] text-[#FAF9F6] text-xs uppercase tracking-widest font-bold border border-[#121212] cursor-pointer hover:bg-transparent hover:text-[#121212]"
          >
            Clear All Criteria
          </button>
        </div>
      )}

      {/* Modal View */}
      {selectedItemForModal && (
        <ItemDetailModal
          item={selectedItemForModal}
          onClose={() => setSelectedItemForModal(null)}
          onToggleSave={onToggleSaveItem}
          isSaved={savedItemIds.has(selectedItemForModal.id)}
        />
      )}

    </div>
  );
};

