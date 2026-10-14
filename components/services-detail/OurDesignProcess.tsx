"use client";

import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Understanding your goals, requirements and lifestyle.",
  },
  {
    number: "02",
    title: "Concept & Planning",
    description:
      "Creating initial concepts and detailed plans.",
  },
  {
    number: "03",
    title: "Design Development",
    description:
      "Refining designs with 3D visualizations and materials.",
  },
  {
    number: "04",
    title: "Final Delivery",
    description:
      "Completed design with full documentation.",
  },
];

export default function OurDesignProcess() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="our-process"
      className="relative overflow-hidden bg-[#fcfbf9] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:pb-16 lg:pt-0"
    >
      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-[#790c27]/[0.035] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[145px_minmax(0,1fr)] lg:gap-12">
          {/* Left section indicator */}
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.65,
              ease: "easeOut",
            }}
            className="flex items-start gap-5 lg:min-h-[230px] lg:flex-col lg:gap-0"
          >
            <div>
              <span className="font-serif text-3xl font-semibold text-[#800d2b] sm:text-4xl">
                03
              </span>

              <div className="mt-4 hidden h-20 w-px bg-gradient-to-b from-[#800d2b] to-[#e9d9dd] lg:block" />
              <div className="mt-3 h-px w-12 bg-[#800d2b]/40 lg:hidden" />

              <p className="mt-3 text-[10px] font-semibold uppercase leading-[1.8] tracking-[0.2em] text-[#77747a] sm:text-xs lg:mt-4">
                Our
                <br />
                Process
              </p>
            </div>

            <div className="hidden h-full min-h-[180px] w-px bg-[#e6e2df] lg:ml-auto lg:block" />
          </motion.aside>

          {/* Main content */}
          <div className="min-w-0">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.7,
                delay: 0.08,
                ease: "easeOut",
              }}
            >

              <h2 className="font-serif text-3xl font-medium leading-tight tracking-[-0.04em] text-[#171719] sm:text-4xl md:text-5xl lg:text-[52px]">
                Our{" "}
                <span className="text-[#800d2b]">
                  Design Process
                </span>
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-7 text-[#77747a] sm:text-base">
                A structured and collaborative approach to bring
                your vision to life, from the first conversation
                to the final finishing touches.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative mt-6 sm:mt-14 lg:mt-5">
              {/* Horizontal connector on desktop */}
              <div
                aria-hidden="true"
                className="absolute left-0 right-0 top-[21px] hidden h-px bg-[#d9a9b4] lg:block"
              />

              {/* Vertical connector on mobile/tablet */}
              <div
                aria-hidden="true"
                className="absolute bottom-12 left-[21px] top-[21px] w-px bg-[#d9a9b4] lg:hidden"
              />

              <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-4 lg:gap-5">
                {steps.map((step, index) => (
                  <motion.article
                    key={step.number}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.6,
                      delay: shouldReduceMotion ? 0 : index * 0.13,
                      ease: "easeOut",
                    }}
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : { y: -5 }
                    }
                    className="group relative flex gap-5 lg:block"
                  >
                    {/* Number marker */}
                    <div className="relative z-10 flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-full border border-[#800d2b] bg-[#800d2b] font-sans text-xs font-semibold tracking-wide text-white shadow-[0_4px_14px_rgba(128,13,43,0.12)] transition-all duration-300 group-hover:bg-white group-hover:text-[#800d2b] lg:mb-5">
                      {step.number}
                    </div>

                    {/* Step content */}
                    <div className="min-w-0 flex-1 border-b border-[#e9e5e2] pb-6 lg:border-b-0 lg:pb-0">
                      <div className="mb-3 flex items-center gap-3">

                        <span className="h-px w-8 bg-[#800d2b]/30 transition-all duration-300 group-hover:w-12 group-hover:bg-[#800d2b] lg:hidden" />
                      </div>

                      <h3 className="font-serif text-xl font-semibold text-[#191719] transition-colors duration-300 group-hover:text-[#800d2b] sm:text-2xl lg:text-xl xl:text-2xl">
                        {step.title}
                      </h3>

                      <p className="mt-2 max-w-sm text-sm leading-6 text-[#77747a] lg:pr-3">
                        {step.description}
                      </p>

                      <div className="mt-5 hidden h-[2px] w-8 bg-[#800d2b] transition-all duration-300 group-hover:w-14 lg:block" />
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Bottom accent */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.8,
                delay: 0.4,
              }}
              className="mt-10 h-px origin-left bg-gradient-to-r from-[#800d2b]/50 via-[#e9d9dd] to-transparent lg:mt-14"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
