import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import { BookOpen, CheckCircle2, Sparkles, Award, Compass } from 'lucide-react';

export default function CurriculumPage() {
  const curriculumPoints = [
    { letter: 'A', text: 'Child-centric curriculum focusing on academics, practical learning, skill development and extracurricular activities.' },
    { letter: 'B', text: 'Emphasis on conceptual understanding over rote learning to develop strong problem-solving skills.' },
    { letter: 'C', text: 'Scientifically designed syllabus aligned with values, quality and ethics.' },
    { letter: 'D', text: 'Balanced exposure to languages, science, mathematics and social studies.' },
    { letter: 'E', text: 'Equal emphasis on English, Hindi and Sanskrit (R1, R2, R3) for fluency in communication.' },
    { letter: 'F', text: 'Strong focus on STEM education to nurture logical, critical and analytical thinking.' },
    { letter: 'G', text: 'Skill-based learning with subjects like Kaushal Bodh, Kaushal Vikas, Artificial Intelligence and Computational Thinking.' },
    { letter: 'H', text: 'Follows NEP 2020, NCF 2023 and CCE system of regular assessments and projects.' },
    { letter: 'I', text: 'Reduces exam pressure and encourages consistent performance throughout the year.' },
    { letter: 'J', text: 'Examination pattern and marking scheme remodelled as per CBSE guidelines.' },
    { letter: 'K', text: 'Activity-based learning, project work and application-oriented questions for joyful learning.' },
    { letter: 'L', text: 'Prepares students for higher studies, competitive exams and life beyond academics.' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumb items={[{ label: 'Infrastructure', href: '/infrastructure' }, { label: 'Our Curriculum' }]} />
      <PageHeader 
        title="OUR CURRICULUM" 
        subtitle="Child-Centric, Skill-Based & NEP 2020 Aligned Academic Framework"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-10">
        
        {/* Main Curriculum Overview Banner */}
        <div className="bg-gradient-to-r from-[#10457B] to-[#0B3560] rounded-2xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="bg-[#E9931C] text-[#0B3560] text-xs font-black uppercase px-4 py-1.5 rounded-full tracking-wider mb-4 inline-block shadow">
              ACADEMIC FRAMEWORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Comprehensive & Holistic Learning
            </h2>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
              Our curriculum integrates academic excellence, conceptual clarity, and modern skill sets to prepare learners for real-world challenges and lifelong success.
            </p>
          </div>
        </div>

        {/* Detailed Curriculum Points */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-[#E9931C]">
            <BookOpen className="w-6 h-6 text-[#E9931C]" />
            <h2 className="text-2xl font-bold text-[#10457B]">CURRICULUM HIGHLIGHTS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {curriculumPoints.map((item) => (
              <div 
                key={item.letter}
                className="bg-slate-50 hover:bg-amber-50/40 p-5 rounded-xl border border-slate-200/80 transition-all flex items-start gap-4"
              >
                <div className="w-9 h-9 rounded-lg bg-[#10457B] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-sm">
                  {item.letter}
                </div>
                <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed pt-1">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
