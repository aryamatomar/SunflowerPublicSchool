import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import { Award, CheckCircle, ShieldCheck, HeartHandshake, Lightbulb, Users } from 'lucide-react';

export default function Journey() {
  const uniqueFeatures = [
    {
      title: "1). Individual Attention",
      desc: "Highly qualified and well experienced teaching staff nurture the children with the best of their abilities, individual attention is given to each child. Extra remedial classed are also arranged for weaker students with prior dicussion with parents."
    },
    {
      title: "2). Technology",
      desc: "Ultra modern teaching aids include computer, smart classes and different setups of instruments in different subjects to impart better learning. Student also enjoy the process of learning and self assessing after ghoing through online question in almost every subject."
    },
    {
      title: "3). Emphasising Cultural Identity",
      desc: "The school tries to provide the complete flavour of the East and the West. Inspite of latest learning technologies our school lays emphasis on respecting all religion and culture and make student feel proud for the each culture heritage of India."
    },
    {
      title: "4). Sports and Physical Activities",
      desc: "Yoga and physical training are conducted on regular basis to build up the stregnth, flexibility and neuromuscular coordination. These activities not only make child physically strong but also supplement the academic efforts every individual. Our students participate at inter school level in different sports like chess, badminton, volleyball, kho-kho, carrom and athletics."
    },
    {
      title: "5). Hygiene and Cleanliness",
      desc: "Good standard of hygiene are maintained. Toilets have proper arrangements of all basic necessities with a proper attendent to maintain cleanliness during school hours. Filter water is supplied for drinking purpose through water filter."
    },
    {
      title: "6). Safety and Security",
      desc: "Sufficient number of cameras are there to keep a check on day to day activity of every child. Security guard are there to ensure safe handling of children to the authorised person only."
    },
    {
      title: "7). Counselling and Guidance",
      desc: "Our teachers provide the students with latest information regarding various competitions held at different levels and also prepare them for the same. Visiting facilitators are also invited by the school to arous social, moral and health awareness among the children. Career guidance for future studies is also provided. Counselling sessions are also held for those who required the most."
    },
    {
      title: "8). Faculty",
      desc: "We believe that a committed & knowledgeable faculty is the backbone for successful delivery of education to the children. Our teaching faculty is a team of extremely talented members. Our teachers have an innate passion not just to teach but also to learn. So our school regularly conduct training and professional support workshops."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumb items={[{ label: 'About Sunflower' }, { label: 'Our Journey' }]} />
      <PageHeader 
        title="Our Journey & About Us" 
        subtitle="Sun Flower Public School, Agra — An English medium co-educational institute affiliated to CBSE"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* About Us Card */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-10">
          <h2 className="text-2xl font-bold text-[#10457B] mb-4 pb-2 border-b-2 border-[#E9931C] inline-block">
            ABOUT US
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            Sun Flower Public School, Agra is an English medium co-educational institute affilliated to the Central Board of Secondary Education (New Delhi). The school aims to deliver holistic education to the children from class Nursery to 10th. Bilingual mode of teaching process is carried out in school. It imparts the best education with an aim to enhance students to become the leaders of tomorrow and noble citizen of the nation. A dedicated team of teachers, administrative staff and cooperative parents imbued with great vision to form a team making endeavours to achieve the aim.
          </p>
        </div>

        {/* Premises Card */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-10">
          <h2 className="text-2xl font-bold text-[#10457B] mb-4 pb-2 border-b-2 border-[#E9931C] inline-block">
            PREMISES
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            Our school is located near 100 ft road, Dayalbagh, Agra comprising with well equiped buiiding, labs and all modern aminities. The school is having playground, spacious class rooms and audio visual hall, library, sports room etc.
          </p>
        </div>

        {/* Unique Features */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#10457B] mb-6 pb-2 border-b-2 border-[#E9931C] inline-block">
            UNIQUE FEATURES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {uniqueFeatures.map((feat, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:border-[#E9931C]/40 transition-colors">
                <h3 className="text-lg font-bold text-[#10457B] mb-2">{feat.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
