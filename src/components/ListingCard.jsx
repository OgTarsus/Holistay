import React from 'react';
import { Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export default function ListingCard({ listing, isFavorite, onToggleFavorite }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 card-shadow hover:shadow-[0px_24px_48px_rgba(0,0,0,0.1)] transition-all duration-500 ease-out"
    >
        <Link to={`/listing/${listing.id}`}>
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <img 
            src={listing.images[0]} 
            alt={listing.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
          />
        
        <button 
          onClick={(e) => {
            e.preventDefault();
            onToggleFavorite(listing.id);
          }}
          className="absolute top-4 right-4 p-2.5 rounded-2xl bg-white/80 backdrop-blur-md border border-white hover:bg-white transition-all shadow-xl active:scale-90 group/btn"
        >
          <Heart className={cn("w-5 h-5 text-gray-800 transition-all", isFavorite && "fill-primary text-primary scale-110")} />
        </button>
        
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-xs font-black flex items-center space-x-1.5 shadow-xl border border-white/50">
           <Star className="w-3.5 h-3.5 text-primary fill-primary" />
           <span className="text-gray-900">{listing.rating}</span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-1.5">
          <h3 className="font-black text-xl tracking-tight line-clamp-1 group-hover:text-primary transition-colors">{listing.title}</h3>
        </div>
        <p className="text-sm font-bold text-gray-400 mb-3 truncate flex items-center">
            <MapPin className="w-3 h-3 mr-1" />
            {listing.location}
        </p>
        
        <div className="flex flex-wrap gap-2.5 mb-5 mt-auto">
          {listing.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-primary/5 text-[10px] font-black uppercase tracking-widest text-primary rounded-lg border border-primary/10">
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-gray-50 flex justify-between items-center">
          <p className="text-xl font-black text-gray-900 italic tracking-tighter">
            ${listing.price}
            <span className="text-xs font-bold text-gray-400 ml-1.5 not-italic uppercase tracking-widest">/ night</span>
          </p>
          <div className="w-8 h-8 rounded-full border-2 border-white shadow-md overflow-hidden bg-gray-100">
             <img src={listing.host.avatar} className="w-full h-full object-cover" alt="Host" />
          </div>
        </div>
      </div>
      </Link>
    </motion.div>
  );
}

function MapPin(props) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}
