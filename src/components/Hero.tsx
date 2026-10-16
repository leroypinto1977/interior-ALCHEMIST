"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { LOADED_KEY } from "./Preloader";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  // Wait for the preloader curtain on the first visit of the session; on later visits start at once.
  const [delay, setDelay] = useState<number | null>(null);
  useEffect(() => {
    setDelay(sessionStorage.getItem(LOADED_KEY) || reduce ? 0.3 : 2.3);
  }, [reduce]);

  const rise = (i: number) =>
    delay === null
      ? {}
      : {
          initial: { y: "110%" },
          animate: { y: 0 },
          transition: { duration: 1, ease, delay: delay + i * 0.12 },
        };

  return (
    <section className="relative bg-oxblood text-cream overflow-hidden min-h-screen flex flex-col pt-16">
      <Image
        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1800&q=80"
        alt=""
        fill
        priority
        className="object-cover"
      />
      {/* Oxblood tint; static layers so the blend is composited once */}
      <div className="absolute inset-0 bg-oxblood mix-blend-multiply" />
      <div className="absolute inset-0 bg-oxblood/40" />

      <div className="relative flex-1 flex flex-col items-center justify-center px-6 py-16 text-center">
        <h1 className="relative font-serif uppercase leading-[0.82] text-[clamp(4.2rem,16vw,15rem)] tracking-[-0.01em]">
          <span className="block overflow-hidden">
            <motion.span className="block" {...rise(0)}>
              Interior
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span className="block" {...rise(1)}>
              Alchemist
            </motion.span>
          </span>
          {/* Tucked into the second line, like the reference's hero */}
          <motion.span
            className="absolute left-1/2 top-[70%] w-[clamp(64px,10vw,150px)] aspect-[4/5] -translate-x-1/2 -translate-y-1/2 -rotate-6 bg-blush shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]"
              initial={{ opacity: 0, scale: 0.6, rotate: -14 }}
              animate={delay === null ? {} : { opacity: 1, scale: 1, rotate: -6 }}
              transition={{ duration: 0.8, ease, delay: (delay ?? 0) + 0.7 }}
            >
              <span className="absolute inset-1.5 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500&q=80"
                  alt="Minimalist lounge, Tokyo"
                  fill
                  sizes="190px"
                  className="object-cover"
                />
              </span>
            </motion.span>
        </h1>

        <motion.div
          className="mt-12 max-w-xl space-y-7"
          initial={{ opacity: 0, y: 16 }}
          animate={delay === null ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: (delay ?? 0) + 0.9 }}
        >
          <p className="text-base md:text-lg leading-relaxed text-cream/85">
            Emotionally refined living spaces for homeowners who want more than ordinary interiors: luxurious, intentional, peaceful, and deeply personal.
          </p>
          <Link href="/book" className="btn btn-cream">
            Book your free consultation →
          </Link>
          <p className="eyebrow text-cream/60">Limited projects each month, to keep execution quality high</p>
        </motion.div>
      </div>

      <div className="relative px-6 md:px-10 pb-8 flex items-center gap-6 uppercase text-xs md:text-sm tracking-[0.15em]">
        <span>Concept studio</span>
        <span className="flex-1 h-px bg-cream/50" />
        <span>Based in India</span>
      </div>
    </section>
  );
}
