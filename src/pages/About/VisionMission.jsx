import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import { Eye, Target, Compass, Sparkles } from 'lucide-react';

export default function VisionMission() {
  const missionPoints = [
    "Sunflower Public School is commited to provide Effective teaching & Learning experiences.",
    "To provide an innovative, collaborative &an inclusive learning environment where each student is empowered to create & shape their own future.",
    "Aims to inspire students to become passionate learners, critical thinkers& contribute to attain a sustainable & peaceful nation.",
    "To prepare students not just for exams but for life beyond the classrooms.",
    "To motivate students to foster a love of learning& to become capable of bringing a significant positive change in society.",
    "Providing exposure to the latest technology & harvesting their innate talents,enabling them to become self reliant & confident human being to develop collaborative approach among teachers to promote community & collective growth.",
    "Providing teachers with professional development program & continuous learning to meet the challenges of tomorrow."
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumb items={[{ label: 'About Sunflower' }, { label: 'Vision & Mission' }]} />
      <PageHeader 
        title="Vision, Mission & Objective" 
        subtitle="Our core foundation and educational commitment to shape young minds"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 relative overflow-hidden flex flex-col justify-between">
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-[#E9931C] mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#10457B] mb-4">Our Vision</h2>
              <p className="text-slate-700 leading-relaxed text-base">
                With the motto of school come to learn & go to serve, Sunflower Public School sets a vision to provide holistic development of every individual with inclusive , collaborative, equitable learning environment,aiming to maintain high standards of education so that a child must be equipped well to meet the challenges of tomorrow & thereby contributing in global well being & serving for the sustainable development of nation.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 lg:col-span-2">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#10457B] mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#10457B] mb-4">Our Mission</h2>
            <ul className="space-y-3">
              {missionPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700 text-base">
                  <span className="w-2 h-2 rounded-full bg-[#E9931C] mt-2 flex-shrink-0"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Objective */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
          <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-[#E9931C] mb-6">
            <Compass className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-[#10457B] mb-4">Our Objective</h2>
          <p className="text-slate-700 leading-relaxed text-lg mb-4">
            Education shall aim for the full development of personality and strive to nature the citizens, sound in mind and body, who are imbued with the qualities necessary for those who form a peaceful and democratic state and society.
          </p>
          <p className="text-slate-700 leading-relaxed text-lg">
            To develop the abilities of individuals while respecting their values, cultivate their creativity; foster a spirit of autonomy and indepedence, to value justice, to value labor while emphasizing the connections with career and Practical Life.
          </p>
        </div>
      </div>
    </div>
  );
}
