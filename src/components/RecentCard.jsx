import React from 'react';
import { Link } from 'react-router-dom';

export default function RecentCard({ listing }) {
  return (
    <Link 
      to={`/listing/${listing.id}`}
      className="flex-shrink-0 w-72 bg-white rounded-2xl border border-gray-100 p-3.5 flex space-x-4 card-shadow hover:shadow-[0px_16px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 group"
    >
      <div className="w-24 h-24 rounded-xl overflow-hidden shadow-inner flex-shrink-0">
        <img 
          src={listing.images[0]} 
          alt={listing.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center min-w-0 pr-2">
        <h4 className="font-black text-sm text-gray-900 truncate leading-tight group-hover:text-primary transition-colors">{listing.title}</h4>
        <p className="text-[11px] font-bold text-gray-400 truncate mb-2">{listing.location}</p>
        <p className="text-base font-black text-primary italic">
          ${listing.price}
          <span className="text-[10px] font-bold text-gray-400 ml-1.5 not-italic uppercase tracking-widest leading-none">/nt</span>
        </p>
      </div>
    </Link>
  );
}
