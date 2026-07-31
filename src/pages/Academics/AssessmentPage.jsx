import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import { BookOpen, Table, FileSpreadsheet, CheckCircle2, Award } from 'lucide-react';

export default function AssessmentPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumb items={[{ label: 'Academics' }, { label: 'Assessment' }]} />
      <PageHeader 
        title="ASSESSMENT SYSTEM" 
        subtitle="SESSION 2026-27 — Official Evaluation Planning & Assessment Structure"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">

        {/* SECTION 1: Evaluation Planning III to V */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Award className="w-7 h-7 text-[#E9931C]" />
              <h2 className="text-2xl font-bold text-[#10457B]">Evaluation Planning III to V</h2>
            </div>
            <p className="text-slate-600 text-sm font-semibold">SESSION 2026-27</p>
          </div>

          {/* First Term (April 2026-September 2026) */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#10457B] pb-2 border-b-2 border-[#E9931C] inline-block">
              First Term (April 2026-September 2026)
            </h3>
            <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
              <table className="w-full text-left border-collapse text-sm sm:text-base">
                <thead>
                  <tr className="bg-[#10457B] text-white">
                    <th className="py-3.5 px-4 font-bold border-b border-slate-200">Exam Name</th>
                    <th className="py-3.5 px-4 font-bold border-b border-slate-200">Exam Type</th>
                    <th className="py-3.5 px-4 font-bold border-b border-slate-200">Frequency of Assignment</th>
                    <th className="py-3.5 px-4 font-bold border-b border-slate-200">Max Marks</th>
                    <th className="py-3.5 px-4 font-bold border-b border-slate-200">Total Marks of Exam</th>
                    <th className="py-3.5 px-4 font-bold border-b border-slate-200">Percentage of Marks for Computation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-800">
                  <tr className="bg-white">
                    <td className="py-3.5 px-4 font-bold text-slate-900">PERIODIC Assignment</td>
                    <td className="py-3.5 px-4">Pen Paper</td>
                    <td className="py-3.5 px-4 font-mono font-semibold">2</td>
                    <td className="py-3.5 px-4 font-mono font-semibold">20</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-[#10457B]">40</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-[#E9931C]">15</td>
                  </tr>
                  <tr className="bg-slate-50/70">
                    <td className="py-3.5 px-4 font-bold text-slate-900">Subject Enrichment</td>
                    <td className="py-3.5 px-4">Project/Worksheet LSA</td>
                    <td className="py-3.5 px-4 font-mono font-semibold">2</td>
                    <td className="py-3.5 px-4 font-mono font-semibold">10</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-[#10457B]">20</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-[#E9931C]">5</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3.5 px-4 font-bold text-slate-900">Term-I</td>
                    <td className="py-3.5 px-4">Half Yearly Exam</td>
                    <td className="py-3.5 px-4 font-mono font-semibold">1</td>
                    <td className="py-3.5 px-4 font-mono font-semibold">50</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-[#10457B]">50</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-[#E9931C]">80</td>
                  </tr>
                  <tr className="bg-blue-50/70 font-bold text-[#10457B]">
                    <td colSpan={5} className="py-3 px-4 text-right">Total Marks of Term I Exams</td>
                    <td className="py-3 px-4 font-mono text-base">100</td>
                  </tr>
                  <tr className="bg-amber-50/80 font-bold text-slate-900">
                    <td colSpan={5} className="py-3 px-4 text-right">Weightage of 1st term to be considered for Final Promotion</td>
                    <td className="py-3 px-4 font-mono text-base text-[#E9931C]">50%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Second Term (October 2026-March 2027) */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="text-lg font-bold text-[#10457B] pb-2 border-b-2 border-[#E9931C] inline-block">
              Second Term (October 2026-March 2027)
            </h3>
            <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
              <table className="w-full text-left border-collapse text-sm sm:text-base">
                <thead>
                  <tr className="bg-[#10457B] text-white">
                    <th className="py-3.5 px-4 font-bold border-b border-slate-200">Exam Name</th>
                    <th className="py-3.5 px-4 font-bold border-b border-slate-200">Exam Type</th>
                    <th className="py-3.5 px-4 font-bold border-b border-slate-200">Frequency of Assignment</th>
                    <th className="py-3.5 px-4 font-bold border-b border-slate-200">Max Marks</th>
                    <th className="py-3.5 px-4 font-bold border-b border-slate-200">Total Marks of Exam</th>
                    <th className="py-3.5 px-4 font-bold border-b border-slate-200">Percentage of Marks for Computation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-800">
                  <tr className="bg-white">
                    <td className="py-3.5 px-4 font-bold text-slate-900">PERIODIC Assignment</td>
                    <td className="py-3.5 px-4">Pen Paper</td>
                    <td className="py-3.5 px-4 font-mono font-semibold">2</td>
                    <td className="py-3.5 px-4 font-mono font-semibold">20</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-[#10457B]">40</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-[#E9931C]">15</td>
                  </tr>
                  <tr className="bg-slate-50/70">
                    <td className="py-3.5 px-4 font-bold text-slate-900">Subject Enrichment</td>
                    <td className="py-3.5 px-4">Project/Worksheet LSA</td>
                    <td className="py-3.5 px-4 font-mono font-semibold">2</td>
                    <td className="py-3.5 px-4 font-mono font-semibold">10</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-[#10457B]">20</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-[#E9931C]">5</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3.5 px-4 font-bold text-slate-900">Term-II</td>
                    <td className="py-3.5 px-4">Final Exam</td>
                    <td className="py-3.5 px-4 font-mono font-semibold">1</td>
                    <td className="py-3.5 px-4 font-mono font-semibold">50</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-[#10457B]">50</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-[#E9931C]">80</td>
                  </tr>
                  <tr className="bg-blue-50/70 font-bold text-[#10457B]">
                    <td colSpan={5} className="py-3 px-4 text-right">Total Marks of Term II Exams</td>
                    <td className="py-3 px-4 font-mono text-base">100</td>
                  </tr>
                  <tr className="bg-amber-50/80 font-bold text-slate-900">
                    <td colSpan={5} className="py-3 px-4 text-right">Weightage of 2nd term to be considered for Final Promotion</td>
                    <td className="py-3 px-4 font-mono text-base text-[#E9931C]">50%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Final Result Weightage Summary III to V */}
          <div className="pt-4 border-t border-slate-100 max-w-2xl">
            <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
              <table className="w-full text-center border-collapse text-sm sm:text-base">
                <thead>
                  <tr className="bg-[#10457B] text-white">
                    <th className="py-3 px-4 font-bold">Classes</th>
                    <th className="py-3 px-4 font-bold">Weightage of 1st term to be considered for final Promotion</th>
                    <th className="py-3 px-4 font-bold">Weightage of 2nd term to be considered for final Promotion</th>
                    <th className="py-3 px-4 font-bold">Final Result</th>
                  </tr>
                </thead>
                <tbody className="bg-white text-slate-900 font-bold">
                  <tr>
                    <td className="py-3 px-4 text-[#10457B]">III to V</td>
                    <td className="py-3 px-4">50%</td>
                    <td className="py-3 px-4">50%</td>
                    <td className="py-3 px-4 text-[#E9931C] font-extrabold text-base">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* SECTION 2: Evaluation Planning VI to VIII */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-7 h-7 text-[#10457B]" />
              <h2 className="text-2xl font-bold text-[#10457B]">Evaluation Planning VI to VIII</h2>
            </div>
            <p className="text-slate-600 text-sm font-semibold">SESSION 2026-27</p>
          </div>

          {/* First Term (April 2026-September 2027) */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#10457B] pb-2 border-b-2 border-[#E9931C] inline-block">
              First Term (April 2026-September 2027)
            </h3>
            <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
              <table className="w-full text-left border-collapse text-sm sm:text-base">
                <thead>
                  <tr className="bg-[#10457B] text-white">
                    <th className="py-3.5 px-4 font-bold border-b border-slate-200">Exam Name</th>
                    <th className="py-3.5 px-4 font-bold border-b border-slate-200">Exam Type</th>
                    <th className="py-3.5 px-4 font-bold border-b border-slate-200">Frequency of Assignment</th>
                    <th className="py-3.5 px-4 font-bold border-b border-slate-200">Max Marks</th>
                    <th className="py-3.5 px-4 font-bold border-b border-slate-200">Total Marks of Exam</th>
                    <th className="py-3.5 px-4 font-bold border-b border-slate-200">Marks for FINAL Computation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-800">
                  <tr className="bg-white">
                    <td className="py-3.5 px-4 font-bold text-slate-900">PERIODIC</td>
                    <td className="py-3.5 px-4">Pen Paper</td>
                    <td className="py-3.5 px-4 font-mono font-semibold">2</td>
                    <td className="py-3.5 px-4 text-xs sm:text-sm">
                      40 <span className="text-slate-500 font-medium">(*Maths and Science-Mastery Assessment-20 M Subjective-20M)</span>
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-[#10457B]">80</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-[#E9931C]">15</td>
                  </tr>
                  <tr className="bg-slate-50/70">
                    <td className="py-3.5 px-4 font-bold text-slate-900">Subject Enrichment</td>
                    <td className="py-3.5 px-4">Project/ Activity/ Worksheet</td>
                    <td className="py-3.5 px-4 font-mono font-semibold">2</td>
                    <td className="py-3.5 px-4 font-mono font-semibold">20</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-[#10457B]">40</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-[#E9931C]">5</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3.5 px-4 font-bold text-slate-900">Term-I</td>
                    <td className="py-3.5 px-4">Final Exam</td>
                    <td className="py-3.5 px-4 font-mono font-semibold">1</td>
                    <td className="py-3.5 px-4 text-xs sm:text-sm">
                      80 <span className="text-slate-500 font-medium">(*In Computer Science/AI and IIIrd Lang.-60M)</span>
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-[#10457B]">80</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-[#E9931C]">80</td>
                  </tr>
                  <tr className="bg-blue-50/70 font-bold text-[#10457B]">
                    <td colSpan={5} className="py-3 px-4 text-right">TOTAL</td>
                    <td className="py-3 px-4 font-mono text-base">100</td>
                  </tr>
                  <tr className="bg-amber-50/80 font-bold text-slate-900">
                    <td colSpan={5} className="py-3 px-4 text-right">Weightage of FIRST TERM taken for FINAL PROMOTION</td>
                    <td className="py-3 px-4 font-mono text-base text-[#E9931C]">50%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Second Term (October 2026-March 2027) */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="text-lg font-bold text-[#10457B] pb-2 border-b-2 border-[#E9931C] inline-block">
              Second Term (October 2026-March 2027)
            </h3>
            <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
              <table className="w-full text-left border-collapse text-sm sm:text-base">
                <thead>
                  <tr className="bg-[#10457B] text-white">
                    <th className="py-3.5 px-4 font-bold border-b border-slate-200">Exam Name</th>
                    <th className="py-3.5 px-4 font-bold border-b border-slate-200">Exam Type</th>
                    <th className="py-3.5 px-4 font-bold border-b border-slate-200">Frequency of Assignment</th>
                    <th className="py-3.5 px-4 font-bold border-b border-slate-200">Max Marks</th>
                    <th className="py-3.5 px-4 font-bold border-b border-slate-200">Total Marks of Exam</th>
                    <th className="py-3.5 px-4 font-bold border-b border-slate-200">Marks for FINAL Computation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-800">
                  <tr className="bg-white">
                    <td className="py-3.5 px-4 font-bold text-slate-900">PERIODIC</td>
                    <td className="py-3.5 px-4">Pen Paper</td>
                    <td className="py-3.5 px-4 font-mono font-semibold">2</td>
                    <td className="py-3.5 px-4 text-xs sm:text-sm">
                      40 <span className="text-slate-500 font-medium">(*Maths and Science- Mastery Assessment-20 M Subjective=20M)</span>
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-[#10457B]">80</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-[#E9931C]">15</td>
                  </tr>
                  <tr className="bg-slate-50/70">
                    <td className="py-3.5 px-4 font-bold text-slate-900">Subject Enrichment</td>
                    <td className="py-3.5 px-4">Project/ Activity/ Worksheet</td>
                    <td className="py-3.5 px-4 font-mono font-semibold">2</td>
                    <td className="py-3.5 px-4 font-mono font-semibold">20</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-[#10457B]">40</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-[#E9931C]">5</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3.5 px-4 font-bold text-slate-900">Term-II</td>
                    <td className="py-3.5 px-4">Final Exam</td>
                    <td className="py-3.5 px-4 font-mono font-semibold">1</td>
                    <td className="py-3.5 px-4 text-xs sm:text-sm">
                      80 <span className="text-slate-500 font-medium">(*In Computers /AI and IIIrd Lang.-60M)</span>
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-[#10457B]">80</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-[#E9931C]">80</td>
                  </tr>
                  <tr className="bg-blue-50/70 font-bold text-[#10457B]">
                    <td colSpan={5} className="py-3 px-4 text-right">TOTAL</td>
                    <td className="py-3 px-4 font-mono text-base">100</td>
                  </tr>
                  <tr className="bg-amber-50/80 font-bold text-slate-900">
                    <td colSpan={5} className="py-3 px-4 text-right">Weightage of SECOND TERM taken for FINAL PROMOTION</td>
                    <td className="py-3 px-4 font-mono text-base text-[#E9931C]">50%</td>
                  </tr>
                  <tr className="bg-[#10457B] text-white font-extrabold">
                    <td colSpan={5} className="py-3 px-4 text-right">Final Result: 50% of I-Term + 50% of II-Term</td>
                    <td className="py-3 px-4 font-mono text-base text-[#E9931C]">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* SECTION 3: Evaluation Planning IX & X */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Evaluation Planning IX */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b-2 border-[#E9931C]">
              <FileSpreadsheet className="w-6 h-6 text-[#E9931C]" />
              <h2 className="text-xl font-bold text-[#10457B]">Evaluation Planning IX</h2>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#10457B] text-white">
                    <th className="py-3 px-3 font-bold border-b border-slate-200">Class</th>
                    <th className="py-3 px-3 font-bold border-b border-slate-200">Assessment</th>
                    <th className="py-3 px-3 font-bold border-b border-slate-200">Frequency</th>
                    <th className="py-3 px-3 font-bold border-b border-slate-200">Marks</th>
                    <th className="py-3 px-3 font-bold border-b border-slate-200">Overall Percentage for Computation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-800">
                  {/* Term I */}
                  <tr className="bg-slate-50/70">
                    <td rowSpan={4} className="py-3 px-3 font-bold text-[#10457B] align-top">Term I</td>
                    <td className="py-2.5 px-3">Test-1</td>
                    <td className="py-2.5 px-3 font-mono">1</td>
                    <td className="py-2.5 px-3 font-mono font-semibold">40</td>
                    <td rowSpan={2} className="py-2.5 px-3 font-mono font-bold text-[#E9931C] align-middle">10</td>
                  </tr>
                  <tr className="bg-slate-50/70">
                    <td className="py-2.5 px-3">Test-2</td>
                    <td className="py-2.5 px-3 font-mono">1</td>
                    <td className="py-2.5 px-3 font-mono font-semibold">40</td>
                  </tr>
                  <tr className="bg-slate-50/70">
                    <td className="py-2.5 px-3">Half Yearly Exam-Theory</td>
                    <td className="py-2.5 px-3 font-mono">1</td>
                    <td className="py-2.5 px-3 font-mono font-semibold">80</td>
                    <td rowSpan={2} className="py-2.5 px-3 font-mono font-bold text-[#E9931C] align-middle">40</td>
                  </tr>
                  <tr className="bg-slate-50/70">
                    <td className="py-2.5 px-3">IA/Project Assessment / Practical's</td>
                    <td className="py-2.5 px-3 font-mono"></td>
                    <td className="py-2.5 px-3 font-mono font-semibold">20</td>
                  </tr>

                  {/* Term II */}
                  <tr className="bg-white">
                    <td rowSpan={4} className="py-3 px-3 font-bold text-[#10457B] align-top">Term II</td>
                    <td className="py-2.5 px-3">Test-3</td>
                    <td className="py-2.5 px-3 font-mono">1</td>
                    <td className="py-2.5 px-3 font-mono font-semibold">40</td>
                    <td rowSpan={2} className="py-2.5 px-3 font-mono font-bold text-[#E9931C] align-middle">10</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-2.5 px-3">Test-4</td>
                    <td className="py-2.5 px-3 font-mono">1</td>
                    <td className="py-2.5 px-3 font-mono font-semibold">40</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-2.5 px-3">Annual Exam-Theory</td>
                    <td className="py-2.5 px-3 font-mono">1</td>
                    <td className="py-2.5 px-3 font-mono font-semibold">80</td>
                    <td rowSpan={2} className="py-2.5 px-3 font-mono font-bold text-[#E9931C] align-middle">40</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-2.5 px-3">IA/Project Assessment/Practical's</td>
                    <td className="py-2.5 px-3 font-mono"></td>
                    <td className="py-2.5 px-3 font-mono font-semibold">20</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Evaluation Planning X */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b-2 border-[#10457B]">
              <FileSpreadsheet className="w-6 h-6 text-[#10457B]" />
              <h2 className="text-xl font-bold text-[#10457B]">Evaluation Planning X</h2>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#10457B] text-white">
                    <th className="py-3 px-3 font-bold border-b border-slate-200">Class</th>
                    <th className="py-3 px-3 font-bold border-b border-slate-200">Assessment</th>
                    <th className="py-3 px-3 font-bold border-b border-slate-200">Frequency</th>
                    <th className="py-3 px-3 font-bold border-b border-slate-200">Marks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-800">
                  {/* Term I */}
                  <tr className="bg-slate-50/70">
                    <td rowSpan={4} className="py-3 px-3 font-bold text-[#10457B] align-top">Term I</td>
                    <td className="py-2.5 px-3">Test-1</td>
                    <td className="py-2.5 px-3 font-mono">1</td>
                    <td className="py-2.5 px-3 font-mono font-semibold">40</td>
                  </tr>
                  <tr className="bg-slate-50/70">
                    <td className="py-2.5 px-3">Mid Term</td>
                    <td className="py-2.5 px-3 font-mono">1</td>
                    <td className="py-2.5 px-3 font-mono font-semibold">80</td>
                  </tr>
                  <tr className="bg-slate-50/70">
                    <td className="py-2.5 px-3">Half Year Exam-Theory</td>
                    <td className="py-2.5 px-3 font-mono">1</td>
                    <td className="py-2.5 px-3 font-mono font-semibold">80</td>
                  </tr>
                  <tr className="bg-slate-50/70">
                    <td className="py-2.5 px-3">IA/Project Assessment / practical's</td>
                    <td className="py-2.5 px-3 font-mono"></td>
                    <td className="py-2.5 px-3 font-mono font-semibold">20</td>
                  </tr>

                  {/* Term II */}
                  <tr className="bg-white">
                    <td rowSpan={3} className="py-3 px-3 font-bold text-[#10457B] align-top">Term II</td>
                    <td className="py-2.5 px-3">Pre Board I</td>
                    <td className="py-2.5 px-3 font-mono">1</td>
                    <td className="py-2.5 px-3 font-mono font-semibold">80</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-2.5 px-3">IA/Project Assessment/practical's</td>
                    <td className="py-2.5 px-3 font-mono"></td>
                    <td className="py-2.5 px-3 font-mono font-semibold">20</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-2.5 px-3">Pre Board II</td>
                    <td className="py-2.5 px-3 font-mono">1</td>
                    <td className="py-2.5 px-3 font-mono font-semibold">80</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* SECTION 4: Internal Assessment (IX and X) Details */}
        <div className="bg-amber-50/80 rounded-2xl p-6 sm:p-8 border border-amber-300 space-y-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-[#E9931C]" />
            <h3 className="text-lg sm:text-xl font-bold text-[#10457B]">
              Internal Assessment (IX and X) includes:
            </h3>
          </div>

          <ul className="space-y-3 text-slate-800 text-sm sm:text-base font-medium pl-2">
            <li className="flex items-start gap-3">
              <span className="font-bold text-[#E9931C]">a.</span>
              <span>Periodic Test</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-[#E9931C]">b.</span>
              <span>Subject Enrichment Activities - practical's / Speaking & Listening Skills / Projects / Art Integration</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-[#E9931C]">c.</span>
              <span>Multiple Assessment - Role play / GD / Quiz / Maps / Debates / Skit / Others</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-[#E9931C]">d.</span>
              <span>Portfolio - Record of Work Books, Notebooks etc.</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
