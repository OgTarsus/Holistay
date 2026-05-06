import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function EmptyFavorites() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center text-center py-32 bg-white rounded-[40px] shadow-2xl shadow-black/[0.03] border border-gray-50"
    >
      <div className="w-28 h-28 rounded-full bg-primary/5 flex items-center justify-center mb-10 shadow-inner">
         <Heart className="w-12 h-12 text-primary" strokeWidth={1.5} />
      </div>
      <h3 className="text-3xl font-black mb-5 tracking-tight text-gray-900">Your collection is empty</h3>
      <p className="text-gray-400 font-bold max-w-sm mb-12 leading-relaxed text-lg">
        Think of this as your private digital moodboard for African luxury. As you explore, tap the favorite icon to save listings here for later.
      </p>
      <Link 
        to="/"
        className="bg-primary text-white px-12 py-5 rounded-[24px] font-black text-xl hover:shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all"
      >
        Start Exploring
      </Link>
    </motion.div>
  );
}
