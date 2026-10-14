"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { relatedServicesData } from "../../data";

export default function RelatedServices() {
  const data = relatedServicesData;
  const services = data.items;
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else if (window.innerWidth < 1280) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  const maxIndex = Math.max(0, services.length - visibleCount);

  const nextSlide = useCallback(() => {
    setActiveIndex((current) =>
      current >= maxIndex ? 0 : current + 1
    );
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setActiveIndex((current) =>
      current <= 0 ? maxIndex : current - 1
    );
  }, [maxIndex]);

  useEffect(() => {
    if (reduceMotion) return;

    const timer = window.setInterval(() => {
      nextSlide();
    }, 4500);

    return () => window.clearInterval(timer);
  }, [nextSlide, reduceMotion]);

  useEffect(() => {
    setActiveIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  const visibleServices = services.slice(
    activeIndex,
    activeIndex + visibleCount
  );

  return (
    <section
      id="related-services"
      className="overflow-hidden bg-[#fcfbf9] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:pb-16 lg:pt-0 w-[100%]"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[145px_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[155px_minmax(0,1fr)] xl:gap-10">
          <motion.aside
            initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.6 }}
            className="flex items-start gap-5 lg:flex-col"
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

            <div className="hidden w-px bg-[#e9e5e2] lg:ml-auto lg:block" />
          </motion.aside>

          {/* Slider content */}
          <div className="min-w-0">
            {/* Heading and controls */}
            <div className="mb-6 flex items-center justify-between gap-4 sm:mb-8">
              <motion.h2
                initial={{ opacity: 0, x: reduceMotion ? 0 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: reduceMotion ? 0 : 0.65 }}
                className="font-serif text-2xl font-medium tracking-tight text-[#171719] sm:text-3xl md:text-4xl"
              >
                {data.titleFirst}{" "}
                <span className="text-[#870c2d]">{data.titleHighlight}</span>
              </motion.h2>

              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label={data.previousLabel}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ead8dd] text-[#870c2d] transition-all duration-300 hover:border-[#870c2d] hover:bg-[#870c2d] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#870c2d] sm:h-10 sm:w-10"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      d="M19 12H5m7 7-7-7 7-7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label={data.nextLabel}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ead8dd] text-[#870c2d] transition-all duration-300 hover:border-[#870c2d] hover:bg-[#870c2d] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#870c2d] sm:h-10 sm:w-10"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12h14m-7-7 7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Cards */}
            <div
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              aria-live="polite"
              aria-atomic="true"
            >
              <AnimatePresence mode="popLayout" initial={false}>
                {visibleServices.map((service, index) => (
                  <motion.article
                    key={service.title}
                    layout
                    initial={{
                      opacity: 0,
                      y: reduceMotion ? 0 : 18,
                    }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{
                      opacity: 0,
                      y: reduceMotion ? 0 : -12,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.35,
                      delay: reduceMotion ? 0 : index * 0.055,
                      ease: "easeOut",
                    }}
                    className="group min-w-0 overflow-hidden border border-[#eee9e5] bg-white shadow-[0_3px_15px_rgba(40,25,20,0.025)] transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(40,25,20,0.09)]"
                  >
                    <Link
                      href={service.href}
                      className="block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#870c2d]"
                    >
                      {/* Service image */}
                      <div className="relative aspect-[2.15/1] overflow-hidden bg-[#eee9e5]">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                      </div>

                      {/* Card footer */}
                      <div className="flex min-h-[76px] items-center justify-between gap-3 px-4 py-4 sm:px-5">
                        <div className="min-w-0">
                          <h3 className="text-sm font-semibold leading-snug text-[#242124] transition-colors duration-300 group-hover:text-[#870c2d] sm:text-base">
                            {service.title}
                          </h3>

                          <p className="mt-1 hidden text-xs leading-5 text-[#77747a] lg:group-hover:block">
                            {service.description}
                          </p>
                        </div>

                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#dcb9c2] text-[#870c2d] transition-all duration-300 group-hover:border-[#870c2d] group-hover:bg-[#870c2d] group-hover:text-white">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                            aria-hidden="true"
                          >
                            <path
                              d="M5 12h14m-7-7 7 7-7 7"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>

            {/* Slider progress */}
            <div className="mt-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`${data.groupLabel} ${index + 1}`}
                    aria-current={activeIndex === index ? "step" : undefined}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "w-8 bg-[#870c2d]"
                        : "w-4 bg-[#ded8d5] hover:bg-[#b99ba2]"
                    }`}
                  />
                ))}
              </div>

              <span className="text-xs tracking-wider text-[#77747a]">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(maxIndex + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
