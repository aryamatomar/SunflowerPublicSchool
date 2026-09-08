import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import { 
  BookOpen, 
  Award, 
  CheckCircle2, 
  Layers, 
  GraduationCap, 
  Scale, 
  Activity, 
  Palette, 
  FileSpreadsheet, 
  AlertCircle 
} from 'lucide-react';

export default function ExaminationPattern() {
  const gradeScale = [
    { range: '91–100', grade: 'A1' },
    { range: '81–90', grade: 'A2' },
    { range: '71–80', grade: 'B1' },
    { range: '61–70', grade: 'B2' },
    { range: '51–60', grade: 'C1' },
    { range: '41–50', grade: 'C2' },
    { range: '33–40', grade: 'D' },
    { range: '32 & Below', grade: 'E' },
  ];

  const classSubjects = [
    {
      cls: "Class II",
      subjects: "English, Hindi, Mathematics, Computer Science, EVS, Art, Games & Sports, Music, Dance, GK"
    },
    {
      cls: "Class III",
      subjects: "English, Hindi, Mathematics, Computer-Science, Science, Social Studies, Art, Games & Sports, Music, Dance GK."
    },
    {
      cls: "Class IV",
      subjects: "English, Hindi, Mathematics, Science, Social Studies, Computer-Science, Art, Music, Dance, GK, Games & Sports."
    },
    {
      cls: "Class V",
      subjects: "English, Hindi, Mathematics, Science, Social Studies, Computer-Science, Art, Music, Dance, GK, Sanskrit, Games & Sports."
    },
    {
      cls: "Classes VI–VIII",
      subjects: "English (R1), Hindi (R2), Science, SST, Mathematics, Computer-science, Art, Music, Sanskrit (R3), Games & Sports."
    },
    {
      cls: "Classes IX–X",
      subjects: "Hindi (R1), English (R2), Mathematics, Science, Social Science, Information Technology, Sanskrit (R3), Music, Dance, GK, and Games & Sports."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <Breadcrumb items={[{ label: 'Academics' }, { label: 'Exam & Evaluation Pattern' }]} />
      
      <PageHeader 
        title="CBSE ASSESSMENT & EXAMINATION -2026-27" 
        subtitle="Official Evaluation Pattern, Examination Scheme & Assessment Guidelines for Pre-Primary to Class X"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        
        {/* 1. PRE-PRIMARY SECTION */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-amber-100 text-[#E9931C] rounded-xl">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#E9931C]">Foundational Stage</span>
              <h2 className="text-2xl font-black text-[#10457B]">PRE-PRIMARY</h2>
            </div>
          </div>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200">
            The children do not have any formal tests. They are evaluated regularly on the basis of their class performance on assessment sheets. Report cards are shown to parents twice a year, i.e., October and March.
          </p>
        </section>

        {/* 2. PRIMARY SECTION */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-8">
          <div className="border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-blue-100 text-[#10457B] rounded-xl">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#E9931C]">Primary Stage</span>
                <h2 className="text-2xl font-black text-[#10457B]">PRIMARY</h2>
              </div>
            </div>
            <p className="text-[#10457B] font-semibold text-base sm:text-lg italic mt-2 bg-blue-50/60 px-4 py-2.5 rounded-xl border border-blue-100">
              The Promotion to the next higher class will depend on the student’s progress throughout the year.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* FOR CLASSES I-III */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
              <h3 className="text-lg font-black text-[#10457B] flex items-center gap-2 border-b border-slate-200 pb-2">
                <span className="px-2.5 py-0.5 bg-[#E9931C] text-[#0B3560] text-xs rounded-full font-black">Grade I–III</span>
                <span>FOR CLASSES I–III</span>
              </h3>
              <ul className="space-y-3 text-slate-700 text-sm sm:text-base">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#E9931C] mt-2 flex-shrink-0"></span>
                  <span>Child will be evaluated throughout the year on various parameters.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#E9931C] mt-2 flex-shrink-0"></span>
                  <span>The academic year is divided into <strong>4 Periodic Assessment of 20 marks each</strong>.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#E9931C] mt-2 flex-shrink-0"></span>
                  <span>First two rounds of Unit test will be cumulated as Half Yearly and the other two rounds will be cumulated as Final result.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#E9931C] mt-2 flex-shrink-0"></span>
                  <span>Child will also be assessed on Internal Assessment.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#E9931C] mt-2 flex-shrink-0"></span>
                  <span>In case child is absent on the scheduled unit test date he/she would be marked absent & no retest will be taken.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#E9931C] mt-2 flex-shrink-0"></span>
                  <span>As grades are more reliable than marks, grades only will be awarded on scholastic & co-scholastic areas.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#E9931C] mt-2 flex-shrink-0"></span>
                  <span>A student who falls in a class repeat the class, with the consent of Parents.</span>
                </li>
              </ul>
            </div>

            {/* FOR CLASSES IV-V */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
              <h3 className="text-lg font-black text-[#10457B] flex items-center gap-2 border-b border-slate-200 pb-2">
                <span className="px-2.5 py-0.5 bg-[#10457B] text-white text-xs rounded-full font-black">Grade IV–V</span>
                <span>FOR CLASSES IV–V</span>
              </h3>
              <ul className="space-y-3 text-slate-700 text-sm sm:text-base">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#10457B] mt-2 flex-shrink-0"></span>
                  <span>Child will be evaluated throughout the year on various parameters.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#10457B] mt-2 flex-shrink-0"></span>
                  <span>The academic year is divided into <strong>4 Periodic Assessment of 20 marks each</strong>, <strong>Half Yearly Examination of 80 marks each</strong>, and <strong>Annual Examination of 80 marks each</strong>.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#10457B] mt-2 flex-shrink-0"></span>
                  <span>First two rounds of Periodic test will be cumulated as half yearly and the other two rounds will be cumulated as Final result.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#10457B] mt-2 flex-shrink-0"></span>
                  <span>Child will also be assessed on Internal Assessment.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#10457B] mt-2 flex-shrink-0"></span>
                  <span>In case child is absent on the scheduled unit test date he/she would be marked absent & no retest will be taken.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#10457B] mt-2 flex-shrink-0"></span>
                  <span>As grades are more reliable than marks, grades only will be awarded on scholastic & co-scholastic areas.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#10457B] mt-2 flex-shrink-0"></span>
                  <span>A student who falls will have to repeat class with the consent of parents.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#10457B] mt-2 flex-shrink-0"></span>
                  <span>If student takes half day or short leave he/she will not be entitled for full attendance.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. ASSESSMENT & EXAMINATION FOR CLASSES VI-VIII */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-amber-100 text-[#E9931C] rounded-xl">
              <FileSpreadsheet className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#E9931C]">Middle Wing Scheme</span>
              <h2 className="text-xl sm:text-2xl font-black text-[#10457B]">
                ASSESSMENT & EXAMINATION FOR CLASSES VI–VIII
              </h2>
            </div>
          </div>

          <div className="space-y-2 text-slate-700 text-sm sm:text-base">
            <p className="font-semibold text-[#10457B]">
              As per the new exam pattern of CBSE, the assessment will be done in two areas:
            </p>
            <p className="font-medium text-slate-600">
              <strong className="text-slate-800">Scholastic Area:</strong> Whole academic year will be divided into two terms.
            </p>
          </div>

          {/* Table for Classes VI-VIII */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#10457B] text-white">
                  <th className="p-3.5 sm:p-4 font-bold border-r border-blue-800/60">Type of Assessment</th>
                  <th className="p-3.5 sm:p-4 font-bold border-r border-blue-800/60">Month</th>
                  <th className="p-3.5 sm:p-4 font-bold">Term wise marks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {/* Term 1 Header */}
                <tr className="bg-amber-100/70 font-black text-[#0B3560]">
                  <td colSpan={3} className="p-3 text-center uppercase tracking-wide">
                    Term – 1 (April – September)
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-medium text-slate-800 border-r border-slate-200">Periodic 1</td>
                  <td className="p-3.5 text-slate-600 border-r border-slate-200">May/July</td>
                  <td className="p-3.5 text-slate-800 font-semibold">20 marks</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-medium text-slate-800 border-r border-slate-200">Periodic 2</td>
                  <td className="p-3.5 text-slate-600 border-r border-slate-200">July/ August</td>
                  <td className="p-3.5 text-slate-800 font-semibold">20 marks</td>
                </tr>
                <tr className="bg-slate-100/70 font-bold">
                  <td className="p-3.5 text-slate-800 border-r border-slate-200">Total</td>
                  <td className="p-3.5 text-slate-800 border-r border-slate-200">20 + 20 = 40</td>
                  <td className="p-3.5 text-[#10457B] font-bold">40 will be brought down to 10</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-medium text-slate-800 border-r border-slate-200">Internal Assessment 1</td>
                  <td className="p-3.5 text-slate-600 border-r border-slate-200">August</td>
                  <td className="p-3.5 text-slate-800">
                    <div>Notebook submission (5)</div>
                    <div>Subject Enrichment (5)</div>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-medium text-slate-800 border-r border-slate-200">Half Yearly</td>
                  <td className="p-3.5 text-slate-600 border-r border-slate-200">September</td>
                  <td className="p-3.5 text-slate-800 font-semibold">80</td>
                </tr>
                <tr className="bg-blue-50 font-bold text-[#10457B]">
                  <td className="p-3.5 border-r border-slate-200">Total</td>
                  <td className="p-3.5 border-r border-slate-200">10+5+5+80</td>
                  <td className="p-3.5 font-extrabold text-base">100</td>
                </tr>

                {/* Term 2 Header */}
                <tr className="bg-amber-100/70 font-black text-[#0B3560]">
                  <td colSpan={3} className="p-3 text-center uppercase tracking-wide">
                    Term – 2 (October– March)
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-medium text-slate-800 border-r border-slate-200">Periodic 3</td>
                  <td className="p-3.5 text-slate-600 border-r border-slate-200">November/ December</td>
                  <td className="p-3.5 text-slate-800 font-semibold">20 marks</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-medium text-slate-800 border-r border-slate-200">Periodic 4</td>
                  <td className="p-3.5 text-slate-600 border-r border-slate-200">December/January</td>
                  <td className="p-3.5 text-slate-800 font-semibold">20 marks</td>
                </tr>
                <tr className="bg-slate-100/70 font-bold">
                  <td className="p-3.5 text-slate-800 border-r border-slate-200">Total</td>
                  <td className="p-3.5 text-slate-800 border-r border-slate-200">20 +20 = 40</td>
                  <td className="p-3.5 text-[#10457B] font-bold">40 will be brought down to 10</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-medium text-slate-800 border-r border-slate-200">Internal Assessment 2</td>
                  <td className="p-3.5 text-slate-600 border-r border-slate-200">February</td>
                  <td className="p-3.5 text-slate-800">
                    <div>Notebook submission (5)</div>
                    <div>Subject Enrichment (5)</div>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-medium text-slate-800 border-r border-slate-200">Final</td>
                  <td className="p-3.5 text-slate-600 border-r border-slate-200">February/March</td>
                  <td className="p-3.5 text-slate-800 font-semibold">80</td>
                </tr>
                <tr className="bg-blue-50 font-bold text-[#10457B]">
                  <td className="p-3.5 border-r border-slate-200">Total</td>
                  <td className="p-3.5 border-r border-slate-200">10+5+5+80</td>
                  <td className="p-3.5 font-extrabold text-base">100</td>
                </tr>
                <tr className="bg-amber-500 text-slate-900 font-black">
                  <td className="p-3.5 border-r border-amber-600 text-white bg-[#10457B]">Cumulative Result</td>
                  <td className="p-3.5 border-r border-amber-600 text-white bg-[#10457B]">100+100</td>
                  <td className="p-3.5 font-black text-lg bg-[#E9931C] text-[#0B3560]">200</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-slate-800 text-sm font-semibold">
            Final Written Exam for 80 marks will include; ( 10 %, 20% & 30 % of syllabus of Half Yearly )
          </div>
        </section>

        {/* 4. GRADING SCALE & CO-SCHOLASTIC AREAS */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Grading Scale Table */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <div className="p-2 bg-blue-100 text-[#10457B] rounded-lg">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black text-[#10457B]">
                Grades according to marks obtained
              </h3>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-[#10457B] text-white">
                    <th className="p-3 font-bold border-r border-blue-800">Marks Range</th>
                    <th className="p-3 font-bold">Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {gradeScale.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="p-3 font-medium text-slate-800 border-r border-slate-100">{item.range}</td>
                      <td className="p-3">
                        <span className="px-2.5 py-0.5 bg-blue-50 text-[#10457B] border border-blue-200 font-black rounded-md text-xs">
                          {item.grade}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Co-Scholastic Areas */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <div className="p-2 bg-amber-100 text-[#E9931C] rounded-lg">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black text-[#10457B]">
                CO- SCHOLASTIC AREAS:
              </h3>
            </div>

            <ul className="space-y-2.5 text-slate-700 text-sm sm:text-base">
              <li className="flex items-center gap-2 font-bold text-slate-900">
                <span className="w-2 h-2 rounded-full bg-[#E9931C]"></span>
                <span>Work Education</span>
              </li>
              <li className="flex items-center gap-2 font-bold text-slate-900">
                <span className="w-2 h-2 rounded-full bg-[#E9931C]"></span>
                <span>Art Education</span>
              </li>
              <li className="flex items-center gap-2 font-bold text-slate-900">
                <span className="w-2 h-2 rounded-full bg-[#E9931C]"></span>
                <span>Health & Physical Education</span>
              </li>
              <li className="flex items-center gap-2 font-bold text-slate-900">
                <span className="w-2 h-2 rounded-full bg-[#E9931C]"></span>
                <span>Discipline</span>
              </li>
            </ul>

            <div className="border-t border-slate-100 pt-3 space-y-2 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <span className="text-[#E9931C] font-bold">➤</span>
                <span>A student must secure 33% marks in internal as well as Term exams for promotion to the next class.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#E9931C] font-bold">➤</span>
                <span>In case a child is absent on the scheduled PT/Term exam he/she will be marked zero. No retest will be taken.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#E9931C] font-bold">➤</span>
                <span>If a scribe is required in case of emergency a prior permission at least 3 days before the exam should be taken.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#E9931C] font-bold">➤</span>
                <span>A student who fails in a class for two successive years or fails twice in three years will have to be withdrawn from the school.</span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. ASSESSMENT & EXAMINATION FOR CLASS IX – X */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-blue-100 text-[#10457B] rounded-xl">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#E9931C]">Secondary Wing Scheme</span>
              <h2 className="text-xl sm:text-2xl font-black text-[#10457B]">
                ASSESSMENT & EXAMINATION FOR CLASS IX – X ( EQUAL WEIGHTAGE OF INTERNAL & EXTERNAL ASSESSMENT)
              </h2>
            </div>
          </div>

          {/* Table for Classes IX-X */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#10457B] text-white">
                  <th className="p-3.5 sm:p-4 font-bold border-r border-blue-800/60">Type of Assessment</th>
                  <th className="p-3.5 sm:p-4 font-bold border-r border-blue-800/60">Month</th>
                  <th className="p-3.5 sm:p-4 font-bold">Term wise marks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {/* Term 1 */}
                <tr className="bg-amber-100/70 font-black text-[#0B3560]">
                  <td colSpan={3} className="p-3 text-center uppercase tracking-wide">
                    Term – 1 (April – September)
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-medium text-slate-800 border-r border-slate-200">Periodic Assessment 1</td>
                  <td className="p-3.5 text-slate-600 border-r border-slate-200">May/July</td>
                  <td className="p-3.5 text-slate-800 font-semibold">20 marks</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-medium text-slate-800 border-r border-slate-200">Periodic Assessment 2</td>
                  <td className="p-3.5 text-slate-600 border-r border-slate-200">July/ August</td>
                  <td className="p-3.5 text-slate-800 font-semibold">20 marks</td>
                </tr>
                <tr className="bg-slate-100/70 font-bold">
                  <td className="p-3.5 text-slate-800 border-r border-slate-200">Total</td>
                  <td className="p-3.5 text-slate-800 border-r border-slate-200">20 +20 = 40</td>
                  <td className="p-3.5 text-[#10457B] font-bold">40 will be brought down to 10</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-medium text-slate-800 border-r border-slate-200">Internal Assessment 1</td>
                  <td className="p-3.5 text-slate-600 border-r border-slate-200">August</td>
                  <td className="p-3.5 text-slate-800">
                    <div>Notebook submission (5)</div>
                    <div>Subject Enrichment (5)</div>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-medium text-slate-800 border-r border-slate-200">Half Yearly</td>
                  <td className="p-3.5 text-slate-600 border-r border-slate-200">September</td>
                  <td className="p-3.5 text-slate-800 font-semibold">80</td>
                </tr>
                <tr className="bg-blue-50 font-bold text-[#10457B]">
                  <td className="p-3.5 border-r border-slate-200">Total</td>
                  <td className="p-3.5 border-r border-slate-200">10+5+5+80</td>
                  <td className="p-3.5 font-extrabold text-base">100</td>
                </tr>

                {/* Term 2 */}
                <tr className="bg-amber-100/70 font-black text-[#0B3560]">
                  <td colSpan={3} className="p-3 text-center uppercase tracking-wide">
                    Term – 2 (October– March)
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-medium text-slate-800 border-r border-slate-200">Periodic Assessment 3</td>
                  <td className="p-3.5 text-slate-600 border-r border-slate-200">November</td>
                  <td className="p-3.5 text-slate-800 font-semibold">20 marks</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-medium text-slate-800 border-r border-slate-200">Internal Assessment 2</td>
                  <td className="p-3.5 text-slate-600 border-r border-slate-200">December</td>
                  <td className="p-3.5 text-slate-800">
                    <div>Notebook submission (5)</div>
                    <div>Subject Enrichment (5)</div>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-medium text-slate-800 border-r border-slate-200">Pre-board 1 (X)</td>
                  <td className="p-3.5 text-slate-600 border-r border-slate-200">December</td>
                  <td className="p-3.5 text-slate-800 font-semibold">80 marks</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-medium text-slate-800 border-r border-slate-200">Pre-board 2 (X)</td>
                  <td className="p-3.5 text-slate-600 border-r border-slate-200">January</td>
                  <td className="p-3.5 text-slate-800 font-semibold">80 marks</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-medium text-slate-800 border-r border-slate-200">Final Exams (IX)</td>
                  <td className="p-3.5 text-slate-600 border-r border-slate-200">February – March 2027</td>
                  <td className="p-3.5 text-slate-800 font-semibold">80 marks</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs sm:text-sm text-slate-700">
            <p className="font-bold text-[#10457B]">
              The student will be assessed on Letter Grade (5 point scale) in co-curricular activities which are as follows:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-800">
              <li>Physical Activities (PT/Games & Sports)</li>
              <li>Visual & Performing Arts (Drawing / Painting / Dance / Music)</li>
            </ul>
          </div>
        </section>

        {/* 6. SUBJECTS OFFERED CLASS-WISE & WEIGHTAGE */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-amber-100 text-[#E9931C] rounded-xl">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#E9931C]">Curriculum Overview</span>
              <h2 className="text-xl sm:text-2xl font-black text-[#10457B]">
                Class-Wise Subjects & Examination Weightage
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {classSubjects.map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-amber-300 transition-colors">
                <span className="font-black text-[#10457B] text-base block mb-1">{item.cls} –</span>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">{item.subjects}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-[#10457B] text-white p-6 rounded-2xl shadow-sm border border-blue-800 space-y-2">
            <span className="font-black text-[#E9931C] text-xs uppercase tracking-wider block">Session Weightage Scheme</span>
            <p className="text-sm sm:text-base leading-relaxed text-blue-50">
              <strong>Weightage :</strong> The session has two terms. Each term shall have TWO rounds of Periodic Assessments (PAs) (Half Yearly & Final Examination). Both terms carry equal weightage.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
