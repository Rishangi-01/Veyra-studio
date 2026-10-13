
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function AboutTeam() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#faf9f7] w-[100%] lg:mt-[35px]">
      <div className="mx-auto grid min-h-[390px] max-w-[1600px] grid-cols-1 lg:min-h-[330px] lg:grid-cols-[1.1fr_1fr]">

        <div className="relative z-10 flex flex-col justify-center px-6 pb-12 pt-16 sm:px-10 sm:pb-14 sm:pt-20 lg:px-12 lg:py-6 xl:px-[6.5%]">

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 flex items-center gap-4"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#850d25] sm:text-xs">
              Our Team
            </span>
            <span className="h-px w-14 bg-[#b17a83]" />
          </motion.div>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[650px] font-serif text-[clamp(2.8rem,6vw,5rem)] leading-[0.91] tracking-[-0.055em] text-[#111a20]"
          >
            Meet Our
            <br />
            <span className="text-[#850d25]">
              Expert Team
            </span>
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-5 max-w-[620px] font-serif text-base leading-[1.55] text-[#626268] sm:text-lg"
          >
            A passionate team of architects, designers and project
            specialists working together to create spaces that
            inspire and elevate everyday living.
          </motion.p>
        </div>

        <div className="relative min-h-[330px] sm:min-h-[410px] lg:min-h-0">

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 1.07 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0"
          >
            <Image
              src="/images/team/about-team.png"
              alt="Contemporary architectural interior with natural stone and warm wood finishes"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-r from-[#faf9f7]/50 via-transparent to-black/10 lg:bg-gradient-to-r lg:from-[#faf9f7]/80 lg:via-[#faf9f7]/10 lg:to-transparent" />

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.4 }}
            className="absolute left-0 top-8 hidden w-[145px] border-l border-[#a6a19c] bg-[#faf9f7]/85 px-5 py-1 backdrop-blur-sm sm:block lg:left-[-130px] lg:top-[24%] lg:w-[205px] lg:border-l-3"
          >
            <p className="text-[14px] uppercase leading-[2] tracking-[0.22em] text-[#77777c] font-semibold">
              People
              <br />
              Behind
              <br />
              Exceptional
              <br />
              Spaces
            </p>
            <span className="mt-3 block h-[2px] w-9 bg-[#850d25]" />
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute bottom-0 right-0 w-[200px] bg-[#850d25] px-6 py-7 text-white shadow-2xl sm:bottom-0 sm:w-[225px] sm:px-7 sm:py-9 lg:bottom-0 lg:w-[230px] lg:px-8 lg:py-10"
          >
            <p className="text-[10px] font-medium uppercase leading-[1.9] tracking-[0.24em] sm:text-[11px]">
              Designing
              <br />
              People-Centric
              <br />
              Spaces
            </p>

            <motion.span
              initial={reduceMotion ? false : { width: 0 }}
              animate={{ width: 32 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-4 block h-px bg-white/80"
            />
          </motion.div>
        </div>
      </div>

      <div className="h-[3px] w-full bg-[#e9e4df]" />
    </section>
  );
}
