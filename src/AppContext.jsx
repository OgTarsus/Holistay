import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('holistay_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [lastSeenFavorites, setLastSeenFavorites] = useState(() => {
    const saved = localStorage.getItem('holistay_seen_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [appliedFilters, setAppliedFilters] = useState({
    priceRange: [50, 1000],
    amenities: [],
    propertyTypes: [],
    location: ''
  });

  const [searchQuery, setSearchQuery] = useState('');

  const hasUnreadFavorites = favorites.length > 0 && favorites.some(id => !lastSeenFavorites.includes(id));

  useEffect(() => {
    localStorage.setItem('holistay_favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('holistay_seen_favorites', JSON.stringify(lastSeenFavorites));
  }, [lastSeenFavorites]);

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const exists = prev.includes(id);
      return exists ? prev.filter(fid => fid !== id) : [...prev, id];
    });
  };

  const markFavoritesAsRead = useCallback(() => {
    setLastSeenFavorites(prev => {
      if (prev.length === favorites.length && prev.every((id, index) => id === favorites[index])) {
        return prev;
      }
      return [...favorites];
    });
  }, [favorites]);

  const applyFilters = (newFilters) => {
    setAppliedFilters(newFilters);
  };

  return (
    <AppContext.Provider value={{ 
      favorites, 
      toggleFavorite, 
      appliedFilters, 
      applyFilters,
      searchQuery,
      setSearchQuery,
      hasUnreadFavorites,
      markFavoritesAsRead
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
