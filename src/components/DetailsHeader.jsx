import React from 'react';
import { Star, MapPin, Share2, Heart, Check } from 'lucide-react';
import { cn } from '../lib/utils';

export default function DetailsHeader({ listing, isFavorite, onToggleFavorite, handleShare, copied }) {
  return (
    <header className="mb-8">
      <h1 className="text-4xl font-black mb-5 tracking-tighter leading-tight">{listing.title}</h1>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex flex-wrap items-center gap-4 text-sm font-bold">
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-gray-900">{listing.rating}</span>
            <span className="underline decoration-gray-300 ml-1 hover:text-primary transition-colors cursor-pointer">{listing.reviewsCount} reviews</span>
          </div>
          <span className="text-gray-300">·</span>
          <div className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer active:scale-95">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span className="underline decoration-gray-300">{listing.location}</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <button 
            onClick={handleShare}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl hover:bg-gray-100 transition-all active:scale-95 font-bold relative"
          >
            {copied ? <Check className="w-4 h-4 text-green-500" /> : <Share2 className="w-4 h-4" />}
            <span className="text-sm underline decoration-gray-300">{copied ? "Link Copied!" : "Share"}</span>
          </button>
          <button 
            onClick={() => onToggleFavorite(listing.id)}
            className={cn(
              "flex items-center space-x-2 px-4 py-2.5 rounded-xl hover:bg-gray-100 transition-all active:scale-95 font-bold",
              isFavorite ? "text-primary bg-primary/5" : "text-gray-900"
            )}
          >
            <Heart className={cn("w-4 h-4", isFavorite && "fill-primary")} />
            <span className="text-sm underline decoration-gray-300">{isFavorite ? "Saved" : "Save"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
