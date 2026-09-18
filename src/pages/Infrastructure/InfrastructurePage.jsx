import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import { 
  Building2, 
  Monitor, 
  BookOpen, 
  ShieldCheck, 
  Droplet, 
  Bus, 
  Trophy, 
  Sparkles, 
  GraduationCap, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';

export default function InfrastructurePage() {
  const infraStats = [
    { label: "Total Campus Area", value: "6688 sq. mt." },
    { label: "Classroom Dimensions", value: "25x20 sq. mt." },
    { label: "Laboratories (inc. Computer)", value: "3 Labs" },
    { label: "Internet Facility", value: "Available (High Speed)" },
    { label: "Girls Toilets", value: "14 Toilets" },
    { label: "Boys Toilets", value: "14 Toilets" }
  ];

  const infraSections = [
    {
      title: "Our Curriculum",
      path: "/infrastructure/curriculum",
      icon: GraduationCap,
      desc: "Child-centric curriculum focusing on academics, practical learning, skill development, NEP 2020 & CBSE framework."
    },
    {
      title: "Beyond Academics",
      path: "/infrastructure/beyond-academics",
      icon: Sparkles,
      desc: "Individual attention, technology-enabled learning, cultural values, CCTV security & faculty development."
    },
    {
      title: "Transportation",
      path: "/infrastructure/transportation",
      icon: Bus,
      desc: "Supervised transit through vans with Lady Caretaker and mobile phone connectivity for utmost safety."
    },
    {
      title: "Games, Sports & Yoga",
      path: "/infrastructure/sports-yoga",
      icon: Trophy,
      desc: "‘A Healthy Mind In A Healthy Body’, qualified physical education teachers, team spirit & Student Cabinet."
    },
    {
      title: "Clubs & House System",
      path: "/infrastructure/clubs-house-system",
      icon: BookOpen,
      desc: "Inter-house competitions (Nehru, Shastri, Tagore, Gandhi), 12 specialized student clubs & digitalized classrooms."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumb items={[{ label: 'Infrastructure' }]} />
      <PageHeader 
        title="Campus & Infrastructure" 
        subtitle="Modern facilities, curriculum framework, transportation, sports, laboratories & safety systems"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        
        {/* Premises Overview */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-[#10457B] mb-4 pb-2 border-b-2 border-[#E9931C] inline-block">
            CAMPUS & PREMISES
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            Our school is located near 100 ft road, Dayalbagh, Agra comprising with well equiped buiiding, labs and all modern aminities. The school is having playground, spacious class rooms and audio visual hall, library, sports room etc.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {infraStats.map((stat, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                <span className="block text-[#10457B] font-bold text-lg mb-1">{stat.value}</span>
                <span className="block text-slate-600 text-xs font-semibold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Infrastructure & Academic Pillars Quick Links */}
        <div>
          <h2 className="text-2xl font-bold text-[#10457B] mb-6 pb-2 border-b-2 border-[#E9931C] inline-block">
            INFRASTRUCTURE & ACADEMIC SECTIONS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infraSections.map((sec, idx) => {
              const IconComp = sec.icon;
              return (
                <Link
                  key={idx}
                  to={sec.path}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-[#E9931C]/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-[#E9931C] mb-4 group-hover:bg-[#10457B] group-hover:text-white transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#10457B] group-hover:text-[#E9931C] transition-colors mb-2">
                      {sec.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {sec.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#10457B] group-hover:text-[#E9931C] pt-2 border-t border-slate-100">
                    <span>Explore Section</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Detailed Facilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-[#E9931C] mb-4">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#10457B] mb-3">Our Library</h3>
            <p className="text-slate-700 text-base leading-relaxed">
              School library is well stocked with fiction, non-fiction, encyclopedia and covers a wide range of subject across all classes. It provides a peaceful reading environment for students to foster lifelong reading habits.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#10457B] mb-4">
              <Monitor className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#10457B] mb-3">Computer Lab & Smart Classes</h3>
            <p className="text-slate-700 text-base leading-relaxed">
              Ultra modern teaching aids include computer, smart classes and different setups of instruments in different subjects to impart better learning. Student also enjoy the process of learning and self assessing after going through online question in almost every subject.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
              <Droplet className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#10457B] mb-3">Hygiene & Cleanliness</h3>
            <p className="text-slate-700 text-base leading-relaxed">
              Good standard of hygiene are maintained. Toilets have proper arrangements of all basic necessities with a proper attendent to maintain cleanliness during school hours. Filter water is supplied for drinking purpose through water filter.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#10457B] mb-3">Safety & CCTV Security</h3>
            <p className="text-slate-700 text-base leading-relaxed">
              Sufficient number of cameras are there to keep a check on day to day activity of every child. Security guard are there to ensure safe handling of children to the authorised person only.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
