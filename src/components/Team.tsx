"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Team() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto flex flex-col items-center" id="team">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-block px-3 py-1 mb-6 text-xs text-cream/60 border border-cream/10 rounded-full">
          Founder
        </div>
        <h2 className="text-3xl md:text-5xl font-medium leading-tight">The visionary behind the craft</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center max-w-2xl"
      >
        <div className="relative w-[340px] sm:w-[400px] aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 bg-[#111111] group border border-ivory/[0.04] hover:border-ivory/[0.12] transition-colors duration-300">
          <Image 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
            alt="Deepak, Founder"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            priority
          />
        </div>
        
        <h3 className="text-2xl md:text-3xl font-medium text-ivory mb-1.5">Deepak</h3>
        <p className="text-cream/60 text-xs md:text-sm font-normal tracking-wider uppercase mb-6 bg-ivory/[0.03] border border-ivory/[0.08] px-3.5 py-1 rounded-full inline-block">
          Founder & Principal Director
        </p>
        
        <p className="text-cream/60 text-sm md:text-base leading-relaxed max-w-xl">
          Deepak established interior ALCHEMIST with a single-minded vision: to craft bespoke, high-clarity spaces that seamlessly merge architectural elegance with personal expression. Under his direction, the studio translates design challenges into functional art, emphasizing sophisticated detail and timeless luxury.
        </p>
        
        <div className="flex items-center justify-center gap-6 mt-8">
          <a href="#" className="text-cream/45 hover:text-ivory transition-colors text-sm">LinkedIn</a>
          <span className="w-1 h-1 rounded-full bg-cream/25" />
          <a href="#" className="text-cream/45 hover:text-ivory transition-colors text-sm">Instagram</a>
          <span className="w-1 h-1 rounded-full bg-cream/25" />
          <a href="#" className="text-cream/45 hover:text-ivory transition-colors text-sm">Twitter</a>
        </div>
      </motion.div>
    </section>
  );
}
