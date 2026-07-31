import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Sunflower', href: '/about/journey' },
  { label: 'Code of Conduct', href: '/code-of-conduct' },
  { label: 'Examination & Evaluation', href: '/academics/examination-pattern' },
  { label: 'Mandatory Disclosure', href: '/about/disclosure' },
  { label: 'Infrastructure', href: '/infrastructure' },
];

const SECONDARY_LINKS = [
  { label: 'Academics Overview', href: '/academics' },
  { label: 'School Timing', href: '/school-timing' },
  { label: 'Fee Structure', href: '/fee-structure' },
  { label: 'Activities / Gallery', href: '/activities' },
  { label: 'Student TC', href: '/student-tc' },
  { label: 'Annual Function 2025', href: '/annual-function-2025' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0B3560] text-white pt-16 pb-8 border-t border-blue-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-blue-900/80">
          
          {/* Column 1: School Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-xl shadow-md">
                <img 
                  src="/school_logo.png" 
                  alt="Sun Flower Public School Logo" 
                  className="h-14 sm:h-16 w-auto object-contain" 
                />
              </div>
              <div>
                <h3 className="font-extrabold text-lg font-poppins text-white leading-snug">
                  Sun Flower Public School
                </h3>
                <p className="text-[#E9931C] text-xs font-semibold">
                  Come to Learn , Go to Serve
                </p>
              </div>
            </div>

            <p className="text-blue-200/80 text-xs sm:text-sm leading-relaxed pt-2">
              Providing holistic development, academic excellence, and inclusive learning experiences for children to emerge as wholesome individuals.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#E9931C] font-bold bg-blue-950/60 p-2.5 rounded-xl border border-blue-800">
              <ShieldCheck className="w-4 h-4" />
              <span>Affiliated to CBSE, New Delhi</span>
            </div>
          </div>

          {/* Column 2: Quick Links 1 */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#E9931C] font-poppins mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-blue-100 hover:text-[#E9931C] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#E9931C] font-bold">•</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links 2 */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#E9931C] font-poppins mb-4">
              School Resources
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {SECONDARY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-blue-100 hover:text-[#E9931C] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#E9931C] font-bold">•</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#E9931C] font-poppins mb-4">
              Contact Information
            </h4>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E9931C] flex-shrink-0 mt-1" />
                <span className="text-blue-100">
                  Sun Flower Public School, Dayal Bagh, Agra, Uttar Pradesh
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#E9931C] flex-shrink-0" />
                <a href="tel:+918899659410" className="text-blue-100 hover:text-[#E9931C] transition-colors">
                  +91-8899659410
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#E9931C] flex-shrink-0" />
                <a href="mailto:info@sunfloweragra.com" className="text-blue-100 hover:text-[#E9931C] transition-colors">
                  info@sunfloweragra.com
                </a>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <span className="text-xs font-semibold text-blue-200">Follow Us:</span>
                <a 
                  href="https://www.facebook.com/sunfloweragra/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-blue-900 p-2 rounded-full text-[#E9931C] hover:bg-[#E9931C] hover:text-[#0B3560] transition-all"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-300">
          <div>
            © {new Date().getFullYear()} <span className="font-bold text-white">Sun Flower Public School</span>. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 bg-[#10457B] hover:bg-[#E9931C] text-white hover:text-[#0B3560] rounded-xl transition-all shadow-md flex items-center gap-2 text-xs font-bold"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
