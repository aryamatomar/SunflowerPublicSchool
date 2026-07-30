import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import { BookOpen, Heart, Award } from 'lucide-react';

export default function Motto() {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumb items={[{ label: 'About Sunflower' }, { label: 'Motto & School Prayer' }]} />
      <PageHeader 
        title='Our Motto & School Prayer' 
        subtitle='"Come to Learn, Go to Serve" — Empowering the Next Generation'
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        {/* Main Motto Banner */}
        <div className="bg-gradient-to-r from-[#10457B] to-[#1a5b9c] rounded-2xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden text-center">
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="bg-[#E9931C] text-white text-xs font-extrabold uppercase px-4 py-1.5 rounded-full tracking-wider mb-4 inline-block">
              SCHOOL MOTTO
            </span>
            <h2 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight">
              "Come to Learn, Go to Serve"
            </h2>
            <p className="text-blue-100 text-lg sm:text-xl font-medium">
              Empowering the Next Generation
            </p>
          </div>
        </div>

        {/* Detailed Explanation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-[#10457B] mb-3 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-[#E9931C]" />
              The Foundation of Knowledge
            </h3>
            <p className="text-slate-700 leading-relaxed text-base">
              The first part of our motto, "Come to Learn," acknowledges the importance of acquiring knowledge, developing skills, and nurturing minds. Our school provides a supportive and inclusive environment where students can explore their passions, ask questions, and seek answers. We foster a culture of curiosity, creativity, and critical thinking, empowering our students to become lifelong learners.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-[#10457B] mb-3 flex items-center gap-3">
              <Heart className="w-6 h-6 text-[#E9931C]" />
              The Call to Service
            </h3>
            <p className="text-slate-700 leading-relaxed text-base">
              The second part of our motto, "Go to Serve," recognizes that knowledge and skills are not ends in themselves, but rather means to make a positive impact in the world. We encourage our students to apply what they have learned to serve others, whether in their local communities or on a global scale. By instilling a sense of social responsibility and compassion, we inspire our students to become active contributors to society.
            </p>
          </div>
        </div>

        {/* Empowering Generation */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
          <h3 className="text-2xl font-bold text-[#10457B] mb-4">Empowering the Next Generation</h3>
          <p className="text-slate-700 leading-relaxed text-base mb-6">
            At our school, we believe that education should not only enrich the minds of our students but also touch their hearts. By embracing our motto, "Come to Learn, Go to Serve," we empower our students to become:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-[#10457B] text-lg mb-2">Critical Thinkers</h4>
              <p className="text-slate-600 text-sm">Who can analyze complex problems and develop innovative solutions.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-[#10457B] text-lg mb-2">Compassionate Leaders</h4>
              <p className="text-slate-600 text-sm">Who can inspire and motivate others to work towards a common goal.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-[#10457B] text-lg mb-2">Active Citizens</h4>
              <p className="text-slate-600 text-sm">Who can contribute positively to their communities and make a meaningful difference in the world.</p>
            </div>
          </div>
        </div>

        {/* School Prayer Section */}
        <div className="bg-amber-50/60 rounded-2xl p-8 sm:p-10 border border-amber-200 text-center">
          <h2 className="text-2xl font-bold text-[#10457B] mb-6">SCHOOL PRAYER</h2>
          <div className="max-w-2xl mx-auto space-y-4 text-slate-800 font-serif text-lg leading-relaxed italic">
            <p>
              Our Gracious and merciful God<br />
              We prostrate at thy lotus feet<br />
              With heart full of devotion<br />
              We pray to forgive us for the<br />
              times we have offended you.
            </p>
            <p>
              O'Lord! You are the creator of life<br />
              Please bless our parent,teachers<br />
              and our friends with mercy and love.<br />
              We crave for the boon to become<br />
              a good citizen of this country.
            </p>
            <p>
              Please show the grace and shower<br />
              thy mercy upon all our children
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
