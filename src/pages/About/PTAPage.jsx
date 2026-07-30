import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import DocumentCard from '../../components/DocumentCard';
import { Users, UserCheck, HeartHandshake } from 'lucide-react';

export default function PTAPage() {
  const staffPta = [
    { srNo: 1, name: "MR ANIMESH DAYAL", designation: "MANAGER", position: "CHAIRMAN" },
    { srNo: 2, name: "DR SHUBHI DAYAL", designation: "PRINCIPAL", position: "SECRETARY" },
    { srNo: 3, name: "MRS KARUNA KULSHRESTHA", designation: "COORDINATOR", position: "MEMBER" },
    { srNo: 4, name: "MRS BABITA PRINJA", designation: "COORDINATOR", position: "MEMBER" },
    { srNo: 5, name: "MRS TRIVENI SRIVASTAVA", designation: "CLASS TEACHER", position: "MEMBER" },
    { srNo: 6, name: "MRS VANDANA SHARMA", designation: "CLASS TEACHER", position: "MEMBER" },
    { srNo: 7, name: "MRS SHIPRA JAIN", designation: "CLASS TEACHER", position: "MEMBER" },
    { srNo: 8, name: "MRS PRIYANKA KHANDELWAL", designation: "CLASS TEACHER", position: "MEMBER" },
    { srNo: 9, name: "MRS SONALI DAS", designation: "CLASS TEACHER", position: "MEMBER" },
    { srNo: 10, name: "MRS ALIKA SINHA", designation: "CLASS TEACHER", position: "MEMBER" },
    { srNo: 11, name: "MR SHIVAM SRIVASTAVA", designation: "CLASS TEACHER", position: "MEMBER" },
  ];

  const parentPta = [
    { srNo: 12, studentName: "ADVAIT JAIN", parentName: "MR AMIT JAIN", position: "MEMBER" },
    { srNo: 13, studentName: "DAKSH AGARWAL", parentName: "MR GAURAV AGARWAL", position: "MEMBER" },
    { srNo: 14, studentName: "SURBANI PANDIT", parentName: "MRS NEETU PANDIT", position: "MEMBER" },
    { srNo: 15, studentName: "SHAILJA KUMARI", parentName: "MR MANISH KUMAR", position: "MEMBER" },
    { srNo: 16, studentName: "ARANG SWAROOP", parentName: "MRS SHUSHMA", position: "MEMBER" },
    { srNo: 19, studentName: "SAMARTH TOMAR", parentName: "MRS NIKITA", position: "MEMBER" },
    { srNo: 20, studentName: "SHIVANSH", parentName: "MRS NUPUR", position: "MEMBER" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumb items={[{ label: 'About Sunflower' }, { label: 'Parent Teacher Association (PTA)' }]} />
      <PageHeader 
        title="PARENT TEACHER ASSOCIATION" 
        subtitle="SUNFLOWER PUBLIC SCHOOL DAYALBAGH AGRA — OASIS DETAILS TO FOLLOW"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-10">

        {/* Staff / Management Committee Members Table */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b-2 border-[#E9931C]">
            <UserCheck className="w-6 h-6 text-[#E9931C]" />
            <h2 className="text-xl sm:text-2xl font-bold text-[#10457B]">
              SCHOOL STAFF & MANAGEMENT REPRESENTATIVES IN PTA
            </h2>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-[#10457B] text-white">
                  <th className="py-3.5 px-4 font-bold border-b border-slate-200 w-16">SR NO</th>
                  <th className="py-3.5 px-4 font-bold border-b border-slate-200">NAME OF THE MEMBER</th>
                  <th className="py-3.5 px-4 font-bold border-b border-slate-200">DESIGNATION</th>
                  <th className="py-3.5 px-4 font-bold border-b border-slate-200">POSITION IN PTA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                {staffPta.map((member) => (
                  <tr key={member.srNo} className={member.srNo % 2 === 0 ? 'bg-slate-50/70' : 'bg-white'}>
                    <td className="py-3.5 px-4 font-extrabold text-[#10457B] whitespace-nowrap">{member.srNo}</td>
                    <td className="py-3.5 px-4 font-bold text-slate-900 whitespace-nowrap">{member.name}</td>
                    <td className="py-3.5 px-4 font-medium text-slate-700 whitespace-nowrap">{member.designation}</td>
                    <td className="py-3.5 px-4 font-bold text-[#E9931C] whitespace-nowrap">{member.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Parent & Student Representatives Table */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b-2 border-[#10457B]">
            <HeartHandshake className="w-6 h-6 text-[#10457B]" />
            <h2 className="text-xl sm:text-2xl font-bold text-[#10457B]">
              PARENT & STUDENT REPRESENTATIVES IN PTA
            </h2>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-[#10457B] text-white">
                  <th className="py-3.5 px-4 font-bold border-b border-slate-200 w-16">SR NO</th>
                  <th className="py-3.5 px-4 font-bold border-b border-slate-200">STUDENTS NAME</th>
                  <th className="py-3.5 px-4 font-bold border-b border-slate-200">PARENT'S NAME</th>
                  <th className="py-3.5 px-4 font-bold border-b border-slate-200">POSITION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                {parentPta.map((member) => (
                  <tr key={member.srNo} className={member.srNo % 2 === 1 ? 'bg-slate-50/70' : 'bg-white'}>
                    <td className="py-3.5 px-4 font-extrabold text-[#10457B] whitespace-nowrap">{member.srNo}</td>
                    <td className="py-3.5 px-4 font-bold text-slate-900 whitespace-nowrap">{member.studentName}</td>
                    <td className="py-3.5 px-4 font-medium text-slate-700 whitespace-nowrap">{member.parentName}</td>
                    <td className="py-3.5 px-4 font-bold text-[#E9931C] whitespace-nowrap">{member.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Downloadable Document Attachment */}
        <div>
          <h3 className="text-xl font-bold text-[#10457B] mb-4 pb-2 border-b-2 border-[#E9931C] inline-block">
            OFFICIAL PTA DOCUMENT ATTACHMENT
          </h3>
          <div className="max-w-md">
            <DocumentCard 
              title="List of Parent Teachers Associations (PTA) PDF" 
              docUrl="https://sunfloweragra.com/docs/PARENTS%20TEACHER%20ASSOCIATION.pdf" 
            />
          </div>
        </div>

      </div>
    </div>
  );
}
