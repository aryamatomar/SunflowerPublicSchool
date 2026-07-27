import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Trophy, Lightbulb, ArrowRight, Star } from 'lucide-react';

export default function QualityEducation() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-[#10457B] via-[#0B3560] to-blue-950 text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E9931C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Main Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#E9931C] text-[#0B3560] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-lg">
            <Star className="w-4 h-4 text-[#0B3560] fill-[#0B3560]" />
            <span>Academic Distinction</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-poppins tracking-tight">
            Quality Education in Our School
          </h2>
          <p className="text-blue-100/90 text-base sm:text-lg mt-4 font-normal max-w-2xl mx-auto">
            At our school, we take pride in providing top notch education that yields exceptional results. Our achievements include:
          </p>
        </div>

        {/* Content Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-16">
          
          {/* Column 1: Achievements List & Olympiad Paragraph */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/15 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#E9931C] text-[#0B3560] rounded-2xl shadow-md">
                  <Trophy className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold font-poppins text-white">
                  Key Achievements
                </h3>
              </div>

              {/* Bullet Points List 1 */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-[#E9931C] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-blue-50 font-medium">
                    Consistently achieving 100% results in board exams every year
                  </span>
                </li>

                <li className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-[#E9931C] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-blue-50 font-medium">
                    Zero dropouts, ensuring every student reaches their full potential
                  </span>
                </li>

                <li className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-[#E9931C] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-blue-50 font-medium">
                    A supportive and inclusive environment that fosters overall growth and development
                  </span>
                </li>
              </ul>

              {/* Olympiads Paragraph */}
              <div className="p-5 bg-gradient-to-r from-[#E9931C]/25 to-amber-500/20 rounded-2xl border border-[#E9931C]/40 text-amber-100 text-sm sm:text-base leading-relaxed">
                Our students have showcased their talents in various Olympiads, games, and competitions at the school, district, and national levels, bringing home numerous gold, silver, and bronze medals.
              </div>
            </div>
          </motion.div>

          {/* Column 2: Our Approach to Quality Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/15 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#E9931C] text-[#0B3560] rounded-2xl shadow-md">
                  <Lightbulb className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold font-poppins text-white">
                  Our Approach to Quality Education
                </h3>
              </div>

              <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed mb-6">
                We believe that quality education goes beyond academic excellence. Our experienced and passionate teachers provide personal attention to each student, catering to their diverse learning needs. We emphasize:
              </p>

              {/* Approach Emphasis Bullets */}
              <div className="grid grid-cols-1 gap-3 mb-8">
                <div className="flex items-center gap-3 bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E9931C]" />
                  <span className="text-sm font-semibold text-white">
                    Critical thinking and problem solving skills
                  </span>
                </div>

                <div className="flex items-center gap-3 bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E9931C]" />
                  <span className="text-sm font-semibold text-white">
                    Creativity and innovation
                  </span>
                </div>

                <div className="flex items-center gap-3 bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E9931C]" />
                  <span className="text-sm font-semibold text-white">
                    Emotional intelligence and well-being
                  </span>
                </div>
              </div>

              {/* Paragraph: Modern resources */}
              <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed p-4 rounded-xl bg-blue-950/40 border border-blue-800">
                With access to modern resources and technology, our students are better equipped to navigate the challenges of an ever-changing world.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Closing Pursuit Banner Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-[#E9931C] to-amber-500 rounded-2xl p-6 sm:p-8 text-[#0B3560] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h4 className="text-2xl sm:text-3xl font-extrabold font-poppins tracking-tight">
              Join us in our pursuit of excellence in education
            </h4>
            <p className="text-[#0B3560]/80 font-semibold text-sm mt-1">
              Sun Flower Public School — Come to Learn, Go to Serve.
            </p>
          </div>

          <a
            href="#contact"
            className="bg-[#0B3560] hover:bg-[#10457B] text-[#E9931C] px-6 py-3.5 rounded-xl font-bold shadow-lg transition-all duration-200 flex items-center gap-2 flex-shrink-0"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
