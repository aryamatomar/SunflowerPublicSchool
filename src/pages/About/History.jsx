import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import { Calendar, Sprout, Award, Users, MapPin, Compass, Heart, Sparkles } from 'lucide-react';

export default function History() {
  const milestones = [
    {
      year: "1993",
      title: "The Humble Beginning",
      icon: Sprout,
      desc: "Established in 1993 at Dayalbagh, Agra, Sunflower Public School began with a handful of 25 young learners till Class 5 and a simple belief — Every child deserves the chance to bloom."
    },
    {
      year: "2008",
      title: "Growth & CBSE Affiliation",
      icon: Award,
      desc: "What started as a sapling in a modest classroom has today grown into a mighty tree. In 2008, we evolved into a vibrant, English-medium, co-educational institution from Nursery to Class X, affiliated to CBSE and managed by Sun Flower Institutional Society."
    },
    {
      year: "Leadership",
      title: "Visionary Guidance",
      icon: Users,
      desc: "Guided by the visionary leadership of Director Mrs. Sheela Dayal, Manager Mr. Animesh Dayal and Principal Dr. Shubhi Dayal, we blend academic excellence with Indian values, activity-based learning, and holistic development."
    },
    {
      year: "Present",
      title: "Our Campus & Living Philosophy",
      icon: Compass,
      desc: "Located at 164, Ellora Enclave, Dayalbagh, Agra (282005), we nurture leaders of tomorrow with our motto — “Come to Learn, Go to Serve” and our philosophy — “Education for life, not just for living.”"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumb items={[{ label: 'About Sunflower', href: '/about/journey' }, { label: 'History of Sunflower' }]} />
      <PageHeader 
        title="History of Sunflower" 
        subtitle="Tracing our journey of excellence, values, and holistic education since 1993"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-10">
        
        {/* Main Legacy Story Banner */}
        <div className="bg-gradient-to-r from-[#10457B] via-[#0B3560] to-[#0A2E52] rounded-2xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-4xl space-y-4">
            <span className="bg-[#E9931C] text-[#0B3560] text-xs font-black uppercase px-4 py-1.5 rounded-full tracking-wider inline-block shadow">
              ESTABLISHED IN 1993
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              History of Sunflower
            </h2>
            <p className="text-amber-300 text-lg sm:text-2xl font-bold italic">
              "Every child deserves the chance to bloom."
            </p>
          </div>
        </div>

        {/* Narrative Section */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <h2 className="text-2xl font-bold text-[#10457B] pb-2 border-b-2 border-[#E9931C] inline-block">
            OUR STORY & LEGACY
          </h2>

          <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
            <p>
              Established in 1993 at Dayalbagh, Agra, Sunflower Public School began with a handful of 25 young learners till Class 5 and a simple belief — <strong className="text-[#10457B]">Every child deserves the chance to bloom.</strong>
            </p>

            <p>
              What started as a sapling in a modest classroom has today grown into a mighty tree. In 2008, we evolved into a vibrant, English-medium, co-educational institution from Nursery to Class X, affiliated to CBSE and managed by Sun Flower Institutional Society.
            </p>

            <p>
              Guided by the visionary leadership of Director <strong className="text-[#10457B]">Mrs. Sheela Dayal</strong>, Manager <strong className="text-[#10457B]">Mr. Animesh Dayal</strong> and Principal <strong className="text-[#10457B]">Dr. Shubhi Dayal</strong>, we blend academic excellence with Indian values, activity-based learning, and holistic development.
            </p>

            <div className="p-6 bg-amber-50/50 rounded-2xl border border-amber-200/80 space-y-3">
              <p className="font-medium text-slate-800">
                Located at <strong className="text-[#10457B]">164, Ellora Enclave, Dayalbagh, Agra (282005)</strong>, we nurture leaders of tomorrow with our motto — <strong className="text-[#E9931C]">“Come to Learn, Go to Serve”</strong> and our philosophy — <strong className="text-[#10457B]">“Education for life, not just for living.”</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {milestones.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#E9931C] flex items-center justify-center font-bold text-lg flex-shrink-0">
                  <IconComp className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#10457B] text-white">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-[#10457B]">{item.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
