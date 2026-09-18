import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import DocumentCard from '../../components/DocumentCard';
import { BookOpen, FileText, ExternalLink, Download, Sparkles, CheckCircle2, Layers, FolderOpen } from 'lucide-react';

export default function SyllabusPage() {
  const syllabusDriveUrl = "https://drive.google.com/drive/folders/1ABJ_gJ6ttGtaUzh3RTIwpGur3XzinDvG?usp=drive_link";

  const academicStages = [
    {
      stage: "Foundational & Pre-Primary",
      classes: "Nursery, LKG, UKG",
      focus: "Activity-based learning, foundational literacy & numeracy, cognitive play, and creative expression.",
      color: "bg-blue-50 border-blue-200 text-[#10457B]"
    },
    {
      stage: "Preparatory & Primary",
      classes: "Classes I to V",
      focus: "Conceptual clarity, language skills (English, Hindi), Mathematics, EVS, and Computational Thinking.",
      color: "bg-amber-50 border-amber-200 text-[#0B3560]"
    },
    {
      stage: "Middle School",
      classes: "Classes VI to VIII",
      focus: "Three-language formula (R1, R2, R3 - Sanskrit), Science, Social Science, Mathematics, and foundational AI.",
      color: "bg-emerald-50 border-emerald-200 text-emerald-800"
    },
    {
      stage: "Secondary School",
      classes: "Classes IX & X",
      focus: "CBSE board curriculum, vocational education, competency-based questions, and practical science labs.",
      color: "bg-purple-50 border-purple-200 text-purple-800"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumb items={[{ label: 'Academics', href: '/academics' }, { label: 'Syllabus' }]} />
      <PageHeader 
        title="School Syllabus 2026-27" 
        subtitle="Comprehensive Class-Wise & Subject-Wise Curriculum Framework"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-10">
        
        {/* Main Syllabus Action Banner */}
        <div className="bg-gradient-to-r from-[#10457B] via-[#0B3560] to-[#0A2E52] rounded-2xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="bg-[#E9931C] text-[#0B3560] text-xs font-black uppercase px-4 py-1.5 rounded-full tracking-wider inline-block shadow">
              OFFICIAL SYLLABUS REPOSITORY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Class-Wise Syllabus & Curriculum Plans
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Access the complete, updated class-by-class syllabus documents for all subjects from Pre-Primary through Class X.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
            <a
              href={syllabusDriveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#E9931C] hover:bg-amber-500 text-[#0B3560] font-bold text-sm rounded-xl shadow-md transition-all duration-200"
            >
              <FolderOpen className="w-4 h-4" />
              <span>Open Syllabus Drive</span>
            </a>
          </div>
        </div>

        {/* Download / Access Resource Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b-2 border-[#E9931C]">
            <FileText className="w-6 h-6 text-[#E9931C]" />
            <h2 className="text-xl sm:text-2xl font-bold text-[#10457B]">
              SYLLABUS DOWNLOAD & DOCUMENT ACCESS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DocumentCard 
              title="Official School Syllabus (All Classes)"
              description="Complete class-wise syllabus PDFs, curriculum guidelines, and subject breakdowns."
              docUrl={syllabusDriveUrl}
            />

            <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-200/80 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#10457B] mb-2">
                  Curriculum & Syllabus Guidelines
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                  The syllabus follows the CBSE curriculum aligned with NEP 2020 and NCF 2023 norms. Students and parents can access subject-wise blueprints, periodic test syllabi, and annual assessment scopes from the official Google Drive repository.
                </p>
              </div>

              <div className="pt-3 border-t border-amber-200/60 flex items-center justify-between text-xs text-[#10457B] font-semibold">
                <span>Session: 2026-27</span>
                <span className="text-[#E9931C] font-bold">CBSE Affiliated (No. 2131168)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Stages Overview */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
          <h2 className="text-2xl font-bold text-[#10457B] pb-2 border-b-2 border-[#E9931C] inline-block">
            ACADEMIC STAGES & LEARNING FOCUS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {academicStages.map((stage, idx) => (
              <div key={idx} className={`p-6 rounded-2xl border ${stage.color} flex flex-col justify-between space-y-4`}>
                <div>
                  <span className="text-xs font-black uppercase tracking-wider block mb-1">
                    {stage.classes}
                  </span>
                  <h3 className="text-lg font-bold mb-2">
                    {stage.stage}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed opacity-90">
                    {stage.focus}
                  </p>
                </div>
                <div className="pt-2 border-t border-current/20 flex items-center gap-1 text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Aligned with CBSE</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
