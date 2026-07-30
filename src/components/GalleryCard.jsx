import React from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';

export default function GalleryCard({ title, category }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden group hover:shadow-md transition-all duration-200">
      <div className="h-48 bg-gray-100 border-b border-gray-100 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
        <div className="w-12 h-12 rounded-full bg-white text-gray-400 flex items-center justify-center mb-2 shadow-xs group-hover:scale-110 transition-transform duration-200">
          <Camera className="w-6 h-6 text-[#10457B]" />
        </div>
        <p className="text-xs text-gray-500 font-medium max-w-[200px]">
          Official photograph will be provided by the school administration.
        </p>
      </div>

      <div className="p-4">
        {category && (
          <span className="text-[10px] font-extrabold uppercase text-[#E9931C] tracking-wider block mb-1">
            {category}
          </span>
        )}
        <h4 className="text-sm font-bold text-[#10457B] font-poppins truncate">
          {title}
        </h4>
      </div>
    </div>
  );
}
