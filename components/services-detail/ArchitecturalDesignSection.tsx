
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { architecturalDesignData } from "../../data";

export default function ArchitecturalDesignSection() {
  const shouldReduceMotion = useReducedMotion();
  const data = architecturalDesignData;

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#fcfbf9] px-5 py-12 sm:px-8 md:py-8 lg:px-12">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-12 xl:gap-20">

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div className="flex items-start gap-5 sm:gap-8">

            <div className="flex w-12 shrink-0 flex-col items-center self-stretch sm:w-16">
              <span className="text-sm font-semibold tracking-wider text-[#890d2b]">
                {data.sectionNumber}
              </span>

              <div className="relative mt-5 h-32 w-px bg-[#eadde0]">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "65%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: 0.3 }}
                  className="absolute left-0 top-0 w-px bg-[#920d30]"
                />
              </div>

              <span className="mt-5 text-[10px] font-medium uppercase leading-4 tracking-[0.12em] text-gray-500 [writing-mode:vertical-rl] rotate-180">
                {data.sideLabel}
              </span>
            </div>

            <div className="flex-1 pt-1">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8d102e] sm:text-xs">
                {data.eyebrow}
              </p>

              <h2 className="font-serif text-4xl leading-[1.12] tracking-tight text-[#171719] sm:text-5xl xl:text-[48px]">
                {data.titleFirst}
                <br />
                {data.titleSecond}{" "}
                <span className="text-[#8d102e]">
                  {data.titleHighlight}
                </span>
              </h2>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-3 h-[2px] bg-[#8d102e]"
              />

              <p className="mt-3 max-w-xl text-sm leading-7 text-[#69696d] sm:text-base sm:leading-8">
                {data.description}
              </p>

              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-flex"
              >
                <Link
                  href={data.ctaHref}
                  className="group inline-flex items-center gap-5 bg-[#850c2a] px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#850c2a]/10 transition-colors duration-300 hover:bg-[#65051d] sm:px-7"
                >
                  {data.ctaLabel}

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#850c2a] transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight size={19} />
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: shouldReduceMotion ? 0 : 45,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-[760px] pb-10 pr-5 sm:pb-12 sm:pr-10 lg:pr-0"
        >

          <motion.div
            whileHover={shouldReduceMotion ? undefined : { scale: 1.015 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 ml-3 aspect-[1.12/1] overflow-hidden bg-[#e9e4df] sm:ml-5 sm:aspect-[1.5/1]"
          >
            <Image
              src={data.image}
              alt={data.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 50vw"
              className="object-cover object-center"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 30,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: 0.3,
            }}
            whileHover={shouldReduceMotion ? undefined : { y: -5 }}
            className="absolute bottom-0 right-0 z-20 w-[37%] border-4 border-[#fcfbf9] bg-[#fcfbf9] shadow-xl sm:right-[-1%] sm:w-[35%] sm:border-[6px]"
          >
            <div className="relative aspect-[0.92/1] overflow-hidden">
              <Image
                src={data.secondaryImage}
                alt={data.secondaryImageAlt}
                fill
                sizes="(max-width: 640px) 35vw, 260px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
