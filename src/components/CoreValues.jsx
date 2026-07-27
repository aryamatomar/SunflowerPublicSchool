import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartHandshake, Leaf, Sparkles } from 'lucide-react';

const VALUES = [
  {
    title: "INTEGRITY",
    icon: ShieldCheck,
    color: "from-blue-600 to-indigo-700",
    description: "Honesty, moral principles, and strong ethical character in every action."
  },
  {
    title: "KINDNESS",
    icon: HeartHandshake,
    color: "from-amber-500 to-orange-500",
    description: "Empathy, compassion, and respectful consideration for all members of society."
  },
  {
    title: "RESPECT FOR ENVIRONMENT",
    icon: Leaf,
    color: "from-emerald-600 to-teal-700",
    description: "Environmental stewardship, sustainability, and consciousness towards nature."
  }
];

export default function CoreValues() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#10457B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-blue-100">
            <Sparkles className="w-3.5 h-3.5 text-[#E9931C]" />
            <span>Guiding Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10457B] font-poppins tracking-tight uppercase">
            CORE VALUES
          </h2>
          <div className="w-16 h-1 bg-[#E9931C] mx-auto rounded-full mt-3"></div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUES.map((val, index) => {
            const IconComponent = val.icon;
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-3xl p-8 shadow-xl shadow-blue-950/5 border border-gray-100 flex flex-col items-center text-center group relative overflow-hidden"
              >
                {/* Background Accent Circle */}
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-amber-100 to-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  <IconComponent className="w-10 h-10 text-[#10457B] group-hover:text-[#E9931C] transition-colors duration-300" />
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#10457B] font-poppins mb-3 tracking-wide">
                  {val.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {val.description}
                </p>

                <div className="mt-6 pt-4 border-t border-gray-100 w-full flex justify-center">
                  <span className="w-8 h-1 rounded-full bg-gradient-to-r from-[#10457B] to-[#E9931C] group-hover:w-16 transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
