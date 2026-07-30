import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import { ShieldCheck, AlertCircle, FileText, CheckCircle2, Clock, AlertTriangle, ShieldAlert, Award } from 'lucide-react';

export default function CodeOfConduct() {
  const conductRules = [
    "Students must come to school in time. Excuse for coming late and absent will not be entertained for absolutely unavoidable reason, parents will have to justify in written. Without justification next day entry will be prohibited.",
    "Students must come to school in proper school uniform. Students with untidy cloths and improper neatness (like, proper short haircut, nails, bath, well-polished shoes etc.) will not be allowed in school premises. School can return them to home, only the parents will be responsible for his ward safety.",
    "Books are the religious part of our life, students are only responsible to maintain their books and exercise copies, students will be awarded for good maintenance of their stationary but they may also be asked to change/ bind your books in mid-session.",
    "Every student will have to participate in every cultural/religious and patriotic activity.",
    "Student will strictly follow the study time table given by the school.",
    "Discipline, well manners and obedience are the key words for students. School will not bear at any cost an undisciplined, manner less and disobedient student. He/she may be suspended or struck off any time from the school.",
    "All students are liable to support the school to maintain a healthy school culture, discipline, patriotic feeling, and moral character of their junior.",
    "Students must bring their diaries, ID Cards to school every day.",
    "They should be punctual and regular to school.",
    "They should attend Morning Prayer regularly. Important Announcements are made in the morning assembly.",
    "Running in the school building or premises is not allowed.",
    "Students are not allowed to bring any cash, jewelry, mobile phone or any other valuable articles to school. School will not be responsible for any kind of loss.",
    "Student suffering from contagious diseases are not permitted to come to the school till they are completely free from infection (Should produce a medical certificate at the time of resumption).",
    "Students should not damage the school properties. In case of damage a fine of the cost of the damaged article will be imposed.",
    "Students must not come to school on any other self-driven vehicles except bicycles.",
    "Students must never change their bus etc. without the permission of the school authorities.",
    "Students must never stay in the school when not required by teachers or without the knowledge of parents.",
    "Excursion tours, educational camps organized by the school are compulsory for the students.",
    "Exemption can be granted by the Principal only on medical grounds.",
    "All students must reach the school in time. Late comers would not be allowed in classes until they get Principal's permission."
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumb items={[{ label: 'Information' }, { label: 'Code of Conduct' }]} />
      <PageHeader 
        title="CODE OF CONDUCT" 
        subtitle="Official Student Rules, Discipline Standards & Disciplinary Measures"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">

        {/* SECTION A: GENERAL CODE OF CONDUCT & RULES */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck className="w-7 h-7 text-[#E9931C]" />
            <h2 className="text-2xl font-bold text-[#10457B]">CODE OF CONDUCT & GENERAL RULES</h2>
          </div>
          <p className="text-slate-600 text-sm font-medium border-b border-slate-100 pb-4">
            Sun Flower Public School — Official Rules & Guidelines for Students
          </p>

          <div className="space-y-4">
            {conductRules.map((rule, idx) => (
              <div key={idx} className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-amber-300 transition-colors">
                <span className="w-6 h-6 rounded-full bg-[#10457B] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-slate-800 text-base leading-relaxed font-normal">{rule}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION B: DISCIPLINARY MEASURES */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 space-y-8">
          <div className="flex items-center gap-3 mb-2">
            <ShieldAlert className="w-7 h-7 text-red-600" />
            <h2 className="text-2xl font-bold text-[#10457B]">
              B. THE FOLLOWING DISCIPLINARY MEASURES WILL BE ADOPTED BY THE SCHOOL.
            </h2>
          </div>

          {/* List of 4 Measures */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 flex items-start gap-3">
              <span className="font-bold text-[#E9931C] text-lg">1.</span>
              <p className="font-bold text-[#10457B] text-base">ORAL WARNING & COUNSELING.</p>
            </div>
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 flex items-start gap-3">
              <span className="font-bold text-[#E9931C] text-lg">2.</span>
              <p className="font-bold text-[#10457B] text-base">WRITTEN WARNING.</p>
            </div>
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 flex items-start gap-3">
              <span className="font-bold text-[#E9931C] text-lg">3.</span>
              <p className="font-bold text-[#10457B] text-base">ISSUE OF RED & YELLOW CARDS.</p>
            </div>
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 flex items-start gap-3">
              <span className="font-bold text-[#E9931C] text-lg">4.</span>
              <p className="font-bold text-[#10457B] text-base">
                Withdrawal of bus facility for misbehavior in the school bus (Parents will be responsible for picking them up and dropping them to school)
              </p>
            </div>
          </div>

          {/* Detailed Disciplinary Policy Cards */}
          <div className="space-y-6 pt-4 border-t border-slate-100">
            {/* Expulsion Policy */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <h3 className="text-xl font-bold text-[#10457B] flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                Expulsion:
              </h3>
              <p className="text-slate-700 text-base leading-relaxed">
                The student will be warned and counseled for the first time, issued a red card for two subsequent lapses and a yellow card and suspension if unacceptable behavior persists. The issue of two Cards to a student will lead to expulsion. However the Principal retains the right to suspend or expel a student out right if the offence is of a very serious nature. The Principal will have the right to withhold the character certificate of any student whose conduct is not keeping with the rules laid down by the school.
              </p>
            </div>

            {/* Yellow Card Policy */}
            <div className="bg-amber-50/60 p-6 rounded-2xl border border-amber-300 space-y-3">
              <h3 className="text-xl font-bold text-amber-900 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                Yellow Card:
              </h3>
              <p className="text-slate-800 text-base leading-relaxed">
                A student will be issued a Yellow card for missing classes, reporting late to class, constantly interrupting the teaching process and indulging in rude and unacceptable behavior in class. The student will report to the class Teacher for detection during break. Issue of two Red Cards will lead to the award of a Red Card.
              </p>
            </div>

            {/* Red Card Policy */}
            <div className="bg-red-50/60 p-6 rounded-2xl border border-red-300 space-y-3">
              <h3 className="text-xl font-bold text-red-900 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-red-600" />
                Red Card:
              </h3>
              <p className="text-slate-800 text-base leading-relaxed">
                A Red Card holder will not be allowed to avail of any privileges in the school during the period stipulated on the card. The student will not be allowed to attend any program, picnics or outings.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
