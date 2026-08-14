import React, { useState } from 'react';
import { 
  User, 
  MapPin, 
  Calendar, 
  Leaf, 
  ScanLine, 
  ShoppingBag, 
  Bookmark, 
  Sparkles, 
  Edit3, 
  Check, 
  ArrowRight, 
  Trash2, 
  Award,
  TrendingUp,
  X
} from 'lucide-react';
import { UserProfile, AnalyzedObject, ReuseIdea, MarketplaceItem } from '../types';

interface ProfileViewProps {
  user: UserProfile;
  onUpdateUser: (updated: UserProfile) => void;
  analyzedObjects: AnalyzedObject[];
  savedIdeas: ReuseIdea[];
  userListings: MarketplaceItem[];
  onSelectObject: (obj: AnalyzedObject) => void;
  onSelectIdea: (idea: ReuseIdea) => void;
  onRemoveSavedIdea: (ideaId: string) => void;
  onDeleteListing: (listingId: string) => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  user,
  onUpdateUser,
  analyzedObjects,
  savedIdeas,
  userListings,
  onSelectObject,
  onSelectIdea,
  onRemoveSavedIdea,
  onDeleteListing
}) => {
  const [activeTab, setActiveTab] = useState<'analyzed' | 'saved' | 'listings'>('analyzed');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio);
  const [location, setLocation] = useState(user.location);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateUser({
      ...user,
      name,
      bio,
      location
    });
    setIsEditingProfile(false);
  };

  return (
    <div id="profile-view" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 text-left">
      
      {/* 1. User Identity Header Card */}
      <div className="bg-[#F2F1EC] border border-[#121212]/20 p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          
          <div className="flex items-start sm:items-center gap-6">
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-20 h-20 object-cover border border-[#121212]/30"
              />
              <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 bg-[#121212] text-[#FAF9F6] text-[9px] font-mono font-bold uppercase">
                Lv.4
              </span>
            </div>

            <div className="space-y-1.5">
              <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8B4513]">
                Atelier Dossier & Circular Registry
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl sm:text-3xl font-serif text-[#121212] font-normal">
                  {user.name}
                </h1>
                <span className="px-2.5 py-0.5 bg-[#121212] text-[#FAF9F6] text-[10px] uppercase tracking-widest font-bold">
                  {user.tier}
                </span>
              </div>

              <p className="font-serif italic text-xs sm:text-sm text-[#121212]/75 max-w-xl leading-relaxed">
                "{user.bio}"
              </p>

              <div className="flex items-center gap-4 text-xs font-serif text-[#121212]/55 pt-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#8B4513]" />
                  {user.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 font-mono text-[11px]">
                  <Calendar className="w-3.5 h-3.5 text-[#121212]/40" />
                  Patron since {user.memberSince}
                </span>
              </div>
            </div>
          </div>

          <button
            id="edit-profile-btn"
            onClick={() => setIsEditingProfile(true)}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#FAF9F6] border border-[#121212]/30 text-[#121212] text-xs uppercase tracking-widest font-bold hover:bg-[#121212] hover:text-[#FAF9F6] transition-colors whitespace-nowrap self-stretch sm:self-auto justify-center cursor-pointer"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Modify Dossier</span>
          </button>

        </div>
      </div>

      {/* 2. Sustainability Impact Dashboard Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-[#FAF9F6] border border-[#121212]/15 p-5 space-y-1">
          <div className="text-[9px] font-bold text-[#121212]/50 uppercase tracking-widest flex items-center gap-1.5">
            <ScanLine className="w-3.5 h-3.5 text-[#8B4513]" />
            Audited Specimens
          </div>
          <div className="text-2xl sm:text-3xl font-serif text-[#121212] font-normal">
            {user.itemsAnalyzedCount}
          </div>
          <div className="text-[10px] font-mono text-[#8B4513] font-bold">+4 this cycle</div>
        </div>

        <div className="bg-[#F2F1EC] border border-[#121212]/20 p-5 space-y-1">
          <div className="text-[9px] font-bold text-[#8B4513] uppercase tracking-widest flex items-center gap-1.5">
            <Leaf className="w-3.5 h-3.5 text-[#8B4513]" />
            CO₂ Abated (kg)
          </div>
          <div className="text-2xl sm:text-3xl font-serif font-bold text-[#121212]">
            {user.co2SavedKg} <span className="text-sm font-normal font-serif">kg</span>
          </div>
          <div className="text-[10px] font-serif italic text-[#121212]/70">Equivalent to 6 mature arboreal cycles</div>
        </div>

        <div className="bg-[#FAF9F6] border border-[#121212]/15 p-5 space-y-1">
          <div className="text-[9px] font-bold text-[#121212]/50 uppercase tracking-widest flex items-center gap-1.5">
            <ShoppingBag className="w-3.5 h-3.5 text-[#121212]/70]" />
            Registered Artifacts
          </div>
          <div className="text-2xl sm:text-3xl font-serif text-[#121212] font-normal">
            {userListings.length}
          </div>
          <div className="text-[10px] font-serif italic text-[#121212]/60">Active in civic exchange</div>
        </div>

        <div className="bg-[#FAF9F6] border border-[#121212]/15 p-5 space-y-1">
          <div className="text-[9px] font-bold text-[#121212]/50 uppercase tracking-widest flex items-center gap-1.5">
            <Bookmark className="w-3.5 h-3.5 text-[#8B4513]" />
            Curated Blueprints
          </div>
          <div className="text-2xl sm:text-3xl font-serif text-[#121212] font-normal">
            {savedIdeas.length}
          </div>
          <div className="text-[10px] font-serif italic text-[#8B4513]">Archived for assembly</div>
        </div>

      </div>

      {/* 3. Interactive Profile Tabs */}
      <div className="space-y-6">
        
        <div className="flex border-b border-[#121212]/15">
          <button
            id="tab-my-analyzed"
            onClick={() => setActiveTab('analyzed')}
            className={`pb-3 px-4 text-xs font-bold uppercase tracking-widest border-b-2 transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'analyzed'
                ? 'border-[#121212] text-[#121212]'
                : 'border-transparent text-[#121212]/40 hover:text-[#121212]'
            }`}
          >
            <ScanLine className="w-3.5 h-3.5" />
            <span>Audited Specimens ({analyzedObjects.length})</span>
          </button>

          <button
            id="tab-saved-ideas"
            onClick={() => setActiveTab('saved')}
            className={`pb-3 px-4 text-xs font-bold uppercase tracking-widest border-b-2 transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'saved'
                ? 'border-[#121212] text-[#121212]'
                : 'border-transparent text-[#121212]/40 hover:text-[#121212]'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>Archived Folios ({savedIdeas.length})</span>
          </button>

          <button
            id="tab-my-listings"
            onClick={() => setActiveTab('listings')}
            className={`pb-3 px-4 text-xs font-bold uppercase tracking-widest border-b-2 transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'listings'
                ? 'border-[#121212] text-[#121212]'
                : 'border-transparent text-[#121212]/40 hover:text-[#121212]'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Registered Artifacts ({userListings.length})</span>
          </button>
        </div>

        {/* Tab 1 Content: Analyzed Objects */}
        {activeTab === 'analyzed' && (
          <div className="space-y-4">
            {analyzedObjects.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {analyzedObjects.map((obj) => (
                  <div
                    key={obj.id}
                    id={`profile-obj-${obj.id}`}
                    onClick={() => onSelectObject(obj)}
                    className="bg-[#FAF9F6] border border-[#121212]/15 hover:border-[#121212] p-4 transition-all cursor-pointer space-y-3 group"
                  >
                    <div className="aspect-16/10 overflow-hidden bg-stone-200 border border-[#121212]/15 relative">
                      <img
                        src={obj.imageUrl}
                        alt={obj.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                      <span className="absolute top-2 right-2 px-2 py-0.5 bg-[#121212] text-[#FAF9F6] text-[9px] uppercase tracking-widest font-bold">
                        {obj.recyclingCode || 'Circular'}
                      </span>
                    </div>

                    <div>
                      <div className="text-[9px] font-bold text-[#8B4513] uppercase tracking-[0.2em]">{obj.category}</div>
                      <h4 className="font-serif text-base text-[#121212] font-bold group-hover:text-[#8B4513] transition-colors mt-0.5">{obj.name}</h4>
                      <p className="font-serif italic text-xs text-[#121212]/70 line-clamp-2 mt-1">{obj.materialComposition}</p>
                    </div>

                    <div className="pt-2.5 border-t border-[#121212]/10 flex items-center justify-between text-xs font-bold text-[#121212]">
                      <span className="font-mono text-[11px] text-[#121212]/70">5 Blueprints</span>
                      <span className="text-[10px] uppercase tracking-widest text-[#121212] flex items-center gap-1 group-hover:text-[#8B4513]">
                        Inspect <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-12 text-center bg-[#F2F1EC] border border-[#121212]/15 font-serif italic text-[#121212]/60 text-xs">
                No specimens audited yet. Run optical scan in the Examination Chamber.
              </div>
            )}
          </div>
        )}

        {/* Tab 2 Content: Saved Ideas */}
        {activeTab === 'saved' && (
          <div className="space-y-4">
            {savedIdeas.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedIdeas.map((idea) => (
                  <div
                    key={idea.id}
                    className="bg-[#FAF9F6] border border-[#121212]/15 p-4 space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="aspect-16/10 overflow-hidden bg-stone-200 border border-[#121212]/15 relative">
                        <img
                          src={idea.afterImg}
                          alt={idea.title}
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={() => onRemoveSavedIdea(idea.id)}
                          className="absolute top-2 right-2 p-1.5 bg-[#121212] text-[#FAF9F6] hover:bg-[#8B4513] transition-colors cursor-pointer"
                          title="Remove bookmark"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div>
                        <span className="text-[9px] font-bold text-[#8B4513] uppercase tracking-widest">{idea.category}</span>
                        <h4 className="font-serif text-base text-[#121212] font-bold">{idea.title}</h4>
                        <p className="font-serif italic text-xs text-[#121212]/70 line-clamp-2 mt-1">{idea.description}</p>
                      </div>

                      <div className="grid grid-cols-3 gap-1 text-center text-[9px] uppercase tracking-wider py-2 bg-[#F2F1EC] border border-[#121212]/10">
                        <div>
                          <div className="text-[#121212]/50">Diff.</div>
                          <div className="font-bold text-[#121212]">{idea.difficulty}</div>
                        </div>
                        <div>
                          <div className="text-[#121212]/50">Time</div>
                          <div className="font-bold text-[#121212]">{idea.timeEstimate}</div>
                        </div>
                        <div>
                          <div className="text-[#121212]/50">Offset</div>
                          <div className="font-bold text-[#8B4513]">{idea.carbonSavedKg}kg</div>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectIdea(idea)}
                      className="w-full py-2.5 bg-[#121212] hover:bg-transparent hover:text-[#121212] text-[#FAF9F6] border border-[#121212] text-[10px] uppercase tracking-widest font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer mt-2"
                    >
                      <span>Study Execution Guide</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-12 text-center bg-[#F2F1EC] border border-[#121212]/15 font-serif italic text-[#121212]/60 text-xs">
                No archived blueprints. Bookmark concepts from the Upcycling Folio.
              </div>
            )}
          </div>
        )}

        {/* Tab 3 Content: My Listings */}
        {activeTab === 'listings' && (
          <div className="space-y-4">
            {userListings.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {userListings.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#FAF9F6] border border-[#121212]/15 p-4 space-y-3"
                  >
                    <div className="aspect-16/10 overflow-hidden bg-stone-200 border border-[#121212]/15 relative">
                      <img src={item.photos[0]} alt={item.title} className="w-full h-full object-cover grayscale" />
                      <span className="absolute top-2 left-2 px-2.5 py-1 bg-[#121212] text-[#FAF9F6] font-mono text-[10px] font-bold">
                        {item.isFree ? 'FREE' : `$${item.price}`}
                      </span>
                      <span className="absolute top-2 right-2 px-2 py-0.5 bg-[#FAF9F6] text-[#121212] border border-[#121212]/20 text-[9px] uppercase tracking-widest font-bold">
                        Active In Ledger
                      </span>
                    </div>

                    <div>
                      <h4 className="font-serif text-base font-bold text-[#121212] truncate">{item.title}</h4>
                      <p className="font-serif italic text-xs text-[#121212]/70 line-clamp-2 mt-1">{item.description}</p>
                    </div>

                    <div className="pt-2.5 border-t border-[#121212]/10 flex items-center justify-between text-xs text-[#121212]/60 font-mono">
                      <span className="text-[11px]">{item.views} views • {item.saves} saves</span>
                      <button
                        onClick={() => onDeleteListing(item.id)}
                        className="text-[10px] uppercase tracking-widest font-bold text-[#8B4513] hover:underline cursor-pointer"
                      >
                        Retire Listing
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-12 text-center bg-[#F2F1EC] border border-[#121212]/15 font-serif italic text-[#121212]/60 text-xs">
                You have not inscribed any specimens into the circular ledger yet.
              </div>
            )}
          </div>
        )}

      </div>

      {/* Edit Profile Modal */}
      {isEditingProfile && (
        <div className="fixed inset-0 z-50 bg-[#121212]/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF9F6] border border-[#121212] max-w-md w-full p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#121212]/15 pb-4">
              <h3 className="font-serif text-xl text-[#121212]">Revise Atelier Dossier</h3>
              <button
                onClick={() => setIsEditingProfile(false)}
                className="p-1 text-[#121212]/50 hover:text-[#121212] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-[#121212] uppercase tracking-widest mb-1">Display Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs font-serif bg-[#FAF9F6] border border-[#121212]/20 focus:border-[#121212] focus:outline-none text-[#121212]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-[#121212] uppercase tracking-widest mb-1">Metropolitan Jurisdiction</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs font-serif bg-[#FAF9F6] border border-[#121212]/20 focus:border-[#121212] focus:outline-none text-[#121212]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-[#121212] uppercase tracking-widest mb-1">Circular Mission Statement</label>
                <textarea
                  rows={3}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full p-3 text-xs font-serif bg-[#FAF9F6] border border-[#121212]/20 focus:border-[#121212] focus:outline-none text-[#121212]"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditingProfile(false)}
                  className="flex-1 py-2.5 border border-[#121212]/30 text-[#121212] text-xs uppercase tracking-widest font-bold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-[#121212] hover:bg-transparent hover:text-[#121212] text-[#FAF9F6] border border-[#121212] text-xs uppercase tracking-widest font-bold cursor-pointer transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

