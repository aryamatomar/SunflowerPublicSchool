import React, { useState, useMemo } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import GalleryLightbox from '../../components/GalleryLightbox';
import { 
  GALLERY_EVENTS, 
  ALL_GALLERY_PHOTOS, 
  GALLERY_CATEGORIES, 
  GALLERY_ACADEMIC_YEARS 
} from '../../data/galleryData';
import { 
  Trophy, 
  Music, 
  Sparkles, 
  Heart, 
  Calendar, 
  Image as ImageIcon, 
  Search, 
  Layers, 
  Grid, 
  ExternalLink,
  Award,
  ChevronRight
} from 'lucide-react';

export default function ActivitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All Years');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('events'); // 'events' | 'all'
  
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotos, setActivePhotos] = useState([]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Co-curricular activities overview
  const activities = [
    {
      title: "Sports & Physical Activities",
      desc: "Yoga and physical training are conducted on regular basis to build up the strength, flexibility and neuromuscular coordination. Our students participate at inter school level in different sports like chess, badminton, volleyball, kho-kho, carrom and athletics.",
      icon: Trophy
    },
    {
      title: "Music & Dance",
      desc: "We encourage students to participate in different art forms like music, drama, dance etc. Harvesting their innate talents, enabling them to become self reliant and confident human beings.",
      icon: Music
    },
    {
      title: "Cultural Celebrations",
      desc: "Annual Day, Religious & National Festivals are celebrated with great zeal and fervour. Students participate enthusiastically in all cultural activities, promoting mutual respect for all Indian cultural heritage.",
      icon: Sparkles
    },
    {
      title: "Olympiads & Competitions",
      desc: "Our students have showcased their talents in various Olympiads, games, and competitions at the school, district, and national levels, bringing home numerous gold, silver, and bronze medals.",
      icon: Heart
    }
  ];

  // Filter events based on selections
  const filteredEvents = useMemo(() => {
    return GALLERY_EVENTS.filter((evt) => {
      const matchCategory = selectedCategory === 'All' || evt.category === selectedCategory;
      const matchYear = selectedYear === 'All Years' || evt.academicYear === selectedYear;
      const matchSearch = searchQuery === '' || 
        evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        evt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (evt.bannerMotto && evt.bannerMotto.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchYear && matchSearch;
    });
  }, [selectedCategory, selectedYear, searchQuery]);

  // Filter flat photos based on selections
  const filteredPhotos = useMemo(() => {
    return ALL_GALLERY_PHOTOS.filter((photo) => {
      const matchCategory = selectedCategory === 'All' || photo.category === selectedCategory;
      const matchYear = selectedYear === 'All Years' || photo.academicYear === selectedYear;
      const matchSearch = searchQuery === '' || 
        photo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (photo.eventTitle && photo.eventTitle.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchYear && matchSearch;
    });
  }, [selectedCategory, selectedYear, searchQuery]);

  // Expanded albums toggle state
  const [expandedAlbums, setExpandedAlbums] = useState({});

  const toggleExpandAlbum = (albumId) => {
    setExpandedAlbums(prev => ({
      ...prev,
      [albumId]: !prev[albumId]
    }));
  };

  // Open album in lightbox
  const handleOpenAlbum = (album) => {
    const formattedPhotos = album.images.map((img) => ({
      ...img,
      eventTitle: album.title,
      category: album.category,
      academicYear: album.academicYear,
      date: album.date
    }));
    setActivePhotos(formattedPhotos);
    setCurrentPhotoIndex(0);
    setLightboxOpen(true);
  };

  // Open specific single photo within current filtered photos context
  const handleOpenPhoto = (photosList, index) => {
    setActivePhotos(photosList);
    setCurrentPhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <Breadcrumb items={[{ label: 'Activities & Gallery' }]} />
      
      <PageHeader 
        title="Activities & Photo Gallery" 
        subtitle="Official photographic glimpses of celebrations, awards, cultural events & student life at Sunflower Public School"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-14">
        
        {/* Gallery Section */}
        <section className="space-y-8">
          
          {/* Section Heading & Stats Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-slate-200">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-black uppercase tracking-wider text-[#E9931C] bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                  Official Gallery
                </span>
                <span className="text-xs font-bold text-[#10457B] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                  {ALL_GALLERY_PHOTOS.length} Photographs
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#10457B]">
                School Events & Activity Gallery
              </h2>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-slate-200/80 p-1 rounded-xl self-start sm:self-center">
              <button
                onClick={() => setViewMode('events')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'events'
                    ? 'bg-white text-[#10457B] shadow-sm'
                    : 'text-slate-600 hover:text-[#10457B]'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-[#E9931C]" />
                <span>Event Albums ({GALLERY_EVENTS.length})</span>
              </button>
              <button
                onClick={() => setViewMode('all')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'all'
                    ? 'bg-white text-[#10457B] shadow-sm'
                    : 'text-slate-600 hover:text-[#10457B]'
                }`}
              >
                <Grid className="w-3.5 h-3.5 text-[#E9931C]" />
                <span>All Photos ({ALL_GALLERY_PHOTOS.length})</span>
              </button>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-100 space-y-4">
            
            {/* Search Input & Academic Year Dropdown */}
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
              
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search events, ceremonies, celebrations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E9931C] focus:bg-white transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Academic Year Filter */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <Calendar className="w-4 h-4 text-[#E9931C]" />
                <span className="text-xs font-bold text-[#10457B] whitespace-nowrap">Academic Year:</span>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="bg-slate-50 border border-slate-200 text-xs font-bold text-[#10457B] rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E9931C] cursor-pointer"
                >
                  {GALLERY_ACADEMIC_YEARS.map((yr) => (
                    <option key={yr} value={yr}>{yr}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-xs font-bold text-slate-400 mr-1 flex-shrink-0">Category:</span>
              {GALLERY_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap flex-shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-[#10457B] text-white shadow-md shadow-[#10457B]/20 ring-2 ring-[#E9931C]'
                      : 'bg-slate-100 text-slate-600 hover:bg-amber-50 hover:text-[#10457B]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>

          {/* VIEW MODE: EVENT ALBUMS */}
          {viewMode === 'events' && (
            <div className="space-y-10">
              {filteredEvents.length === 0 ? (
                <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
                  <ImageIcon className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                  <p className="text-slate-600 font-bold text-base">No events found matching your filter criteria.</p>
                  <button
                    onClick={() => { setSelectedCategory('All'); setSelectedYear('All Years'); setSearchQuery(''); }}
                    className="mt-4 px-4 py-2 bg-[#E9931C] text-[#0B3560] font-bold text-xs rounded-xl hover:bg-amber-500 transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                filteredEvents.map((evt) => {
                  const isExpanded = !!expandedAlbums[evt.id];
                  const displayedImages = isExpanded ? evt.images : evt.images.slice(0, 6);

                  return (
                    <div 
                      key={evt.id}
                      className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
                    >
                      {/* Event Banner Header */}
                      <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-950 via-[#10457B] to-blue-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[11px] font-black uppercase px-2.5 py-0.5 bg-[#E9931C] text-[#0B3560] rounded-full">
                              {evt.category}
                            </span>
                            <span className="text-[11px] font-semibold px-2.5 py-0.5 bg-white/15 text-blue-100 rounded-full">
                              Session {evt.academicYear}
                            </span>
                            <span className="text-[11px] text-amber-200 flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              {evt.date}
                            </span>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-black text-white">
                            {evt.title}
                          </h3>
                          {evt.bannerMotto && (
                            <p className="text-xs sm:text-sm text-amber-100/90 font-medium italic">
                              "{evt.bannerMotto}"
                            </p>
                          )}
                          <p className="text-xs sm:text-sm text-blue-100/80 max-w-3xl leading-relaxed">
                            {evt.description}
                          </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2 flex-wrap">
                          {evt.images.length > 6 && (
                            <button
                              onClick={() => toggleExpandAlbum(evt.id)}
                              className="px-4 py-2.5 bg-white/15 hover:bg-white/25 text-white font-bold text-xs rounded-xl transition-all"
                            >
                              {isExpanded ? 'Collapse Grid' : `Show All ${evt.images.length} in Grid`}
                            </button>
                          )}
                          <button
                            onClick={() => handleOpenAlbum(evt)}
                            className="flex items-center gap-2 px-5 py-2.5 bg-[#E9931C] hover:bg-amber-400 text-[#0B3560] font-extrabold text-xs rounded-xl shadow-md transition-all flex-shrink-0 group"
                          >
                            <span>Open Slideshow ({evt.images.length})</span>
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                          </button>
                        </div>
                      </div>

                      {/* Image Preview Grid for this Event */}
                      <div className="p-6 sm:p-8">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                          {displayedImages.map((img, idx) => (
                            <div
                              key={img.id}
                              onClick={() => {
                                const albumPhotos = evt.images.map((item) => ({
                                  ...item,
                                  eventTitle: evt.title,
                                  category: evt.category,
                                  academicYear: evt.academicYear,
                                  date: evt.date
                                }));
                                handleOpenPhoto(albumPhotos, idx);
                              }}
                              className="relative aspect-4/3 rounded-xl overflow-hidden group cursor-pointer bg-slate-100 border border-slate-200/80 hover:shadow-lg transition-all"
                            >
                              <img
                                src={img.src}
                                alt={img.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                <span className="text-[10px] text-white font-bold flex items-center gap-1">
                                  <ExternalLink className="w-3 h-3 text-[#E9931C]" />
                                  <span>Click to expand</span>
                                </span>
                              </div>

                              {/* +N More Overlay on 6th item if NOT expanded */}
                              {!isExpanded && idx === 5 && evt.images.length > 6 && (
                                <div 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleOpenAlbum(evt);
                                  }}
                                  className="absolute inset-0 bg-[#10457B]/85 backdrop-blur-xs flex flex-col items-center justify-center text-white text-center p-2 cursor-pointer hover:bg-[#10457B]/95 transition-colors"
                                >
                                  <span className="text-lg font-black text-[#E9931C]">
                                    +{evt.images.length - 6}
                                  </span>
                                  <span className="text-[10px] font-bold">More Photos</span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          )}

          {/* VIEW MODE: ALL PHOTOS MASONRY GRID */}
          {viewMode === 'all' && (
            <div className="space-y-4">
              {filteredPhotos.length === 0 ? (
                <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
                  <ImageIcon className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                  <p className="text-slate-600 font-bold text-base">No photographs found matching your criteria.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                  {filteredPhotos.map((photo, idx) => (
                    <div
                      key={photo.id}
                      onClick={() => handleOpenPhoto(filteredPhotos, idx)}
                      className="group relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs hover:shadow-xl cursor-pointer transition-all"
                    >
                      <img
                        src={photo.src}
                        alt={photo.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
                        <span className="text-[9px] font-extrabold uppercase text-[#E9931C] tracking-wide truncate">
                          {photo.category}
                        </span>
                        <h4 className="text-xs font-bold text-white line-clamp-1">
                          {photo.eventTitle}
                        </h4>
                        <p className="text-[10px] text-slate-300 flex items-center gap-1 mt-0.5">
                          <Calendar className="w-2.5 h-2.5 text-[#E9931C]" />
                          <span>{photo.date}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </section>

        {/* Co-Curricular & Activity Pillars */}
        <section className="pt-8 border-t-2 border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-wider text-[#E9931C] bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block mb-2">
              Holistic Growth
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#10457B]">
              Co-Curricular & Student Development Activities
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              At Sunflower Public School, education extends far beyond textbooks with regular sports training, performing arts, cultural festivals, and competitive Olympiads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((act, idx) => {
              const Icon = act.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex gap-6 items-start hover:shadow-md transition-all"
                >
                  <div className="w-14 h-14 bg-amber-50 text-[#E9931C] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-inner">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#10457B]">{act.title}</h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{act.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        photos={activePhotos}
        currentIndex={currentPhotoIndex}
        setCurrentIndex={setCurrentPhotoIndex}
      />
    </div>
  );
}
