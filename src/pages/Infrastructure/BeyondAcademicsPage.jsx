import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import { UserCheck, Laptop, Heart, ShieldCheck, GraduationCap, Users, Target, MessageSquare, BarChart3 } from 'lucide-react';

export default function BeyondAcademicsPage() {
  const corePillars = [
    {
      id: 1,
      title: "Individual Attention",
      icon: UserCheck,
      color: "from-blue-600 to-indigo-700",
      description: "Personalized focus to cater to the unique learning pace, strengths, and holistic development of every child."
    },
    {
      id: 2,
      title: "Technology-Enabled Learning",
      icon: Laptop,
      color: "from-amber-500 to-orange-600",
      description: "Digital tools, smart classroom interfaces, and multimedia-rich pedagogies that make learning interactive and experiential."
    },
    {
      id: 3,
      title: "Cultural Values",
      icon: Heart,
      color: "from-rose-500 to-pink-600",
      description: "Imparting strong moral principles, ethical grounding, empathy, and respect for our rich cultural traditions."
    },
    {
      id: 4,
      title: "Safety & Security",
      icon: ShieldCheck,
      color: "from-emerald-500 to-teal-600",
      description: "Secured with CCTV surveillance across the campus to ensure a protected and nurturing environment."
    },
    {
      id: 5,
      title: "Faculty Development",
      icon: GraduationCap,
      color: "from-purple-600 to-violet-700",
      description: "Regular training and professional development workshops for excellence in teaching."
    }
  ];

  const focusAreas = [
    { title: "Behaviour management", icon: Users, desc: "Promoting positive behavior, emotional wellness, and mutual respect among peers." },
    { title: "College/career awareness programs", icon: Target, desc: "Guiding students towards promising future career avenues, competitive exams, and higher education pathways." },
    { title: "One-on-one parent conferencing", icon: MessageSquare, desc: "Collaborative engagement between educators and parents to monitor student development closely." },
    { title: "Interpretation of assessment results", icon: BarChart3, desc: "Detailed analysis of student evaluations to identify strengths and design tailored support strategies." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumb items={[{ label: 'Infrastructure', href: '/infrastructure' }, { label: 'Beyond Academics' }]} />
      <PageHeader 
        title="BEYOND ACADEMICS" 
        subtitle="Holistic Development, Values, Technology, Faculty Excellence & Student Support"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-10">
        
        {/* Core Pillars */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-[#10457B] mb-6 pb-2 border-b-2 border-[#E9931C] inline-block">
            PILLARS OF EXCELLENCE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corePillars.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div key={pillar.id} className="bg-slate-50 rounded-xl p-6 border border-slate-200/80 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#10457B] text-[#E9931C] flex items-center justify-center font-bold text-base flex-shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-[#10457B] text-lg">
                      {pillar.id}. {pillar.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Focus Areas */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-[#10457B] mb-6 pb-2 border-b-2 border-[#E9931C] inline-block">
            STUDENT & FACULTY SUPPORT INITIATIVES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, idx) => {
              const IconComp = area.icon;
              return (
                <div key={idx} className="bg-amber-50/40 rounded-xl p-6 border border-amber-200/80 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-amber-100 text-[#10457B] flex items-center justify-center mb-4">
                      <IconComp className="w-5 h-5 text-[#E9931C]" />
                    </div>
                    <h3 className="font-bold text-[#10457B] text-base mb-2">
                      {area.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
