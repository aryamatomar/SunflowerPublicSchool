import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import DocumentCard from '../../components/DocumentCard';
import { CreditCard, FileText, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function FeeStructure() {
  const feeData = [
    {
      classRange: "NUR to UKG",
      monthly: "2680.00",
      aprJune: "8040.00",
      julySeptBase: "8040",
      julySeptExam: "500",
      julySeptTotal: "8540.00",
      octDec: "8040.00",
      janMarBase: "8040",
      janMarExam: "500",
      janMarTotal: "8540.00"
    },
    {
      classRange: "I to V",
      monthly: "2716.00",
      aprJune: "8150.00",
      julySeptBase: "8150",
      julySeptExam: "500",
      julySeptTotal: "8650.00",
      octDec: "8150.00",
      janMarBase: "8150",
      janMarExam: "500",
      janMarTotal: "8650.00"
    },
    {
      classRange: "VI to VIII",
      monthly: "2750.00",
      aprJune: "8250.00",
      julySeptBase: "8250",
      julySeptExam: "500",
      julySeptTotal: "8750.00",
      octDec: "8250.00",
      janMarBase: "8250",
      janMarExam: "500",
      janMarTotal: "8750.00"
    },
    {
      classRange: "IX to X",
      monthly: "3250.00",
      aprJune: "9750.00",
      julySeptBase: "9750",
      julySeptExam: "500",
      julySeptTotal: "10250.00",
      octDec: "9750.00",
      janMarBase: "9750",
      janMarExam: "500",
      janMarTotal: "10250.00"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumb items={[{ label: 'Information' }, { label: 'Fee Structure' }]} />
      <PageHeader 
        title="FEE STRUCTURE FOR SESSION 2026-27" 
        subtitle="Sun Flower Public School — Allora Enclave, Dayalbagh, Agra"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-10">

        {/* Admission Fee Highlight Card */}
        <div className="bg-gradient-to-r from-[#10457B] to-[#1a5b9c] rounded-2xl p-6 sm:p-8 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#E9931C] text-[#10457B] rounded-xl flex items-center justify-center flex-shrink-0 font-bold">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">ADMISSION FEE</h2>
              <p className="text-blue-100 text-sm">One-time registration fee for new admissions</p>
            </div>
          </div>
          <div className="bg-white text-[#10457B] px-6 py-3 rounded-xl font-black text-2xl shadow-inner tracking-wide">
            Rs. 8500/-
          </div>
        </div>

        {/* Responsive Fee Table Container */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-[#E9931C]" />
            <h3 className="text-2xl font-bold text-[#10457B]">Quarterly Fee Schedule 2026-27</h3>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-[#10457B] text-white">
                  <th className="py-4 px-4 font-bold border-b border-slate-200">Class / Category</th>
                  <th className="py-4 px-4 font-bold border-b border-slate-200">Monthly</th>
                  <th className="py-4 px-4 font-bold border-b border-slate-200">Apr. - June</th>
                  <th className="py-4 px-4 font-bold border-b border-slate-200">July - Sept.</th>
                  <th className="py-4 px-4 font-bold border-b border-slate-200">Oct. - Dec.</th>
                  <th className="py-4 px-4 font-bold border-b border-slate-200">Jan. - Mar.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                {feeData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 1 ? 'bg-slate-50/70' : 'bg-white'}>
                    <td className="py-4 px-4 font-extrabold text-[#10457B] whitespace-nowrap">
                      {row.classRange}
                    </td>
                    <td className="py-4 px-4 font-semibold text-slate-700 whitespace-nowrap">
                      ₹{row.monthly}
                    </td>
                    <td className="py-4 px-4 font-semibold text-slate-700 whitespace-nowrap">
                      ₹{row.aprJune}
                    </td>
                    <td className="py-4 px-4 text-xs sm:text-sm whitespace-nowrap">
                      <span className="text-slate-600">₹{row.julySeptBase} + ₹{row.julySeptExam} Exam Fee</span>
                      <div className="font-extrabold text-[#10457B] text-base">₹{row.julySeptTotal}</div>
                    </td>
                    <td className="py-4 px-4 font-semibold text-slate-700 whitespace-nowrap">
                      ₹{row.octDec}
                    </td>
                    <td className="py-4 px-4 text-xs sm:text-sm whitespace-nowrap">
                      <span className="text-slate-600">₹{row.janMarBase} + ₹{row.janMarExam} Exam Fee</span>
                      <div className="font-extrabold text-[#10457B] text-base">₹{row.janMarTotal}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Downloads Link */}
        <div>
          <h3 className="text-xl font-bold text-[#10457B] mb-4 pb-2 border-b-2 border-[#E9931C] inline-block">
            DOWNLOADABLE FEE DOCUMENT
          </h3>
          <div className="max-w-md">
            <DocumentCard 
              title="Fee Structure & Fee Rules 2026-27" 
              docUrl="https://sunfloweragra.com/docs/fee-structure.jpg" 
            />
          </div>
        </div>

      </div>
    </div>
  );
}
