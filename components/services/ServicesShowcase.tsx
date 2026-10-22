"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { serviceShowcaseData } from "../../data";

export default function ServicesShowcase() {
  const reduceMotion = useReducedMotion();
  const data = serviceShowcaseData;

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#faf9f6] py-16 sm:py-20 lg:pt-16 lg:pb-12"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16 lg:px-12 xl:gap-20 xl:px-16">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          className="relative mx-auto w-full max-w-[580px] pb-10 pl-5 sm:pb-12 sm:pl-8 lg:mx-0"
        >
          {/* Burgundy decorative block */}
          <motion.div
            initial={{ scaleY: reduceMotion ? 1 : 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.9, delay: 0.15 }}
            className="absolute left-0 top-4 h-[48%] w-[15%] origin-top bg-[#850c2b]"
          />

          <div className="group relative z-10 aspect-[4/5] overflow-hidden bg-stone-200">
            <Image
              src={data.image}
              alt={data.imageAlt}
              fill
              priority={false}
              sizes="(max-width: 1024px) 90vw, 42vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.045]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : 35,
              y: reduceMotion ? 0 : 20,
            }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.8, delay: 0.3 }}
            className="group absolute -bottom-1 right-0 z-20 w-[43%] border-[5px] border-[#faf9f6] bg-stone-200 shadow-xl sm:-bottom-2 sm:right-2 sm:border-[7px]"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={data.secondaryImage}
                alt={data.secondaryImageAlt}
                fill
                sizes="(max-width: 1024px) 40vw, 18vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </motion.div>

        </motion.div>

        {/* RIGHT: Services Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={reveal}
          className="w-full"
        >
          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#850c2b] sm:text-sm">
              {data.eyebrow}
            </span>
            <span className="h-px w-16 bg-[#850c2b]/70 sm:w-24" />
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
            <h2 className="max-w-[650px] font-serif text-4xl font-medium leading-[1.08] tracking-[-0.045em] text-[#151519] sm:text-5xl lg:text-5xl xl:text-[58px]">
              {data.titleFirst}
              <br />
              {data.titleSecond}
              <br />
              <span className="text-[#850c2b]">
                <span className="mr-2 text-stone-300">/</span>
                {data.titleHighlight}
              </span>
            </h2>

            {/* Experience detail */}
            <div className="shrink-0 border-l border-stone-300 pl-4 text-sm leading-6 text-stone-500 xl:mt-2">
              <span className="block font-medium text-[#252329]">
                {data.experience}
              </span>
              <span>{data.discipline}</span>
            </div>
          </div>

          {/* Description */}
          <p className="mt-6 max-w-[570px] text-sm leading-7 text-stone-500 sm:text-base sm:leading-7">
            {data.description}
          </p>

          {/* Services list */}
          <div className="mt-4 grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:mt-4 xl:gap-x-12">
            {data.items.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 16,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  delay: reduceMotion ? 0 : index * 0.07,
                }}
                className="group border-b border-stone-200"
              >
                <Link
                  href={service.href}
                  className="flex min-h-[64px] items-center gap-4 py-4 outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-[#850c2b] focus-visible:ring-offset-2"
                >
                  <span className="w-7 shrink-0 text-sm text-stone-500 transition-colors duration-300 group-hover:text-[#850c2b]">
                    {service.number}
                  </span>

                  <span className="flex-1 text-sm font-medium text-[#26252a] transition-colors duration-300 group-hover:text-[#850c2b] sm:text-[15px]">
                    {service.title}
                  </span>

                  <ArrowRight
                    size={19}
                    strokeWidth={1.5}
                    className="shrink-0 text-[#850c2b] transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
