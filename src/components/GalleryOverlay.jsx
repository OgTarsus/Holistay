import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';
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
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center pt-20 pb-10"
        >
          <button 
            onClick={() => setShowGallery(false)}
            className="absolute top-8 right-8 text-white hover:text-primary transition-colors p-2 bg-white/10 rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-45">
              <path d="M12 19V5M5 12h14"/>
            </svg>
          </button>

          <div className="flex items-center justify-center w-full max-w-5xl px-10 gap-10 group">
            <button 
              onClick={prevImage}
              className="text-white hover:text-primary transition-all p-4 bg-white/5 rounded-2xl border border-white/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
              </svg>
            </button>
            
            <motion.div 
              key={activeImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-[16/10] flex-1 rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src={images[activeImageIndex]} className="w-full h-full object-cover" alt="Gallery" />
              <div className="absolute top-4 left-0 right-0 px-10 flex gap-2">
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
              className="text-white hover:text-primary transition-all p-4 bg-white/5 rounded-2xl border border-white/10"
            >
              <ChevronRight className="w-8 h-8 font-black" />
            </button>
          </div>
          
          <div className="mt-10 flex gap-4 overflow-x-auto no-scrollbar max-w-3xl justify-center">
            {images.map((img, idx) => (
              <img 
                key={idx}
                src={img}
                onClick={() => setActiveImageIndex(idx)}
                className={cn(
                  "w-20 h-20 rounded-xl cursor-pointer border-2 transition-all",
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
