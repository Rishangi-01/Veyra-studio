
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function PageLoader() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("veyra-intro-seen") === "true") {
        return;
      }
      sessionStorage.setItem("veyra-intro-seen", "true");
    } catch {
      // Continue with the intro if browser storage is unavailable.
    }

    setVisible(true);

    let value = 0;

    const interval = window.setInterval(() => {
      value = Math.min(value + Math.random() * 17 + 7, 100);
      setProgress(Math.round(value));

      if (value >= 100) {
        window.clearInterval(interval);
        window.setTimeout(() => setVisible(false), 350);
      }
    }, 100);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="veyra-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#850d25]"
          role="status"
          aria-label="Loading Veyra Studio"
        >
          <div className="w-[min(340px,80vw)]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.75, rotate: -8 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mx-auto mb-5 flex h-[74px] w-[74px] items-center justify-center border border-white/40 text-[35px] font-serif text-white"
              >
                V
              </motion.div>

              <h2 className="font-serif text-[30px] tracking-[0.2em] text-white">
                VEYRA
              </h2>

              <p className="mt-2 text-[9px] uppercase tracking-[0.48em] text-white/65">
                Studio
              </p>

              <p className="mt-7 text-[10px] uppercase tracking-[0.3em] text-white/70">
                Architecture · Interiors · Design
              </p>
            </motion.div>

            <div className="mt-12 h-px overflow-hidden bg-white/20">
              <motion.div
                className="h-full bg-white"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.12, ease: "linear" }}
              />
            </div>

            <div className="mt-3 flex items-center justify-between text-[10px] tracking-[0.2em] text-white/70">
              <span>CRAFTING SPACES</span>
              <span>{String(progress).padStart(3, "0")}%</span>
            </div>
          </div>

          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute bottom-0 right-8 top-0 hidden w-px origin-top bg-white/10 sm:block"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
