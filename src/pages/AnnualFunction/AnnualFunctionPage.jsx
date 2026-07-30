import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import GalleryCard from '../../components/GalleryCard';
import { Sparkles, Calendar, MapPin, Award } from 'lucide-react';

export default function AnnualFunctionPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumb items={[{ label: 'Annual Function 2025' }]} />
      <PageHeader 
        title="Annual Function 2025" 
        subtitle="Celebrating Student Achievements, Cultural Performances & Academic Excellence"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-10">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-[#E9931C] to-amber-600 rounded-2xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="bg-white text-[#10457B] text-xs font-black uppercase px-4 py-1.5 rounded-full tracking-wider mb-4 inline-block shadow">
              SPECIAL EVENT
            </span>
            <h2 className="text-3xl sm:text-5xl font-black mb-4">
              Annual Function Celebration 2025
            </h2>
            <p className="text-amber-50 text-lg sm:text-xl font-medium leading-relaxed">
              "Celebrating talent, creativity, and the vibrant spirit of our students through music, dance, drama, and academic prize distribution."
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-[#10457B] mb-6 pb-2 border-b-2 border-[#E9931C] inline-block">
            EVENT HIGHLIGHTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <Sparkles className="w-8 h-8 text-[#E9931C] mb-3" />
              <h3 className="font-bold text-[#10457B] text-lg mb-2">Cultural Performances</h3>
              <p className="text-slate-600 text-sm">Folk dances, classical music recitals, theatrical plays, and choir performances by Nursery to 10th students.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <Award className="w-8 h-8 text-[#10457B] mb-3" />
              <h3 className="font-bold text-[#10457B] text-lg mb-2">Prize Distribution</h3>
              <p className="text-slate-600 text-sm">Honouring academic toppers, Olympiad medalists, and sports achievers across all categories.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <Calendar className="w-8 h-8 text-[#E9931C] mb-3" />
              <h3 className="font-bold text-[#10457B] text-lg mb-2">Exhibitions</h3>
              <p className="text-slate-600 text-sm">Art, craft, and science exhibits showcasing student creativity and innovation.</p>
            </div>
          </div>
        </div>

        {/* Annual Function Gallery */}
        <div>
          <h2 className="text-2xl font-bold text-[#10457B] mb-6 pb-2 border-b-2 border-[#E9931C] inline-block">
            ANNUAL FUNCTION GALLERY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GalleryCard title="Classical Dance Performance" />
            <GalleryCard title="Drama & Theatre Presentation" />
            <GalleryCard title="Academic Excellence Awards" />
            <GalleryCard title="School Choir & Musical Orchestra" />
            <GalleryCard title="Art & Craft Display" />
            <GalleryCard title="Director & Principal Address" />
          </div>
        </div>

      </div>
    </div>
  );
}
