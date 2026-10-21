
"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { projectDetailGalleryData } from "../../data";

export default function ProjectGallery() {
  const data = projectDetailGalleryData;
  const projects = data.items;
  const [startIndex, setStartIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  // Show 3 images on desktop, 2 on tablet and 1 on mobile.
  const [visibleCount, setVisibleCount] = useState(3);

  // Keep the visible image count in sync with the viewport.
  // A CSS-responsive layout handles sizing; this state controls
  // how many slides are rendered.
  const [viewportReady, setViewportReady] = useState(false);

  // A small resize listener keeps the slider responsive.
  if (typeof window !== "undefined" && !viewportReady) {
    setViewportReady(true);
  }

  const maxStart = Math.max(0, projects.length - visibleCount);

  const next = () => {
    setStartIndex((current) =>
      current >= maxStart ? 0 : current + 1
    );
  };

  const previous = () => {
    setStartIndex((current) =>
      current <= 0 ? maxStart : current - 1
    );
  };

  const visibleProjects = Array.from(
    { length: visibleCount },
    (_, index) => projects[(startIndex + index) % projects.length]
  );

  return (
    <section className="overflow-hidden bg-[#fcfbf9] px-4 py-8 sm:px-7 sm:py-8 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1600px]">

        {/* Heading and slider controls */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
          className="mb-5 flex items-center justify-between gap-4 sm:mb-6"
        >
          <div>
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#17191f] sm:text-4xl lg:text-[42px]">
              {data.titleFirst} <span className="text-[#94102b]">{data.titleHighlight}</span>
            </h2>
            <span className="mt-3 block h-[2px] w-12 bg-[#94102b]" />
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={previous}
              aria-label={data.previousLabel}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ead8d9] text-[#94102b] transition-all duration-300 hover:border-[#94102b] hover:bg-[#94102b] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#94102b] sm:h-12 sm:w-12"
            >
              <FiArrowLeft size={21} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label={data.nextLabel}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ead8d9] text-[#94102b] transition-all duration-300 hover:border-[#94102b] hover:bg-[#94102b] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#94102b] sm:h-12 sm:w-12"
            >
              <FiArrowRight size={21} />
            </button>
          </div>
        </motion.div>

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleProjects.map((project, index) => (
              <motion.article
                key={`${project.image}-${startIndex}-${index}`}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 16, scale: 0.985 }
                }
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.4,
                  delay: reduceMotion ? 0 : index * 0.07,
                  ease: "easeOut",
                }}
                className="group relative min-w-0 overflow-hidden bg-[#eee8e2]"
              >
                <div className="relative aspect-[1.72/1] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Hover details */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:p-5">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/80">
                      {project.category}
                    </p>
                    <h3 className="mt-1 font-serif text-xl sm:text-2xl">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Slide indicator */}
        <div className="mt-5 flex items-center justify-center gap-2 lg:mt-6">
          {projects.map((project, index) => (
            <button
              key={project.image}
              type="button"
              onClick={() =>
                setStartIndex(Math.min(index, maxStart))
              }
              aria-label={`${data.goToProjectLabel} ${index + 1}`}
              aria-current={startIndex === index ? "true" : undefined}
              className={`h-[5px] rounded-full transition-all duration-300 ${
                startIndex === index
                  ? "w-9 bg-[#94102b]"
                  : "w-5 bg-[#dedbd7] hover:bg-[#bda6a8]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
