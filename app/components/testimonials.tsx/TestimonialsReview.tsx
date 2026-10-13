
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { FiStar } from "react-icons/fi";

type Testimonial = {
  image: string;
  imageAlt: string;
  quote: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    image: "/images/testimonials/residence1.png",
    imageAlt: "Contemporary luxury residential architecture",
    quote:
      "Veyra Studio transformed our vision into a home that feels both luxurious and livable. Their attention to detail and design sense is truly exceptional.",
    name: "Rahul Mehta",
    role: "Homeowner",
    location: "New York",
    avatar: "/images/testimonials/avatar1.png",
  },
  {
    image: "/images/testimonials/residence2.png",
    imageAlt: "Warm contemporary living room interior",
    quote:
      "The team understood our lifestyle and created a space that perfectly balances aesthetics and functionality. Highly professional and creative throughout.",
    name: "Priya Sharma",
    role: "Homeowner",
    location: "California",
    avatar: "/images/testimonials/avatar2.png",
  },
  {
    image: "/images/testimonials/residence3.png",
    imageAlt: "Modern office interior with natural wood finishes",
    quote:
      "Working with Veyra Studio was a seamless experience. They delivered a workspace that reflects our brand and enhances productivity.",
    name: "Amit Kapoor",
    role: "Business Owner",
    location: "Texas",
    avatar: "/images/testimonials/avatar3.png",
  },
  {
    image: "/images/testimonials/residence4.png",
    imageAlt: "Modern office interior with natural wood finishes",
    quote:
      "Working with Veyra Studio was a seamless experience. They delivered a workspace that reflects our brand and enhances productivity.",
    name: "Amitl Kapoor",
    role: "Business Owner",
    location: "Texas",
    avatar: "/images/testimonials/avatar2.png",
  },
  {
    image: "/images/testimonials/residence5.png",
    imageAlt: "Modern office interior with natural wood finishes",
    quote:
      "Working with Veyra Studio was a seamless experience. They delivered a workspace that reflects our brand and enhances productivity.",
    name: "Amits Kapoor",
    role: "Business Owner",
    location: "Texas",
    avatar: "/images/testimonials/avatar3.png",
  },
  {
    image: "/images/testimonials/residence6.png",
    imageAlt: "Modern office interior with natural wood finishes",
    quote:
      "Working with Veyra Studio was a seamless experience. They delivered a workspace that reflects our brand and enhances productivity.",
    name: "Amiti Kapoor",
    role: "Business Owner",
    location: "Texas",
    avatar: "/images/testimonials/avatar1.png",
  },
  {
    image: "/images/testimonials/residence7.png",
    imageAlt: "Modern office interior with natural wood finishes",
    quote:
      "Working with Veyra Studio was a seamless experience. They delivered a workspace that reflects our brand and enhances productivity.",
    name: "Amitu Kapoor",
    role: "Business Owner",
    location: "Texas",
    avatar: "/images/testimonials/avatar3.png",
  },
  {
    image: "/images/testimonials/residence8.png",
    imageAlt: "Modern office interior with natural wood finishes",
    quote:
      "Working with Veyra Studio was a seamless experience. They delivered a workspace that reflects our brand and enhances productivity.",
    name: "Amite Kapoor",
    role: "Business Owner",
    location: "Texas",
    avatar: "/images/testimonials/avatar1.png",
  },
  {
    image: "/images/testimonials/residence9.jpg",
    imageAlt: "Modern office interior with natural wood finishes",
    quote:
      "Working with Veyra Studio was a seamless experience. They delivered a workspace that reflects our brand and enhances productivity.",
    name: "Amita Kapoor",
    role: "Business Owner",
    location: "Texas",
    avatar: "/images/testimonials/avatar2.png",
  },
];

export default function TestimonialsReview() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="overflow-hidden bg-[#faf9f7] px-4 py-12 sm:px-7 sm:py-16 lg:px-10 lg:pb-20">
      <div className="mx-auto grid max-w-[1700px] grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-5">
        {testimonials.map((item, index) => (
          <motion.article
            key={item.name}
            initial={
              reduceMotion ? false : { opacity: 0, y: 30 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: reduceMotion ? 0 : index * 0.15,
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
                  delay: reduceMotion ? 0 : 0.2 + index * 0.15,
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
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, starIndex) => (
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
                    alt={`${item.name} profile`}
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
    </section>
  );
}
