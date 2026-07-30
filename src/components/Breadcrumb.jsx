import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

export default function Breadcrumb({ items = [] }) {
  return (
    <nav className="flex items-center text-xs sm:text-sm text-blue-200/90 font-medium py-2 overflow-x-auto">
      <Link 
        to="/" 
        className="flex items-center gap-1.5 hover:text-[#E9931C] transition-colors flex-shrink-0"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center flex-shrink-0">
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-blue-300/60" />
          {item.href ? (
            <Link 
              to={item.href} 
              className="hover:text-[#E9931C] transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[#E9931C] font-semibold">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
