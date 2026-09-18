import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import { BookOpen, Sparkles, Calendar, Layers, CheckCircle2, Cpu, Languages, Award, ShieldAlert } from 'lucide-react';

export default function CBSECurriculum() {
  const highlightsTable = [
    { parameter: "Released on", details: "1-2 APRIL 2026" },
    { parameter: "Classes Covered", details: "3 TO 12" },
    { parameter: "Framework", details: "NCF-2023 +NEP 2020" },
    { parameter: "Board Exam Impact", details: "FROM 2028 ONWARDS" },
    { parameter: "First AI Board Exam", details: "2029" },
    { parameter: "Full 3-Language Rollout", details: "2031" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumb items={[{ label: 'Information', href: '/information' }, { label: 'CBSE Curriculum' }]} />
      <PageHeader 
        title="CBSE NEW CURRICULUM 2026-27" 
        subtitle="Competency-Based Reforms, NEP 2020 & NCF-2023 Alignment, Computational Thinking & AI"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-10">
        
        {/* Main Reform Banner */}
        <div className="bg-gradient-to-r from-[#10457B] via-[#0B3560] to-[#0A2E52] rounded-2xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-4xl space-y-4">
            <span className="bg-[#E9931C] text-[#0B3560] text-xs font-black uppercase px-4 py-1.5 rounded-full tracking-wider inline-block shadow">
              NEP 2020 & NCF-2023 FRAMEWORK
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              CBSE New Curriculum 2026-27
            </h2>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
              The CBSE new curriculum 2026-27 introduces significant reforms aligned with NEP 2020, moving away from rote memorization toward competency-based learning and practical, real-world applications. The CBSE curriculum 2026-27 highlights the inclusion of Computational Thinking and AI from Class 3, giving students early exposure to emerging technologies.
            </p>
          </div>
        </div>

        {/* Narrative Overview Cards */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
          <h2 className="text-2xl font-bold text-[#10457B] pb-2 border-b-2 border-[#E9931C] inline-block">
            KEY CURRICULUM REFORMS
          </h2>

          <div className="space-y-4 text-slate-700 text-base leading-relaxed">
            <p>
              Under the CBSE new curriculum, a mandatory three-language formula has been implemented, requiring students to learn at least two Indian languages (<strong className="text-[#10457B]">R3 from Class 6</strong>). Additionally, vocational education becomes compulsory for <strong className="text-[#10457B]">Classes 9–10, preparing students for career-oriented learning from an early stage.</strong>
            </p>

            <p>
              Another key feature in the CBSE curriculum 2026-27 is the option for students to take advanced-level Maths and Science papers from Class 9 without affecting their overall aggregate. Senior classes also benefit from more flexibility, as rigid stream boundaries are being removed to allow students to choose subjects according to their interests and career goals.
            </p>

            <p>
              The CBSE new curriculum 2026-27 highlights major board exam reforms starting from 2028. Around 50% of questions will now be competency-based, and two exam sessions will be introduced. By 2029, AI will become a board-examined subject, and the full three-language policy will be fully implemented by 2031.
            </p>

            <p>
              These changes under the CBSE curriculum 2026-27 reflect a clear shift toward holistic, skill-based education, ensuring students are better prepared for higher education and future careers.
            </p>

            <div className="p-5 bg-amber-50/60 rounded-xl border border-amber-200/80">
              <p className="font-semibold text-slate-800 text-sm sm:text-base">
                From a compulsory third language in Class 6 to AI coding sessions for Class 3 students, CBSE's 2026-27 overhaul is the most significant curriculum shift in a decade. Here's every change, with real timelines and zero jargon.
              </p>
            </div>
          </div>
        </div>

        {/* Highlights Table */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b-2 border-[#10457B]">
            <Calendar className="w-6 h-6 text-[#10457B]" />
            <h2 className="text-xl sm:text-2xl font-bold text-[#10457B]">
              CBSE CURRICULUM 2026-27 HIGHLIGHTS
            </h2>
          </div>

          <p className="text-slate-600 text-sm font-medium">
            Let's start with a clear CBSE Curriculum 2026-27 highlights:
          </p>

          <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-xs">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-[#10457B] text-white">
                  <th className="py-3.5 px-4 font-bold border-b border-slate-200 w-1/2">Parameter</th>
                  <th className="py-3.5 px-4 font-bold border-b border-slate-200 w-1/2">DETAILS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                {highlightsTable.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 1 ? 'bg-slate-50/70' : 'bg-white'}>
                    <td className="py-3.5 px-4 font-bold text-[#10457B]">{row.parameter}</td>
                    <td className="py-3.5 px-4 font-semibold font-mono text-slate-900">{row.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-slate-700 text-sm font-semibold italic pt-2">
            Understand the latest CBSE 2026–27 reforms, key curriculum changes, and how they impact students, parents, teachers, and schools across India.
          </p>
        </div>

        {/* Class-wise Bands */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#10457B] pb-2 border-b-2 border-[#E9931C] inline-block">
            CLASS-WISE CURRICULUM CHANGES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Classes 3–5 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-blue-100 text-[#10457B] font-extrabold text-xs rounded-md">
                    PRIMARY STAGE
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#10457B] mb-1">Classes 3–5</h3>
                <h4 className="text-base font-bold text-[#E9931C] mb-4">Thinking Skills Enter the Classroom</h4>
                
                <ul className="space-y-3 text-slate-700 text-sm sm:text-base">
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#10457B] mt-2 flex-shrink-0" />
                    <span>Computational Thinking (CT) is now woven into Maths and other subjects — not a separate course</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#10457B] mt-2 flex-shrink-0" />
                    <span>Learning happens through puzzles, games, and pattern-recognition activities</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#10457B] mt-2 flex-shrink-0" />
                    <span>No board exam impact — assessed internally by school</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#10457B] mt-2 flex-shrink-0" />
                    <span>Maths and subject teachers will handle this — no specialist CT teacher needed yet</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Classes 6–8 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-amber-100 text-[#0B3560] font-extrabold text-xs rounded-md">
                    MIDDLE STAGE
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#10457B] mb-1">Classes 6–8</h3>
                <h4 className="text-base font-bold text-[#E9931C] mb-4">Third Language + Foundational AI Begins</h4>
                
                <ul className="space-y-3 text-slate-700 text-sm sm:text-base">
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#E9931C] mt-2 flex-shrink-0" />
                    <span>A third language (R3) is now compulsory from Class 6 — at least 2 of the 3 must be Indian languages</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#E9931C] mt-2 flex-shrink-0" />
                    <span>English can still be one of the three languages — it is NOT removed</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#E9931C] mt-2 flex-shrink-0" />
                    <span>Students in Class 6 this year will be the first batch to sit board exams under the full 3-language scheme in 2031</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#E9931C] mt-2 flex-shrink-0" />
                    <span>Foundational AI concepts introduced alongside CT — through projects and cross-subject work</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#E9931C] mt-2 flex-shrink-0" />
                    <span>No board exam impact for this band yet; all assessments are internal</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Class 9 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-extrabold text-xs rounded-md">
                    SECONDARY STAGE (FOUNDATION)
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#10457B] mb-1">Class 9</h3>
                <h4 className="text-base font-bold text-[#E9931C] mb-4">The Biggest Changes Are Here</h4>
                
                <ul className="space-y-3 text-slate-700 text-sm sm:text-base">
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                    <span>Entirely new Scheme of Studies under NCF-2023 — first batch to experience it</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                    <span>Optional Advanced Maths & Science paper (25 marks, 1 hour) — no risk to aggregate, noted separately</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                    <span>Art Education is now compulsory (textbooks + internal assessment)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                    <span>Physical Education & Wellbeing is now compulsory</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                    <span>Vocational Education is now compulsory — board exam for it begins 2027-28</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                    <span>New interdisciplinary subject: "Individuals in Society" — internally assessed</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                    <span>Revised R1 & R2 language textbooks rolled out this year</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                    <span>First board exam under this new scheme: Class 10 in 2028</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Class 10 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 font-extrabold text-xs rounded-md">
                    BOARD EXAMINATION STAGE
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#10457B] mb-1">Class 10</h3>
                <h4 className="text-base font-bold text-[#E9931C] mb-4">Advanced Track + AI Modules</h4>
                
                <ul className="space-y-3 text-slate-700 text-sm sm:text-base">
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                    <span>CT and AI are now compulsory modules (AI board exam from 2029)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                    <span>Advanced Maths/Science paper available for those who opted in at Class 9</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                    <span>Two-language board requirement begins from 2028 exams</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
