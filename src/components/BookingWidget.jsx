import React, { useState } from 'react';
import { Star, ChevronDown, Check } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function BookingWidget({ listing }) {
  const [showGuests, setShowGuests] = useState(false);
  const [guests, setGuests] = useState(2);
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="sticky top-[120px] bg-white rounded-3xl border border-gray-100 shadow-[0px_16px_32px_rgba(0,0,0,0.1)] p-7">
      <div className="flex justify-between items-end mb-7">
        <div>
          <span className="text-2xl font-black text-gray-900">${listing.price}</span>
          <span className="text-gray-500 font-bold"> night</span>
        </div>
        <div className="flex items-center gap-1.5 text-sm font-black">
          <Star className="w-4 h-4 text-primary fill-primary" />
          <span>{listing.rating}</span>
          <span className="text-gray-400 font-bold underline decoration-gray-300 ml-1">· {listing.reviewsCount} reviews</span>
        </div>
      </div>

      <div className="border border-gray-200 rounded-2xl overflow-hidden mb-7 ring-1 ring-transparent focus-within:ring-primary/30 transition-all">
        <div className="grid grid-cols-2 border-b border-gray-200">
          <div className="p-3.5 border-r border-gray-200 hover:bg-gray-50 transition-all">
            <label className="text-[10px] font-black uppercase text-gray-900 block mb-1">Check-in</label>
            <input 
              type="date" 
              min={today}
              defaultValue="2026-11-14"
              className="w-full bg-transparent border-none p-0 text-sm font-bold text-gray-600 focus:ring-0 outline-none cursor-pointer"
            />
          </div>
          <div className="p-3.5 hover:bg-gray-50 transition-all">
            <label className="text-[10px] font-black uppercase text-gray-900 block mb-1">Checkout</label>
            <input 
              type="date" 
              min={today}
              defaultValue="2026-11-19"
              className="w-full bg-transparent border-none p-0 text-sm font-bold text-gray-600 focus:ring-0 outline-none cursor-pointer"
            />
          </div>
        </div>
        
        <div className="relative">
          <div 
            onClick={() => setShowGuests(!showGuests)}
            className="p-3.5 flex justify-between items-center hover:bg-gray-50 cursor-pointer transition-all"
          >
            <div>
              <span className="text-[10px] font-black uppercase text-gray-900 block mb-1">Guests</span>
              <span className="text-sm font-bold text-gray-900">{guests} guests</span>
            </div>
            <ChevronDown className={cn("w-5 h-5 text-gray-500 transition-transform", showGuests && "rotate-180")} />
          </div>

          <AnimatePresence>
            {showGuests && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="top-full left-0 right-0 bg-white border border-gray-200 rounded-2xl mt-2 shadow-2xl z-50 p-2 max-h-60 overflow-y-auto no-scrollbar"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                  <button
                    key={num}
                    onClick={(e) => {
                      e.stopPropagation();
                      setGuests(num);
                      setShowGuests(false);
                    }}
                    className={cn(
                      "w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center justify-between",
                      guests === num ? "bg-primary text-white" : "hover:bg-gray-50 text-gray-700"
                    )}
                  >
                    <span>{num} {num === 1 ? 'guest' : 'guests'}</span>
                    {guests === num && <Check className="w-4 h-4 text-white" />}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <button className="w-full bg-primary text-white py-4.5 rounded-2xl font-black text-lg hover:bg-primary/95 transition-all shadow-xl shadow-primary/20 active:scale-[0.98] mb-5">
        Book Now
      </button>
      
      <p className="text-center text-xs font-bold text-gray-400 mb-7">You won't be charged yet</p>

      <div className="space-y-4 pb-7 border-b border-gray-100 mb-7">
        <div className="flex justify-between items-center text-gray-600 font-bold decoration-gray-300">
          <span className="underline decoration-1 cursor-default">${listing.price} x 5 nights</span>
          <span className="text-gray-900">${listing.price * 5}</span>
        </div>
        <div className="flex justify-between items-center text-gray-600 font-bold decoration-gray-300">
          <span className="underline decoration-1 cursor-default">Cleaning fee</span>
          <span className="text-gray-900">$80</span>
        </div>
        <div className="flex justify-between items-center text-gray-600 font-bold decoration-gray-300">
          <span className="underline decoration-1 cursor-default">Holistay service fee</span>
          <span className="text-gray-900">$180</span>
        </div>
      </div>

      <div className="flex justify-between items-center text-xl font-black text-gray-900">
        <span>Total before taxes</span>
        <span>${listing.price * 5 + 80 + 180}</span>
      </div>
    </div>
  );
}
