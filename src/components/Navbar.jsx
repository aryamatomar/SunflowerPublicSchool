import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Home } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About Sunflower', href: '#about' },
  { label: 'From the desk', href: '#desk' },
  { label: 'Mandatory Disclosure', href: '#disclosure' },
  { label: 'Information', href: '#information' },
  { label: 'Infrastructure', href: '#infrastructure' },
  { label: 'Activities/Gallery', href: '#gallery' },
  { label: 'Downloads', href: '#downloads' },
  { label: 'Student TC', href: '#tc' },
  { label: 'Annual Function 2025', href: '#annual-function', badge: '2025' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#10457B]/95 backdrop-blur-md shadow-lg py-1' 
          : 'bg-[#10457B] py-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          
          {/* Mobile Title indicator with new logo image when scrolled */}
          <div className="flex xl:hidden items-center gap-2.5 text-white font-bold text-sm">
            <img src="/school_logo.png" alt="Logo" className="w-8 h-8 object-contain bg-white/10 rounded-md p-0.5" />
            <span className="truncate max-w-[200px]">Sun Flower Public School</span>
          </div>

          {/* Desktop Links List */}
          <div className="hidden xl:flex items-center justify-between w-full space-x-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveItem(item.label)}
                  className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap flex items-center gap-1 relative ${
                    isActive
                      ? 'bg-[#E9931C] text-[#0B3560] shadow-md font-bold'
                      : 'text-white/90 hover:bg-white/10 hover:text-[#E9931C]'
                  }`}
                >
                  {item.label === 'Home' && <Home className="w-3.5 h-3.5 inline-block mr-0.5" />}
                  {item.label}
                  {item.badge && (
                    <span className="ml-1 px-1.5 py-0.5 text-[9px] font-black bg-[#E9931C] text-[#0B3560] rounded-full leading-none">
                      {item.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#E9931C]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#E9931C]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0B3560] border-b border-blue-800 px-4 pt-2 pb-6 space-y-1 shadow-2xl animate-fade-in">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => {
                setActiveItem(item.label);
                setMobileMenuOpen(false);
              }}
              className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeItem === item.label
                  ? 'bg-[#E9931C] text-[#0B3560] font-bold'
                  : 'text-blue-100 hover:bg-blue-800/60 hover:text-[#E9931C]'
              }`}
            >
              <div className="flex items-center gap-2">
                {item.label === 'Home' && <Home className="w-4 h-4" />}
                <span>{item.label}</span>
              </div>
              <ChevronRight className="w-4 h-4 opacity-70" />
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
