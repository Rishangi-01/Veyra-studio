
"use client";

import { motion, useReducedMotion } from "motion/react";
import { clientLogos } from "../../data";

export default function ClientLogos() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Our clients and partners"
      className="overflow-hidden border-y border-black/[0.035] bg-white px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14 w-[100%]"
    >
      <div className="mx-auto grid max-w-[1500px] grid-cols-2 items-center gap-x-5 gap-y-9 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-5 lg:gap-8">
        {clientLogos.map((client, index) => (
          <motion.div
            key={client.type}
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 18, filter: "blur(4px)" }
            }
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.65,
              delay: index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={
              reduceMotion
                ? undefined
                : { y: -3, scale: 1.04 }
            }
            className="group flex min-h-[62px] cursor-default flex-col items-center justify-center text-center"
          >
            {client.type === "camps" && (
              <div className="flex flex-col items-center transition-[filter] duration-300 group-hover:drop-shadow-[0_4px_8px_rgba(99,102,241,0.28)]">
                <svg
                  viewBox="0 0 100 42"
                  className="mb-1 h-8 w-[76px] text-[#aeb6ca] transition-colors duration-300 group-hover:text-[#6366f1] sm:h-9 sm:w-[84px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinejoin="miter"
                  aria-hidden="true"
                >
                  <path d="M17 29 29 6 41 29H17Z" />
                  <path d="M39 22 49 2 67 35H49" />
                  <path d="M45 29 51 17 58 29" />
                </svg>
                <span className="text-[17px] font-bold tracking-[0.25em] text-[#aeb6ca] transition-colors duration-300 group-hover:text-[#db2777] sm:text-[20px]">
                  CAMPS
                </span>
              </div>
            )}

            {client.type === "salvatore" && (
              <div className="flex flex-col items-center transition-[filter] duration-300 group-hover:drop-shadow-[0_4px_8px_rgba(190,24,93,0.25)]">
                <span className="font-serif text-[25px] font-semibold italic leading-none tracking-[-0.06em] text-[#aeb6ca] transition-colors duration-300 group-hover:text-[#be185d] sm:text-[30px]">
                  Salvatore
                </span>
                <span className="mt-1 font-serif text-[11px] italic leading-none text-[#aeb6ca] transition-colors duration-300 group-hover:text-[#f97316] sm:text-xs">
                  new york
                </span>
              </div>
            )}

            {client.type === "rovella" && (
              <div className="flex flex-col items-center transition-[filter] duration-300 group-hover:drop-shadow-[0_4px_8px_rgba(13,148,136,0.25)]">
                <span className="font-serif text-[48px] font-bold leading-[0.85] text-[#aeb6ca] transition-colors duration-300 group-hover:text-[#0d9488] sm:text-[53px]">
                  R
                </span>
                <span className="mt-2 text-[9px] uppercase tracking-[0.32em] text-[#aeb6ca] transition-colors duration-300 group-hover:text-[#d97706] sm:text-[10px]">
                  ROVELLA
                </span>
              </div>
            )}

            {client.type === "lloyd" && (
              <div className="flex flex-col items-center transition-[filter] duration-300 group-hover:drop-shadow-[0_4px_8px_rgba(37,99,235,0.25)]">
                <span className="font-serif text-[32px] leading-none tracking-[-0.055em] text-[#aeb6ca] transition-colors duration-300 group-hover:text-[#2563eb] sm:text-[37px]">
                  LLOYD
                </span>
                <span className="mt-1 text-[8px] uppercase tracking-[0.2em] text-[#aeb6ca] transition-colors duration-300 group-hover:text-[#7c3aed] sm:text-[9px]">
                  MANAGEMENT
                </span>
                <div className="mt-1 flex w-full items-center gap-1.5 text-[#aeb6ca] transition-colors duration-300 group-hover:text-[#f59e0b]">
                  <span className="h-px flex-1 bg-current" />
                  <span className="text-[8px]">◆</span>
                  <span className="h-px flex-1 bg-current" />
                </div>
              </div>
            )}

            {client.type === "cupcakes" && (
              <div className="flex flex-col items-center transition-[filter] duration-300 group-hover:drop-shadow-[0_4px_8px_rgba(236,72,153,0.28)]">
                <span className="font-serif text-[27px] font-bold italic leading-none tracking-[-0.06em] text-[#aeb6ca] transition-colors duration-300 group-hover:text-[#ec4899] sm:text-[32px]">
                  Cupcakes
                </span>
                <span className="mt-1 self-end text-[9px] leading-none text-[#aeb6ca] transition-colors duration-300 group-hover:text-[#f97316] sm:text-[10px]">
                  from new york
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
