import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import PersonPlaceholder from '../../components/PersonPlaceholder';

export default function Principal() {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumb items={[{ label: 'About Sunflower' }, { label: 'Principal\'s Message' }]} />
      <PageHeader 
        title="Principal's Message" 
        subtitle="Dr. Shubhi Dayal (M.Sc, M.Ed, PhD) — Principal, Sun Flower Public School"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <PersonPlaceholder name="Dr. Shubhi Dayal" title="Principal (M.Sc, M.Ed, PhD)" />
          </div>
          <div className="lg:col-span-8 space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
            <h3 className="text-2xl font-bold text-[#10457B] pb-2 border-b border-slate-200">
              PRINCIPAL'S MESSAGE
            </h3>
            <p>
              We at Sun Flower believe in nurturing the child in the radiance of the Sun Flower Philosophy and Sun Flower ` Vision summed up in the school motto “Come to Learn, Go to Serve". It gives me immense joy to see that our school has, over the years, acquired the true mark of excellence, not only in the field of academic Learning, but in all areas of educational activity. Youth resonates with infinite potential. Youth is our future. I believe that the students' accomplishments will exceed our wildest dreams.
            </p>
            <p>
              "The school is in constant and continuous process of educating and enhancing the students' personality and knowledge, infusing them with a greater degree of confidence and poise than what their predecessors gained from the school.
            </p>
            <p>
              Alongwith imparting value -based education and making them technologically vibrant we are resolved to stand with the marginalized and less fortunate , to work together in caring for our earth its flora and fauna and in educating others in the responsible use of its resources . we hope thus , to be instruments of reconciliation , pardon and compassion . we cannot underestimate the importance of this mission because our very existence tomorrow depends on it and our capacity to counter the negative impact of societal trends towords violence and materialism. We have reflected a kaleidoscope of learning , adventure , creativity and positive approach of our young minds through writing and drawing. I hope this effort of our young minds will serve as a stepping stone towards the many milestone we have to cover in pursuit of excellence.Children have an impressionable mind full of curiosity and sensitivity, always seeking avenues to express their ideas. I have been striving to sharpen the quality of that consciousness and urge in them to excel by providing opportunities through their school, for tapping this potential.
            </p>
            <p>
              God bless you all
            </p>
            <div className="pt-4 font-bold text-[#10457B]">
              <p className="text-xl">Dr. Shubhi Dayal</p>
              <p className="text-slate-500 font-normal">(Principal)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
