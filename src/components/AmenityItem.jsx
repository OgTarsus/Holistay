import React from 'react';
import { cn } from '../lib/utils';

export default function AmenityItem({ icon, label, cross }) {
  return (
    <div className={cn("flex items-center space-x-5", cross && "line-through text-gray-300 opacity-60")}>
      <span className={cn("text-gray-800", cross && "text-gray-300")}>{icon}</span>
      <span className="text-md font-bold">{label}</span>
    </div>
  );
}
