import React from 'react';
import { motion } from 'framer-motion';
import { Award, UserCheck, Users, Smile } from 'lucide-react';

const STATS = [
  {
    value: "100%",
    label: "Academic Result",
    icon: Award,
    color: "from-[#E9931C] to-amber-500",
    bgColor: "bg-amber-50 text-[#E9931C]"
  },
  {
    value: "70+",
    label: "Certified Teachers",
    icon: UserCheck,
    color: "from-[#10457B] to-blue-700",
    bgColor: "bg-blue-50 text-[#10457B]"
  },
  {
    value: "1200+",
    label: "Students Over",
    icon: Users,
    color: "from-[#10457B] to-indigo-700",
    bgColor: "bg-indigo-50 text-[#10457B]"
  },
  {
    value: "6500",
    label: "Happy Faces",
    icon: Smile,
    color: "from-[#E9931C] to-orange-500",
    bgColor: "bg-orange-50 text-[#E9931C]"
  }
];

export default function StatsSection() {
  return (
    <section className="relative -mt-10 z-30 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {STATS.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 shadow-xl shadow-blue-950/5 border border-gray-100 flex items-center justify-between group relative overflow-hidden"
            >
              {/* Subtle accent bar on top */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${stat.color}`} />
              
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#10457B] font-poppins tracking-tight group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-600 mt-1">
                  {stat.label}
                </div>
              </div>


              {/* Icon Container */}
              <div className={`p-3.5 rounded-2xl ${stat.bgColor} shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                <IconComponent className="w-7 h-7" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
