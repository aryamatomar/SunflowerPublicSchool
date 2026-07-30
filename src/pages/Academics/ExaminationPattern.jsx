import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import { BookOpen, Table, Award, CheckCircle2, AlertCircle, FileText } from 'lucide-react';

export default function ExaminationPattern() {
  const gradeScale = [
    { range: '91-100', grade: 'A1' },
    { range: '81-90', grade: 'A2' },
    { range: '71-80', grade: 'B1' },
    { range: '61-70', grade: 'B2' },
    { range: '51-60', grade: 'C1' },
    { range: '41-50', grade: 'C2' },
    { range: '33-40', grade: 'D' },
    { range: '32 & Below', grade: 'E' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumb items={[{ label: 'Academics' }, { label: 'Examination & Evaluation Pattern' }]} />
      <PageHeader 
        title="CBSE ASSESSMENT & EXAMINATION -2026-27" 
        subtitle="Official Evaluation Pattern & Assessment Scheme for Pre-Primary to Class X"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        
        {/* PRE-PRIMARY SECTION */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-[#E9931C]" />
            <h2 className="text-2xl font-bold text-[#10457B]">PRE- PRIMARY</h2>
          </div>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed bg-slate-50 p-6 rounded-xl border border-slate-200">
            The children do not have any formal tests. They are evaluated regularly on the basis of their class performance on assessment sheets. Report cards are shown to parents twice a year , i.e, October and March.
          </p>
        </div>

        {/* PRIMARY SECTION */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Award className="w-6 h-6 text-[#E9931C]" />
              <h2 className="text-2xl font-bold text-[#10457B]">PRIMARY</h2>
            </div>
            <p className="text-slate-700 font-semibold text-base sm:text-lg italic">
              The Promotion to the next higher class will depend on the student’s progress throughout the year.
            </p>
          </div>

          {/* FOR CLASSES I-III */}
          <div className="border-t border-slate-100 pt-6">
            <h3 className="text-xl font-bold text-[#10457B] mb-4">FOR CLASSES I-III</h3>
            <ul className="space-y-3 text-slate-700 text-base">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#E9931C] mt-2 flex-shrink-0"></span>
                <span>Half yearly and Annual Examination will not be held. Child will be evaluated throughout the year on various parameters.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#E9931C] mt-2 flex-shrink-0"></span>
                <span>The academic year is divided into 4 Unit tests of 25 marks each.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#E9931C] mt-2 flex-shrink-0"></span>
                <span>First two rounds of Unit test will be cumulated as Term I and the other two rounds will be cumulated as Term II result.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#E9931C] mt-2 flex-shrink-0"></span>
                <span>Child will also be assessed on Internal Assessment.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#E9931C] mt-2 flex-shrink-0"></span>
                <span>In case child is absent on the scheduled unit test date he/she would be marked absent & no retest will be taken.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#E9931C] mt-2 flex-shrink-0"></span>
                <span>As grades are more reliable than marks, grades only will be awarded on scholastic & co-scholastic areas.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#E9931C] mt-2 flex-shrink-0"></span>
                <span>A student who fails in a class for two successive years or fails twice in three years will have to be withdrawn from the school.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#E9931C] mt-2 flex-shrink-0"></span>
                <span>If student takes half day or short leave he/she will not be entitled for full attendance.</span>
              </li>
            </ul>
          </div>

          {/* FOR CLASSES IV-V */}
          <div className="border-t border-slate-100 pt-6">
            <h3 className="text-xl font-bold text-[#10457B] mb-4">FOR CLASSES IV-V</h3>
            <ul className="space-y-3 text-slate-700 text-base">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#10457B] mt-2 flex-shrink-0"></span>
                <span>Child will be evaluated throughout the year on various parameters.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#10457B] mt-2 flex-shrink-0"></span>
                <span>The academic year is divided into 4 Periodic tests of 20 marks each, Half Yearly Examination of 50 marks each, Annual Examination of 50 marks each.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#10457B] mt-2 flex-shrink-0"></span>
                <span>First two rounds of Periodic test will be cumulated as Term I and the other two rounds will be cumulated as Term II result.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#10457B] mt-2 flex-shrink-0"></span>
                <span>Child will also be assessed on Internal Assessment.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#10457B] mt-2 flex-shrink-0"></span>
                <span>In case child is absent on the scheduled unit test date he/she would be marked absent & no retest will be taken.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#10457B] mt-2 flex-shrink-0"></span>
                <span>As grades are more reliable than marks, grades only will be awarded on scholastic & co-scholastic areas.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#10457B] mt-2 flex-shrink-0"></span>
                <span>A student who fails in a class for two successive years or fails twice in three years will have to be withdrawn from the school.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#10457B] mt-2 flex-shrink-0"></span>
                <span>If student takes half day or short leave he/she will not be entitled for full attendance.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ASSESSMENT & EXAMINATION FOR CLASSES VI-VIII */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 space-y-6">
          <h2 className="text-2xl font-bold text-[#10457B] pb-2 border-b-2 border-[#E9931C] inline-block">
            ASSESSMENT & EXAMINATION FOR CLASSES VI-VIII
          </h2>
          <p className="text-slate-700 text-base">
            As per the new exam pattern of CBSE, the assessment will be done in two areas:
          </p>
          <p className="text-slate-800 font-bold text-lg">
            Scholastic Area: Whole academic year will be divided into two terms.
          </p>

          {/* Table for VI-VIII */}
          <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-[#10457B] text-white">
                  <th className="py-3 px-4 font-bold border-b border-slate-200">Type of Assessment</th>
                  <th className="py-3 px-4 font-bold border-b border-slate-200">Month</th>
                  <th className="py-3 px-4 font-bold border-b border-slate-200">Term wise marks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                {/* Term 1 */}
                <tr className="bg-blue-50/50 font-bold">
                  <td colSpan={3} className="py-2.5 px-4 text-[#10457B]">Term – 1 (April – September)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Periodic Test 1</td>
                  <td className="py-3 px-4">May/July</td>
                  <td className="py-3 px-4">20 marks</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Periodic Test 2</td>
                  <td className="py-3 px-4">July/ August</td>
                  <td className="py-3 px-4">20 marks</td>
                </tr>
                <tr className="bg-slate-50 font-semibold">
                  <td className="py-3 px-4">Total</td>
                  <td className="py-3 px-4">20 +20 = 40</td>
                  <td className="py-3 px-4 text-[#10457B]">40 will be brought down to 10</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Internal Assessment 1</td>
                  <td className="py-3 px-4">August</td>
                  <td className="py-3 px-4">Notebook submission (5)<br />Subject Enrichment (5)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Term 1</td>
                  <td className="py-3 px-4">September</td>
                  <td className="py-3 px-4">80</td>
                </tr>
                <tr className="bg-amber-50/60 font-bold">
                  <td className="py-3 px-4">Total</td>
                  <td className="py-3 px-4">10+5+5+80</td>
                  <td className="py-3 px-4 text-[#E9931C]">100</td>
                </tr>

                {/* Term 2 */}
                <tr className="bg-blue-50/50 font-bold border-t-2 border-slate-300">
                  <td colSpan={3} className="py-2.5 px-4 text-[#10457B]">Term – 2 (October– March)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Periodic Test 3</td>
                  <td className="py-3 px-4">November/ December</td>
                  <td className="py-3 px-4">20 marks</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Periodic Test 4</td>
                  <td className="py-3 px-4">December/January</td>
                  <td className="py-3 px-4">20 marks</td>
                </tr>
                <tr className="bg-slate-50 font-semibold">
                  <td className="py-3 px-4">Total</td>
                  <td className="py-3 px-4">20 +20 = 40</td>
                  <td className="py-3 px-4 text-[#10457B]">40 will be brought down to 10</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Internal Assessment 2</td>
                  <td className="py-3 px-4">February</td>
                  <td className="py-3 px-4">Notebook submission (5)<br />Subject Enrichment (5)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Term 2</td>
                  <td className="py-3 px-4">February/March</td>
                  <td className="py-3 px-4">80</td>
                </tr>
                <tr className="bg-amber-50/60 font-bold">
                  <td className="py-3 px-4">Total</td>
                  <td className="py-3 px-4">10+5+5+80</td>
                  <td className="py-3 px-4 text-[#E9931C]">100</td>
                </tr>

                {/* Cumulative */}
                <tr className="bg-[#10457B] text-white font-extrabold text-base">
                  <td className="py-3 px-4">Cumulative Result</td>
                  <td className="py-3 px-4">100+100</td>
                  <td className="py-3 px-4 text-[#E9931C]">200</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-slate-700 italic font-medium bg-slate-50 p-4 rounded-xl border border-slate-200">
            Term- II Written Exam for 80 marks will include; ( 10 %,  20% & 30 % of syllabus of Term 1)
          </p>

          {/* Grades Table */}
          <div className="mt-8">
            <h3 className="text-xl font-bold text-[#10457B] mb-4">Grades according to marks obtained</h3>
            <div className="overflow-x-auto border border-slate-200 rounded-xl max-w-md">
              <table className="w-full text-left border-collapse text-sm sm:text-base">
                <thead>
                  <tr className="bg-[#10457B] text-white">
                    <th className="py-2.5 px-4 font-bold">Marks Range</th>
                    <th className="py-2.5 px-4 font-bold">Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-800">
                  {gradeScale.map((g, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? 'bg-slate-50' : ''}>
                      <td className="py-2.5 px-4 font-semibold">{g.range}</td>
                      <td className="py-2.5 px-4 font-bold text-[#E9931C]">{g.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CO-SCHOLASTIC AREAS */}
          <div className="pt-6 border-t border-slate-100">
            <h3 className="text-xl font-bold text-[#10457B] mb-4">CO- SCHOLASTIC AREAS:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-800 font-semibold mb-6">
              <li className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E9931C]"></span> Work Education
              </li>
              <li className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E9931C]"></span> Art Education
              </li>
              <li className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E9931C]"></span> Health & Physical Education
              </li>
              <li className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E9931C]"></span> Discipline
              </li>
            </ul>

            <ul className="space-y-3 text-slate-700 text-base">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E9931C] flex-shrink-0 mt-0.5" />
                <span>A student must secure 33% marks in internal as well as Term exams for promotion to the next class.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E9931C] flex-shrink-0 mt-0.5" />
                <span>In case a child is absent on the scheduled PT/Term exam he/she will be marked zero. No retest will be taken.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E9931C] flex-shrink-0 mt-0.5" />
                <span>If a scribe is required in case of emergency a prior permission at least 3 days before the exam should be taken.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E9931C] flex-shrink-0 mt-0.5" />
                <span>A student who fails in a class for two successive years or fails twice in three years will have to be withdrawn from the school.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ASSESSMENT & EXAMINATION FOR CLASS IX - X */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 space-y-6">
          <h2 className="text-2xl font-bold text-[#10457B] pb-2 border-b-2 border-[#E9931C] inline-block">
            ASSESSMENT & EXAMINATION FOR CLASS 1X - X
          </h2>

          <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-[#10457B] text-white">
                  <th className="py-3 px-4 font-bold border-b border-slate-200">Type of Assessment</th>
                  <th className="py-3 px-4 font-bold border-b border-slate-200">Month</th>
                  <th className="py-3 px-4 font-bold border-b border-slate-200">Term wise marks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                {/* Term 1 */}
                <tr className="bg-blue-50/50 font-bold">
                  <td colSpan={3} className="py-2.5 px-4 text-[#10457B]">Term – 1 (April – September)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Periodic Test 1</td>
                  <td className="py-3 px-4">May/July</td>
                  <td className="py-3 px-4">20 marks</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Periodic Test 2</td>
                  <td className="py-3 px-4">July/ August</td>
                  <td className="py-3 px-4">20 marks</td>
                </tr>
                <tr className="bg-slate-50 font-semibold">
                  <td className="py-3 px-4">Total</td>
                  <td className="py-3 px-4">20 +20 = 40</td>
                  <td className="py-3 px-4 text-[#10457B]">40 will be brought down to 10</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Internal Assessment 1</td>
                  <td className="py-3 px-4">August</td>
                  <td className="py-3 px-4">Notebook submission (5)<br />Subject Enrichment (5)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Term 1</td>
                  <td className="py-3 px-4">September</td>
                  <td className="py-3 px-4">80</td>
                </tr>
                <tr className="bg-amber-50/60 font-bold">
                  <td className="py-3 px-4">Total</td>
                  <td className="py-3 px-4">10+5+5+80</td>
                  <td className="py-3 px-4 text-[#E9931C]">100</td>
                </tr>

                {/* Term 2 */}
                <tr className="bg-blue-50/50 font-bold border-t-2 border-slate-300">
                  <td colSpan={3} className="py-2.5 px-4 text-[#10457B]">Term – 2 (October– March)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Periodic Test 3</td>
                  <td className="py-3 px-4">November</td>
                  <td className="py-3 px-4">20 marks</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Internal Assessment 2</td>
                  <td className="py-3 px-4">December</td>
                  <td className="py-3 px-4">Notebook submission (5)<br />Subject Enrichment (5)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Preboard 1</td>
                  <td className="py-3 px-4">December</td>
                  <td className="py-3 px-4 font-semibold">80 marks</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="py-3 px-4">Preboard 2</td>
                  <td className="py-3 px-4">January</td>
                  <td className="py-3 px-4 font-semibold">80 marks</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="pt-4">
            <p className="text-slate-800 font-semibold mb-3">
              The student will be assessed on Letter Grade (5 point scale) in co-curricular activities which are as follows:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 pl-2">
              <li>Physical Activities (PT/Games & Sports)</li>
              <li>Visual & Performing Arts (Drawing / Painting / Dance / Music)</li>
            </ul>
          </div>
        </div>

        {/* SUBJECT SCHEME BY CLASS */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 space-y-6">
          <h2 className="text-2xl font-bold text-[#10457B] pb-2 border-b-2 border-[#E9931C] inline-block">
            CLASS-WISE SUBJECT SCHEME
          </h2>

          <div className="space-y-4 text-slate-800 text-base">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="font-bold text-[#10457B]">Class II – </span>
              <span>English, Hindi, Mathematics, Computer Science, EVS, Art, Games & Sports, Music.</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="font-bold text-[#10457B]">Class III – </span>
              <span>English, Hindi, Mathematics, Computer-Science, Science, Social Science, Art, Games & Sports, Music.</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="font-bold text-[#10457B]">Class IV – </span>
              <span>English, Hindi, Mathematics, Science, Social Science, Computer-Science, Art, Music , Languages Sanskrit, Games & Sports.</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="font-bold text-[#10457B]">Class V – </span>
              <span>English, Hindi, Mathematics, Science, Social Science, Computer-Science, Art , Music, Languages Sanskrit, Games & Sports.</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="font-bold text-[#10457B]">Classes VI-VIII – </span>
              <span>English, Hindi, Science, SST, Mathematics, Computer-science, Art , Music, Languages -Sanskrit, and Games & Sports.</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="font-bold text-[#10457B]">Classes IX-X – </span>
              <span>Hindi, English, Mathematics, Science, SST, Information Technology, Languages -Sanskrit, Music and Games & Sports.</span>
            </div>
          </div>

          {/* WEIGHTAGE NOTE */}
          <div className="pt-4 border-t border-slate-100">
            <div className="bg-amber-50 p-5 rounded-xl border border-amber-200 text-slate-800">
              <span className="font-extrabold text-[#10457B]">Weightage: </span>
              <span>The session has two terms. Each term shall have TWO rounds of Periodic Assessments (PAs) Term exam (First Terminal & Final terminal). Both terms carry equal weightage.</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
