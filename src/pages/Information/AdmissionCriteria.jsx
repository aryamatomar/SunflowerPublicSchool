import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import { Calendar, UserCheck, FileText, CheckCircle2, AlertCircle, Info, FolderCheck, ShieldAlert } from 'lucide-react';

export default function AdmissionCriteria() {
  const ageCriteriaData = [
    { grade: "PRE NURSERY", eligibility: "Eligibility 2 plus as on 1st April" },
    { grade: "NURSERY", eligibility: "Eligibility 3 plus as on 1st April" },
    { grade: "LKG & UKG", eligibility: "Eligibility 4 plus and 5 plus respectively as on 1st April" },
  ];

  const requiredDocuments = [
    "+ 2 sets of photocopies in a single folder:",
    "Birth Certificate – Original + copy from government authority",
    "Passport-size Photographs – 4 copies of child + 1 each of parents",
    "Proof of Residence – Aadhaar Card / Electricity Bill / Rent Agreement",
    "Aadhaar Card – Child’s Aadhaar",
    "Immunization Card – Complete vaccination record",
    "Transfer Certificate – Original TC from previous school for Class 2 and above",
    "Report Card – Latest progress report for Class 2 and above"
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumb items={[{ label: 'Information', href: '/information' }, { label: 'Admission Criteria' }]} />
      <PageHeader 
        title="ADMISSION CRITERIA & GUIDELINES" 
        subtitle="Age Criteria, Rules & Regulations, and Required Documents for Session 2026-27"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-10">
        
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-[#10457B] via-[#0B3560] to-[#0A2E52] rounded-2xl p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="bg-[#E9931C] text-[#0B3560] text-xs font-black uppercase px-4 py-1.5 rounded-full tracking-wider mb-3 inline-block shadow">
              SESSION 2026-27
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">
              ADMISSION INFORMATION & ELIGIBILITY
            </h2>
            <p className="text-blue-100 text-sm sm:text-base">
              Sun Flower Public School, Dayalbagh, Agra — Affiliated to CBSE
            </p>
          </div>
          <a
            href="tel:+918899659410"
            className="bg-[#E9931C] hover:bg-amber-500 text-[#0B3560] font-bold px-6 py-3 rounded-xl transition text-center shadow-md whitespace-nowrap text-sm"
          >
            Admission Helpline: +91-8899659410
          </a>
        </div>

        {/* Section A: AGE CRITERIA ( AT THE TIME OF ADMISSION ) */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b-2 border-[#E9931C]">
            <Calendar className="w-6 h-6 text-[#E9931C]" />
            <h2 className="text-xl sm:text-2xl font-bold text-[#10457B]">
              A. AGE CRITERIA ( AT THE TIME OF ADMISSION )
            </h2>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-xs">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-[#10457B] text-white">
                  <th className="py-3 px-4 font-bold w-1/3">CLASS / GRADE</th>
                  <th className="py-3 px-4 font-bold">ELIGIBILITY REQUIREMENT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                {ageCriteriaData.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 1 ? 'bg-slate-50/70' : 'bg-white'}>
                    <td className="py-3 px-4 font-bold text-[#10457B]">{item.grade}</td>
                    <td className="py-3 px-4 font-medium">{item.eligibility}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Class I to IX Details */}
          <div className="bg-amber-50/50 p-6 rounded-xl border border-amber-200/80">
            <h3 className="text-base font-bold text-[#10457B] mb-2 flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-[#E9931C]" />
              CLASS I TO IX:
            </h3>
            <p className="text-slate-800 text-sm sm:text-base leading-relaxed">
              For admission in class I to IX last year’s academic record is considered and the meritorious students are admitted though written exams, interviews after an interaction of the Principal with the parent and the child.
            </p>
          </div>
        </div>

        {/* Section B: RULES AND REGULATION (AT THE TIME OF ADMISSION) */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b-2 border-[#10457B]">
            <Info className="w-6 h-6 text-[#10457B]" />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#10457B]">
                B. RULES AND REGULATION (AT THE TIME OF ADMISSION)
              </h2>
              <span className="text-xs font-semibold text-slate-500">Admission Guidelines – Session 2026-27</span>
            </div>
          </div>

          <div className="space-y-4 text-slate-800 text-sm sm:text-base">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-[#10457B] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                1
              </span>
              <p className="font-semibold text-slate-900 pt-0.5">
                Age Criteria for Admission Cut-off Date:
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-[#10457B] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                2
              </span>
              <p className="text-slate-800 pt-0.5">
                Age will be calculated as on <strong className="text-[#10457B]">31st March 2026</strong> for all classes.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-[#10457B] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                3
              </span>
              <div className="space-y-2 pt-0.5">
                <p>
                  <strong className="text-[#10457B]">Class-wise Eligibility:</strong> As per CBSE norms. Admission forms will mention the minimum & maximum age for each grade.
                </p>
                <p className="text-amber-800 font-semibold bg-amber-50 p-2.5 rounded-lg border border-amber-200/60 text-xs sm:text-sm">
                  <strong>Age Gap:</strong> Admission is not granted if the child’s age exceeds the limit by more than 6 months.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-[#10457B] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                4
              </span>
              <div className="space-y-2 pt-0.5">
                <p>
                  <strong className="text-[#10457B]">Birth Certificate:</strong> Only certificates issued by Municipal Corporation/Government authority will be accepted.
                </p>
                <p className="text-slate-700">
                  <strong className="text-[#10457B]">Early Grades:</strong> Informal interaction with child & parents may be conducted for Nursery to Grade 1.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Documents Required at the Time of Admission */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b-2 border-[#E9931C]">
            <FolderCheck className="w-6 h-6 text-[#E9931C]" />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#10457B]">
                2. DOCUMENTS REQUIRED AT THE TIME OF ADMISSION
              </h2>
              <span className="text-xs font-semibold text-emerald-700 font-medium">Please carry originals:</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {requiredDocuments.map((doc, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="w-6 h-6 rounded-full bg-amber-100 text-[#E9931C] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <p className="text-slate-800 font-medium text-sm sm:text-base leading-relaxed">
                  {doc}
                </p>
              </div>
            ))}
          </div>

          {/* Note Banner */}
          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 flex items-center gap-3 text-[#10457B] text-xs sm:text-sm font-semibold">
            <AlertCircle className="w-5 h-5 text-[#E9931C] flex-shrink-0" />
            <span>Note: School may require scanned copies to be uploaded on the admission portal.</span>
          </div>
        </div>

      </div>
    </div>
  );
}
