import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white py-4 px-4 sm:px-6 border-b border-gray-100 shadow-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand Container */}
        <div className="flex items-center gap-4 group cursor-pointer">
          {/* Official School Logo Image */}
          <div className="flex-shrink-0 transform group-hover:scale-105 transition-transform duration-300">
            <img 
              src="/school_logo.png" 
              alt="Sun Flower Public School Logo" 
              className="h-16 sm:h-20 w-auto object-contain drop-shadow-md"
            />
          </div>

          {/* School Name & Motto */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#10457B] tracking-tight font-poppins leading-tight">
              Sun Flower Public School
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-[#E9931C] tracking-wide mt-0.5 flex items-center justify-center md:justify-start gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-[#E9931C] animate-pulse"></span>
              Come to Learn , Go to Serve
            </p>
          </div>
        </div>

        {/* Header Right Feature Badges */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2.5 bg-blue-50/70 border border-blue-100 px-3.5 py-2 rounded-xl">
            <div className="p-2 bg-[#10457B] text-[#E9931C] rounded-lg shadow-xs">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#10457B]">Academic Excellence</div>
              <div className="text-[11px] text-gray-500 font-medium">100% Board Results</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

