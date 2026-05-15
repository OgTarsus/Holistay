import React, { useState, useEffect } from 'react';
import { MapPin, Wifi, Waves, Wind, Car, Home, Building2, Tent, Warehouse, Check, Utensils, Dog, Tv, CircleHelp, X } from 'lucide-react';
import { ALL_CITIES, ALL_AMENITIES, ALL_PROPERTY_TYPES } from '../data';
import { useApp } from '../AppContext';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export const getAmenityIcon = (amenity) => {
  switch (amenity) {
    case 'WiFi': return <Wifi className="w-4 h-4" />;
    case 'Pool': return <Waves className="w-4 h-4" />;
    case 'AC': return <Wind className="w-4 h-4" />;
    case 'Free Parking': return <Car className="w-4 h-4" />;
    case 'Kitchen': return <Utensils className="w-4 h-4" />;
    case 'Pet services': return <Dog className="w-4 h-4" />;
    case 'Tv': return <Tv className="w-4 h-4" />;
    default: return <CircleHelp className="w-4 h-4" />;
  }
};

export const getPropertyTypeIcon = (type) => {
  switch (type) {
    case 'House': return <Home className="w-4 h-4" />;
    case 'Apartment': return <Building2 className="w-4 h-4" />;
    case 'Cabin': return <Tent className="w-4 h-4" />;
    case 'Unique Stay': return <Warehouse className="w-4 h-4" />;
    default: return <Home className="w-4 h-4" />;
  }
};

export default function Sidebar({ isOpen, onClose }) {
  const { appliedFilters, applyFilters } = useApp();
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  
  const [localFilters, setLocalFilters] = useState(appliedFilters);

  useEffect(() => {
    setLocalFilters(appliedFilters);
  }, [appliedFilters]);

  const handlePriceChange = (e) => {
    setLocalFilters(prev => ({ ...prev, priceRange: [50, parseInt(e.target.value)] }));
  };

  const toggleList = (listName, value) => {
    setLocalFilters(prev => {
      const currentList = prev[listName];
      const newList = currentList.includes(value) 
        ? currentList.filter(item => item !== value) 
        : [...currentList, value];
      return { ...prev, [listName]: newList };
    });
  };

  const handleLocationChange = (e) => {
    setLocalFilters(prev => ({ ...prev, location: e.target.value }));
  };

  const handleApply = () => {
    applyFilters(localFilters);
    if (onClose) onClose();
  };

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-30 lg:hidden top-20 backdrop-blur-sm" 
          onClick={onClose}
        />
      )}
      <aside className={cn(
        "w-80 fixed left-0 top-20 h-[calc(100vh-80px)] bg-white border-r border-gray-100 p-6 overflow-y-auto custom-scrollbar z-40 transition-transform duration-300 lg:translate-x-0 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-black tracking-tight mb-1">Filters</h2>
            <p className="text-sm text-gray-500 font-medium">Narrow your search</p>
          </div>
          <button onClick={onClose} className="lg:hidden p-2 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors active:scale-95">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

      <div className="space-y-8 pb-10">
        <section>
          <h3 className="font-bold mb-4 text-gray-900 uppercase text-xs tracking-widest opacity-50">Price range</h3>
          <div className="px-1">
            <input 
              type="range" 
              className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" 
              min="50" 
              max="2000"
              value={localFilters.priceRange[1]}
              onChange={handlePriceChange}
            />
            <div className="flex justify-between mt-5">
              <div className="border-2 border-gray-100 rounded-xl p-3 flex-1 mr-3 bg-gray-50/50">
                <span className="text-[10px] uppercase text-gray-400 font-black block mb-0.5 tracking-widest">Min</span>
                <span className="text-sm font-black text-gray-900">${localFilters.priceRange[0]}</span>
              </div>
              <div className="border-2 border-primary rounded-xl p-3 flex-1 bg-primary/5 shadow-sm">
                <span className="text-[10px] uppercase text-primary font-black block mb-0.5 tracking-widest">Max</span>
                <span className="text-sm font-black text-primary">${localFilters.priceRange[1]}+</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="font-bold mb-4 text-gray-900 uppercase text-xs tracking-widest opacity-50">Destinations</h3>
          <div className="relative group">
            <div 
              onClick={() => setShowLocationDropdown(!showLocationDropdown)}
              className={cn(
                "w-full bg-surface border-2 border-gray-100 rounded-xl pl-12 pr-4 py-4 text-sm font-black cursor-pointer transition-all shadow-sm flex items-center justify-between group",
                localFilters.location ? "border-primary/20" : "hover:border-primary/30"
              )}
            >
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <MapPin className={cn("w-5 h-5 transition-colors", localFilters.location ? "text-primary" : "text-gray-400 group-hover:text-primary")} />
              </div>
              <span className={cn("truncate", localFilters.location ? "text-primary" : "text-gray-700")}>
                {localFilters.location || "All Regions"}
              </span>
              <div className={cn("w-2 h-2 border-r-2 border-b-2 rotate-45 transition-transform", 
                localFilters.location ? "border-primary" : "border-gray-400",
                showLocationDropdown && "-rotate-135 translate-y-1"
              )} />
            </div>

            <AnimatePresence>
              {showLocationDropdown && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-2xl shadow-2xl z-50 overflow-hidden"
                >
                  <div className="max-h-64 overflow-y-auto custom-scrollbar p-1">
                    <div 
                      onClick={() => {
                        setLocalFilters(prev => ({ ...prev, location: '' }));
                        setShowLocationDropdown(false);
                      }}
                      className={cn(
                        "px-4 py-3 rounded-xl transition-all cursor-pointer font-bold text-sm",
                        !localFilters.location ? "text-primary bg-primary/5" : "text-gray-600 hover:bg-primary/5 hover:text-primary"
                      )}
                    >
                      All Regions
                    </div>
                    {ALL_CITIES.map(city => (
                      <div 
                        key={`${city.name}-${city.country}`}
                        onClick={() => {
                          setLocalFilters(prev => ({ ...prev, location: `${city.name}, ${city.country}` }));
                          setShowLocationDropdown(false);
                        }}
                        className={cn(
                          "px-4 py-3 rounded-xl transition-all cursor-pointer font-bold text-sm",
                          localFilters.location === `${city.name}, ${city.country}` ? "text-primary bg-primary/5" : "text-gray-600 hover:bg-primary/5 hover:text-primary"
                        )}
                      >
                        {city.name}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        <section>
          <h3 className="font-bold mb-4 text-gray-900">Amenities</h3>
          <div className="space-y-4">
            {ALL_AMENITIES.map(amenity => (
              <FilterOption 
                key={amenity}
                label={amenity} 
                icon={getAmenityIcon(amenity)} 
                checked={localFilters.amenities.includes(amenity)}
                onChange={() => toggleList('amenities', amenity)}
              />
            ))}
          </div>
        </section>

        <section>
          <h3 className="font-bold mb-4 text-gray-900 uppercase text-xs tracking-widest opacity-50">Property Type</h3>
          <div className="space-y-4">
            {ALL_PROPERTY_TYPES.map(type => (
              <FilterOption 
                key={type}
                label={type} 
                icon={getPropertyTypeIcon(type)} 
                checked={localFilters.propertyTypes.includes(type)}
                onChange={() => toggleList('propertyTypes', type)}
              />
            ))}
          </div>
        </section>

        <button 
          onClick={handleApply}
          className="w-full bg-primary text-white py-4 rounded-2xl font-black hover:bg-primary/95 transition-all shadow-xl shadow-primary/20 active:scale-[0.98] mt-8"
        >
          Apply Filters
        </button>
      </div>
    </aside>
    </>
  );
}

function FilterOption({ label, icon, checked, onChange }) {
  return (
    <label className="flex items-center justify-between group cursor-pointer">
      <div className="flex items-center space-x-3.5">
        <span className={`transition-colors ${checked ? 'text-primary' : 'text-gray-400 group-hover:text-primary'}`}>{icon}</span>
        <span className={`text-sm font-bold transition-all ${checked ? 'text-gray-900 scale-105 origin-left' : 'text-gray-600 group-hover:text-gray-900'}`}>{label}</span>
      </div>
      <div 
        onClick={onChange}
        className={`w-6 h-6 rounded-full flex items-center justify-center transition-all border-2 ${
          checked ? 'bg-primary border-primary scale-110 shadow-lg shadow-primary/20' : 'bg-transparent border-gray-200'
        }`}
      >
        {checked && <div className="w-2 h-2 bg-white rounded-full" />}
      </div>
    </label>
  );
}
