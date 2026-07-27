import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SLIDES = [
  {
    id: 1,
    title: "Sun Flower Public School",
    subtitle: "Come to Learn , Go to Serve",
    description: "Nurturing wholesome individuals with holistic development, academic excellence, and strong moral values.",
    image: "/school_assembly.png",
    tag: "Admissions Open 2026-27"
  },
  {
    id: 2,
    title: "100% Academic Excellence",
    subtitle: "Dedicated Faculty & Proven Results",
    description: "Empowering every child with state-of-the-art learning methodologies and personal attention.",
    image: "/school_assembly.png",
    tag: "CBSE Curriculum"
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev + 1) % SLIDES.length);

  return (
    <section id="home" className="relative bg-gray-950 overflow-hidden min-h-[480px] sm:min-h-[560px] md:min-h-[620px] flex items-center">
      {/* Slide Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={SLIDES[current].image}
            alt={SLIDES[current].title}
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#10457B]/95 via-[#10457B]/80 to-blue-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-16">
        <div className="max-w-2xl text-white">
          {/* Tag Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#E9931C] text-[#0B3560] px-3.5 py-1 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-lg mb-4"
          >
            <Calendar className="w-4 h-4" />
            <span>{SLIDES[current].tag}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            key={`title-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-3 font-poppins"
          >
            {SLIDES[current].title}
          </motion.h1>

          {/* Subtitle / Motto */}
          <motion.p
            key={`sub-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-[#E9931C] font-semibold text-lg sm:text-xl md:text-2xl mb-4 italic tracking-wide"
          >
            "{SLIDES[current].subtitle}"
          </motion.p>

          {/* Description */}
          <motion.p
            key={`desc-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-blue-100/90 text-sm sm:text-base leading-relaxed mb-8 max-w-xl"
          >
            {SLIDES[current].description}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a
              href="#information"
              className="bg-[#E9931C] hover:bg-amber-500 text-[#0B3560] font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all duration-200 flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <span>Explore Admissions</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#about"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold px-6 py-3 rounded-xl border border-white/20 transition-all duration-200"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 z-20 p-3 rounded-full bg-black/40 hover:bg-[#E9931C] hover:text-[#0B3560] text-white border border-white/20 backdrop-blur-md transition-all duration-200 focus:outline-none"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 z-20 p-3 rounded-full bg-black/40 hover:bg-[#E9931C] hover:text-[#0B3560] text-white border border-white/20 backdrop-blur-md transition-all duration-200 focus:outline-none"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === current ? 'w-8 bg-[#E9931C]' : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
