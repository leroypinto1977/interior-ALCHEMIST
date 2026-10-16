"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Play, X } from "lucide-react";
import Reveal from "./Reveal";

const feedbacks = [
  {
    name: "Krishna",
    role: "Hair stylist · Owner of Page 3 – KNK",
    thumbnail: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
    videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c02cba73d11dbf14c02099b244e4e9a0&profile_id=139&oauth2_token_id=57447761",
  },
  {
    name: "Ananya Sharma",
    role: "Creative director · Studio Design Co.",
    thumbnail: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    videoUrl: "https://player.vimeo.com/external/435674703.sd.mp4?s=7facdc735adbb1b4353d47d0579021577fae5550&profile_id=139&oauth2_token_id=57447761",
  },
  {
    name: "Rohan Mehta",
    role: "Founder · Vertex Labs",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    videoUrl: "https://player.vimeo.com/external/517602126.sd.mp4?s=6a2b8e5c5457ef4599587425175c2e1762c4a9fb&profile_id=139&oauth2_token_id=57447761",
  },
];

const tilt = ["-rotate-2", "rotate-1", "-rotate-1"];

export default function VideoFeedback() {
  const [active, setActive] = useState<(typeof feedbacks)[0] | null>(null);

  return (
    <section className="bg-cream py-20 md:py-36 px-6 md:px-10" id="video-feedbacks">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="eyebrow text-taupe">Video reviews</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="headline text-oxblood text-[clamp(2.8rem,6.5vw,6rem)] mt-8 max-w-3xl">
            Hear it in <em>their</em> own words
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {feedbacks.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.1}>
              <button
                onClick={() => setActive(f)}
                className={`polaroid ${tilt[i]} w-full max-w-[340px] mx-auto block text-left group hover:rotate-0 transition-transform duration-500`}
                aria-label={`Play video review from ${f.name}`}
              >
                <span className="relative block aspect-[4/5] overflow-hidden">
                  <Image src={f.thumbnail} alt="" fill sizes="340px" className="photo" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-16 h-16 rounded-full bg-cream/90 text-oxblood flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    </span>
                  </span>
                </span>
                <span className="block mt-4 font-serif text-2xl text-oxblood">{f.name}</span>
                <span className="block eyebrow text-taupe mt-1">{f.role}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-oxblood/95 flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              className="relative w-full max-w-4xl bg-ink"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-3 bg-blush text-oxblood">
                <span className="eyebrow">{active.name}</span>
                <button onClick={() => setActive(null)} aria-label="Close video" className="hover:rotate-90 transition-transform">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <video src={active.videoUrl} controls autoPlay playsInline className="w-full aspect-video" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
