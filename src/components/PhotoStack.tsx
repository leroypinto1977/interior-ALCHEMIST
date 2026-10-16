"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const photos = [
  { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500&q=80", alt: "Minimalist lounge, Tokyo" },
  { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&q=80", alt: "Helicoidal staircase, Milan" },
  { src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=500&q=80", alt: "Living room" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=80", alt: "Modernist villa, Zurich" },
  { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&q=80", alt: "Warm neutral living room" },
];

const VISIBLE = 3;
// each layer of the pile sits at its own tilt
const tilt = [-6, 5, -3];

// A pile of polaroids: every few seconds the next photo drops onto the top and the bottom one slips away.
export default function PhotoStack({ className, delay = 0 }: { className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(VISIBLE);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setCount((c) => c + 1), 2800);
    return () => clearInterval(id);
  }, [reduce]);

  // the last VISIBLE photos, oldest first
  const pile = Array.from({ length: VISIBLE }, (_, i) => count - VISIBLE + i);

  return (
    <motion.div
      className={cn("relative aspect-[4/5]", className)}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <AnimatePresence initial={false}>
        {pile.map((n, i) => {
          const photo = photos[((n % photos.length) + photos.length) % photos.length];
          return (
            <motion.span
              key={n}
              className="absolute inset-0 bg-blush shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)]"
              style={{ zIndex: i }}
              initial={{ y: -60, rotate: -18, opacity: 0, scale: 1.08 }}
              animate={{ y: 0, rotate: tilt[(n % tilt.length + tilt.length) % tilt.length], opacity: 1, scale: 1 }}
              exit={{ y: 24, rotate: 14, opacity: 0, transition: { duration: 0.5 } }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="absolute inset-1.5 overflow-hidden">
                <Image src={photo.src} alt={photo.alt} fill sizes="200px" className="object-cover" />
              </span>
            </motion.span>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
}
