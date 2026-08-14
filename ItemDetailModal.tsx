import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  ShieldCheck, 
  Leaf, 
  Clock, 
  Send, 
  Check, 
  Star, 
  Heart, 
  Share2, 
  ChevronLeft, 
  ChevronRight,
  MessageCircle,
  Truck,
  Sparkles
} from 'lucide-react';
import { MarketplaceItem } from '../types';

interface ItemDetailModalProps {
  item: MarketplaceItem;
  onClose: () => void;
  onToggleSave: (item: MarketplaceItem) => void;
  isSaved: boolean;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({
  item,
  onClose,
  onToggleSave,
  isSaved
}) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [messageText, setMessageText] = useState('Greetings. Is this specimen accessible for local transfer?');
  const [messageSent, setMessageSent] = useState(false);
  const [offerSent, setOfferSent] = useState(false);
  const [offerAmount, setOfferAmount] = useState<number>(item.price);

  const quickMessages = [
    'Greetings. Is this specimen accessible for local transfer?',
    'May I coordinate pickup tomorrow afternoon?',
    'Would you accept an exchange or custom transfer offer?'
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageText.trim()) return;
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
    }, 4000);
  };

  const handleMakeOffer = () => {
    setOfferSent(true);
    setTimeout(() => {
      setOfferSent(false);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#121212]/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      
      <div 
        id="item-detail-modal"
        className="relative bg-[#FAF9F6] max-w-4xl w-full overflow-hidden border border-[#121212] shadow-2xl max-h-[90vh] flex flex-col"
      >
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#121212]/15 bg-[#F2F1EC]">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-[#121212] text-[#FAF9F6] font-bold text-[10px] uppercase tracking-widest">
              {item.category}
            </span>
            <span className="px-2.5 py-1 bg-[#FAF9F6] text-[#121212] font-semibold text-[10px] uppercase tracking-widest border border-[#121212]/15">
              Condition: {item.condition}
            </span>
            {item.aiVerified && (
              <span className="px-2.5 py-1 bg-[#FAF9F6] text-[#8B4513] font-bold text-[10px] uppercase tracking-widest border border-[#121212]/15 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#8B4513]" />
                Spectrometric Verified
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onToggleSave(item)}
              className={`p-2 transition-colors cursor-pointer border ${
                isSaved ? 'text-[#8B4513] bg-[#FAF9F6] border-[#8B4513]' : 'text-[#121212] border-[#121212]/20 hover:border-[#121212] bg-[#FAF9F6]'
              }`}
              title="Save item to ledger"
            >
              <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
            </button>

            <button
              id="close-item-detail-btn"
              onClick={onClose}
              className="p-2 text-[#121212] border border-[#121212]/20 hover:border-[#121212] bg-[#FAF9F6] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body: Scrollable */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left: Photos Carousel */}
            <div className="md:col-span-6 space-y-4">
              <div className="relative aspect-4/3 overflow-hidden bg-stone-200 border border-[#121212]/15">
                <img
                  src={item.photos[activePhotoIndex] || item.photos[0]}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {item.photos.length > 1 && (
                  <div className="absolute inset-y-0 inset-x-2 flex items-center justify-between pointer-events-none">
                    <button
                      onClick={() => setActivePhotoIndex((prev) => (prev > 0 ? prev - 1 : item.photos.length - 1))}
                      className="p-2 bg-[#121212]/80 hover:bg-[#121212] text-[#FAF9F6] pointer-events-auto transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setActivePhotoIndex((prev) => (prev < item.photos.length - 1 ? prev + 1 : 0))}
                      className="p-2 bg-[#121212]/80 hover:bg-[#121212] text-[#FAF9F6] pointer-events-auto transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {item.isFree && (
                  <div className="absolute top-3 left-3 px-3 py-1 bg-[#121212] text-[#FAF9F6] font-mono font-bold text-[10px] uppercase tracking-widest">
                    Complimentary Circular Transfer
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {item.photos.length > 1 && (
                <div className="flex gap-2">
                  {item.photos.map((photo, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActivePhotoIndex(idx)}
                      className={`w-16 h-16 overflow-hidden border transition-all cursor-pointer ${
                        activePhotoIndex === idx ? 'border-[#121212] ring-1 ring-[#121212]' : 'border-[#121212]/20 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={photo} alt="" className="w-full h-full object-cover grayscale hover:grayscale-0" />
                    </button>
                  ))}
                </div>
              )}

              {/* Carbon Offset Callout */}
              <div className="p-4 bg-[#F2F1EC] border border-[#121212]/15 text-xs text-[#121212] flex items-center gap-3">
                <div className="w-7 h-7 bg-[#121212] text-[#FAF9F6] flex items-center justify-center font-bold flex-shrink-0">
                  <Leaf className="w-3.5 h-3.5 text-[#FAF9F6]" />
                </div>
                <div className="space-y-0.5">
                  <div className="font-serif font-bold text-xs">Abates ~{item.carbonOffsetKg} kg CO₂ Atmospheric Release</div>
                  <div className="text-[10px] font-serif italic text-[#121212]/70">Local exchange eliminates industrial fabrication overhead.</div>
                </div>
              </div>
            </div>

            {/* Right: Item Details & Contact */}
            <div className="md:col-span-6 space-y-6 text-left">
              <div>
                <div className="flex items-baseline justify-between gap-2 border-b border-[#121212]/10 pb-3">
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#121212] font-normal">
                    {item.title}
                  </h2>
                  <div className="text-2xl font-serif font-bold text-[#8B4513]">
                    {item.isFree ? 'FREE' : `$${item.price}`}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-serif text-[#121212]/60 mt-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#8B4513]" />
                    {item.location} ({item.zipCode})
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 font-mono text-[11px]">
                    <Clock className="w-3 h-3 text-[#121212]/50" />
                    {item.datePosted}
                  </span>
                </div>
              </div>

              {/* Verified Materials */}
              {item.materials && item.materials.length > 0 && (
                <div className="p-4 bg-[#F2F1EC] border border-[#121212]/10 space-y-1.5">
                  <div className="text-[9px] font-bold text-[#121212]/50 uppercase tracking-widest">
                    Audited Composition
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {item.materials.map((mat, i) => (
                      <span key={i} className="px-2.5 py-1 bg-[#FAF9F6] text-[#121212] text-xs font-mono font-semibold border border-[#121212]/15">
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="space-y-1.5">
                <h4 className="text-[10px] font-bold text-[#121212]/70 uppercase tracking-widest">
                  Archival Specimen Notes
                </h4>
                <p className="font-serif italic text-xs sm:text-sm text-[#121212]/80 leading-relaxed whitespace-pre-line">
                  {item.description}
                </p>
              </div>

              {/* Seller Identity Card */}
              <div className="p-4 bg-[#F2F1EC] border border-[#121212]/15 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.seller.avatar}
                    alt={item.seller.name}
                    className="w-10 h-10 object-cover border border-[#121212]/20"
                  />
                  <div>
                    <div className="font-serif text-sm font-bold text-[#121212]">{item.seller.name}</div>
                    <div className="flex items-center gap-1 text-[11px] text-[#8B4513] font-serif">
                      <Star className="w-3 h-3 fill-current" />
                      <span>{item.seller.rating} ({item.seller.reviewCount} ledger ratings)</span>
                    </div>
                  </div>
                </div>
                <div className="text-right text-[10px] uppercase tracking-widest font-mono text-[#121212]/60">
                  <div>Registered {item.seller.joinedDate}</div>
                  <div className="text-[#8B4513] font-bold">{item.seller.badges[0] || 'Verified Patron'}</div>
                </div>
              </div>

              {/* Direct Messenger Box */}
              <div className="p-5 bg-[#F2F1EC] border border-[#121212]/20 space-y-4">
                <div className="flex items-center justify-between text-xs font-bold text-[#121212]">
                  <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold">
                    <MessageCircle className="w-4 h-4 text-[#8B4513]" />
                    Direct Dispatch Channel
                  </span>
                </div>

                {/* Quick Replies */}
                <div className="flex flex-wrap gap-1.5">
                  {quickMessages.map((msg, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setMessageText(msg)}
                      className="px-2.5 py-1 bg-[#FAF9F6] border border-[#121212]/15 hover:border-[#121212] text-[#121212] text-[10px] font-serif transition-colors cursor-pointer"
                    >
                      {msg}
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSendMessage} className="space-y-3">
                  <textarea
                    rows={2}
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Inscribe dispatch..."
                    className="w-full p-3 text-xs font-serif bg-[#FAF9F6] border border-[#121212]/20 focus:border-[#121212] focus:outline-none text-[#121212]"
                  />

                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="flex-1 py-3 px-4 bg-[#121212] hover:bg-transparent hover:text-[#121212] text-[#FAF9F6] border border-[#121212] text-[10px] uppercase tracking-widest font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Send className="w-3 h-3" />
                      <span>{messageSent ? 'Dispatch Transmitted ✓' : 'Transmit Inquiry'}</span>
                    </button>

                    {!item.isFree && (
                      <button
                        type="button"
                        onClick={handleMakeOffer}
                        className="py-3 px-4 bg-[#F2F1EC] text-[#121212] border border-[#121212]/30 hover:border-[#121212] text-[10px] uppercase tracking-widest font-bold transition-colors whitespace-nowrap cursor-pointer"
                      >
                        {offerSent ? 'Offer Recorded ✓' : 'Propose Terms'}
                      </button>
                    )}
                  </div>
                </form>

                {messageSent && (
                  <div className="text-center text-xs font-serif text-[#121212] p-2 bg-[#FAF9F6] border border-[#121212]/15">
                    ✓ Your message has been transmitted to {item.seller.name}.
                  </div>
                )}

                {offerSent && (
                  <div className="text-center text-xs font-serif text-[#121212] p-2 bg-[#FAF9F6] border border-[#121212]/15">
                    ✓ Offer of ${item.price} recorded for review.
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

