import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, Award, Tag, Sparkles } from 'lucide-react';

export default function GalleryLightbox({
  isOpen,
  onClose,
  photos = [],
  currentIndex = 0,
  setCurrentIndex
}) {
  const handlePrev = useCallback(() => {
    if (photos.length === 0) return;
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
  }, [photos.length, setCurrentIndex]);

  const handleNext = useCallback(() => {
    if (photos.length === 0) return;
    setCurrentIndex((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
  }, [photos.length, setCurrentIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || photos.length === 0) return null;

  const currentPhoto = photos[currentIndex] || photos[0];

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col justify-between bg-slate-950/95 backdrop-blur-md text-white animate-fade-in select-none"
      role="dialog"
      aria-modal="true"
      aria-label="Photo Lightbox"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 sm:px-8 py-4 bg-slate-900/80 border-b border-slate-800/80 z-20">
        <div className="flex items-center gap-3">
          <span className="text-xs font-extrabold uppercase px-3 py-1 bg-[#E9931C] text-[#0B3560] rounded-full shadow-sm">
            {currentPhoto.category || 'School Activity'}
          </span>
          {currentPhoto.academicYear && (
            <span className="hidden sm:inline-flex text-xs font-semibold px-2.5 py-0.5 bg-blue-900/60 text-blue-200 rounded-md border border-blue-700/50">
              Session {currentPhoto.academicYear}
            </span>
          )}
          <span className="text-xs text-slate-400 font-medium">
            {currentIndex + 1} of {photos.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#E9931C]"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Area */}
      <div className="relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-6 z-20 p-2.5 sm:p-3 rounded-full bg-black/50 hover:bg-[#E9931C] text-white hover:text-[#0B3560] transition-all shadow-lg backdrop-blur-xs border border-white/10"
          aria-label="Previous photograph"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        {/* Current Photograph */}
        <div className="relative max-w-5xl max-h-[72vh] flex items-center justify-center">
          <img
            src={currentPhoto.src}
            alt={currentPhoto.title || 'Sunflower Public School Gallery Photograph'}
            className="max-h-[70vh] max-w-full object-contain rounded-lg shadow-2xl transition-all duration-200"
            loading="eager"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-6 z-20 p-2.5 sm:p-3 rounded-full bg-black/50 hover:bg-[#E9931C] text-white hover:text-[#0B3560] transition-all shadow-lg backdrop-blur-xs border border-white/10"
          aria-label="Next photograph"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      </div>

      {/* Bottom Bar & Thumbnail Strip */}
      <div className="bg-slate-900/90 border-t border-slate-800/80 px-4 sm:px-8 py-3 z-20 space-y-2">
        {/* Caption & Metadata */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-center sm:text-left">
          <div>
            <h3 className="text-sm sm:text-base font-bold text-white">
              {currentPhoto.eventTitle || currentPhoto.title}
            </h3>
            {currentPhoto.date && (
              <p className="text-xs text-slate-400 flex items-center justify-center sm:justify-start gap-1.5 mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-[#E9931C]" />
                <span>{currentPhoto.date}</span>
                {currentPhoto.academicYear && <span>• Academic Year {currentPhoto.academicYear}</span>}
              </p>
            )}
          </div>
          <span className="text-[11px] text-amber-300/80 font-medium">
            Sunflower Public School Official Gallery
          </span>
        </div>

        {/* Thumbnail Filmstrip */}
        {photos.length > 1 && (
          <div className="flex gap-2 overflow-x-auto py-1 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent justify-center sm:justify-start max-w-full">
            {photos.map((p, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-md overflow-hidden border-2 transition-all ${
                  idx === currentIndex
                    ? 'border-[#E9931C] scale-105 shadow-md shadow-[#E9931C]/30 ring-2 ring-[#E9931C]/50'
                    : 'border-transparent opacity-50 hover:opacity-100 hover:border-slate-500'
                }`}
                aria-label={`Go to photo ${idx + 1}`}
              >
                <img
                  src={p.src}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
