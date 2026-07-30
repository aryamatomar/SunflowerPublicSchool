import React from 'react';
import { User, Clock } from 'lucide-react';

export default function PersonPlaceholder({ name, roleName, title, roleTitle, designation }) {
  const safeName = name || roleName || "Director";
  const safeTitle = title || roleTitle || designation || "Director";

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col items-center text-center">
      <div className="mb-4 inline-flex items-center gap-1.5 bg-amber-50 text-[#E9931C] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-200/60">
        <Clock className="w-3.5 h-3.5" />
        <span>Message From Desk</span>
      </div>

      <div className="w-48 h-56 sm:w-52 sm:h-60 rounded-xl bg-slate-100 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-4 text-slate-400 mb-5 shadow-inner relative overflow-hidden">
        <User className="w-16 h-16 text-slate-300 mb-3" />
        <p className="text-xs font-medium text-slate-500 leading-tight">
          Official photograph will be provided by the school administration.
        </p>
      </div>

      <div className="w-full">
        <h4 className="text-lg font-bold text-[#10457B]">
          {safeName}
        </h4>
        <p className="text-xs font-bold text-[#E9931C] uppercase tracking-wider mt-1">
          {safeTitle}
        </p>
      </div>
    </div>
  );
}
