
"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  MoveUpRight,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";

type Project = {
  number: string;
  title: string;
  location: string;
  category: string;
  image: string;
  href: string;
  position?: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Residential Project",
    location: "Paris",
    category: "Residential Architecture",
    image: "/images/home/banner2.jfif",
    href: "/projects/residential-paris",
    position: "center",
  },
  {
    number: "02",
    title: "Concert Hall",
    location: "New York",
    category: "Cultural Architecture",
    image: "/images/home/banner3.jfif",
    href: "/projects/concert-hall",
    position: "center",
  },
  {
    number: "03",
    title: "Modern Hotel",
    location: "London",
    category: "Hospitality Architecture",
    image: "/images/home/banner4.jfif",
    href: "/projects/modern-hotel",
    position: "center",
  },
  {
    number: "04",
    title: "Modern Hotel",
    location: "London",
    category: "Luxury Architecture",
    image: "/images/home/banner5.jfif",
    href: "/projects/luxury-hotel",
    position: "center",
  },
];

const AUTOPLAY_DELAY = 5000;

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const next = useCallback(() => {
    setActiveIndex((current) => (current + 1) % projects.length);
  }, []);

  const previous = useCallback(() => {
    setActiveIndex(
      (current) => (current - 1 + projects.length) % projects.length
    );
  }, []);

  useEffect(() => {
    if (isPaused || reduceMotion) return;

    const timer = window.setInterval(next, AUTOPLAY_DELAY);
    return () => window.clearInterval(timer);
  }, [isPaused, next, reduceMotion]);

  return (
    <section
      id="projects"
      aria-label="Our architectural projects"
      className="relative isolate overflow-hidden bg-[#79001e] py-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
    >
      {/* Project gallery */}
      <div className="relative mx-auto grid min-h-[620px] max-w-[1800px] grid-cols-1 sm:min-h-[650px] sm:grid-cols-2 lg:h-[min(44vw,720px)] lg:min-h-[570px] lg:grid-cols-4">

        {projects.map((project, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.article
              key={project.number}
              initial={false}
              animate={{
                opacity: 1,
              }}
              transition={{ duration: 0.5 }}
              className={`group relative min-h-[480px] overflow-hidden border-b border-white/10 sm:min-h-[500px] sm:border-r sm:border-b-0 lg:min-h-0 ${
                index === 3 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Project image */}
              <Image
                src={project.image}
                alt={`${project.title} in ${project.location}`}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                priority={index === 0}
                className={`object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.045] ${
                  project.position ?? "center"
                }`}
              />

              {/* Readability overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/5 to-black/35 transition-colors duration-500 group-hover:from-black/50 group-hover:via-black/10" />

              {/* Active project subtle highlight */}
              <motion.div
                className="pointer-events-none absolute inset-0 border border-white/0"
                animate={{
                  borderColor: isActive
                    ? "rgba(255,255,255,0.24)"
                    : "rgba(255,255,255,0)",
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Project number and heading */}
              <div className="relative z-10 flex h-full flex-col items-start p-6 pt-9 text-white sm:p-7 sm:pt-10 xl:p-10">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-semibold tracking-[0.2em]">
                    {project.number}
                  </span>
                  <span className="h-px w-8 bg-white/75" />
                </div>

                <Link
                  href={project.href}
                  className="mt-3 block max-w-[260px] outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label={`View ${project.title} in ${project.location}`}
                >
                  <motion.h3
                    initial={false}
                    animate={{
                      y: isActive ? 0 : 4,
                      opacity: 1,
                    }}
                    className="font-serif text-[28px] leading-[1.08] tracking-[-0.035em] sm:text-[30px] xl:text-[27px] 2xl:text-[32px]"
                  >
                    {project.title}
                    <span className="block">in {project.location}</span>
                  </motion.h3>

                  <span className="mt-4 inline-flex text-[#a80032] transition-transform duration-300 group-hover:translate-x-2">
                    <MoveUpRight size={21} strokeWidth={1.5} />
                  </span>
                </Link>

                {/* Bottom vertical category */}
                <div className="absolute bottom-7 left-7 flex items-center gap-3 sm:bottom-8 sm:left-8 xl:left-10">
                  <span className="h-7 w-px bg-white/50" />
                  <span className="[writing-mode:vertical-rl] rotate-180 text-[9px] font-medium tracking-[0.32em] text-white sm:text-[10px]">
                    ARCHITECTURE
                  </span>
                </div>

                {/* Hover project details */}
                <div className="absolute bottom-7 right-6 hidden translate-y-2 text-right opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 lg:block">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/70">
                    {project.category}
                  </p>
                </div>
              </div>
            </motion.article>
          );
        })}

        {/* Top-left section label */}
        <div className="pointer-events-none absolute left-6 top-7 z-20 flex items-center gap-4 sm:left-8 lg:left-[4%] lg:top-8">
          <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-white sm:text-[10px]">
            Our Projects
          </span>
          <span className="h-px w-16 bg-[#a80032]" />
        </div>

        {/* Previous button */}
        <button
          type="button"
          onClick={previous}
          aria-label="Previous project"
          className="absolute left-0 top-[45%] z-30 inline-flex h-10 items-center gap-2 bg-[#79001e] px-3 text-white transition-colors hover:bg-[#a0002b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:top-1/2"
        >
          <ArrowLeft size={17} strokeWidth={1.5} />
          <span className="text-[9px] font-medium tracking-[0.24em]">
            PREV
          </span>
        </button>

        {/* Next button */}
        <button
          type="button"
          onClick={next}
          aria-label="Next project"
          className="absolute right-0 top-[45%] z-30 inline-flex h-10 items-center gap-2 bg-[#79001e] px-3 text-white transition-colors hover:bg-[#a0002b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:top-1/2"
        >
          <span className="text-[9px] font-medium tracking-[0.24em]">
            NEXT
          </span>
          <ArrowRight size={17} strokeWidth={1.5} />
        </button>

        {/* Active project indicator */}
        <div className="absolute bottom-5 right-5 z-20 flex items-center gap-2 bg-black/30 px-3 py-2 text-white backdrop-blur-sm sm:bottom-6 sm:right-7 lg:hidden">
          <span className="text-xs font-medium">
            {projects[activeIndex].number}
          </span>
          <span className="text-xs text-white/50">/</span>
          <span className="text-xs text-white/65">0{projects.length}</span>
        </div>
      </div>

      {/* Bottom progress indicator */}
      <div className="flex h-1 w-full bg-[#510016]">
        <motion.div
          className="h-full bg-[#c19a82]"
          animate={{
            width: `${((activeIndex + 1) / projects.length) * 100}%`,
          }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        />
      </div>

      {/* Accessible slide navigation */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Project {activeIndex + 1} of {projects.length}:{" "}
        {projects[activeIndex].title} in {projects[activeIndex].location}
      </div>
    </section>
  );
}
