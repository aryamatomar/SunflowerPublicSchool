import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Compass, Target } from 'lucide-react';

const CARDS = [
  {
    title: "Our Vision",
    icon: Eye,
    headerBg: "from-[#E9931C] to-amber-600",
    iconColor: "text-[#E9931C]",
    body: "With the motto of school come to learn & go to serve, Sunflower Public School sets a vision to provide holistic development of every individual with inclusive , collaborative, equitable learning environment,aiming to maintain high standards of education so that a child achieves academic excellence."
  },
  {
    title: "Our Mission",
    icon: Compass,
    headerBg: "from-[#10457B] to-blue-800",
    iconColor: "text-[#10457B]",
    body: "Sunflower Public School is commited to provide Effective teaching & Learning experiences. To provide an innovative, collaborative &an inclusive learning environment where each student is empowered to create & shape their future."
  },
  {
    title: "Our Objective",
    icon: Target,
    headerBg: "from-[#E9931C] to-orange-500",
    iconColor: "text-[#E9931C]",
    body: "Education shall aim for the full development of personality and strive to nature the citizens, sound in mind and body, who are imbued with the qualities necessary for those who form a peaceful and democratic state and society. To develop the abilities of individuals while..."
  }
];

export default function VisionMissionObjective() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10457B] font-poppins tracking-tight">
            Vision, Mission & Objective
          </h2>
          <div className="w-16 h-1 bg-[#E9931C] mx-auto rounded-full mt-3"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARDS.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-3xl shadow-xl shadow-blue-950/5 border border-gray-100 overflow-hidden flex flex-col justify-between group relative"
              >
                {/* Header Banner */}
                <div className={`bg-gradient-to-r ${card.headerBg} px-6 py-5 text-white flex items-center justify-between shadow-xs`}>
                  <h3 className="text-xl font-bold font-poppins tracking-wide">
                    {card.title}
                  </h3>
                  <div className="bg-white/20 p-2 rounded-xl backdrop-blur-md">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
                    {card.body}
                  </p>
                  
                  <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Sun Flower Public School</span>
                    <span className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-[#E9931C]' : index === 1 ? 'bg-[#10457B]' : 'bg-[#E9931C]'}`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
