import React from 'react';
import { Bell, Sparkles } from 'lucide-react';

export default function NoticeTicker() {
  return (
    <div className="bg-[#E9931C] text-[#0B3560] shadow-inner font-semibold text-xs sm:text-sm py-2.5 px-4 overflow-hidden border-b border-amber-600/30">
      <div className="max-w-7xl mx-auto flex items-center gap-3">
        {/* Badge Label */}
        <div className="flex-shrink-0 bg-[#0B3560] text-[#E9931C] px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
          <Bell className="w-3.5 h-3.5 animate-bounce text-[#E9931C]" />
          <span>LATEST NOTICE :</span>
        </div>

        {/* Marquee Content */}
        <div className="relative overflow-hidden w-full flex items-center">
          <div className="animate-marquee font-bold text-[#0B3560] tracking-wide flex items-center gap-2 cursor-pointer hover:underline">
            <Sparkles className="w-4 h-4 text-[#0B3560] inline" />
            <span>Admission open for the session 2026-27</span>
            <span className="mx-6 text-[#0B3560] font-black">•</span>
            <span>Admission open for the session 2026-27</span>
            <span className="mx-6 text-[#0B3560] font-black">•</span>
            <span>Admission open for the session 2026-27</span>
          </div>
        </div>
      </div>
    </div>
  );
}
