import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import { Trophy, Activity, Users, Flame, Heart, Shield, CheckCircle2 } from 'lucide-react';

export default function SportsYogaPage() {
  const sportsBenefits = [
    { title: "Disciplined Life", desc: "Instilling punctuality, rules compliance, and emotional control through structured physical training." },
    { title: "Personality Development", desc: "Nurturing resilience, self-esteem, character, and risk-taking abilities." },
    { title: "Rigorous Coaching & Practice", desc: "Professional physical education guidance from fully qualified instructors." },
    { title: "Team Spirit & Leadership", desc: "Fostering collective collaboration, communication, and sportsmanship on and off the field." },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumb items={[{ label: 'Infrastructure', href: '/infrastructure' }, { label: 'Games, Sports and Yoga' }]} />
      <PageHeader 
        title="GAMES SPORTS AND YOGA" 
        subtitle="Physical Education, Sportsmanship, Wellness & Student Cabinet Leadership"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-10">
        
        {/* Core Maxim Banner */}
        <div className="bg-gradient-to-r from-[#10457B] via-[#0B3560] to-[#0A2E52] rounded-2xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <span className="bg-[#E9931C] text-[#0B3560] text-xs font-black uppercase px-4 py-1.5 rounded-full tracking-wider mb-4 inline-block shadow">
              PHYSICAL EDUCATION PHILOSOPHY
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-4">
              ‘A Healthy Mind In A Healthy Body’
            </h2>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-4xl">
              ‘A Healthy Mind In A Healthy Body’ is an internationally accepted maxim. To achieve this objective, we impart training in physical education under the guidance of fully qualified teachers.
            </p>
          </div>
        </div>

        {/* SFPS Believes Section */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b-2 border-[#E9931C]">
            <Activity className="w-7 h-7 text-[#E9931C]" />
            <h2 className="text-2xl font-bold text-[#10457B]">SFPS BELIEVES</h2>
          </div>

          <div className="bg-amber-50/50 p-6 sm:p-8 rounded-2xl border border-amber-200/80 space-y-4">
            <p className="text-slate-800 text-base sm:text-lg leading-relaxed">
              "Sports and games help us to lead a disciplined life. It helps in personality development and moreover, with flats and appartments increasing in number, the children are deprived of a playground, increase confidence and risk taking abilities , regular exercise, good coaching and rigorous practice, we gain confidence in our own abilities. Team sports and games foster Team Spirit. The playground is the perfect place to home one’s team spirit. Nothing can parallel sports when it comes to teaching leadership."
            </p>
            <p className="text-[#10457B] font-bold text-base sm:text-lg italic">
              "If you want your kids to become leaders, make sure they get into sports early on."
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {sportsBenefits.map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-[#E9931C] flex items-center justify-center font-bold mb-3">
                  <Flame className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-[#10457B] text-base mb-1">{item.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Student Cabinet */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 pb-3 border-b-2 border-[#E9931C] mb-6">
            <Trophy className="w-7 h-7 text-[#E9931C]" />
            <h2 className="text-2xl font-bold text-[#10457B]">STUDENT CABINET & LEADERSHIP</h2>
          </div>

          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/80 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[#10457B] text-[#E9931C] flex items-center justify-center flex-shrink-0 shadow-md">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <p className="text-slate-800 text-base sm:text-lg leading-relaxed">
                SFPS has an active <strong className="text-[#10457B]">'Student Cabinet'</strong>! Cabinet Members are elected by students who do so by exercising their right to vote. The posts do not seek academic excellence alone but a well rounded personality. And sports play a very important role at this juncture.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
