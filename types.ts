export interface ReuseStep {
  stepNumber: number;
  title: string;
  instruction: string;
  tip?: string;
}

export interface ReuseIdea {
  id: string;
  title: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  timeEstimate: string;
  costEstimate: string;
  carbonSavedKg: number;
  description: string;
  beforeImg: string;
  afterImg: string;
  materials: string[];
  toolsNeeded?: string[];
  steps: ReuseStep[];
  bookmarked?: boolean;
  completed?: boolean;
}

export interface AnalyzedObject {
  id: string;
  name: string;
  category: string;
  materialComposition: string;
  recyclingCode?: string;
  conditionRating: string;
  confidence: number;
  features: string[];
  tags: string[];
  imageUrl: string;
  summary: string;
  dateAnalyzed: string;
  ideas: ReuseIdea[];
}

export interface SellerProfile {
  name: string;
  avatar: string;
  rating: number;
  reviewCount: number;
  joinedDate: string;
  location: string;
  badges: string[];
}

export interface MarketplaceItem {
  id: string;
  title: string;
  price: number;
  isFree: boolean;
  category: string;
  condition: 'Like New' | 'Great' | 'Good' | 'Fair' | 'Upcycled';
  location: string;
  zipCode: string;
  description: string;
  photos: string[];
  aiVerified: boolean;
  materials?: string[];
  seller: SellerProfile;
  datePosted: string;
  carbonOffsetKg: number;
  views: number;
  saves: number;
  isSaved?: boolean;
}

export interface UserProfile {
  name: string;
  avatar: string;
  bio: string;
  location: string;
  tier: string;
  memberSince: string;
  itemsAnalyzedCount: number;
  co2SavedKg: number;
  activeListingsCount: number;
  savedIdeasCount: number;
}
