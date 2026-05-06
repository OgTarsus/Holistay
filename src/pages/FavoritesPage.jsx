import React from 'react';
import Layout from '../components/Layout';
import ListingCard from '../components/ListingCard';
import { MOCK_LISTINGS } from '../data';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../AppContext';
import EmptyFavorites from '../components/EmptyFavorites';

export default function FavoritesPage() {
  const { favorites, toggleFavorite } = useApp();

  const favoriteListings = MOCK_LISTINGS.filter(l => favorites.includes(l.id));

  return (
    <Layout>
      <main className="max-w-7xl mx-auto px-6 py-16">
        <header className="mb-16">
          <div className="flex items-center gap-6 mb-4">
            <Link 
              to="/" 
              className="p-3 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-all active:scale-90"
            >
              <ArrowLeft className="w-6 h-6 text-gray-900" />
            </Link>
            <h1 className="text-5xl font-black tracking-tighter leading-none">Your Stays</h1>
          </div>
          <p className="text-xl text-gray-400 font-bold ml-[72px]">A curated collection of the properties you love most.</p>
        </header>

        {favoriteListings.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {favoriteListings.map(listing => (
              <ListingCard 
                key={listing.id} 
                listing={listing} 
                isFavorite={true}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        ) : (
          <EmptyFavorites />
        )}
      </main>
    </Layout>
  );
}
