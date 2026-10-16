"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const trustPoints = [
  "Detailed Scope Clarity",
  "Transparent Material Selection",
  "Structured Execution Process",
  "Regular Progress Updates",
  "Quality Check Systems",
  "Dedicated Coordination",
];

export default function Trust() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto border-t border-ivory/[0.04] relative overflow-hidden" id="trust">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-oxblood-light/[0.02] rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Heading and Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6 text-left"
        >
          <div className="inline-block px-3 py-1 text-xs text-cream/60 border border-cream/10 rounded-full">
            Clarity & Care
          </div>
          <h2 className="text-3xl md:text-5xl font-medium leading-tight tracking-tight">
            A Premium Experience Built Around Clarity And Accountability
          </h2>
          <p className="text-sm md:text-base text-cream/60 leading-relaxed font-light">
            Your home is one of the biggest emotional and financial investments you’ll make. That’s why every stage is designed to create clarity, confidence, and peace of mind.
          </p>
        </motion.div>

        {/* Right Column: Grid of Trust Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {trustPoints.map((point, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3.5 p-5 bg-ivory/[0.01] border border-ivory/[0.03] backdrop-blur-md rounded-2xl hover:border-oxblood-light/20 hover:bg-oxblood-light/[0.01] transition-all duration-300 group"
            >
              <span className="w-6 h-6 rounded-full border border-oxblood-light/30 bg-oxblood-light/5 flex items-center justify-center text-oxblood-light shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Check className="w-3.5 h-3.5 text-oxblood-light" strokeWidth={3} />
              </span>
              <span className="text-sm md:text-base font-normal text-cream/80 group-hover:text-ivory transition-colors duration-300 font-light">
                {point}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
