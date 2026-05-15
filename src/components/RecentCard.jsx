import React from 'react';
import { Link } from 'react-router-dom';

export default function RecentCard({ listing }) {
  return (
    <Link 
      to={`/listing/${listing.id}`}
      className="flex-shrink-0 w-64 sm:w-72 bg-white rounded-2xl border border-gray-100 p-2.5 sm:p-3.5 flex space-x-3 sm:space-x-4 card-shadow hover:shadow-[0px_16px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 group"
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shadow-inner flex-shrink-0">
        <img 
          src={listing.images[0]} 
          alt={listing.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col justify-center min-w-0 pr-1 sm:pr-2">
        <h4 className="font-black text-sm text-gray-900 truncate leading-tight group-hover:text-primary transition-colors">{listing.title}</h4>
        <p className="text-[10px] sm:text-[11px] font-bold text-gray-400 truncate mb-1 sm:mb-2">{listing.location}</p>
        <p className="text-sm sm:text-base font-black text-primary italic leading-none">
          ${listing.price}
          <span className="text-[9px] sm:text-[10px] font-bold text-gray-400 ml-1 sm:ml-1.5 not-italic uppercase tracking-widest leading-none">/nt</span>
        </p>
      </div>
    </Link>
  );
}
