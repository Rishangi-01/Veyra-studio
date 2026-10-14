"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "motion/react";
import { homeProjectsData } from "../../data";
import { FaLongArrowAltRight } from "react-icons/fa";

const projects = homeProjectsData.items;
const AUTOPLAY_SPEED = 30;
const NAVIGATION_DURATION = 450;

type NavigationTween = {
  from: number;
  to: number;
  startedAt: number;
};

function wrapOffset(offset: number, cycleWidth: number) {
  if (cycleWidth <= 0) return 0;
  return -(((-offset % cycleWidth) + cycleWidth) % cycleWidth);
}

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const isPaused = isHovered || hasFocus;
  const reduceMotion = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);
  const secondSetRef = useRef<HTMLDivElement>(null);
  const cycleWidthRef = useRef(0);
  const slideWidthRef = useRef(0);
  const offsetRef = useRef(0);
  const manualOffsetRef = useRef(0);
  const navigationTweenRef = useRef<NavigationTween | null>(null);
  const trackX = useMotionValue(0);

  useLayoutEffect(() => {
    const measureTrack = () => {
      if (!firstSetRef.current || !secondSetRef.current) return;
      const cycleWidth =
        secondSetRef.current.getBoundingClientRect().left -
        firstSetRef.current.getBoundingClientRect().left;
      if (cycleWidth <= 0) return;

      cycleWidthRef.current = cycleWidth;
      slideWidthRef.current = cycleWidth / projects.length;
      offsetRef.current = wrapOffset(offsetRef.current, cycleWidth);
      trackX.set(offsetRef.current + manualOffsetRef.current);
    };

    measureTrack();
    const observer = new ResizeObserver(measureTrack);
    if (viewportRef.current) observer.observe(viewportRef.current);
    if (firstSetRef.current) observer.observe(firstSetRef.current);
    if (secondSetRef.current) observer.observe(secondSetRef.current);

    return () => observer.disconnect();
  }, [trackX]);

  const navigate = useCallback((direction: -1 | 1) => {
    const slideWidth = slideWidthRef.current;
    if (slideWidth <= 0) return;

    if (reduceMotion) {
      navigationTweenRef.current = null;
      manualOffsetRef.current = 0;
      offsetRef.current = wrapOffset(
        offsetRef.current + direction * slideWidth,
        cycleWidthRef.current
      );
      trackX.set(offsetRef.current);
      return;
    }

    const from = manualOffsetRef.current;
    navigationTweenRef.current = {
      from,
      to: from + direction * slideWidth,
      startedAt: performance.now(),
    };
  }, [reduceMotion, trackX]);

  const previous = useCallback(() => navigate(1), [navigate]);
  const next = useCallback(() => navigate(-1), [navigate]);

  useAnimationFrame((time, delta) => {
    const cycleWidth = cycleWidthRef.current;
    if (cycleWidth <= 0) return;

    if (!isPaused && !reduceMotion) {
      offsetRef.current -= (delta / 1000) * AUTOPLAY_SPEED;
      offsetRef.current = wrapOffset(offsetRef.current, cycleWidth);
    }

    const tween = navigationTweenRef.current;
    let currentManualOffset = manualOffsetRef.current;
    if (tween) {
      const progress = Math.min(
        1,
        (performance.now() - tween.startedAt) / NAVIGATION_DURATION
      );
      const easedProgress = 1 - (1 - progress) ** 3;
      currentManualOffset =
        tween.from + (tween.to - tween.from) * easedProgress;

      if (progress === 1) {
        offsetRef.current = wrapOffset(
          offsetRef.current + tween.to,
          cycleWidth
        );
        currentManualOffset = 0;
        navigationTweenRef.current = null;
      }
      manualOffsetRef.current = currentManualOffset;
    }

    const currentOffset = offsetRef.current + currentManualOffset;
    trackX.set(currentOffset);

    const traveled = ((-currentOffset % cycleWidth) + cycleWidth) % cycleWidth;
    const currentIndex = Math.floor(
      traveled / (cycleWidth / projects.length)
    ) % projects.length;
    setActiveIndex((current) => (current === currentIndex ? current : currentIndex));
  });

  const handleBlur = (event: React.FocusEvent<HTMLElement>) => {
    const nextTarget = event.relatedTarget;
    if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
      setHasFocus(false);
    }
  };

  return (
    <section
      id="projects"
      aria-label="Our architectural projects"
      className="relative isolate grid h-[min(82vh,720px)] min-h-[560px] w-full grid-cols-[38px_minmax(0,1fr)_38px] overflow-hidden bg-[#79001e] sm:grid-cols-[54px_minmax(0,1fr)_54px] sm:h-[min(55vw,650px)] lg:grid-cols-[68px_minmax(0,1fr)_68px] lg:h-[min(44vw,720px)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setHasFocus(true)}
      onBlurCapture={handleBlur}
    >
      <aside
        aria-hidden="true"
        className="relative row-start-1 bg-[#79001e]"
      >
        <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-medium tracking-[0.3em] text-white [writing-mode:vertical-rl] rotate-180 sm:bottom-7 sm:text-[10px]">
          {homeProjectsData.verticalLabel}
        </span>
        <span className="absolute bottom-[72px] left-1/2 h-16 w-px -translate-x-1/2 bg-white/35 sm:bottom-[86px] sm:h-20" />
      </aside>

      <div ref={viewportRef} className="relative row-start-1 min-w-0 overflow-hidden">
        <motion.div
          className="flex h-full w-full"
          style={{ x: trackX }}
        >
          {[0, 1, 2].flatMap((setIndex) =>
            projects.map((project, index) => {
              const isActive = setIndex === 0 && index === activeIndex;

              return (
                <article
                  key={`${setIndex}-${project.number}`}
                  ref={
                    index === 0
                      ? setIndex === 0
                        ? firstSetRef
                        : setIndex === 1
                          ? secondSetRef
                          : undefined
                      : undefined
                  }
                  aria-hidden={setIndex > 0}
                  inert={setIndex > 0}
                  className="group relative h-full w-full shrink-0 overflow-hidden border-r border-white/10 sm:w-1/2 lg:w-1/4"
                >
                    <Image
                      src={project.image}
                      alt={`${project.title} in ${project.location}`}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                      priority={setIndex === 0 && index === 0}
                      className={`object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.045] ${
                        project.position ?? "center"
                      }`}
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/5 to-black/35 transition-colors duration-500 group-hover:from-black/50 group-hover:via-black/10" />

                    <motion.div
                      className="pointer-events-none absolute inset-0 border border-white/0"
                      animate={{
                        borderColor: isActive
                          ? "rgba(255,255,255,0.24)"
                          : "rgba(255,255,255,0)",
                      }}
                      transition={{ duration: 0.4 }}
                    />

                    <div className="relative z-10 flex h-full flex-col items-start p-5 pt-20 text-white sm:p-7 sm:pt-24 xl:p-10 xl:pt-24">
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
                        tabIndex={setIndex === 0 ? undefined : -1}
                      >
                        <motion.h3
                          initial={false}
                          animate={{
                            y: isActive ? 0 : 4,
                            opacity: 1,
                          }}
                          className="font-serif text-[25px] leading-[1.08] tracking-[-0.035em] sm:text-[28px] xl:text-[27px] 2xl:text-[32px]"
                        >
                          {project.title}
                          <span className="block">in {project.location}</span>
                        </motion.h3>

                        <span className="mt-4 inline-flex text-[#a80032] transition-transform duration-300 group-hover:translate-x-2">
                          <FaLongArrowAltRight size={21} strokeWidth={1.5} />
                        </span>
                      </Link>

                      <div className="absolute bottom-7 right-6 hidden translate-y-2 text-right opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 lg:block">
                        <p className="text-[9px] uppercase tracking-[0.2em] text-white/70">
                          {project.category}
                        </p>
                      </div>
                    </div>
                </article>
              );
            })
          )}
        </motion.div>

        <div className="pointer-events-none absolute left-5 top-5 z-20 flex items-center gap-4 text-white sm:left-8 sm:top-7 lg:left-[4%]">
          <span className="text-[9px] font-medium uppercase tracking-[0.28em] sm:text-[10px]">
            {homeProjectsData.label}
          </span>
          <span className="h-px w-16 bg-[#a80032]" />
        </div>
      </div>

      <aside
        aria-hidden="true"
        className="relative row-start-1 bg-[#79001e]"
      >
        <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-medium tracking-[0.3em] text-white [writing-mode:vertical-rl] rotate-180 sm:bottom-7 sm:text-[10px]">
          {homeProjectsData.verticalLabel}
        </span>
        <span className="absolute bottom-[72px] left-1/2 h-16 w-px -translate-x-1/2 bg-white/35 sm:bottom-[86px] sm:h-20" />
      </aside>

      <button
        type="button"
        onClick={previous}
        aria-label="Previous project"
        className="absolute left-0 top-1/2 z-30 inline-flex h-10 -translate-y-1/2 items-center gap-2 bg-[#79001e] px-2.5 text-white transition-colors hover:bg-[#a0002b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:px-3"
      >
        <ArrowLeft size={17} strokeWidth={1.5} />
        <span className="text-[9px] font-medium tracking-[0.2em]">
          {homeProjectsData.prevLabel}
        </span>
      </button>

      <button
        type="button"
        onClick={next}
        aria-label="Next project"
        className="absolute right-0 top-1/2 z-30 inline-flex h-10 -translate-y-1/2 items-center gap-2 bg-[#79001e] px-2.5 text-white transition-colors hover:bg-[#a0002b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:px-3"
      >
        <span className="text-[9px] font-medium tracking-[0.2em]">
          {homeProjectsData.nextLabel}
        </span>
        <ArrowRight size={17} strokeWidth={1.5} />
      </button>

      <div className="absolute bottom-5 right-12 z-20 flex items-center gap-2 bg-black/30 px-3 py-2 text-white backdrop-blur-sm sm:bottom-6 sm:right-[68px] lg:hidden">
        <span className="text-xs font-medium">
          {projects[activeIndex].number}
        </span>
        <span className="text-xs text-white/50">/</span>
        <span className="text-xs text-white/65">0{projects.length}</span>
      </div>

      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Project {activeIndex + 1} of {projects.length}:{" "}
        {projects[activeIndex].title} in {projects[activeIndex].location}
      </div>
    </section>
  );
}
