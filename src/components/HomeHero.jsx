import React from 'react';
import { Grid, Map, SlidersHorizontal } from 'lucide-react';

export default function HomeHero({ resultCount, onOpenFilters }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-10 space-y-4 sm:space-y-0">
      <div>
        <h1 className="text-3xl sm:text-4xl font-black mb-1.5 tracking-tighter">
          {resultCount === 0 ? "No results found" : `${resultCount} ${resultCount === 1 ? 'place' : 'places'} to stay`}
        </h1>
        <p className="text-gray-500 font-medium">Global Luxury Edition</p>
      </div>
      
      <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
        <button 
          onClick={onOpenFilters} 
          className="lg:hidden flex flex-1 sm:flex-none items-center justify-center space-x-2 px-5 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-black transition-all active:scale-95"
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span>Filters</span>
        </button>
        <div className="flex items-center bg-gray-100/60 p-1 rounded-2xl border border-gray-100 flex-1 sm:flex-none justify-center">
          <button className="flex items-center space-x-2 px-5 py-2.5 bg-white shadow-sm rounded-xl text-sm font-black transition-all active:scale-95">
            <Grid className="w-4 h-4" />
            <span className="hidden sm:inline">Grid</span>
          </button>
          <button className="flex items-center space-x-2 px-5 py-2.5 text-gray-500 hover:text-gray-800 rounded-xl text-sm font-black transition-all active:scale-95">
            <Map className="w-4 h-4" />
            <span className="hidden sm:inline">Map</span>
          </button>
        </div>
      </div>
    </div>
  );
}
