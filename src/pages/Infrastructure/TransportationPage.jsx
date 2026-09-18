import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import { Bus, ShieldCheck, PhoneCall, UserCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function TransportationPage() {
  const transportFeatures = [
    {
      title: "VANS with Lady Caretaker",
      desc: "Every van is accompanied by a dedicated lady caretaker to ensure personal care and safety of all children throughout their journey.",
      icon: UserCheck
    },
    {
      title: "Mobile Phones for Care & Connectivity",
      desc: "Vans are equipped with mobile phones for immediate communication and emergency assistance between school authorities, parents, and transport staff.",
      icon: PhoneCall
    },
    {
      title: "Experienced & Responsible Drivers",
      desc: "Carefully vetted, highly experienced drivers committed to safe, punctual, and disciplined driving on all designated routes.",
      icon: ShieldCheck
    },
    {
      title: "Comfort & Safety for Teachers & Students",
      desc: "Ensuring well-maintained, comfortable vehicles catering to seamless transit for both teachers and students.",
      icon: HeartHandshake
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumb items={[{ label: 'Infrastructure', href: '/infrastructure' }, { label: 'Transportation' }]} />
      <PageHeader 
        title="TRANSPORTATION" 
        subtitle="Safe, Reliable & Supervised Commute with Caretaker Assistance"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-10">
        
        {/* Official Transportation Statement Banner */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b-2 border-[#E9931C]">
            <Bus className="w-7 h-7 text-[#E9931C]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#10457B]">TRANSPORTATION POLICY & FACILITIES</h2>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50/50 p-6 sm:p-8 rounded-2xl border border-amber-200">
            <p className="text-slate-800 text-base sm:text-xl font-medium leading-relaxed italic">
              "Transport is available through <strong className="text-[#10457B]">VANS with Lady Caretaker</strong> and with <strong className="text-[#10457B]">Mobile Phones for care</strong>, to cater the comfort and safety for both teachers and students by <strong className="text-[#10457B]">experienced and responsible drivers</strong>."
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {transportFeatures.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-[#E9931C] flex-shrink-0">
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#10457B] mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
