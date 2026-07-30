import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import DocumentCard from '../../components/DocumentCard';
import { BookOpen, GraduationCap, Award, Calendar } from 'lucide-react';

export default function AcademicsPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumb items={[{ label: 'Academics' }]} />
      <PageHeader 
        title="Academics & Curriculum" 
        subtitle="CBSE English Medium Education — Classes Nursery to 10th"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-10">
        
        {/* Overview Card */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-[#10457B] mb-4 pb-2 border-b-2 border-[#E9931C] inline-block">
            ACADEMIC EXCELLENCE & CURRICULUM
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            Sun Flower Public School, Agra is an English medium co-educational institute affilliated to the Central Board of Secondary Education (New Delhi). The school aims to deliver holistic education to the children from class Nursery to 10th. Bilingual mode of teaching process is carried out in school. It imparts the best education with an aim to enhance students to become the leaders of tomorrow and noble citizen of the nation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-[#10457B] text-lg mb-2">Bilingual Teaching Mode</h3>
              <p className="text-slate-600 text-sm">Clear conceptual understanding with bilingual instruction in English and Hindi for maximum retention.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-[#10457B] text-lg mb-2">Smart Learning & Technology</h3>
              <p className="text-slate-600 text-sm">Ultra modern teaching aids including smart classes and online question assessment setups.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-[#10457B] text-lg mb-2">Remedial Classes</h3>
              <p className="text-slate-600 text-sm">Extra remedial classes arranged for weaker students with prior discussion with parents.</p>
            </div>
          </div>
        </div>

        {/* Board Examination Results Card */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-7 h-7 text-[#E9931C]" />
            <h2 className="text-2xl font-bold text-[#10457B]">BOARD EXAMINATION RESULTS (CLASS X)</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-[#10457B] text-white">
                  <th className="py-3 px-4 rounded-tl-lg">S. No.</th>
                  <th className="py-3 px-4">YEAR</th>
                  <th className="py-3 px-4">No. of Students Appeared</th>
                  <th className="py-3 px-4">No. of Students Passed</th>
                  <th className="py-3 px-4 rounded-tr-lg">Pass Percentage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-[#10457B]">1.</td>
                  <td className="py-3 px-4 font-semibold">2020-21</td>
                  <td className="py-3 px-4">52</td>
                  <td className="py-3 px-4">52</td>
                  <td className="py-3 px-4 font-bold text-emerald-600">100%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-[#10457B]">2.</td>
                  <td className="py-3 px-4 font-semibold">2021-22</td>
                  <td className="py-3 px-4">61</td>
                  <td className="py-3 px-4">59</td>
                  <td className="py-3 px-4 font-bold text-emerald-600">96.7%</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-[#10457B]">3.</td>
                  <td className="py-3 px-4 font-semibold">2022-23</td>
                  <td className="py-3 px-4">69</td>
                  <td className="py-3 px-4">69</td>
                  <td className="py-3 px-4 font-bold text-emerald-600">100%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-[#10457B]">4.</td>
                  <td className="py-3 px-4 font-semibold">2023-24</td>
                  <td className="py-3 px-4">70</td>
                  <td className="py-3 px-4">65</td>
                  <td className="py-3 px-4 font-bold text-emerald-600">96%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Downloads & Academic Documents */}
        <div>
          <h2 className="text-2xl font-bold text-[#10457B] mb-6 pb-2 border-b-2 border-[#E9931C] inline-block">
            ACADEMIC CALENDAR & GUIDELINES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DocumentCard 
              title="Annual Academic Calendar 2026-27" 
              docUrl="https://sunfloweragra.com/docs/ANNUAL%20ACTIVITY%20CALENDAR%20202627.pdf" 
            />
            <DocumentCard 
              title="Academic Calendar & Yearly Planner" 
              docUrl="https://sunfloweragra.com/docs/yearly%20planner.docx" 
            />
            <DocumentCard 
              title="School Rules & Guidelines For Students" 
              docUrl="https://sunfloweragra.com/docs/rules-and-regulations.pdf" 
            />
          </div>
        </div>

      </div>
    </div>
  );
}
