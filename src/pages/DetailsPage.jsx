import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { MOCK_LISTINGS } from '../data';
import { Award, Calendar, Wifi, Utensils, Car, Dog, Tv, Waves } from 'lucide-react';
import BookingWidget from '../components/BookingWidget';
import { useApp } from '../AppContext';
import AmenityItem from '../components/AmenityItem';
import DetailsHeader from '../components/DetailsHeader';
import ImageGrid from '../components/ImageGrid';
import GalleryOverlay from '../components/GalleryOverlay';
import { getAmenityIcon } from '../components/Sidebar';

export default function DetailsPage({recentListings, setRecentListings}) {
  const { id } = useParams();
  const { favorites, toggleFavorite } = useApp();
  
  const listing = MOCK_LISTINGS.find(l => l.id === id);
  
  const [copied, setCopied] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (!listing?.id) return;

    setRecentListings(prev => {
      if (prev.some(item => item.id === listing.id)){
        return prev;
      }
      return [...prev, listing];
    });
  }, [listing?.id, setRecentListings]);

  useEffect(() => {
    if (showGallery) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showGallery]);

  if (!listing) return <div className="p-20 text-center font-bold text-2xl text-gray-400">Listing not found</div>;

  const isFavorite = favorites.includes(listing.id);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Layout>
      <GalleryOverlay 
        showGallery={showGallery} 
        setShowGallery={setShowGallery} 
        images={listing.images} 
        activeImageIndex={activeImageIndex}
        setActiveImageIndex={setActiveImageIndex}
      />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <DetailsHeader 
          listing={listing} 
          isFavorite={isFavorite} 
          onToggleFavorite={toggleFavorite} 
          handleShare={handleShare}
          copied={copied}
        />

        <ImageGrid 
          images={listing.images} 
          onShowGallery={() => setShowGallery(true)} 
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20 relative">
          <div className="lg:col-span-2">
            <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between border-b border-gray-100 pb-10 gap-6 sm:gap-0">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black mb-2 tracking-tight">
                  Entire {listing.type.toLowerCase()} hosted by {listing.host.name}
                </h2>
                <p className="text-gray-500 font-bold text-base sm:text-lg">
                  {listing.guests} guests · {listing.bedrooms} bedrooms · {listing.beds} beds · {listing.bathrooms} Ultra-luxury bath
                </p>
              </div>
              <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden border-2 border-primary/20 shadow-lg self-start sm:self-auto flex-shrink-0">
                <img src={listing.host.avatar} className="w-full h-full object-cover" alt={listing.host.name} />
              </div>
            </div>

            <section className="space-y-4 border-b border-gray-100 py-10 text-gray-700 italic font-medium leading-relaxed">
               {listing.description}
            </section>

            <section className="space-y-8 border-b border-gray-100 py-10">
              {listing.host.isSuperhost && (
                <div className="flex gap-5">
                  <div className="bg-primary/5 p-3 rounded-2xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-black text-lg">{listing.host.name} is a Superhost</h3>
                    <p className="text-gray-500 font-medium leading-relaxed">Highly rated for excellence in hospitality.</p>
                  </div>
                </div>
              )}
              <div className="flex gap-5">
                <div className="bg-gray-50 p-3 rounded-2xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h3 className="font-black text-lg">Exclusive location</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">Perfect access to the best sunset spots and local cuisine.</p>
                </div>
              </div>
            </section>

            <section className="py-10">
              <h2 className="text-2xl font-black mb-8 tracking-tight">What this place offers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 max-w-xl">
                 {listing.amenities.map(amenity => (
                   <AmenityItem key={amenity} icon={getAmenityIcon(amenity)} label={amenity} />
                 ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <BookingWidget listing={listing} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
