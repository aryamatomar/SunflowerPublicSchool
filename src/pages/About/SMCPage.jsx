import React, { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import DocumentCard from '../../components/DocumentCard';
import { Users, Search, Building2, Download } from 'lucide-react';

export default function SMCPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const smcMembers = [
    { srNo: 1, name: "MRS. SHEELA DAYAL", spouseFather: "NANAK PRASAD", designation: "PRESIDENT" },
    { srNo: 2, name: "MR ANIMESH DAYAL", spouseFather: "DAYAL SARAN", designation: "MANAGER/ SECRETARY" },
    { srNo: 3, name: "NEELIMA", spouseFather: "S B JAUHARI", designation: "DY. MANAGER/ DY. SECRETARY" },
    { srNo: 4, name: "PREETI SAINI", spouseFather: "ASHISH SAINI", designation: "TREASURER" },
    { srNo: 5, name: "SANT PRASAD", spouseFather: "RAMA SHANKAR", designation: "AUDITOR" },
    { srNo: 6, name: "PARUL SAXENA", spouseFather: "LATE. NAGENDRA SAXENA", designation: "MEMBER" },
    { srNo: 7, name: "ADITI SHARAN", spouseFather: "S SAREAN", designation: "FEMALE WELFARE MEMBER" },
    { srNo: 8, name: "KARUNA KULSHRESTHA", spouseFather: "PRAVEEN KULSHRESHTHA", designation: "TEACHER REPRESENTATIVE" },
    { srNo: 9, name: "RAMVEER SINGH", spouseFather: "PRINCIPAL J N V KOLARA KALAN AGRA", designation: "CBSE REPRESENTATIVE" },
    { srNo: 10, name: "SUDHAKARAN P V", spouseFather: "PRINCIPAL K V NO 2 AGRA CANTT AGRA", designation: "CBSE REPRESENTATIVE" },
    { srNo: 11, name: "DR SHUBHI DAYAL", spouseFather: "MR SANT PRASAD", designation: "PRINCIPAL/ OFFICE SECRETARY" },
    { srNo: 12, name: "DR VINOD ROY", spouseFather: "D I O S AGRA", designation: "GOVERNMENT REPRESETATIVE" },
    { srNo: 13, name: "DHIRENDRA SINGH", spouseFather: "VIR BHAN SINGH", designation: "EDUCATIONIST MEMBER" },
    { srNo: 14, name: "JANAK NANDINI", spouseFather: "SUMIT UPADHYAYA", designation: "EDUCATIONIST MEMBER" },
    { srNo: 15, name: "POOJA CHABBRA", spouseFather: "AMIT KUMAR", designation: "EDUCATIONIST MEMBER" },
    { srNo: 16, name: "SONALI DAS", spouseFather: "DIVYATOSH DAS", designation: "EDUCATIONIST MEMBER" },
  ];

  const filteredMembers = smcMembers.filter(m => 
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.spouseFather.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.designation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumb items={[{ label: 'About Sunflower' }, { label: 'School Management Committee (SMC)' }]} />
      <PageHeader 
        title="SCHOOL COMMITTEE MEMBERS – 2026-2027" 
        subtitle="SUNFLOWER PUBLIC SCHOOL DAYALBAGH AGRA — OASIS DETAILS TO FOLLOW"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-10">

        {/* Overview Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-50 text-[#E9931C] rounded-xl flex items-center justify-center font-bold flex-shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#10457B]">School Management Committee (SMC)</h2>
              <p className="text-slate-600 text-sm">Official Committee Members List for Academic Session 2026-2027</p>
            </div>
          </div>
          <div className="w-full md:w-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search member name or designation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-72 pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#10457B] text-sm"
              />
            </div>
          </div>
        </div>

        {/* Responsive SMC Table Container */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b-2 border-[#E9931C]">
            <h3 className="text-xl font-bold text-[#10457B]">Official SMC Members List</h3>
            <span className="text-xs font-semibold bg-blue-50 text-[#10457B] px-3 py-1 rounded-full">
              Total Members: {smcMembers.length}
            </span>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-[#10457B] text-white">
                  <th className="py-3.5 px-4 font-bold border-b border-slate-200 w-16">SR NO</th>
                  <th className="py-3.5 px-4 font-bold border-b border-slate-200">NAME OF THE MEMBER</th>
                  <th className="py-3.5 px-4 font-bold border-b border-slate-200">FATHER/ SPOUSE NAME</th>
                  <th className="py-3.5 px-4 font-bold border-b border-slate-200">DESIGNATION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                {filteredMembers.length > 0 ? (
                  filteredMembers.map((member) => (
                    <tr key={member.srNo} className={member.srNo % 2 === 0 ? 'bg-slate-50/70' : 'bg-white'}>
                      <td className="py-3.5 px-4 font-extrabold text-[#10457B] whitespace-nowrap">{member.srNo}</td>
                      <td className="py-3.5 px-4 font-bold text-slate-900 whitespace-nowrap">{member.name}</td>
                      <td className="py-3.5 px-4 font-medium text-slate-700 whitespace-nowrap">{member.spouseFather}</td>
                      <td className="py-3.5 px-4 font-bold text-[#E9931C] whitespace-nowrap">{member.designation}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-slate-500 font-medium">
                      No members match your search criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Downloadable Official PDF Card */}
        <div>
          <h3 className="text-xl font-bold text-[#10457B] mb-4 pb-2 border-b-2 border-[#E9931C] inline-block">
            OFFICIAL SMC DOCUMENT ATTACHMENT
          </h3>
          <div className="max-w-md">
            <DocumentCard 
              title="List of School Management Committee (SMC) PDF" 
              docUrl="https://sunfloweragra.com/docs/SCHOOL%20COMMITTEE%20MEMBERS.pdf" 
            />
          </div>
        </div>

      </div>
    </div>
  );
}
