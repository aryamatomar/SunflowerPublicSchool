import React from 'react';
import { Phone, Mail, ShieldCheck } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[#0B3560] text-white text-xs sm:text-sm py-2 px-4 border-b border-blue-900/60">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Left Side: Social & Affiliation */}
        <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
          <div className="flex items-center gap-1.5 hover:text-[#E9931C] transition-colors cursor-pointer">
            <span className="font-medium text-[#E9931C]">Follow Us :</span>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer"
              aria-label="Facebook"
              className="bg-blue-900/80 p-1 rounded-full hover:bg-[#E9931C] hover:text-blue-950 transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
          
          <div className="hidden sm:block h-3.5 w-px bg-blue-800/60" />
          
          <div className="flex items-center gap-1.5 text-blue-100 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#E9931C]" />
            <span>Affiliated to CBSE, New Delhi</span>
          </div>
        </div>

        {/* Right Side: Contact Info */}
        <div className="flex items-center gap-5 flex-wrap justify-center md:justify-end text-xs sm:text-sm">
          <a 
            href="tel:+918899659410" 
            className="flex items-center gap-1.5 text-blue-100 hover:text-[#E9931C] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#E9931C]" />
            <span className="tracking-wide font-medium">+91-8899659410</span>
          </a>

          <div className="h-3.5 w-px bg-blue-800/60 hidden sm:block" />

          <a 
            href="mailto:info@sunfloweragra.com" 
            className="flex items-center gap-1.5 text-blue-100 hover:text-[#E9931C] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#E9931C]" />
            <span className="font-medium">info@sunfloweragra.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}

