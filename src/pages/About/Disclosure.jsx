import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import DocumentCard from '../../components/DocumentCard';
import { Building2, UserCheck, BarChart3, ShieldAlert } from 'lucide-react';

export default function Disclosure() {
  const documents = [
    { title: "Copies of Affiliation / Upgradation Letter / Extension Letter", docUrl: "https://sunfloweragra.com/docs/1-GENERAL%20AFFILIATION%20DOCS.pdf" },
    { title: "Copies of Society / Trust / Company Registration", docUrl: "https://sunfloweragra.com/docs/2-SOCIETY%20TRUST%20DOCS.jpg" },
    { title: "Copy of No Objection Certificate (NOC)", docUrl: "https://sunfloweragra.com/docs/3-NOC%20(1).pdf" },
    { title: "Copies of Recognition Certificate Under RTE Act 2009", docUrl: "https://sunfloweragra.com/docs/4-RTE%20DOCS.jpeg" },
    { title: "Copy of Building Safety Certificate", docUrl: "https://sunfloweragra.com/docs/5-BUILDING%20SAFETY.pdf" },
    { title: "Copy of Fire Safety Certificate", docUrl: "https://sunfloweragra.com/docs/6-FIRE%20AND%20LIFE%20SAFETY%20DOCS.pdf" },
    { title: "Copy of Health Sanitation Certificate", docUrl: "https://sunfloweragra.com/docs/copy-health-sanitation.jpg" },
    { title: "Copy of Self Certification by School", docUrl: "https://sunfloweragra.com/docs/copy-self-declaration.pdf" },
    { title: "Copies of Water and Sanitation Certificates", docUrl: "https://sunfloweragra.com/docs/copy-water-sanitation.pdf" },
    { title: "Faculty Details", docUrl: "https://sunfloweragra.com/docs/Faculty-Details.pdf" },
    { title: "List of School Management Committee (SMC)", docUrl: "https://sunfloweragra.com/docs/SCHOOL%20COMMITTEE%20MEMBERS.pdf" },
    { title: "List of Parent Teachers Associations (PTA)", docUrl: "https://sunfloweragra.com/docs/PARENTS%20TEACHER%20ASSOCIATION.pdf" },
    { title: "Annual Academic Calendar 2026-27", docUrl: "https://sunfloweragra.com/docs/ANNUAL%20ACTIVITY%20CALENDAR%20202627.pdf" }
  ];

  const resultsData = [
    { year: "2020-21", appeared: "52", passed: "52", percentage: "100%" },
    { year: "2021-22", appeared: "61", passed: "59", percentage: "96.7%" },
    { year: "2022-23", appeared: "69", passed: "69", percentage: "100%" },
    { year: "2023-24", appeared: "70", passed: "65", percentage: "96%" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumb items={[{ label: 'Mandatory Disclosure' }, { label: 'General Information' }]} />
      <PageHeader 
        title="Mandatory Disclosure & Information" 
        subtitle="Public disclosures as required by CBSE guidelines and Central Board of Secondary Education"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-10">
        
        {/* General Information Table */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-6 h-6 text-[#E9931C]" />
            <h2 className="text-2xl font-bold text-[#10457B]">GENERAL INFORMATION</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-3 font-semibold text-[#10457B] w-1/3">1). NAME OF THE SCHOOL</td>
                  <td className="py-3 text-slate-700">Sunflower Public School</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <td className="py-3 font-semibold text-[#10457B]">2). AFFILIATION NO</td>
                  <td className="py-3 text-slate-700 font-mono font-semibold">2131168</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 font-semibold text-[#10457B]">3). SCHOOL CODE</td>
                  <td className="py-3 text-slate-700 font-mono font-semibold">60520</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <td className="py-3 font-semibold text-[#10457B]">4). ADDRESS WITH PINCODE</td>
                  <td className="py-3 text-slate-700">Ellora Enclave Dayalbagh Agra - 282005</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 font-semibold text-[#10457B]">5). PRINCIPAL NAME & QUALIFICATION</td>
                  <td className="py-3 text-slate-700">Dr. Shubhi Dayal (M.Sc, M.Ed, PhD)</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <td className="py-3 font-semibold text-[#10457B]">6). EMAIL ID</td>
                  <td className="py-3 text-slate-700">sfps.agra@gmail.com, animeshdayal77@gmail.com</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-[#10457B]">7). PHONE / MOBILE</td>
                  <td className="py-3 text-slate-700">+91-8899659410</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Teaching Staff Details */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <UserCheck className="w-6 h-6 text-[#E9931C]" />
            <h2 className="text-2xl font-bold text-[#10457B]">STAFF (TEACHING)</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-3 font-semibold text-[#10457B] w-1/2">1). PRINCIPAL</td>
                  <td className="py-3 text-slate-700 font-bold">01</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <td className="py-3 font-semibold text-[#10457B]">2). TOTAL NUMBER OF TEACHERS</td>
                  <td className="py-3 text-slate-700 font-bold">45</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 font-semibold text-[#10457B]">3). DETAILS OF SPECIAL SECTION EDUCATOR</td>
                  <td className="py-3 text-slate-700 font-bold">01</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-[#10457B]">4). DETAILS OF COUNSELLOR AND WELLNESS TEACHER</td>
                  <td className="py-3 text-slate-700 font-bold">01</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Infrastructure Information */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-6 h-6 text-[#E9931C]" />
            <h2 className="text-2xl font-bold text-[#10457B]">INFRASTRUCTURE INFORMATION</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-3 font-semibold text-[#10457B] w-1/2">1). TOTAL CAMPUS AREA OF THE SCHOOL</td>
                  <td className="py-3 text-slate-700">6688 sq. mt.</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <td className="py-3 font-semibold text-[#10457B]">2). NO AND SIZE OF THE CLASS ROOMS</td>
                  <td className="py-3 text-slate-700">25x20 sq. mt.</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 font-semibold text-[#10457B]">3). NO AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS</td>
                  <td className="py-3 text-slate-700">3 Laboratories</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <td className="py-3 font-semibold text-[#10457B]">4). INTERNET FACILITY</td>
                  <td className="py-3 text-emerald-600 font-bold">Yes</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 font-semibold text-[#10457B]">5). NO OF GIRLS TOILETS</td>
                  <td className="py-3 text-slate-700 font-bold">14</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-[#10457B]">6). NO OF BOYS TOILETS</td>
                  <td className="py-3 text-slate-700 font-bold">14</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Board Examination Results Class X */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="w-6 h-6 text-[#E9931C]" />
            <h2 className="text-2xl font-bold text-[#10457B]">RESULT CLASS X (LAST THREE YEARS)</h2>
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
                {resultsData.map((res, i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-slate-50/50' : ''}>
                    <td className="py-3 px-4 font-bold text-[#10457B]">{i + 1}.</td>
                    <td className="py-3 px-4 font-semibold">{res.year}</td>
                    <td className="py-3 px-4">{res.appeared}</td>
                    <td className="py-3 px-4">{res.passed}</td>
                    <td className="py-3 px-4 font-bold text-emerald-600">{res.percentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mandatory Disclosure Documents Grid */}
        <div>
          <h2 className="text-2xl font-bold text-[#10457B] mb-6 pb-2 border-b-2 border-[#E9931C] inline-block">
            MANDATORY DISCLOSURE DOCUMENTS & CERTIFICATES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc, idx) => (
              <DocumentCard key={idx} title={doc.title} docUrl={doc.docUrl} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
