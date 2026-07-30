import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import PersonPlaceholder from '../../components/PersonPlaceholder';

export default function Director() {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumb items={[{ label: 'About Sunflower' }, { label: 'Director\'s Message' }]} />
      <PageHeader 
        title="Director's Message" 
        subtitle="Mrs. Sheela Dayal — Director, Sun Flower Public School"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <PersonPlaceholder name="Mrs. Sheela Dayal" title="Director" />
          </div>
          <div className="lg:col-span-8 space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
            <h3 className="text-2xl font-bold text-[#10457B] pb-2 border-b border-slate-200">
              DIRECTOR'S MESSAGE
            </h3>
            <p>
              With immense pride and great pleasure I welcome you to the school’s website. You could be a parent, a student, a staff member or anyone interested in gaining deeper insights into the functioning and learning environment of our exciting world. I invite you to navigate through our ‘online school’ to help you understand lucidly why our school provides the best environment for your little ones and young adults. Right from its inception to now, our institution has marched forward to spread the light of education and pave the path of academic excellence for every student. The key focus areas continue to remain - creating opportunities, challenging minds, encouraging innovation and sustaining excitement.
            </p>
            <p>
              Our school’s objective is to continue being recognized as a torch bearer of leading education methods and an institution that has students defining a future not only for them but for the world as well. We have and will continually strive for brighter and more secure prospects for our children.
            </p>
            <p>
              The values and environment we provide for our children are sustainable and see them successfully through their formative years. The investment we put in to our children today will help them achieve greater heights and create the unimaginable. My sincere thanks to the school’s Principal, teachers and other staff members without whom these successes – big and small – would not be possible. They not only teach the children the subjects but also inculcate values of commitment, zealousness and pride in everything they do.
            </p>
            <p>
              Once again I welcome you and sincerely hope that our website will rouse your interest and encourage you to take a step towards making one more positive difference in your life.
            </p>
            <p>
              Thank you and stay blessed.
            </p>
            <div className="pt-4 font-bold text-[#10457B]">
              <p className="text-xl">Mrs. Sheela Dayal</p>
              <p className="text-slate-500 font-normal">(Director)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
