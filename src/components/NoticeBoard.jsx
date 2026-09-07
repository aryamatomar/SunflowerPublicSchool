import React from 'react';
import { motion } from 'framer-motion';
import { Bell, FileText, Image as ImageIcon, Users, ExternalLink } from 'lucide-react';

export default function NoticeBoard() {
  return (
    <section id="information" className="py-12 bg-gray-50/70 border-y border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-stretch gap-8">
          
          {/* Main Notice Board Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-2/3 bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden flex flex-col justify-between"
          >
            {/* Title Bar */}
            <div className="bg-[#E9931C] px-6 py-4 flex items-center justify-between text-[#0B3560]">
              <div className="flex items-center gap-3">
                <div className="bg-[#0B3560] text-[#E9931C] p-2 rounded-xl">
                  <Bell className="w-5 h-5 animate-bounce" />
                </div>
                <h3 className="text-xl font-extrabold font-poppins tracking-wide">
                  NOTICE BOARD
                </h3>
              </div>
              <span className="bg-[#0B3560]/10 text-[#0B3560] font-bold px-3 py-1 rounded-full text-xs">
                Updated Recently
              </span>
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Notice 1 */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/70 flex items-start gap-4">
                <div className="p-2.5 bg-[#E9931C] text-[#0B3560] font-bold rounded-xl flex-shrink-0 text-sm shadow-xs">
                  01
                </div>
                <div>
                  <div className="inline-block px-2.5 py-0.5 bg-[#E9931C] text-[#0B3560] text-[10px] font-extrabold uppercase rounded-md mb-1">
                    Active Admission
                  </div>
                  <p className="text-base sm:text-lg font-bold text-gray-900 font-poppins">
                    1). Admission Open for 2026–2027
                  </p>
                </div>
              </div>

              {/* Notice 2 & Document Requirements */}
              <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-3">
                <div className="flex items-center gap-2 text-[#10457B] font-bold text-base">
                  <FileText className="w-5 h-5 text-[#E9931C]" />
                  <span>2). Required Documents</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="bg-white p-3.5 rounded-xl border border-gray-100 flex items-center gap-3 shadow-xs">
                    <div className="p-2 bg-blue-50 text-[#10457B] rounded-lg">
                      <ImageIcon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">
                      2 Passport size photos of a child.
                    </span>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-gray-100 flex items-center gap-3 shadow-xs">
                    <div className="p-2 bg-amber-50 text-[#E9931C] rounded-lg">
                      <Users className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">
                      2 Family photo ( parents & the child)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Action Bar */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-500 font-medium">Official School Announcement</span>
              <a 
                href="#downloads" 
                className="text-xs font-bold text-[#10457B] hover:text-[#E9931C] flex items-center gap-1 transition-colors"
              >
                <span>Download Form</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Notice Highlight Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full md:w-1/3 bg-gradient-to-br from-[#10457B] to-[#0B3560] text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between relative overflow-hidden"
          >
            <div className="relative z-10 space-y-4">
              {/* Official Logo Emblem */}
              <div className="w-14 h-14 rounded-2xl bg-white p-1 flex items-center justify-center shadow-lg">
                <img src="/school_logo.png" alt="School Logo" className="w-full h-full object-contain" />
              </div>
              <h4 className="text-2xl font-bold text-white font-poppins">
                Admission Desk
              </h4>
              <p className="text-blue-100/80 text-sm leading-relaxed">
                Parents and guardians seeking admission for session 2026-27 can contact our helpline or visit the campus during office hours.
              </p>
              <div className="pt-2">
                <a
                  href="tel:+918899659410"
                  className="inline-flex items-center justify-center w-full bg-[#E9931C] hover:bg-amber-500 text-[#0B3560] font-bold py-3 rounded-xl shadow-md transition-all text-sm"
                >
                  Call Admission Office
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-blue-800/80 mt-6 relative z-10">
              <div className="flex items-center justify-between text-xs text-blue-200">
                <span>Timings: 8:00 AM - 2:00 PM</span>
                <span className="font-semibold text-[#E9931C]">Mon - Sat</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
