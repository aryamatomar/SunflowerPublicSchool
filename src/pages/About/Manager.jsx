import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import PersonPlaceholder from '../../components/PersonPlaceholder';

export default function Manager() {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumb items={[{ label: 'About Sunflower' }, { label: 'Manager\'s Message' }]} />
      <PageHeader 
        title="Manager's Message" 
        subtitle="Mr. Animesh Dayal — Manager, Sun Flower Public School"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <PersonPlaceholder name="Mr. Animesh Dayal" title="Manager" />
          </div>
          <div className="lg:col-span-8 space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
            <h3 className="text-2xl font-bold text-[#10457B] pb-2 border-b border-slate-200">
              MESSAGE FROM DESK
            </h3>
            <p className="font-semibold text-slate-800">
              Warm Wishes !
            </p>
            <p>
              It is my privilege to write a short message for the Website of Sunflower Public School Dayalbagh, Agra. We live in a world of amazingly fast, instant and high-speed exchange of information and knowledge. And also we can make use of the technological advantages for the development of our school, staff and students. For students of Sunflower too, past and present as well as the many well wishers of this noble institution, the quick and immediate access to the school website can bring their beloved children of Sunflower closer to their hearts wherever they might be in this beautiful world.
            </p>
            <p>
              I take this opportunity to congratulate the principal, staff, students and parents for their strong sense of commitment, service and responsibility that has transformed this institution into an outstanding and significant temple of learning today. Sunflower has tried its best to excel in all departments of its students’ growth. The specialty of this institute is that it has made quality education accessible to all, thanks to the highly motivated staff and the availability of quality infrastructure.
            </p>
            <p>
              I pray that the Almighty God continues to bless this school as well as all the members of the Sunflower family, including the students, parents, and all those associated with this institution.
            </p>
            <div className="pt-4 font-bold text-[#10457B]">
              <p className="text-xl">Mr. Animesh Dayal</p>
              <p className="text-slate-500 font-normal">(Manager)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
