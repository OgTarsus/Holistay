import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, X } from 'lucide-react';
import { cn } from '../lib/utils';

export default function GalleryOverlay({ showGallery, setShowGallery, images, activeImageIndex, setActiveImageIndex }) {
  const nextImage = () => setActiveImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <AnimatePresence>
      {showGallery && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center sm:pt-20 sm:pb-10"
        >
          <button 
            onClick={() => setShowGallery(false)}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white hover:text-primary transition-colors p-2 bg-white/10 rounded-full z-10"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <div className="flex items-center justify-center w-full max-w-5xl px-0 sm:px-10 gap-0 sm:gap-10 group relative h-full sm:h-auto">
            <button 
              onClick={prevImage}
              className="absolute left-2 sm:static text-white hover:text-primary transition-all p-3 sm:p-4 bg-black/50 sm:bg-white/5 rounded-full sm:rounded-2xl border border-white/10 z-10"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 font-black" />
            </button>
            
            <motion.div 
              key={activeImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-auto h-full sm:h-auto sm:aspect-[16/10] flex-1 rounded-none sm:rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center bg-black"
            >
              <img src={images[activeImageIndex]} className="w-full h-auto sm:h-full object-contain sm:object-cover" alt="Gallery" />
              <div className="absolute top-4 sm:top-4 left-0 right-0 px-4 sm:px-10 flex gap-2">
                 {images.map((_, idx) => (
                   <div 
                     key={idx} 
                     className={cn(
                       "h-1 flex-1 rounded-full transition-all duration-500",
                       idx === activeImageIndex ? "bg-primary" : "bg-white/20"
                     )} 
                   />
                 ))}
              </div>
            </motion.div>

            <button 
              onClick={nextImage}
              className="absolute right-2 sm:static text-white hover:text-primary transition-all p-3 sm:p-4 bg-black/50 sm:bg-white/5 rounded-full sm:rounded-2xl border border-white/10 z-10"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 font-black" />
            </button>
          </div>
          
          <div className="hidden sm:flex mt-10 gap-4 overflow-x-auto no-scrollbar max-w-3xl justify-center">
            {images.map((img, idx) => (
              <img 
                key={idx}
                src={img}
                onClick={() => setActiveImageIndex(idx)}
                className={cn(
                  "w-20 h-20 rounded-xl cursor-pointer border-2 transition-all object-cover",
                  idx === activeImageIndex ? "border-primary scale-110 shadow-lg shadow-primary/20" : "border-transparent opacity-50 hover:opacity-100"
                )}
                alt="Thumb"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
