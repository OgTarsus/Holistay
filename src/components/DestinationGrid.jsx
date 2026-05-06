import React from 'react';
import ListingCard from './ListingCard';

export default function DestinationGrid({ listings, favorites, onToggleFavorite }) {
  return (
    <section>
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-2xl font-black tracking-tight text-gray-900 flex items-center">
          Available Destinations
        </h2>
        <div className="h-px bg-gray-100 flex-1 ml-8" />
      </div>

      {listings.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {listings.map(listing => (
            <ListingCard 
              key={listing.id} 
              listing={listing} 
              isFavorite={favorites.includes(listing.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-32 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
           <p className="text-xl font-bold text-gray-400">Try adjusting your filters to find more property results.</p>
        </div>
      )}
      
      <div className="mt-20 flex justify-center">
        <button className="px-10 py-4 border-2 border-gray-900 rounded-2xl font-black hover:bg-gray-900 hover:text-white transition-all active:scale-95 shadow-lg shadow-gray-200">
          Show more results
        </button>
      </div>
    </section>
  );
}
