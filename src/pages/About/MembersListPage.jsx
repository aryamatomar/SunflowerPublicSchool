import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import { ShieldCheck, AlertCircle, FileText, Phone, Mail, Users } from 'lucide-react';

export default function MembersListPage() {
  const safetyMembers = [
    { srNo: 1, mgmt: "MR ANIMESH DAYAL", teacher: "MRS NEELAM SHARMA", parent: "MR SANJEEV SRIVASTAVA", police: "MR CHANDRA VEER SINGH ( 7830323227)", student: "ARANG SWAROOP" },
    { srNo: 2, mgmt: "DR SHUBHI DAYAL", teacher: "MR HARSH CHELANI", parent: "MRS SHUSHMA RAJPUT", police: "MR SHYAM VIR SINGH ( 8218091086)", student: "AKASH JAIN" },
    { srNo: 3, mgmt: "-", teacher: "MRS KARUNA KULSHRESTHA", parent: "MRS NUPUR PARMAR", police: "-", student: "PRANJAL JAIN" },
    { srNo: 4, mgmt: "-", teacher: "-", parent: "MRS KRISHNA", police: "-", student: "YUGAL AGARWAL ( ALUMNI)" },
    { srNo: 5, mgmt: "-", teacher: "-", parent: "-", police: "-", student: "APOORVI KULSHRESTHA ( ALUMNI)" },
  ];

  const grievanceMembers = [
    { srNo: 1, name: "MRS SHEELA DAYAL", designation: "CHAIRPERSON", mobile: "8899659410", email: "animeshdayal77@gmail.com" },
    { srNo: 2, name: "MR ANIMESH DAYAL", designation: "PRESIDENT", mobile: "9760018105", email: "animeshdayal77@gmail.com" },
    { srNo: 3, name: "DR SHUBHI DAYAL", designation: "ADVISOR", mobile: "9897081051", email: "sfps.agra@gmail.com" },
    { srNo: 4, name: "MRS PAYAL KHATRI", designation: "CONVENOR", mobile: "9319919888", email: "Payalpk3108@gmail.com" },
    { srNo: 5, name: "MRS VATSALA PRABHAKAR", designation: "SOCIAL ACTIVIST", mobile: "9412256391", email: "sfps.agra@gmail.com" },
    { srNo: 6, name: "MRS NAMRATA MISHRA", designation: "POCSO LAWYER", mobile: "8755044400", email: "advocatenamrata@gmail.com" },
    { srNo: 7, name: "MS ADITI BHATT- IX-A", designation: "STUDENT REPESENTATIVE", mobile: "8899659410", email: "sfps.agra@gmail.com" },
    { srNo: 8, name: "MS PRATIBHA SHARMA- X B", designation: "STUDENT REPRESENTATIVE", mobile: "8899659410", email: "sfps.agra@gmail.com" },
  ];

  const harassmentMembers = [
    { srNo: 1, name: "MRS SHEELA DAYAL", designation: "CHAIRPERSON", mobile: "8899659410", email: "animeshdayal77@gmail.com" },
    { srNo: 2, name: "MR ANIMESH DAYAL", designation: "PRESIDENT", mobile: "9760018105", email: "animeshdayal77@gmail.com" },
    { srNo: 3, name: "DR SHUBHI DAYAL", designation: "ADVISOR", mobile: "9897081051", email: "sfps.agra@gmail.com" },
    { srNo: 4, name: "MRS NEELAM SHARMA", designation: "CONVENOR", mobile: "8126543756", email: "heartysmile14@gmail.com" },
    { srNo: 5, name: "MRS VATSALA PRABHAKAR", designation: "MEMBER", mobile: "9412256391", email: "sfps.agra@gmail.com" },
    { srNo: 6, name: "MRS NAMRATA MISHRA", designation: "MEMBER", mobile: "8755044400", email: "advocatenamrata@gmail.com" },
    { srNo: 7, name: "MS PRIYA SAIN- IX-B", designation: "STUDENT REPRESENTATIVE", mobile: "8899659410", email: "sfps.agra@gmail.com" },
    { srNo: 8, name: "MS SHIVANGI- X-A", designation: "STUDENT REPRESENTATIVE", mobile: "8899659410", email: "sfps.agra@gmail.com" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumb items={[{ label: 'About Sunflower' }, { label: 'Members List' }]} />
      <PageHeader 
        title="SCHOOL COMMITTEES & MEMBERS LIST" 
        subtitle="SUNFLOWER PUBLIC SCHOOL DAYALBAGH AGRA — OASIS DETAILS TO FOLLOW"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">

        {/* 1. SCHOOL SAFETY COMMITTEE */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b-2 border-[#10457B]">
            <ShieldCheck className="w-6 h-6 text-[#10457B]" />
            <h2 className="text-xl sm:text-2xl font-bold text-[#10457B]">
              SCHOOL SAFETY COMMITTEE
            </h2>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-[#10457B] text-white">
                  <th className="py-3.5 px-4 font-bold border-b border-slate-200 w-16">SR NO</th>
                  <th className="py-3.5 px-4 font-bold border-b border-slate-200">MANAGEMENT</th>
                  <th className="py-3.5 px-4 font-bold border-b border-slate-200">TEACHERS</th>
                  <th className="py-3.5 px-4 font-bold border-b border-slate-200">PARENT</th>
                  <th className="py-3.5 px-4 font-bold border-b border-slate-200">LOCAL POLICE</th>
                  <th className="py-3.5 px-4 font-bold border-b border-slate-200">STUDENT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                {safetyMembers.map((member) => (
                  <tr key={member.srNo} className={member.srNo % 2 === 0 ? 'bg-slate-50/70' : 'bg-white'}>
                    <td className="py-3.5 px-4 font-extrabold text-[#10457B] whitespace-nowrap">{member.srNo}</td>
                    <td className="py-3.5 px-4 font-bold text-slate-900 whitespace-nowrap">{member.mgmt}</td>
                    <td className="py-3.5 px-4 font-medium text-slate-700 whitespace-nowrap">{member.teacher}</td>
                    <td className="py-3.5 px-4 font-medium text-slate-700 whitespace-nowrap">{member.parent}</td>
                    <td className="py-3.5 px-4 font-semibold text-[#10457B] whitespace-nowrap">{member.police}</td>
                    <td className="py-3.5 px-4 font-bold text-[#E9931C] whitespace-nowrap">{member.student}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 2. GRIEVANCES / COMPLAINT COMMITTEE MEMBERS */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b-2 border-[#E9931C]">
            <AlertCircle className="w-6 h-6 text-[#E9931C]" />
            <h2 className="text-xl sm:text-2xl font-bold text-[#10457B]">
              GRIEVANCES / COMPLAINT COMMITTEE MEMBERS
            </h2>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-[#10457B] text-white">
                  <th className="py-3.5 px-4 font-bold border-b border-slate-200 w-16">SR NO</th>
                  <th className="py-3.5 px-4 font-bold border-b border-slate-200">NAME OF THE MEMBER</th>
                  <th className="py-3.5 px-4 font-bold border-b border-slate-200">DESIGNATION</th>
                  <th className="py-3.5 px-4 font-bold border-b border-slate-200">MOBILE NO.</th>
                  <th className="py-3.5 px-4 font-bold border-b border-slate-200">E- MAIL ID</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                {grievanceMembers.map((member) => (
                  <tr key={member.srNo} className={member.srNo % 2 === 0 ? 'bg-slate-50/70' : 'bg-white'}>
                    <td className="py-3.5 px-4 font-extrabold text-[#10457B] whitespace-nowrap">{member.srNo}</td>
                    <td className="py-3.5 px-4 font-bold text-slate-900 whitespace-nowrap">{member.name}</td>
                    <td className="py-3.5 px-4 font-bold text-[#E9931C] whitespace-nowrap">{member.designation}</td>
                    <td className="py-3.5 px-4 font-semibold text-slate-800 whitespace-nowrap">{member.mobile}</td>
                    <td className="py-3.5 px-4 font-medium text-[#10457B] whitespace-nowrap">{member.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. SEXUAL HARASSMENT COMMITTEE MEMBER */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b-2 border-red-600">
            <Users className="w-6 h-6 text-red-600" />
            <h2 className="text-xl sm:text-2xl font-bold text-[#10457B]">
              SEXUAL HARASSMENT COMMITTEE MEMBERS
            </h2>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-[#10457B] text-white">
                  <th className="py-3.5 px-4 font-bold border-b border-slate-200 w-16">SR NO</th>
                  <th className="py-3.5 px-4 font-bold border-b border-slate-200">NAME OF THE MEMBER</th>
                  <th className="py-3.5 px-4 font-bold border-b border-slate-200">DESIGNATION</th>
                  <th className="py-3.5 px-4 font-bold border-b border-slate-200">MOBILE NO.</th>
                  <th className="py-3.5 px-4 font-bold border-b border-slate-200">E- MAIL ID</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                {harassmentMembers.map((member) => (
                  <tr key={member.srNo} className={member.srNo % 2 === 0 ? 'bg-slate-50/70' : 'bg-white'}>
                    <td className="py-3.5 px-4 font-extrabold text-[#10457B] whitespace-nowrap">{member.srNo}</td>
                    <td className="py-3.5 px-4 font-bold text-slate-900 whitespace-nowrap">{member.name}</td>
                    <td className="py-3.5 px-4 font-bold text-[#E9931C] whitespace-nowrap">{member.designation}</td>
                    <td className="py-3.5 px-4 font-semibold text-slate-800 whitespace-nowrap">{member.mobile}</td>
                    <td className="py-3.5 px-4 font-medium text-[#10457B] whitespace-nowrap">{member.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
