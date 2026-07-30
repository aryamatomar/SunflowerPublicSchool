import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Home } from 'lucide-react';

const NAV_MENU = [
  { label: 'Home', href: '/' },
  { 
    label: 'About Sunflower', 
    href: '/about/journey',
    dropdown: [
      { label: 'Our Journey', href: '/about/journey' },
      { label: 'Vision & Mission', href: '/about/vision-mission' },
      { label: 'Motto', href: '/about/motto' },
      { label: "Director's Message", href: '/about/director' },
      { label: "Principal's Message", href: '/about/principal' },
      { label: "Manager's Message", href: '/about/manager' },
      { label: 'Mandatory Disclosure', href: '/about/disclosure' },
    ]
  },
  { 
    label: 'From the desk', 
    href: '/about/director',
    dropdown: [
      { label: "Director's Desk", href: '/about/director' },
      { label: "Principal's Desk", href: '/about/principal' },
      { label: "Manager's Desk", href: '/about/manager' },
    ]
  },
  { 
    label: 'Academics', 
    href: '/academics',
    dropdown: [
      { label: 'Examination & Evaluation Pattern', href: '/academics/examination-pattern' },
      { label: 'Code of Conduct', href: '/code-of-conduct' },
      { label: 'Academics Overview', href: '/academics' },
    ]
  },
  { 
    label: 'Information', 
    href: '/information',
    dropdown: [
      { label: 'Code of Conduct', href: '/code-of-conduct' },
      { label: 'Examination & Evaluation Pattern', href: '/academics/examination-pattern' },
      { label: 'Fee Structure & Rules', href: '/admission' },
      { label: 'Mandatory Disclosure', href: '/about/disclosure' },
    ]
  },
  { label: 'Mandatory Disclosure', href: '/about/disclosure' },
  { label: 'Infrastructure', href: '/infrastructure' },
  { label: 'Activities/Gallery', href: '/activities' },
  { label: 'Downloads', href: '/downloads' },
  { label: 'Student TC', href: '/student-tc' },
  { label: 'Annual Function 2025', href: '/annual-function-2025', badge: '2025' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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
          
          {/* Mobile Header Title */}
          <Link to="/" className="flex xl:hidden items-center gap-2.5 text-white font-bold text-sm">
            <img src="/school_logo.png" alt="Logo" className="w-8 h-8 object-contain bg-white/10 rounded-md p-0.5" />
            <span className="truncate max-w-[200px]">Sun Flower Public School</span>
          </Link>

          {/* Desktop Navigation Bar */}
          <div className="hidden xl:flex items-center justify-between w-full space-x-1">
            {NAV_MENU.map((item) => {
              const isActive = location.pathname === item.href || 
                (item.dropdown && item.dropdown.some(sub => sub.href === location.pathname));

              return (
                <div 
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={`px-2.5 py-2 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap flex items-center gap-1 relative ${
                      isActive
                        ? 'bg-[#E9931C] text-[#0B3560] shadow-md font-bold'
                        : 'text-white/90 hover:bg-white/10 hover:text-[#E9931C]'
                    }`}
                  >
                    {item.label === 'Home' && <Home className="w-3.5 h-3.5 inline-block mr-0.5" />}
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="ml-1 px-1.5 py-0.5 text-[9px] font-black bg-[#E9931C] text-[#0B3560] rounded-full leading-none">
                        {item.badge}
                      </span>
                    )}
                    {item.dropdown && <ChevronDown className="w-3 h-3 ml-0.5 opacity-80" />}
                  </Link>

                  {/* Desktop Dropdown Menu */}
                  {item.dropdown && openDropdown === item.label && (
                    <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-2xl py-2 border border-gray-100 animate-fade-in z-50 mt-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          className={`block px-4 py-2.5 text-xs font-semibold transition-colors ${
                            location.pathname === sub.href
                              ? 'bg-blue-50 text-[#10457B] font-bold border-l-4 border-[#E9931C]'
                              : 'text-gray-700 hover:bg-amber-50/70 hover:text-[#10457B]'
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
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

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0B3560] border-b border-blue-800 px-4 pt-2 pb-6 space-y-1 shadow-2xl max-h-[80vh] overflow-y-auto">
          {NAV_MENU.map((item) => (
            <div key={item.label} className="space-y-1">
              <div className="flex items-center justify-between">
                <Link
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex-1 flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'bg-[#E9931C] text-[#0B3560] font-bold'
                      : 'text-blue-100 hover:bg-blue-800/60 hover:text-[#E9931C]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {item.label === 'Home' && <Home className="w-4 h-4" />}
                    <span>{item.label}</span>
                  </div>
                </Link>

                {item.dropdown && (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className="p-2 text-blue-200 hover:text-[#E9931C]"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>

              {/* Mobile Submenu Dropdown */}
              {item.dropdown && openDropdown === item.label && (
                <div className="pl-6 space-y-1 py-1 bg-blue-950/40 rounded-lg">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.label}
                      to={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-2 text-xs font-semibold rounded-md transition-colors ${
                        location.pathname === sub.href
                          ? 'text-[#E9931C] font-bold bg-blue-900/50'
                          : 'text-blue-200 hover:text-white'
                      }`}
                    >
                      • {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
