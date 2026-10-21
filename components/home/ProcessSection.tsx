
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  DraftingCompass,
  PencilRuler,
  HardHat,
  ArrowUpRight,
} from "lucide-react";
import { processSectionData } from "../../data";

const iconMap = {
  PencilRuler,
  DraftingCompass,
  HardHat,
} as const;

const steps = processSectionData.steps.map((step) => ({
  ...step,
  icon: iconMap[step.icon],
}));

export default function ProcessSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="process"
      className="relative isolate overflow-hidden bg-[#fdfcfb] px-5 py-12 sm:px-8 sm:py-12 lg:px-12 lg:py-16"
    >
      {/* Subtle architectural background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(133,13,37,0.025),transparent_65%)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1450px]">
        {/* Header */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-12 max-w-4xl text-center sm:mb-16 lg:mb-12"
        >
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#b34b61] sm:w-16" />

            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#850d25] sm:text-xs">
              {processSectionData.eyebrow}
            </span>

            <span className="h-px w-12 bg-[#b34b61] sm:w-16" />
          </div>

          <h2 className="font-serif text-[clamp(2rem,4.2vw,3.6rem)] font-medium leading-[1.12] tracking-[-0.045em] text-[#17191c]">
            {processSectionData.title[0]}{" "}
            <span className="text-[#850d25]">
              {processSectionData.title[1]}
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[610px] text-sm leading-7 text-[#73747a] sm:text-[15px]">
            {processSectionData.description}
          </p>
        </motion.div>

        {/* Process cards */}
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-3 lg:gap-6 xl:gap-7">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.number}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: index % 2 === 0 ? 35 : 55,
                      }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.16,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -5, transition: { duration: 0.3 } }
                }
                className={`group relative min-w-0 border border-[#d5d2cf] bg-white/70 transition-colors duration-500 hover:border-[#b9a0a3] ${
                  index === 1
                    ? "lg:translate-y-8"
                    : index === 2
                      ? "lg:translate-y-16"
                      : ""
                }`}
              >
                {/* Blueprint image at the bottom */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] overflow-hidden">
                  <Image
                    src={step.image}
                    alt=""
                    fill
                    sizes="(max-width: 1023px) 90vw, 32vw"
                    className="object-cover object-center opacity-[0.12] grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-[0.19]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-white/50 to-white" />
                </div>

                {/* Card content */}
                <div className="relative z-10 flex min-h-[325px] flex-col p-5 sm:min-h-[340px] sm:p-6 xl:min-h-[350px] xl:p-7">
                  {/* Number with architectural image texture */}
                  <div className="relative inline-flex h-[94px] items-center self-start sm:h-[105px]">
                    <span
                      className="select-none bg-cover bg-center bg-clip-text font-serif text-[100px] font-bold leading-none tracking-[-0.09em] text-transparent sm:text-[112px]"
                      style={{
                        backgroundImage: `url("${step.image}")`,
                      }}
                      aria-label={`Step ${step.number}`}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-3 font-serif text-[25px] leading-tight tracking-[-0.035em] text-[#18191d] sm:text-[27px]">
                    {step.title}
                  </h3>

                  {/* Accent line */}
                  <motion.div
                    initial={false}
                    className="mt-4 h-[2px] w-9 origin-left bg-[#850d25] transition-all duration-300 group-hover:w-16"
                  />

                  {/* Description */}
                  <p className="mt-4 max-w-[390px] text-[13px] leading-[1.75] text-[#696a70] sm:text-sm">
                    {step.description}
                  </p>

                  {/* Optional details link */}
                  {/* <a
                    href={step.linkHref}
                    aria-label={`${step.linkLabel} for ${step.title} with Veyra Studio`}
                    className="mt-auto flex w-fit items-center gap-2 pt-5 text-[11px] font-semibold uppercase tracking-[0.13em] text-[#850d25] opacity-80 transition-all duration-300 hover:gap-3 hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#850d25]"
                  >
                    {step.linkLabel}
                    <ArrowUpRight size={15} />
                  </a> */}
                </div>

                {/* Floating icon tile */}
                <motion.div
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { rotate: -3, scale: 1.04 }
                  }
                  transition={{ duration: 0.25 }}
                  className="absolute -right-1 -top-3 z-20 flex h-[68px] w-[68px] items-center justify-center border border-[#d4d0cd] bg-[#faf9f7] shadow-sm sm:-right-3 sm:h-[76px] sm:w-[76px]"
                >
                  <Icon
                    size={35}
                    strokeWidth={1.3}
                    className="text-[#850d25]"
                  />

                  <span className="absolute -right-2 top-2 h-[52px] w-[6px] bg-[#850d25] sm:h-[60px]" />
                </motion.div>
              </motion.article>
            );
          })}
        </div>

        {/* Footer detail */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 flex items-center justify-center gap-3 text-center text-[9px] uppercase tracking-[0.22em] text-[#969398] sm:mt-24 lg:mt-28"
        >
        </motion.div>
      </div>
    </section>
  );
}
