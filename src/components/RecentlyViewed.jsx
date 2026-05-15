import React from 'react';
import RecentCard from './RecentCard';

export default function RecentlyViewed({ listings }) {
  const recents = listings.slice(-3);
  
  if (!listings || listings.length === 0) return null;

  return (
    <section className="mb-10 sm:mb-14">
      <h2 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 tracking-tight">Recently Viewed</h2>
      <div className="flex space-x-4 sm:space-x-5 overflow-x-auto pb-4 sm:pb-6 no-scrollbar snap-x">
        {recents.map(recent => (
          <div key={recent.id} className="snap-start first:pl-1">
            <RecentCard listing={recent} />
          </div>
        ))}
      </div>
    </section>
  );
}
