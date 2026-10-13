"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Interior",
  "Landscape",
] as const;

type Category = (typeof categories)[number];

type Project = {
  title: string;
  category: Exclude<Category, "All">;
  location: string;
  image: string;
  imageAlt: string;
};

const projects: Project[] = [
  {
    title: "The Willow Residence",
    category: "Residential",
    location: "California, USA",
    image: "/images/home/banner2.jfif",
    imageAlt: "Contemporary residence framed by a landscaped garden",
  },
  {
    title: "Horizon Office",
    category: "Commercial",
    location: "New York, USA",
    image: "/images/home/banner3.jfif",
    imageAlt: "Modern glass-fronted commercial building",
  },
  {
    title: "Urban Luxe",
    category: "Interior",
    location: "Miami, USA",
    image: "/images/home/banner4.jfif",
    imageAlt: "Warm, contemporary living room with natural finishes",
  },
  {
    title: "Cedar Ridge Retreat",
    category: "Landscape",
    location: "Oregon, USA",
    image: "/images/home/banner5.jfif",
    imageAlt: "A modern retreat integrated with its surrounding landscape",
  },
  {
    title: "The Courtyard House",
    category: "Residential",
    location: "Austin, USA",
    image: "/images/home/banner6.jfif",
    imageAlt: "Modern family home with a private courtyard",
  },
  {
    title: "The Glass Pavilion",
    category: "Commercial",
    location: "Seattle, USA",
    image: "/images/home/banner7.jfif",
    imageAlt: "Contemporary pavilion with expansive glass walls",
  },
];

export default function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const reduceMotion = useReducedMotion();

  const visibleProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      aria-labelledby="featured-work-title"
      className="bg-[#faf9f7] px-5 py-16 text-[#171717] sm:px-8 sm:py-20 lg:px-12 lg:py-24"
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
                Featured Work
              </p>
              <span className="h-px w-16 bg-[#8b102b]/50" />
            </div>
            <h2
              id="featured-work-title"
              className="font-serif text-[clamp(3.2rem,7vw,4.8rem)] leading-[0.98] tracking-[-0.055em]"
            >
              Our <span className="text-[#850d25]">Projects</span>
            </h2>
            <p className="mt-4 max-w-[660px] text-base leading-7 text-black/60 sm:text-lg">
              A collection of thoughtfully designed spaces that reflect our
              commitment to quality, functionality and timeless design.
            </p>
          </motion.div>

          <div
            aria-label="Filter projects by category"
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
                  className={`shrink-0 rounded-full px-4 py-2.5 text-sm transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#850d25] sm:px-5 ${
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
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                  />
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
                    aria-hidden="true"
                    href="/projects/projects-detail"
                    className="mt-1 shrink-0 text-[#850d25] transition-transform duration-300 group-hover:translate-x-1.5"
                  >
                    <ArrowRight size={25} strokeWidth={1.4} />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}