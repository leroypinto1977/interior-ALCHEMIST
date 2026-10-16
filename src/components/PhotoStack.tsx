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

// Three slots, bottom to top. Each layer is fanned out so its edges show behind the one above.
const slots = [
  { x: -22, y: 10, rotate: -11, scale: 0.94 },
  { x: 14, y: 4, rotate: 7, scale: 0.97 },
  { x: 0, y: 0, rotate: -2, scale: 1 },
];
const ease = [0.22, 1, 0.36, 1] as const;

// A pile of polaroids: every few seconds the next photo lands on top and the bottom one slips away.
export default function PhotoStack({ className, delay = 0 }: { className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(slots.length);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setCount((c) => c + 1), 3000);
    return () => clearInterval(id);
  }, [reduce]);

  // the last three photos, oldest first
  const pile = Array.from({ length: slots.length }, (_, i) => count - slots.length + i);

  return (
    <motion.div
      className={cn("relative aspect-[4/5]", className)}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {/* keep every photo decoded so a new card never lands blank */}
      <span className="hidden">
        {photos.map((p) => (
          <Image key={p.src} src={p.src} alt="" width={200} height={250} loading="eager" />
        ))}
      </span>
      <AnimatePresence initial={false}>
        {pile.map((n, i) => {
          const photo = photos[((n % photos.length) + photos.length) % photos.length];
          return (
            <motion.span
              key={n}
              className="absolute inset-0 bg-blush p-[6%] pb-[14%] shadow-[0_24px_50px_-18px_rgba(0,0,0,0.4)]"
              style={{ zIndex: i }}
              initial={{ x: 70, y: -110, rotate: 16, scale: 1.06, opacity: 0 }}
              animate={{ ...slots[i], opacity: 1 }}
              exit={{ x: -40, y: 50, rotate: -22, opacity: 0, transition: { duration: 0.35, ease } }}
              transition={{ type: "spring", stiffness: 320, damping: 26, mass: 0.7 }}
            >
              <span className="relative block h-full w-full overflow-hidden">
                <Image src={photo.src} alt={photo.alt} fill sizes="240px" className="object-cover" />
              </span>
            </motion.span>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
}
