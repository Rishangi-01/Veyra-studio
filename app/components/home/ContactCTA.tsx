
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export default function ContactCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact-cta"
      className="relative overflow-hidden bg-[#75001d]"
      aria-labelledby="contact-cta-title"
    >
      <div className="grid min-h-[390px] grid-cols-1 md:min-h-[420px] md:grid-cols-2 lg:min-h-[450px]">

        {/* Left: Content */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative flex items-center px-7 py-14 sm:px-12 sm:py-16 lg:px-[clamp(3rem,7.5vw,8rem)] lg:py-15"
        >
          {/* Subtle background detail */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_15%,rgba(255,255,255,0.07),transparent_55%)]"
          />

          <div className="relative z-10 max-w-[520px]">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-5 sm:mb-6">
              <span className="text-[10px] font-medium uppercase tracking-[0.27em] text-white sm:text-[11px]">
                Let&apos;s Create Together
              </span>

              <span className="h-px w-14 bg-[#c49b91]" />
            </div>

            {/* Heading */}
            <h2
              id="contact-cta-title"
              className="font-serif text-[clamp(2.8rem,5.2vw,4.2rem)] leading-[1.04] tracking-[-0.045em] text-[#fffaf6]"
            >
              Have a Project
              <br />
              <span className="italic">in Mind?</span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-[440px] text-[15px] leading-[1.75] text-white/80 sm:mt-6 sm:text-base">
              Get in touch with our team and let&apos;s turn your ideas
              into extraordinary spaces.
            </p>

            {/* CTA button */}
            <Link
              href="/contact-us"
              className="group mt-6 inline-flex min-h-[58px] items-center gap-5 bg-[#fffdfb] py-2 pl-6 pr-3 text-[#75001d] transition-colors duration-300 hover:bg-[#f1e7e4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:mt-7"
            >
              <span className="text-sm font-semibold">
                Get in Touch
              </span>

              <motion.span
                whileHover={reduceMotion ? undefined : { scale: 1.08 }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#75001d] text-white transition-colors duration-300 group-hover:bg-[#98002b]"
              >
                <ArrowRight
                  size={21}
                  strokeWidth={1.6}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </motion.span>
            </Link>
          </div>
        </motion.div>

        {/* Right: Architectural image */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative min-h-[270px] overflow-hidden sm:min-h-[350px] md:min-h-0"
        >
          <Image
            src="/images/home/contact-interior.png"
            alt="Contemporary luxury interior with warm wooden finishes and garden views"
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
          />

          {/* Warm cinematic overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/[0.03]" />
        </motion.div>
      </div>
    </section>
  );
}
