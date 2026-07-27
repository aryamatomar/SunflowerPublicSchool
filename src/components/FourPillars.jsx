import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, MessageSquare, Palette, TrendingUp, Sparkles } from 'lucide-react';

const PILLARS = [
  {
    title: "Learn",
    icon: BookOpen,
    description: "We focus on inclusive & experiential learning in which children learn by doing."
  },
  {
    title: "Interact",
    icon: MessageSquare,
    description: "Interaction is an art to convey ones thought to other & to understand ones feeling. We believe that All human interactions are opportunities either to learn or to teach."
  },
  {
    title: "Participate",
    icon: Palette,
    description: "We encourage students to participate in different art forms like music ,drama dance etc, different sports & also encourage parents' participation in activities."
  },
  {
    title: "Grow",
    icon: TrendingUp,
    description: "We believe & focus on holistic development of every child & thus help our children to grow beyond academics too."
  }
];

export default function FourPillars() {
  return (
    <section className="py-16 bg-[#E9931C] text-[#0B3560] relative overflow-hidden">
      {/* Subtle Pattern Background Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#10457B_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#0B3560] text-[#E9931C] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3560] font-poppins tracking-tight">
            The Four Pillars of Student Development
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 shadow-lg border border-amber-300/50 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#10457B] text-[#E9931C] flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#10457B] font-poppins mb-3 tracking-wide">
                    {pillar.title}
                  </h3>

                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-medium">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#E9931C]">
                  <span>Pillar 0{index + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10457B]"></span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
