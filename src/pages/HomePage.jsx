import React, { useMemo} from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import { MOCK_LISTINGS } from '../data';
import { useApp } from '../AppContext';
import HomeHero from '../components/HomeHero';
import RecentlyViewed from '../components/RecentlyViewed';
import DestinationGrid from '../components/DestinationGrid';

export default function HomePage({recentListings}) {
  const { favorites, toggleFavorite, appliedFilters, searchQuery } = useApp();

  const filteredListings = useMemo(() => {
    return MOCK_LISTINGS.filter(listing => {
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = listing.title.toLowerCase().includes(query);
        const matchesLocation = listing.location.toLowerCase().includes(query);
        if (!matchesTitle && !matchesLocation) return false;
      }

      if (appliedFilters.location && listing.location !== appliedFilters.location) return false;
      
      if (listing.price < appliedFilters.priceRange[0] || listing.price > appliedFilters.priceRange[1]) return false;
      
      if (appliedFilters.propertyTypes.length > 0 && !appliedFilters.propertyTypes.includes(listing.type)) return false;
      
      if (appliedFilters.amenities.length > 0) {
        const hasAllAmenities = appliedFilters.amenities.every(a => listing.amenities.includes(a));
        if (!hasAllAmenities) return false;
      }
      
      return true;
    });
  }, [appliedFilters, searchQuery]);

  return (
    <Layout>
      <div className="flex max-w-[1440px] mx-auto">
        <Sidebar />
        
        <main className="flex-1 lg:ml-80 p-6 lg:p-10">
          <HomeHero resultCount={filteredListings.length} />

          <RecentlyViewed listings={recentListings} />

          <DestinationGrid 
            listings={filteredListings} 
            favorites={favorites} 
            onToggleFavorite={toggleFavorite} 
          />
        </main>
      </div>
    </Layout>
  );
}
