import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles, BookOpen, Target } from 'lucide-react';

export default function SharedCommitment() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-50/70 via-indigo-50/30 to-amber-50/40 rounded-3xl p-8 sm:p-12 border border-blue-100 shadow-sm relative overflow-hidden"
        >
          {/* Decorative Background Quote Icon */}
          <Quote className="absolute -bottom-6 -right-6 w-48 h-48 text-blue-900/5 rotate-180 pointer-events-none" />

          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-[#10457B] text-[#E9931C] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Educational Philosophy</span>
          </div>

          {/* Main Statement Quote Banner */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#10457B] tracking-tight uppercase leading-snug mb-8 font-poppins border-l-4 border-[#E9931C] pl-4 sm:pl-6">
            EDUCATION IS A SHARED COMMITMENT BETWEEN OUR DEDICATED TEACHERS, MOTIVATED STUDENTS AND ENTHUSIASTIC PARENTS WITH HIGH EXPECTATIONS.
          </h2>

          {/* Two Columns for Paragraphs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-gray-700 text-sm sm:text-base leading-relaxed">
            <div className="bg-white/80 backdrop-blur-xs p-6 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-3 text-[#10457B] font-bold">
                <Target className="w-5 h-5 text-[#E9931C]" />
                <span className="font-poppins text-base">Wholesome Development</span>
              </div>
              <p className="text-gray-600">
                The main aim of "Sun Flower Public School" is to help children emerge as wholesome individuals. This is achieved by following some unique methodologies developed by our educational development council and we concentrate in providing an all-round -academic, moral and physical - education.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-xs p-6 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-3 text-[#10457B] font-bold">
                <BookOpen className="w-5 h-5 text-[#E9931C]" />
                <span className="font-poppins text-base">Unique Learning Experience</span>
              </div>
              <p className="text-gray-600">
                Our school offers students a unique educational experience which, in many ways, is different from schools elsewhere. There are many salient and distinguishing features which contribute towards making the school exclusive and exceptional in the sphere of higher secondary school education.
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
