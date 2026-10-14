
"use client";

import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  MapPin,
} from "lucide-react";
import {
  AnimatePresence,    
  motion,
  useReducedMotion,
} from "motion/react";
import { heroSlides as slides } from "../../data";

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const slide = slides[current];

  const nextSlide = () => {
    setCurrent((previous) => (previous + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrent(
      (previous) => (previous - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    if (isPaused || reduceMotion) return;

    const timer = window.setInterval(() => {
      setCurrent((previous) => (previous + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [isPaused, reduceMotion]);

  return (
    <section
      aria-label="Veyra Studio featured architecture"
      className="relative overflow-hidden bg-[#f8f7f4] text-[#191919] w-[100%]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
    >
      <div className="mx-auto grid max-w-[1800px] grid-cols-1 lg:grid-cols-[1.03fr_0.97fr]">
        <div className="relative flex min-h-[490px] flex-col justify-center px-6 pb-12 pt-16 sm:px-10 sm:pb-16 sm:pt-20 md:px-14 lg:min-h-[660px] lg:px-12 lg:py-20 xl:px-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(133,13,37,0.035),transparent_60%)]"
          />

          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={`eyebrow-${current}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-medium uppercase tracking-[0.19em] text-neutral-600 sm:mb-8 sm:gap-x-6 sm:text-xs sm:tracking-[0.2em]"
              >
                <span>{slide.eyebrow}</span>
                {slide.metaLabels?.map((label, index) => (
                  <Fragment key={`${label}-${current}`}>
                    {index > 0 && (
                      <span className="h-3 w-px bg-[#850d25]" />
                    )}
                    <span>{label}</span>
                  </Fragment>
                ))}
              </motion.div>
            </AnimatePresence>

            <div className="min-h-[150px] sm:min-h-[205px] lg:min-h-[245px]">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`title-${current}`}
                  initial={reduceMotion ? false : { opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -18 }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-serif text-[clamp(2.65rem,5.1vw,5.4rem)] leading-[0.99] tracking-[-0.055em]"
                >
                  {slide.title.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  <span className="mt-1 block text-[#850d25]">
                    {slide.highlight}
                  </span>
                </motion.h1>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={`description-${current}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mt-5 max-w-[560px] text-sm leading-6 text-neutral-600 sm:mt-6 sm:text-base sm:leading-[1.65]"
              >
                {slide.description}
              </motion.p>
            </AnimatePresence>

            <div className="mt-7 flex flex-wrap items-center gap-5 sm:mt-8 sm:gap-8">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-4 text-sm font-semibold text-[#850d25] sm:text-base"
              >
                <span className="relative">
                  {slide.ctaLabel}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#850d25] transition-all duration-300 group-hover:w-full" />
                </span>

                <motion.span
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.25 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#850d25] text-white shadow-lg shadow-[#850d25]/10 transition-colors group-hover:bg-[#62091b] sm:h-14 sm:w-14"
                >
                  <ArrowRight size={24} strokeWidth={1.6} />
                </motion.span>
              </Link>

              {/* <div className="flex items-center gap-3 text-xs text-neutral-500">
                <span className="font-medium text-[#850d25]">
                  {String(current + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-8 bg-neutral-300">
                  <span
                    className="block h-px bg-[#850d25] transition-all duration-500"
                    style={{
                      width: `${((current + 1) / slides.length) * 100}%`,
                    }}
                  />
                </span>
                <span>{String(slides.length).padStart(2, "0")}</span>
              </div> */}
            </div>
          </div>
        </div>

        <div className="relative min-h-[380px] overflow-hidden bg-[#dedbd5] sm:min-h-[480px] lg:min-h-[660px]">
          <AnimatePresence mode="sync">
            <motion.div
              key={`image-${current}`}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={slide.image}
                alt={`${slide.project} architectural design`}
                fill
                priority={current === 0}
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/[0.03]" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute right-0 top-7 z-10 flex w-[72px] flex-col items-center justify-between bg-[#850d25] py-6 text-white sm:top-12 sm:w-[92px] sm:py-8 lg:top-[8%] lg:bottom-[12%] lg:w-[100px] lg:py-12">
            <span className="h-8 w-px bg-white/50" />

            <div className="flex flex-col items-center gap-5">
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous hero slide"
                className="flex flex-col items-center gap-1 text-xs text-white/80 transition-colors hover:text-white"
              >
                <ArrowDown className="rotate-180" size={16} />
                <span>{String(((current - 1 + slides.length) % slides.length) + 1).padStart(2, "0")}</span>
              </button>

              <div className="flex flex-col items-center gap-2">
                <span className="h-px w-3 bg-white/60" />
                <span className="text-sm font-medium">
                  {String(current + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-3 bg-white/60" />
              </div>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next hero slide"
                className="flex flex-col items-center gap-1 text-xs text-white/80 transition-colors hover:text-white"
              >
                <span>{String(((current + 1) % slides.length) + 1).padStart(2, "0")}</span>
                <ArrowDown size={16} />
              </button>
            </div>

            <span className="h-8 w-px bg-white/50" />
          </div>

          <div className="absolute bottom-5 left-5 z-10 flex items-center gap-2 bg-black/25 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-white backdrop-blur-sm sm:bottom-8 sm:left-8">
            <MapPin size={13} />
            Thoughtfully designed spaces
          </div>
        </div>
      </div>

      <div className="relative z-20 mx-auto -mt-0 max-w-[1600px] px-0 sm:px-8 lg:-mt-20 lg:px-0 xl:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="grid min-w-0 grid-cols-1 overflow-hidden bg-[#1d1d1d] text-white shadow-xl sm:grid-cols-[0.9fr_1.1fr] lg:grid-cols-[0.95fr_1.75fr]"
        >
          <div className="relative min-h-[210px] overflow-hidden border-l-[6px] border-[#850d25] sm:min-h-[220px] lg:min-h-[165px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`featured-${current}`}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.featuredImage}
                  alt={`${slide.project} featured project`}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 45vw, 35vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col justify-center gap-5 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between lg:gap-5 lg:px-8 xl:px-10">
            <div className="min-w-0 lg:max-w-[260px]">
              <p className="mb-2 text-xs text-white/60">
                Featured Project
              </p>
              <AnimatePresence mode="wait">
                <motion.h2
                  key={`project-${current}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="text-lg font-semibold leading-snug sm:text-xl"
                >
                  {slide.project}
                </motion.h2>
              </AnimatePresence>

              <span className="mt-3 block h-[2px] w-8 bg-[#850d25]" />
            </div>

            <div className="grid grid-cols-3 gap-x-5 gap-y-5 border-t border-white/15 pt-5 sm:grid-cols-3 lg:flex lg:items-center lg:gap-0 lg:border-l lg:border-t-0 lg:pt-0">
              <ProjectDetail label="Location" value={slide.location} />
              <ProjectDetail label="Year" value={slide.year} />
              <ProjectDetail label="Category" value={slide.category} />
            </div>

            <Link
              href="/projects"
              aria-label={`Explore ${slide.project}`}
              className="group hidden h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-white/80 transition-all duration-300 hover:border-[#850d25] hover:bg-[#850d25] sm:flex"
            >
              <ArrowRight
                size={23}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectDetail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="min-w-0 lg:border-r lg:border-white/25 lg:px-5 xl:px-7">
      <p className="mb-2 text-[11px] text-white/55 sm:text-xs">
        {label}
      </p>
      <p className="break-words text-xs font-medium sm:text-sm">
        {value}
      </p>
    </div>
  );
}
