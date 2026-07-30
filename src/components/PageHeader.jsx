import React from 'react';
import Breadcrumb from './Breadcrumb';

export default function PageHeader({ title, category, breadcrumbs = [] }) {
  return (
    <div className="bg-gradient-to-r from-[#10457B] via-[#0B3560] to-[#0A2E52] text-white py-10 px-4 sm:px-6 relative overflow-hidden border-b-4 border-[#E9931C]">
      {/* Background Accent Glow */}
      <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#E9931C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          {category && (
            <span className="inline-block px-3 py-0.5 bg-[#E9931C] text-[#0B3560] text-xs font-extrabold uppercase rounded-md tracking-wider mb-2">
              {category}
            </span>
          )}
          <h1 className="text-2xl sm:text-4xl font-extrabold font-poppins tracking-tight text-white">
            {title}
          </h1>
        </div>

        <Breadcrumb items={breadcrumbs} />
      </div>
    </div>
  );
}
