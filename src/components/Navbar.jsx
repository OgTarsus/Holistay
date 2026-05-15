import React from 'react';
import { Search, Heart, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { useApp } from '../AppContext';

export default function Navbar() {
  const location = useLocation();
  const { favorites, searchQuery, setSearchQuery, hasUnreadFavorites, markFavoritesAsRead } = useApp();
  const isFavorites = location.pathname === '/favorites';

  React.useEffect(() => {
    if (isFavorites) {
      markFavoritesAsRead();
    }
  }, [isFavorites, markFavoritesAsRead]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-header h-20">
      <div className="max-w-[1440px] mx-auto h-full px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-black text-primary tracking-tight"
        >
          Holistay
        </Link>

        <div className="flex items-center flex-1 max-w-md mx-3 sm:mx-8 bg-surface rounded-full border border-gray-200 px-3 sm:px-4 py-2 card-shadow focus-within:border-primary/50 transition-all min-w-0">
          <Search className="w-4 h-4 text-gray-500 mr-2 sm:mr-3 flex-shrink-0" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..." 
            className="bg-transparent border-none outline-none w-full text-xs sm:text-sm placeholder-gray-400 font-medium min-w-0"
          />
        </div>

        <div className="flex items-center space-x-4">
          <Link 
            to="/favorites"
            className={cn(
              "p-2 rounded-full transition-colors hover:bg-gray-100 relative",
              isFavorites ? "text-primary bg-primary/10" : "text-gray-600"
            )}
          >
            <Heart className={cn("w-6 h-6", (isFavorites || favorites.length > 0) && "fill-primary text-primary")} />
            {hasUnreadFavorites && (
              <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-primary rounded-full border-2 border-white animate-bounce-slow" />
            )}
          </Link>
          
          <button className="flex items-center space-x-2 border border-gray-200 rounded-full p-1 pl-1 hover:card-shadow-hover transition-all bg-white">
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden ring-2 ring-transparent hover:ring-primary/20 transition-all">
               <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100" alt="User" className="w-full h-full object-cover" />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}
