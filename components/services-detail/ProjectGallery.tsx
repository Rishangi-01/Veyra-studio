"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { serviceProjectGalleryData } from "../../data";

export default function ProjectGallery() {
  const reduceMotion = useReducedMotion();
  const data = serviceProjectGalleryData;
  const projects = data.images;

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="project-gallery"
      className="overflow-hidden bg-[#fcfbf9] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:pb-16 lg:pt-0 w-[100%]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[130px_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[155px_minmax(0,1fr)] xl:gap-10">

          {/* Section indicator */}
          <motion.aside
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              ease: "easeOut",
            }}
            className="flex items-start gap-5 lg:min-h-[320px] lg:flex-col"
          >
            <div>
              <span className="font-serif text-3xl font-semibold text-[#870c2d]">
                {data.sectionNumber}
              </span>

              <div className="mt-4 hidden h-20 w-px bg-gradient-to-b from-[#870c2d] to-[#ead8dd] lg:block" />

              <div className="mt-3 h-px w-10 bg-[#870c2d]/40 lg:hidden" />

              <p className="mt-3 text-[10px] font-semibold uppercase leading-[1.7] tracking-[0.15em] text-[#77747a]">
                {data.labelFirst}
                <br />
                {data.labelSecond}
              </p>
            </div>

            <div className="hidden min-h-[250px] w-px bg-[#e9e5e2] lg:ml-auto lg:block" />
          </motion.aside>

          {/* Gallery grid */}
          <div className="grid min-w-0 grid-cols-1 gap-3 sm:gap-4 md:grid-cols-12">

            {/* Main featured project */}
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                ease: "easeOut",
              }}
              className="group relative min-h-[260px] overflow-hidden bg-[#e9e5e2] md:col-span-7 md:min-h-[360px] lg:min-h-[400px] xl:min-h-[430px]"
            >
              <Image
                src={projects.featured.src}
                alt={projects.featured.alt}
                fill
                priority
                sizes="(max-width: 767px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

              <span className="absolute bottom-4 left-4 h-[2px] w-10 bg-white transition-all duration-500 group-hover:w-16 sm:bottom-6 sm:left-6" />
            </motion.div>

            {/* Right-side gallery */}
            <div className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4 md:col-span-5 md:grid-rows-[1fr_1fr]">

              {/* Living room image */}
              <motion.div
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.7,
                  delay: reduceMotion ? 0 : 0.15,
                  ease: "easeOut",
                }}
                className="group relative col-span-2 min-h-[150px] overflow-hidden bg-[#e9e5e2] sm:min-h-[190px] md:min-h-0"
              >
                <Image
                  src={projects.living.src}
                  alt={projects.living.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
              </motion.div>

              {/* Kitchen image */}
              <motion.div
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.7,
                  delay: reduceMotion ? 0 : 0.25,
                  ease: "easeOut",
                }}
                className="group relative min-h-[155px] overflow-hidden bg-[#e9e5e2] sm:min-h-[190px] md:min-h-0"
              >
                <Image
                  src={projects.kitchen.src}
                  alt={projects.kitchen.alt}
                  fill
                  sizes="(max-width: 767px) 50vw, 20vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
              </motion.div>

              {/* View more card */}
              <motion.div
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.7,
                  delay: reduceMotion ? 0 : 0.35,
                  ease: "easeOut",
                }}
                whileHover={
                  reduceMotion ? undefined : { y: -4 }
                }
                className="relative flex min-h-[155px] flex-col justify-between overflow-hidden bg-[#800d2b] p-4 text-white sm:min-h-[190px] sm:p-6 md:min-h-0 md:p-5 lg:p-6"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-125"
                />

                <span className="text-xs font-medium tracking-[0.16em] text-white/90">
                  {data.viewMoreNumber}
                </span>

                <div>
                  <div className="mb-4 h-8 w-px bg-white/60" />

                  <Link
                    href={data.viewMoreHref}
                    className="group/link inline-flex items-center gap-2 text-sm font-medium leading-5 transition-colors hover:text-white/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    <span>
                      {data.viewMoreFirst}
                      <br />
                      {data.viewMoreSecond}
                    </span>

                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform duration-300 group-hover/link:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>

                <span className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-white/70 transition-transform duration-500 hover:scale-x-100" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
