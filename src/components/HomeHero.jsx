import React from 'react';
import { Grid, Map } from 'lucide-react';

export default function HomeHero({ resultCount }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 space-y-6 sm:space-y-0">
      <div>
        <h1 className="text-4xl font-black mb-1.5 tracking-tighter">
          {resultCount === 0 ? "No results found" : `Over ${resultCount * 200} places to stay`}
        </h1>
        <p className="text-gray-500 font-medium">Aug 12 - 18 • 2 Guests • Global Luxury Edition</p>
      </div>
      
      <div className="flex items-center bg-gray-100/60 p-1 rounded-2xl border border-gray-100">
        <button className="flex items-center space-x-2 px-5 py-2.5 bg-white shadow-sm rounded-xl text-sm font-black transition-all active:scale-95">
          <Grid className="w-4 h-4" />
          <span>Grid</span>
        </button>
        <button className="hidden sm:flex items-center space-x-2 px-5 py-2.5 text-gray-500 hover:text-gray-800 rounded-xl text-sm font-black transition-all active:scale-95">
          <Map className="w-4 h-4" />
          <span>Map</span>
        </button>
      </div>
    </div>
  );
}
