import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import GalleryCard from '../../components/GalleryCard';
import { Trophy, Music, Sparkles, Heart } from 'lucide-react';

export default function ActivitiesPage() {
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

  const galleryEvents = [
    "Annual Function Celebration 2025",
    "Sports Meet & Athletics Competition",
    "Independence Day & Cultural Program",
    "Art & Science Exhibition",
    "Yoga & Physical Fitness Workshop",
    "Tree Plantation & Environment Drive"
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumb items={[{ label: 'Activities & Gallery' }]} />
      <PageHeader 
        title="Activities & Photo Gallery" 
        subtitle="Co-curricular activities, sports, cultural events & celebrations"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        {/* Activity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((act, idx) => {
            const Icon = act.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex gap-6 items-start">
                <div className="w-14 h-14 bg-amber-50 text-[#E9931C] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#10457B] mb-2">{act.title}</h3>
                  <p className="text-slate-600 text-base leading-relaxed">{act.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#10457B] mb-6 pb-2 border-b-2 border-[#E9931C] inline-block">
            SCHOOL EVENT GALLERY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryEvents.map((evt, idx) => (
              <GalleryCard key={idx} title={evt} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
