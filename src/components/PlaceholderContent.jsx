import React from 'react';
import { Clock, ShieldAlert } from 'lucide-react';

export default function PlaceholderContent({ title, customMessage }) {
  return (
    <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm text-center max-w-3xl mx-auto my-12">
      <div className="w-16 h-16 rounded-2xl bg-amber-50 text-[#E9931C] flex items-center justify-center mx-auto mb-6 shadow-inner border border-amber-200/60">
        <Clock className="w-8 h-8 animate-pulse" />
      </div>

      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#10457B] font-poppins mb-4">
        {title}
      </h2>

      <div className="inline-flex items-center gap-2 bg-blue-50 text-[#10457B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100">
        <ShieldAlert className="w-3.5 h-3.5 text-[#E9931C]" />
        <span>Status: Under Development</span>
      </div>

      <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-100 space-y-2 text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
        <p className="font-semibold text-gray-800">
          This page is currently under development.
        </p>
        <p className="text-gray-500">
          {customMessage || "The content for this section will be provided by the school administration and will be updated soon."}
        </p>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100 text-xs font-semibold text-gray-400">
        Sun Flower Public School • Official Administrative Portal
      </div>
    </div>
  );
}
