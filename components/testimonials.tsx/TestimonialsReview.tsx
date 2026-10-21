
"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { FiStar } from "react-icons/fi";
import { testimonialReviewsData } from "../../data";

const INITIAL_REVIEW_COUNT = 6;
const REVIEWS_PER_LOAD = 3;

export default function TestimonialsReview() {
  const reduceMotion = useReducedMotion();
  const data = testimonialReviewsData;
  const [visibleCount, setVisibleCount] = useState(INITIAL_REVIEW_COUNT);
  const visibleItems = data.items.slice(0, visibleCount);

  return (
    <section className="overflow-hidden bg-[#faf9f7] px-4 py-12 sm:px-7 sm:py-16 lg:px-10 lg:pb-20">
      <div className="mx-auto max-w-[1700px]">
        <div
          id="testimonial-reviews"
          className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-5"
        >
        {visibleItems.map((item, index) => (
          <motion.article
            key={item.name}
            initial={
              reduceMotion ? false : { opacity: 0, y: 30 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: reduceMotion ? 0 : (index % REVIEWS_PER_LOAD) * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group flex min-w-0 flex-col overflow-hidden border border-[#e9e6e2] bg-white shadow-[0_4px_18px_rgba(20,20,20,0.035)] transition-shadow duration-500 hover:shadow-[0_14px_38px_rgba(20,20,20,0.10)] sm:flex-row"
          >
            {/* Architectural image */}
            <div className="relative min-h-[230px] w-full shrink-0 overflow-hidden sm:min-h-[290px] sm:w-[40%] lg:min-h-[310px] xl:w-[40%]">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1279px) 40vw, 15vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Testimonial content */}
            <div className="flex min-w-0 flex-1 flex-col px-5 py-6 sm:px-5 sm:py-5 lg:px-6 lg:py-6">
              {/* Quotation mark */}
              <motion.span
                initial={
                  reduceMotion ? false : { opacity: 0, scale: 0.7 }
                }
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: reduceMotion
                    ? 0
                    : 0.2 + (index % REVIEWS_PER_LOAD) * 0.12,
                }}
                aria-hidden="true"
                className="mb-1 font-serif text-5xl font-bold leading-[0.8] text-[#850d25]"
              >
                “
              </motion.span>

              {/* Review */}
              <p className="text-sm leading-[1.7] text-[#66666b] lg:text-[14px]">
                {item.quote}
              </p>

              {/* Rating */}
              <div
                className="mt-4 flex items-center gap-1 text-[#850d25]"
                aria-label={data.ratingLabel}
              >
                {Array.from({ length: data.rating }).map((_, starIndex) => (
                  <FiStar
                    key={starIndex}
                    size={16}
                    strokeWidth={1.5}
                    className="fill-current"
                  />
                ))}
              </div>

              {/* Client profile */}
              <div className="mt-5 flex items-center gap-3">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#eee9e3] ring-1 ring-[#e7e1db] sm:h-11 sm:w-11">
                  <Image
                    src={item.avatar}
                    alt={`${item.name} ${data.profileAltSuffix}`}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold text-[#19191c]">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-xs leading-relaxed text-[#929197]">
                    {item.role}, {item.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
        </div>

        {visibleCount < data.items.length && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() =>
                setVisibleCount((count) =>
                  Math.min(count + REVIEWS_PER_LOAD, data.items.length)
                )
              }
              aria-controls="testimonial-reviews"
              className="inline-flex min-h-12 items-center justify-center border border-[#850d25] bg-[#850d25] px-7 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-[#65091c] hover:bg-[#65091c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#850d25]"
            >
              Load More Testimonials
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
