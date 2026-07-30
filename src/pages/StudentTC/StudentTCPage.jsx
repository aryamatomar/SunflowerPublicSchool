import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import PlaceholderContent from '../../components/PlaceholderContent';
import { FileText } from 'lucide-react';

export default function StudentTCPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumb items={[{ label: 'Student TC' }]} />
      <PageHeader 
        title="Student Transfer Certificate (TC)" 
        subtitle="Transfer Certificate application and verification guidelines"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-10">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-6 h-6 text-[#E9931C]" />
            <h2 className="text-2xl font-bold text-[#10457B]">Transfer Certificate Guidelines</h2>
          </div>
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            Parents seeking Transfer Certificate (TC) for their children must submit a written application to the Principal along with clear dues receipt from the accounts section. The Permanent Education Number (PEN) will be updated accordingly.
          </p>
        </div>

        {/* Placeholder Notice for TC Verification Database */}
        <PlaceholderContent title="Student TC Search & Online Verification Portal" />
      </div>
    </div>
  );
}
