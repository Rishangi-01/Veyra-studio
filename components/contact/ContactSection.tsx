
"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";

import { contactSectionData } from "../../data";

type ContactItemType = "phone" | "email" | "location";

const contactItems = contactSectionData.items;

function ContactIcon({ type }: { type: ContactItemType }) {
  const common = {
    width: 23,
    height: 23,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  return (
    <svg {...common}>
      {type === "phone" && (
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 4.18 2 2 0 0 1 4.08 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.05 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.69A2 2 0 0 1 22 16.92Z" />
      )}

      {type === "email" && (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </>
      )}

      {type === "location" && (
        <>
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </>
      )}
    </svg>
  );
}

export default function ContactSection() {
  const reduceMotion = useReducedMotion();

  const reveal: Variants = {
    hidden: reduceMotion ? {} : { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      aria-labelledby="contact-section-heading"
      className="relative overflow-hidden bg-[#fcfbf9] py-12 sm:py-16 lg:py-16"
    >
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-10 px-5 sm:px-8 md:px-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:px-[4.5%] xl:gap-14">
        {/* LEFT: Contact information */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          className="relative z-10 flex min-w-0 flex-col"
        >
          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-5 sm:mb-6">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#850d25] sm:text-sm">
              {contactSectionData.eyebrow}
            </span>

            <span className="h-[2px] w-20 bg-[#850d25]/50 sm:w-28" />
          </div>

          {/* Heading */}
          <h2
            id="contact-section-heading"
            className="max-w-[700px] font-serif text-[clamp(2.5rem,5vw,5rem)] font-normal leading-[1.04] tracking-[-0.055em] text-[#111318]"
          >
            {contactSectionData.titleFirst}
            <br />
            {contactSectionData.titleSecond}{" "}
            <span className="text-[#850d25]">
              {contactSectionData.titleHighlight}
            </span>
          </h2>

          {/* Description */}
          <motion.p
            variants={reveal}
            className="mt-5 max-w-[620px] text-base leading-7 text-[#85858c] sm:mt-6 sm:text-lg sm:leading-[1.65]"
          >
            {contactSectionData.description}
          </motion.p>

          {/* Contact details */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-0">
            {contactItems.map((item, index) => (
              <motion.a
                key={item.type}
                href={item.href}
                target={item.type === "location" ? "_blank" : undefined}
                rel={
                  item.type === "location"
                    ? "noreferrer"
                    : undefined
                }
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 18 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.6,
                  delay: reduceMotion ? 0 : index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className={`group flex min-w-0 items-start gap-3 ${
                  index > 0
                    ? "sm:pl-5 lg:pl-3"
                    : ""
                } ${
                  index === 2
                    ? "sm:col-span-2 lg:col-span-1"
                    : ""
                } ${
                  index > 0
                    ? "lg:border-l lg:border-[#dedbda]"
                    : ""
                }`}
              >
                {/* Icon */}
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#850d25] text-white transition-all duration-300 group-hover:bg-[#65091c] group-hover:shadow-lg group-hover:shadow-[#850d25]/20 sm:h-[40px] sm:w-[40px]">
                  <ContactIcon type={item.type} />
                </span>

                {/* Text */}
                <span className="min-w-0 pt-1">
                  <span className="block text-[15px] font-semibold text-[#24252a] sm:text-base">
                    {item.title}
                  </span>

                  <span className="mt-2 block text-sm leading-[1.65] text-[#77777e] break-words">
                    {item.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, x: 35, scale: 0.98 }
          }
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: reduceMotion ? 0 : 1,
            delay: reduceMotion ? 0 : 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative isolate min-h-[280px] w-full overflow-hidden sm:min-h-[360px] lg:min-h-[410px] xl:min-h-[440px]"
        >
          {/* Decorative background accent */}
          <div className="absolute -right-3 -top-3 -z-10 h-2/3 w-2/3 bg-[#850d25]/[0.06]" />

          <div className="relative h-[280px] w-full overflow-hidden sm:h-[360px] lg:h-[410px] xl:h-[440px]">
            <motion.div
              initial={reduceMotion ? false : { scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: reduceMotion ? 0 : 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0"
            >
              <Image
                src={contactSectionData.image}
                alt={contactSectionData.imageAlt}
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 48vw"
                className="object-cover object-center"
              />
            </motion.div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
