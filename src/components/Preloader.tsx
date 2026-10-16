"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export const LOADED_KEY = "ia-loaded";

// Oxblood intro: the wordmark rises out of a mask, a rule draws across, then the curtain lifts.
// Plays once per browser session.
export default function Preloader() {
  const [show, setShow] = useState(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (sessionStorage.getItem(LOADED_KEY) || reduce) {
      setShow(false);
      return;
    }
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      sessionStorage.setItem(LOADED_KEY, "1");
      setShow(false);
    }, 2000);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [reduce]);

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] bg-oxblood text-cream flex flex-col items-center justify-center"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="font-serif text-[clamp(3rem,10vw,8rem)] leading-[0.9] text-center">
            {["Interior", "Alchemist"].map((word, i) => (
              <span key={word} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease, delay: 0.15 + i * 0.15 }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </div>
          <motion.span
            className="mt-10 h-px w-40 bg-cream origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease, delay: 0.5 }}
          />
          <motion.span
            className="eyebrow mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            Concept studio
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
