import React, { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import { Calendar, Users, Filter, BookOpen, Sparkles } from 'lucide-react';

export default function WorkshopsOrientation() {
  const [selectedMonth, setSelectedMonth] = useState('ALL');

  const workshopsData = [
    {
      month: "JULY: 2026",
      key: "JULY",
      items: [
        { title: "Menstrual Hygiene Awareness", target: "(VI- X – GIRLS)" },
        { title: "Workshop on Decision-Making", target: "(GR 6 TO 8)" },
        { title: "Assessment Strategy under the new Curriculum Framework 2023 –", target: "(TEACHERS & PARENTS)" }
      ]
    },
    {
      month: "AUGUST : 2026",
      key: "AUGUST",
      items: [
        { title: "Two day intensive workshop on Health & Wellness of School Going Children", target: "" },
        { title: "Respect for Women among Students", target: "(Classes V to VIII)" },
        { title: "People Respecting Individuality and Sexuality in Mankind (PRISM)", target: "GR 9 & 10" }
      ]
    },
    {
      month: "SEPTEMBER: 2026",
      key: "SEPTEMBER",
      items: [
        { title: "Health and Hygiene", target: "(GR 5 TO GR 7- )" },
        { title: "Safe Steps, Smart Rides –", target: "(BOYS GR 8 TO GR 10)" },
        { title: "One-day Capacity Building Workshop on ‘Happy Classrooms’", target: "(TEACHERS)" }
      ]
    },
    {
      month: "OCTOBER: 2026",
      key: "OCTOBER",
      items: [
        { title: "Road Safety Session by Agra Traffic Police", target: "(GR 6 TO GR 10 – OCTOBER)" },
        { title: "BMW ‘Be Safe, Be Smart’ Road Safety", target: "(LKG TO GR 3- OCTOBER TRIP)" },
        { title: "Workshop on Dental Hygiene for students", target: "(GR 2 TO GR 5)" }
      ]
    },
    {
      month: "NOVEMBER: 2026",
      key: "NOVEMBER",
      items: [
        { title: "Workshop on Managing Exam Stress", target: "(NOVEMBER 2026- GR 9 & 10)" },
        { title: "Workshop on Career Exploration", target: "(GR 10)" }
      ]
    },
    {
      month: "DECEMBER: 2026",
      key: "DECEMBER",
      items: [
        { title: "Impact of Climate Change on Biodiversity and Ecosystem Services", target: "(GR 8 TO GR 10)" },
        { title: "Time Management Workshop", target: "(GR 10 DECEMBER.)" }
      ]
    }
  ];

  const filteredWorkshops = selectedMonth === 'ALL'
    ? workshopsData
    : workshopsData.filter(w => w.key === selectedMonth);

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumb items={[{ label: 'Activities' }, { label: 'Workshops & Orientation' }]} />
      <PageHeader 
        title="WORKSHOPS & ORIENTATION" 
        subtitle="Capacity Building Workshops, Awareness Sessions & Student Orientation Programs 2026"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-10">

        {/* Month Filter Selector */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 text-[#10457B] font-bold text-sm mr-2">
            <Filter className="w-4 h-4 text-[#E9931C]" />
            <span>Filter by Month:</span>
          </div>
          <button
            onClick={() => setSelectedMonth('ALL')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedMonth === 'ALL'
                ? 'bg-[#10457B] text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Months
          </button>
          {workshopsData.map((m) => (
            <button
              key={m.key}
              onClick={() => setSelectedMonth(m.key)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedMonth === m.key
                  ? 'bg-[#E9931C] text-[#10457B] shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {m.key}
            </button>
          ))}
        </div>

        {/* Timeline / Cards of Workshops */}
        <div className="space-y-8">
          {filteredWorkshops.map((monthGroup, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b-2 border-[#E9931C]">
                <Calendar className="w-6 h-6 text-[#E9931C]" />
                <h2 className="text-xl sm:text-2xl font-black text-[#10457B]">
                  {monthGroup.month}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {monthGroup.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="bg-slate-50 p-5 rounded-xl border border-slate-200 hover:border-amber-300 transition-colors flex flex-col justify-between space-y-3">
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-[#E9931C] shrink-0 mt-0.5" />
                      <h3 className="font-bold text-[#10457B] text-base leading-snug">
                        {item.title}
                      </h3>
                    </div>
                    {item.target && (
                      <div className="inline-flex items-center gap-1.5 bg-blue-50 text-[#10457B] px-3 py-1 rounded-full text-xs font-bold w-fit border border-blue-200/60">
                        <Users className="w-3.5 h-3.5 text-[#E9931C]" />
                        <span>{item.target}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
