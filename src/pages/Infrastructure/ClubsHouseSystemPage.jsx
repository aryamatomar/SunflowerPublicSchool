import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import { 
  Palette, 
  BookOpen, 
  PenTool, 
  Globe, 
  Languages, 
  Leaf, 
  FlaskConical, 
  Calculator, 
  Cpu, 
  Network, 
  MonitorPlay, 
  Landmark, 
  Shield, 
  Users, 
  Sparkles 
} from 'lucide-react';

export default function ClubsHouseSystemPage() {
  const clubs = [
    { name: "Arts Club", icon: Palette, color: "text-rose-600 bg-rose-50 border-rose-200" },
    { name: "Reading Club", icon: BookOpen, color: "text-amber-600 bg-amber-50 border-amber-200" },
    { name: "English Literary Club", icon: PenTool, color: "text-blue-600 bg-blue-50 border-blue-200" },
    { name: "Social Science Club", icon: Globe, color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { name: "Hindi Literary Club", icon: Languages, color: "text-orange-600 bg-orange-50 border-orange-200" },
    { name: "ECO Club", icon: Leaf, color: "text-green-600 bg-green-50 border-green-200" },
    { name: "Science Club", icon: FlaskConical, color: "text-cyan-600 bg-cyan-50 border-cyan-200" },
    { name: "Maths Literary Club", icon: Calculator, color: "text-indigo-600 bg-indigo-50 border-indigo-200" },
    { name: "Information Technology Club", icon: Cpu, color: "text-purple-600 bg-purple-50 border-purple-200" },
    { name: "Integration Club", icon: Network, color: "text-teal-600 bg-teal-50 border-teal-200" },
    { name: "Digital Classroom", icon: MonitorPlay, color: "text-sky-600 bg-sky-50 border-sky-200" },
    { name: "Heritage & Tourism Club", icon: Landmark, color: "text-yellow-600 bg-yellow-50 border-yellow-200" },
  ];

  const houses = [
    { name: "Nehru House", color: "bg-red-500", text: "text-red-700", border: "border-red-200", bg: "bg-red-50/50" },
    { name: "Shastri House", color: "bg-amber-500", text: "text-amber-700", border: "border-amber-200", bg: "bg-amber-50/50" },
    { name: "Tagore House", color: "bg-emerald-500", text: "text-emerald-700", border: "border-emerald-200", bg: "bg-emerald-50/50" },
    { name: "Gandhi House", color: "bg-blue-500", text: "text-blue-700", border: "border-blue-200", bg: "bg-blue-50/50" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumb items={[{ label: 'Infrastructure', href: '/infrastructure' }, { label: 'Clubs and House System' }]} />
      <PageHeader 
        title="CLUBS AND HOUSE SYSTEM" 
        subtitle="Fostering Creativity, Leadership, Inter-House Spirit & Multimedia Learning"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-10">
        
        {/* House System */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b-2 border-[#E9931C]">
            <Shield className="w-7 h-7 text-[#E9931C]" />
            <div>
              <h2 className="text-2xl font-bold text-[#10457B]">HOUSE SYSTEM</h2>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">HOUSE SYSTEM: (SAME IN WEBSITE)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {houses.map((h, idx) => (
              <div key={idx} className={`${h.bg} ${h.border} p-6 rounded-xl border flex items-center gap-4`}>
                <span className={`w-4 h-12 rounded-full ${h.color}`} />
                <div>
                  <h3 className={`text-xl font-bold ${h.text}`}>{h.name}</h3>
                  <span className="text-slate-600 text-xs font-medium">Inter-House Competitions & Discipline</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clubs System */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b-2 border-[#E9931C]">
            <Sparkles className="w-7 h-7 text-[#E9931C]" />
            <h2 className="text-2xl font-bold text-[#10457B]">STUDENT CLUBS</h2>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Clubs are formed keeping in mind the divergent interests of the student community. Students are given an option to be a member of the club of their own choice. Participation in club activities helps the student to foster their creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clubs.map((club, idx) => {
              const IconComp = club.icon;
              return (
                <div 
                  key={idx} 
                  className={`p-4 rounded-xl border flex items-center gap-3 transition-all hover:shadow-sm ${club.color}`}
                >
                  <div className="p-2 rounded-lg bg-white shadow-xs">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-slate-800 text-sm">{club.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Digitalized Classrooms */}
        <div className="bg-gradient-to-r from-[#10457B] to-[#0B3560] rounded-2xl p-8 sm:p-10 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[#E9931C] text-[#0B3560] flex items-center justify-center flex-shrink-0 shadow-lg font-bold">
              <MonitorPlay className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Digitalized Classrooms</h3>
              <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
                School is equipped with digitalized classrooms to facilitate learning through multimedia for all the subjects and learning becomes a pleasurable experience.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
