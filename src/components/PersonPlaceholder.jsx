import React from 'react';
import { User, Quote, Clock } from 'lucide-react';

export default function PersonPlaceholder({ roleTitle, roleName }) {
  return (
    <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm max-w-4xl mx-auto my-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        
        {/* Photo Placeholder Container */}
        <div className="w-48 sm:w-56 flex-shrink-0 text-center">
          <div className="w-48 h-60 sm:w-56 sm:h-64 rounded-2xl bg-gray-100 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-4 text-gray-400 mx-auto shadow-inner relative overflow-hidden group">
            <User className="w-16 h-16 text-gray-300 mb-3" />
            <p className="text-xs font-semibold text-gray-500 leading-tight">
              Official photograph will be provided by the school administration.
            </p>
          </div>
          <div className="mt-3">
            <h4 className="text-base font-bold text-[#10457B] font-poppins">
              {roleName || `${roleTitle}`}
            </h4>
            <p className="text-xs font-semibold text-[#E9931C]">{roleTitle}</p>
          </div>
        </div>

        {/* Message Content Placeholder */}
        <div className="flex-1 space-y-4 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-[#E9931C] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-200/60">
            <Clock className="w-3.5 h-3.5" />
            <span>Message From Desk</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#10457B] font-poppins">
            {roleTitle}'s Message
          </h3>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative">
            <Quote className="w-8 h-8 text-[#10457B]/10 absolute top-4 left-4" />
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed relative z-10 pt-2 font-medium">
              This page is currently under development. The official message will be provided by the school administration and will be updated soon.
            </p>
          </div>

          <div className="pt-2 text-xs text-gray-400 font-semibold">
            Sun Flower Public School • Dayal Bagh, Agra
          </div>
        </div>

      </div>
    </div>
  );
}
