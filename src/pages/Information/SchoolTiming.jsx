import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import DocumentCard from '../../components/DocumentCard';
import { Clock, Sun, Snowflake, Building2, AlertCircle, Phone } from 'lucide-react';

export default function SchoolTiming() {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumb items={[{ label: 'Information' }, { label: 'School Timing' }]} />
      <PageHeader 
        title="SCHOOL TIMINGS" 
        subtitle="Summer Schedule, Winter Schedule & Office Visiting Hours"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-10">

        {/* SUMMER SCHEDULE */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b-2 border-[#E9931C]">
            <Sun className="w-6 h-6 text-[#E9931C]" />
            <h2 className="text-2xl font-bold text-[#10457B]">SUMMER SCHEDULE</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Monday to Friday */}
            <div className="bg-amber-50/40 p-6 rounded-xl border border-amber-200 space-y-4">
              <h3 className="text-lg font-bold text-[#10457B] pb-2 border-b border-amber-200">
                MONDAY TO FRIDAY:
              </h3>
              <div className="space-y-3 text-slate-800 text-sm sm:text-base">
                <div className="flex justify-between items-center py-2 border-b border-amber-200/50">
                  <span className="font-semibold">NURSERY TO UKG:</span>
                  <span className="font-bold text-[#10457B] font-mono">07:55 AM TO 12:30 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-amber-200/50">
                  <span className="font-semibold">GRADE 1 TO GRADE 5</span>
                  <span className="font-bold text-[#10457B] font-mono">07:20 AM TO 01:35 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-semibold">GRADE 6 TO GRADE 10</span>
                  <span className="font-bold text-[#10457B] font-mono">07:20 AM TO 01: 40 PM</span>
                </div>
              </div>
            </div>

            {/* Saturday */}
            <div className="bg-amber-50/40 p-6 rounded-xl border border-amber-200 space-y-4">
              <h3 className="text-lg font-bold text-[#10457B] pb-2 border-b border-amber-200">
                SATURDAY
              </h3>
              <div className="space-y-3 text-slate-800 text-sm sm:text-base">
                <div className="flex justify-between items-center py-2 border-b border-amber-200/50">
                  <span className="font-semibold">NURSERY TO UKG:</span>
                  <span className="font-bold text-[#10457B] font-mono">07:55 AM TO 10:50 AM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-semibold">GRADE 1 TO GRADE 10</span>
                  <span className="font-bold text-[#10457B] font-mono">07:20 AM TO 11:40 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WINTER SCHEDULE */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b-2 border-[#10457B]">
            <Snowflake className="w-6 h-6 text-[#10457B]" />
            <h2 className="text-2xl font-bold text-[#10457B]">WINTER SCHEDULE:</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Monday to Friday */}
            <div className="bg-blue-50/40 p-6 rounded-xl border border-blue-200 space-y-4">
              <h3 className="text-lg font-bold text-[#10457B] pb-2 border-b border-blue-200">
                MONDAY TO FRIDAY
              </h3>
              <div className="space-y-3 text-slate-800 text-sm sm:text-base">
                <div className="flex justify-between items-center py-2 border-b border-blue-200/50">
                  <span className="font-semibold">NURSERY TO UKG:</span>
                  <span className="font-bold text-[#10457B] font-mono">08:25 AM TO 01:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-blue-200/50">
                  <span className="font-semibold">GRADE 1 TO GRADE 5</span>
                  <span className="font-bold text-[#10457B] font-mono">07:55 AM TO 02:10 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-semibold">GRADE 6 TO GRADE 10</span>
                  <span className="font-bold text-[#10457B] font-mono">07:55 AM TO 02: 15 PM</span>
                </div>
              </div>
            </div>

            {/* Saturday */}
            <div className="bg-blue-50/40 p-6 rounded-xl border border-blue-200 space-y-4">
              <h3 className="text-lg font-bold text-[#10457B] pb-2 border-b border-blue-200">
                SATURDAY
              </h3>
              <div className="space-y-3 text-slate-800 text-sm sm:text-base">
                <div className="flex justify-between items-center py-2 border-b border-blue-200/50">
                  <span className="font-semibold">NURSERY TO UKG:</span>
                  <span className="font-bold text-[#10457B] font-mono">07:55 AM TO 11:55 AM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-semibold">GRADE 1 TO GRADE 10</span>
                  <span className="font-bold text-[#10457B] font-mono">07:20 AM TO 12:10 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OFFICE VISITING HOURS */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-4">
          <div className="flex items-center gap-3">
            <Building2 className="w-6 h-6 text-[#E9931C]" />
            <h2 className="text-xl sm:text-2xl font-bold text-[#10457B]">
              OFFICE VISITING HOURS: ( ONLY MONDAY TO THURSDAY)
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex justify-between items-center">
              <span className="font-bold text-slate-700">SUMMER:</span>
              <span className="font-mono font-bold text-[#10457B] text-base">09:00 AM TO 10:00 AM</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex justify-between items-center">
              <span className="font-bold text-slate-700">WINTER:</span>
              <span className="font-mono font-bold text-[#10457B] text-base">10:00 AM TO 11:00 AM</span>
            </div>
          </div>
        </div>

        {/* NOTE SECTION */}
        <div className="bg-amber-50/70 rounded-2xl p-6 sm:p-8 border border-amber-300 space-y-4">
          <div className="flex items-center gap-2 font-bold text-amber-900 text-lg">
            <AlertCircle className="w-5 h-5 text-[#E9931C]" />
            <span>NOTE:</span>
          </div>
          <ul className="space-y-3 text-slate-800 font-medium text-base">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E9931C] mt-2 flex-shrink-0"></span>
              <span>No guardians / parents are allowed to visit to teachers / students in class room during school hours.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E9931C] mt-2 flex-shrink-0"></span>
              <span>No school matters will be transacted during holidays.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E9931C] mt-2 flex-shrink-0"></span>
              <div>
                <span>For Telephonic communication in school:</span>
                <div className="font-bold text-[#10457B] mt-1">
                  Time: 09: 00 am to 11:00 am only on working days.
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Document Download Link */}
        <div>
          <h3 className="text-xl font-bold text-[#10457B] mb-4 pb-2 border-b-2 border-[#E9931C] inline-block">
            DOWNLOADABLE TIMINGS DOCUMENT
          </h3>
          <div className="max-w-md">
            <DocumentCard 
              title="Official School Timings Document" 
              docUrl="https://sunfloweragra.com/docs/school-timing.jpg" 
            />
          </div>
        </div>

      </div>
    </div>
  );
}
