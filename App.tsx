import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { AnalyzerView } from './components/AnalyzerView';
import { ResultsView } from './components/ResultsView';
import { GuideView } from './components/GuideView';
import { MarketplaceView } from './components/MarketplaceView';
import { ListItemView } from './components/ListItemView';
import { ProfileView } from './components/ProfileView';
import { Footer } from './components/Footer';

import { AnalyzedObject, ReuseIdea, MarketplaceItem, UserProfile } from './types';
import { INITIAL_USER, PRESET_ANALYZED_OBJECTS, INITIAL_MARKETPLACE_ITEMS } from './data/mockData';

export default function App() {
  const [currentTab, setCurrentTab] = useState<
    'home' | 'analyzer' | 'results' | 'marketplace' | 'list-item' | 'profile'
  >('home');

  // Active object being reviewed
  const [activeAnalyzedObject, setActiveAnalyzedObject] = useState<AnalyzedObject | null>(
    PRESET_ANALYZED_OBJECTS[0]
  );
  
  // Specific initial preset passed to analyzer if user clicks preset card on homepage
  const [initialAnalyzerPreset, setInitialAnalyzerPreset] = useState<AnalyzedObject | null>(null);

  // Selected idea for step-by-step assembly guide view
  const [selectedIdeaForGuide, setSelectedIdeaForGuide] = useState<ReuseIdea | null>(null);

  // Object to prefill in ListItemView
  const [prefillForListing, setPrefillForListing] = useState<AnalyzedObject | null>(null);

  // User profile
  const [user, setUser] = useState<UserProfile>(INITIAL_USER);

  // Marketplace items repository
  const [marketplaceItems, setMarketplaceItems] = useState<MarketplaceItem[]>(INITIAL_MARKETPLACE_ITEMS);

  // Saved / bookmarked ideas
  const [savedIdeaIds, setSavedIdeaIds] = useState<Set<string>>(
    new Set(['idea-bottle-planter', 'idea-denim-tote', 'idea-lamp-rewire'])
  );

  // Saved marketplace item IDs
  const [savedItemIds, setSavedItemIds] = useState<Set<string>>(new Set(['item-1', 'item-3']));

  // All analyzed objects history for user profile
  const [analyzedHistory, setAnalyzedHistory] = useState<AnalyzedObject[]>(PRESET_ANALYZED_OBJECTS);

  // Notification Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Handlers
  const handleStartAnalysis = (preset?: AnalyzedObject) => {
    setInitialAnalyzerPreset(preset || null);
    setSelectedIdeaForGuide(null);
    setCurrentTab('analyzer');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnalysisComplete = (result: AnalyzedObject) => {
    setActiveAnalyzedObject(result);
    // Add to history if not already present
    if (!analyzedHistory.some((item) => item.id === result.id)) {
      setAnalyzedHistory((prev) => [result, ...prev]);
    }
    // Update user stats
    setUser((prev) => ({
      ...prev,
      itemsAnalyzedCount: prev.itemsAnalyzedCount + 1,
      co2SavedKg: Number((prev.co2SavedKg + 1.2).toFixed(1))
    }));
    setSelectedIdeaForGuide(null);
    setCurrentTab('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectIdea = (idea: ReuseIdea, parentObj?: AnalyzedObject) => {
    if (parentObj) {
      setActiveAnalyzedObject(parentObj);
    }
    setSelectedIdeaForGuide(idea);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleBookmarkIdea = (idea: ReuseIdea) => {
    const next = new Set(savedIdeaIds);
    if (next.has(idea.id)) {
      next.delete(idea.id);
      showToast(`Removed "${idea.title}" from saved ideas`);
    } else {
      next.add(idea.id);
      showToast(`Saved "${idea.title}" to your profile! 🔖`);
    }
    setSavedIdeaIds(next);
    setUser((prev) => ({
      ...prev,
      savedIdeasCount: next.size
    }));
  };

  const handleToggleSaveItem = (item: MarketplaceItem) => {
    const next = new Set(savedItemIds);
    if (next.has(item.id)) {
      next.delete(item.id);
      showToast(`Removed "${item.title}" from saved items`);
    } else {
      next.add(item.id);
      showToast(`Saved "${item.title}" to your favorites! ❤️`);
    }
    setSavedItemIds(next);
  };

  const handleNavigateMarketplaceList = (prefillObj?: AnalyzedObject) => {
    setPrefillForListing(prefillObj || null);
    setSelectedIdeaForGuide(null);
    setCurrentTab('list-item');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePublishListing = (newItem: MarketplaceItem) => {
    setMarketplaceItems((prev) => [newItem, ...prev]);
    setUser((prev) => ({
      ...prev,
      activeListingsCount: prev.activeListingsCount + 1,
      co2SavedKg: Number((prev.co2SavedKg + newItem.carbonOffsetKg).toFixed(1))
    }));
    setPrefillForListing(null);
    setCurrentTab('marketplace');
    showToast(`🎉 "${newItem.title}" has been published to the Marketplace!`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteListing = (listingId: string) => {
    setMarketplaceItems((prev) => prev.filter((item) => item.id !== listingId));
    setUser((prev) => ({
      ...prev,
      activeListingsCount: Math.max(0, prev.activeListingsCount - 1)
    }));
    showToast('Listing removed / marked as rehomed');
  };

  // Compile list of saved ideas for Profile Tab
  const savedIdeasFullList: ReuseIdea[] = [];
  analyzedHistory.forEach((obj) => {
    obj.ideas.forEach((idea) => {
      if (savedIdeaIds.has(idea.id)) {
        if (!savedIdeasFullList.some((saved) => saved.id === idea.id)) {
          savedIdeasFullList.push(idea);
        }
      }
    });
  });

  // User's active listings
  const userCreatedListings = marketplaceItems.filter(
    (item) => item.seller.name === user.name
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#121212] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#121212] selection:text-[#FAF9F6]">
      
      {/* Toast Banner */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-[#121212] text-[#FAF9F6] text-xs font-serif px-5 py-3 border border-[#FAF9F6]/20 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          {toastMessage}
        </div>
      )}

      {/* Main Navbar */}
      <Navbar
        currentTab={currentTab}
        onNavigate={(tab) => {
          setSelectedIdeaForGuide(null);
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        user={user}
        savedIdeasCount={savedIdeaIds.size}
      />

      {/* Main App Canvas */}
      <main className="flex-1">
        
        {/* If user is viewing a step-by-step guide */}
        {selectedIdeaForGuide ? (
          <GuideView
            idea={selectedIdeaForGuide}
            parentObject={activeAnalyzedObject || undefined}
            onBack={() => {
              setSelectedIdeaForGuide(null);
            }}
            onToggleBookmark={handleToggleBookmarkIdea}
            isBookmarked={savedIdeaIds.has(selectedIdeaForGuide.id)}
          />
        ) : (
          <>
            {currentTab === 'home' && (
              <HomeView
                onStartAnalysis={handleStartAnalysis}
                onExploreMarketplace={() => {
                  setCurrentTab('marketplace');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onSelectIdea={handleSelectIdea}
                presetObjects={PRESET_ANALYZED_OBJECTS}
              />
            )}

            {currentTab === 'analyzer' && (
              <AnalyzerView
                onAnalysisComplete={handleAnalysisComplete}
                onNavigateMarketplaceList={handleNavigateMarketplaceList}
                presetObjects={PRESET_ANALYZED_OBJECTS}
                initialSelectedPreset={initialAnalyzerPreset}
              />
            )}

            {currentTab === 'results' && activeAnalyzedObject && (
              <ResultsView
                analyzedObject={activeAnalyzedObject}
                onBackToAnalyzer={() => setCurrentTab('analyzer')}
                onSelectIdea={handleSelectIdea}
                onToggleBookmarkIdea={handleToggleBookmarkIdea}
                onListOnMarketplace={handleNavigateMarketplaceList}
                savedIdeaIds={savedIdeaIds}
              />
            )}

            {currentTab === 'marketplace' && (
              <MarketplaceView
                items={marketplaceItems}
                onNavigateListItem={() => handleNavigateMarketplaceList()}
                savedItemIds={savedItemIds}
                onToggleSaveItem={handleToggleSaveItem}
              />
            )}

            {currentTab === 'list-item' && (
              <ListItemView
                onPublishListing={handlePublishListing}
                onCancel={() => setCurrentTab('marketplace')}
                currentUser={user}
                prefillObject={prefillForListing}
              />
            )}

            {currentTab === 'profile' && (
              <ProfileView
                user={user}
                onUpdateUser={setUser}
                analyzedObjects={analyzedHistory}
                savedIdeas={savedIdeasFullList}
                userListings={userCreatedListings}
                onSelectObject={(obj) => {
                  setActiveAnalyzedObject(obj);
                  setCurrentTab('results');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onSelectIdea={handleSelectIdea}
                onRemoveSavedIdea={(id) => {
                  const next = new Set(savedIdeaIds);
                  next.delete(id);
                  setSavedIdeaIds(next);
                  showToast('Removed idea from profile');
                }}
                onDeleteListing={handleDeleteListing}
              />
            )}
          </>
        )}

      </main>

      {/* Global Sustainable Footer */}
      <Footer
        onNavigate={(tab) => {
          setSelectedIdeaForGuide(null);
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

    </div>
  );
}
