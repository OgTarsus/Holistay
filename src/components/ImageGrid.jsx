import React from 'react';
import { LayoutGrid } from 'lucide-react';

export default function ImageGrid({ images, onShowGallery }) {
  return (
    <div 
      onClick={onShowGallery}
      className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 md:gap-3 h-[300px] sm:h-[400px] md:h-[550px] rounded-2xl md:rounded-3xl overflow-hidden mb-10 md:mb-14 relative group shadow-lg md:shadow-2xl shadow-black/5 cursor-pointer"
    >
      <div className="col-span-1 md:col-span-2 md:row-span-2 relative overflow-hidden">
        <img src={images[0]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" alt="Main" />
      </div>
      <div className="hidden md:block col-span-1 row-span-1 relative overflow-hidden">
        <img src={images[1] || images[0]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" alt="Image 2" />
      </div>
      <div className="hidden md:block col-span-1 row-span-1 relative overflow-hidden rounded-tr-3xl">
        <img src={images[2] || images[0]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out opacity-90" alt="Image 3" />
      </div>
      <div className="hidden md:block col-span-1 row-span-1 relative overflow-hidden">
        <img src={images[3] || images[0]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" alt="Image 4" />
      </div>
      <div className="hidden md:block col-span-1 row-span-1 relative overflow-hidden rounded-br-3xl">
        <img src={images[4] || images[0]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out opacity-80" alt="Image 5" />
      </div>
      <button className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-white/95 backdrop-blur-xl px-4 py-2 md:px-6 md:py-3 border border-gray-200 rounded-xl md:rounded-2xl text-xs md:text-sm font-black shadow-xl hover:bg-white hover:scale-105 transition-all flex items-center space-x-2 md:space-x-3 active:scale-95">
        <LayoutGrid className="w-4 h-4" />
        <span className="hidden sm:inline">Show all</span>
      </button>
    </div>
  );
}
