
"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { homeTestimonialsData } from "../../data";

const testimonials = homeTestimonialsData.items;

const AUTOPLAY_DELAY = 6000;

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const active = testimonials[activeIndex];

  const previous = useCallback(() => {
    setActiveIndex((index) =>
      (index - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  const next = useCallback(() => {
    setActiveIndex((index) =>
      (index + 1) % testimonials.length
    );
  }, []);

  useEffect(() => {
    if (isPaused || reduceMotion) return;

    const timer = window.setInterval(next, AUTOPLAY_DELAY);

    return () => window.clearInterval(timer);
  }, [isPaused, next, reduceMotion]);

  const slideVariants = {
    enter: {
      opacity: 0,
      y: 16,
    },
    center: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -12,
    },
  };

  return (
    <section
      id="testimonials"
      aria-label="Client testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative overflow-hidden bg-[#fdfcfb] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-16"
    >
      <div className="mx-auto grid max-w-[1450px] items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14 xl:gap-20">

        <div className="relative min-w-0">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-7 sm:mb-10"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#850d25] sm:text-xs">
              {homeTestimonialsData.eyebrow}
            </span>
            <span className="h-px w-16 bg-[#a8495c]" />
          </motion.div>

          <div className="relative min-h-[230px] sm:min-h-[220px] lg:min-h-[245px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.blockquote
                key={activeIndex}
                variants={slideVariants}
                initial={reduceMotion ? false : "enter"}
                animate="center"
                exit={reduceMotion ? undefined : "exit"}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-serif text-[clamp(1.65rem,3vw,2.45rem)] leading-[1.28] tracking-[-0.035em] text-[#17191d]"
              >
                <span aria-hidden="true">&ldquo;</span>
                {active.quote.split("Veyra Studio").length > 1 &&
                activeIndex === 0 ? (
                  <>
                    <span className="text-[#850d25]">
                      Veyra Studio
                    </span>
                    {active.quote.split("Veyra Studio")[1]}
                  </>
                ) : (
                  active.quote
                )}
                <span aria-hidden="true">&rdquo;</span>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-2 flex flex-col justify-between gap-7 border-t border-[#e9e5e1] pt-7 sm:flex-row sm:items-center sm:gap-5 sm:border-t-0 sm:pt-0">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeIndex}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                transition={{ duration: 0.35 }}
                className="flex min-w-0 items-center gap-4"
              >
                <div className="relative h-[68px] w-[68px] shrink-0 overflow-hidden rounded-full bg-[#eee5df] ring-1 ring-black/5 sm:h-[78px] sm:w-[78px]">
                  <Image
                    src={active.avatar}
                    alt={active.name}
                    fill
                    sizes="78px"
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="font-serif text-xl font-semibold text-[#17191d] sm:text-[22px]">
                    {active.name}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#73747a]">
                    {active.role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex shrink-0 items-center gap-3">
              <button
                type="button"
                onClick={previous}
                aria-label="Previous testimonial"
                className="group flex h-[54px] w-[54px] items-center justify-center rounded-full border border-[#ded9d5] text-[#850d25] transition-all duration-300 hover:border-[#850d25] hover:bg-[#850d25] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#850d25] sm:h-[58px] sm:w-[58px]"
              >
                <ArrowLeft
                  size={23}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:-translate-x-0.5"
                />
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="group flex h-[54px] w-[54px] items-center justify-center rounded-full border border-[#ded9d5] text-[#850d25] transition-all duration-300 hover:border-[#850d25] hover:bg-[#850d25] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#850d25] sm:h-[58px] sm:w-[58px]"
              >
                <ArrowRight
                  size={23}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </button>
            </div>
          </div>

          <div className="mt-7 flex items-center gap-2" aria-label={`Testimonial ${activeIndex + 1} of ${testimonials.length}`}>
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === activeIndex ? "step" : undefined}
                className={`h-[3px] transition-all duration-500 ${
                  index === activeIndex
                    ? "w-10 bg-[#850d25]"
                    : "w-5 bg-[#d9d3d0] hover:bg-[#a8495c]"
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative min-h-[300px] overflow-hidden sm:min-h-[400px] lg:min-h-[390px] xl:min-h-[440px]"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.projectImage}
              initial={reduceMotion ? false : { opacity: 0, scale: 1.035 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              transition={{ duration: 0.65, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={active.projectImage}
                alt={`Architectural project associated with ${active.name}'s testimonial`}
                fill
                sizes="(max-width: 1023px) 100vw, 45vw"
                className="object-contain object-center transition-transform duration-700 hover:scale-[1.015]"
              />
            </motion.div>
          </AnimatePresence>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-px bg-[#d8d3cf] lg:block" />

          <div className="pointer-events-none absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/65 text-[#850d25] backdrop-blur-sm sm:bottom-5 sm:right-5">
            <Quote size={17} strokeWidth={1.4} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
