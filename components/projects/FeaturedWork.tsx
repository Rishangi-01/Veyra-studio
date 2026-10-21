"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { featuredWorkData } from "../../data";

type Category = (typeof featuredWorkData.categories)[number];

export default function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<
    (typeof featuredWorkData.items)[number] | null
  >(null);
  const reduceMotion = useReducedMotion();
  const categories = featuredWorkData.categories;
  const projects = featuredWorkData.items;

  const visibleProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  return (
    <section
      aria-labelledby="featured-work-title"
      className="bg-[#faf9f7] px-5 py-16 text-[#171717] sm:px-8 sm:py-16 lg:px-12 lg:py-16"
    >
      <div className="mx-auto max-w-[1680px]">
        <div className="mb-9 flex flex-col gap-7 lg:mb-10 lg:flex-row lg:items-center lg:justify-between">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: reduceMotion ? 0 : 0.65 }}
          >
            <div className="mb-3 flex items-center gap-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em]">
                {featuredWorkData.eyebrow}
              </p>
              <span className="h-px w-16 bg-[#8b102b]/50" />
            </div>
            <h2
              id="featured-work-title"
              className="font-serif text-[clamp(3.2rem,7vw,4.8rem)] font-medium leading-[0.98] tracking-[-0.055em]"
            >
              {featuredWorkData.titleFirst}{" "}
              <span className="text-[#850d25]">{featuredWorkData.titleHighlight}</span>
            </h2>
            <p className="mt-4 max-w-[660px] text-base leading-7 text-black/60 sm:text-lg">
              {featuredWorkData.description}
            </p>
          </motion.div>

          <div
            aria-label={featuredWorkData.filterLabel}
            className="-mx-1 flex max-w-full gap-1 overflow-x-auto px-1 pb-2 lg:flex-wrap lg:justify-end lg:overflow-visible"
          >
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 rounded-full px-4 py-2.5 text-lg transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#850d25] sm:px-5 font-semibold ${
                    isActive
                      ? "bg-[#850d25] text-white"
                      : "text-black/75 hover:bg-black/5 hover:text-[#850d25]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleProjects.map((project, index) => (
              <motion.article
                key={project.title}
                layout
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.4,
                  delay: reduceMotion ? 0 : index * 0.06,
                  layout: { duration: reduceMotion ? 0 : 0.35 },
                }}
                className="group min-w-0"
              >
                <div className="relative aspect-[1.44] overflow-hidden bg-[#e8e5e0]">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`View larger image: ${project.title}`}
                    className="absolute inset-0 h-full w-full cursor-zoom-in focus-visible:outline focus-visible:outline-4 focus-visible:outline-[#850d25]"
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                    />
                  </button>
                </div>

                <div className="flex items-start justify-between gap-4 pt-4">
                  <div>
                    <h3 className="font-serif text-[1.55rem] leading-tight tracking-[-0.035em] sm:text-[1.7rem]">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 flex flex-wrap items-center gap-x-3 text-sm text-black/55 sm:text-base">
                      <span>{project.category}</span>
                      <span aria-hidden="true" className="text-[#850d25]/60">
                        |
                      </span>
                      <span>{project.location}</span>
                    </p>
                  </div>
                  <a
                    aria-label={`View project details: ${project.title}`}
                    href={featuredWorkData.detailsHref}
                    className="mt-1 shrink-0 text-[#850d25] transition-transform duration-300 group-hover:translate-x-1.5"
                  >
                    <ArrowRight size={25} strokeWidth={1.4} />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.2 }}
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedProject.title} image`}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
              onClick={(event) => {
                if (event.target === event.currentTarget) {
                  setSelectedProject(null);
                }
              }}
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close enlarged project image"
                autoFocus
                className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-7 sm:top-7"
              >
                <X size={24} aria-hidden="true" />
              </button>

              <div className="relative h-full max-h-[85vh] w-full max-w-[1400px]">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.imageAlt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
                <p className="absolute inset-x-0 -bottom-8 text-center text-sm text-white/85">
                  {selectedProject.title}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}