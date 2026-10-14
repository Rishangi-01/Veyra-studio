
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Palette,
  Leaf,
  Lightbulb,
  PanelsTopLeft,
} from "lucide-react";
import { serviceKeyFeaturesData } from "../../data";

const featureIcons = { Palette, Leaf, Lightbulb, PanelsTopLeft };

export default function KeyFeatures() {
  const reduceMotion = useReducedMotion();
  const data = serviceKeyFeaturesData;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.65,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="overflow-hidden bg-[#fcfbf9] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:pb-16 lg:pt-0">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 xl:gap-16">

        <motion.div
          initial={{
            opacity: 0,
            x: reduceMotion ? 0 : -40,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative"
        >
          <div className="relative aspect-[1.65/1] w-full overflow-hidden bg-[#e9e4df]">
            <Image
              src={data.image}
              alt={data.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              priority={false}
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-70" />
          </div>

          {/* Decorative burgundy accent */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: 0.2,
            }}
            className="absolute -bottom-3 -left-3 -z-10 h-1/3 w-2 origin-bottom bg-[#870d2c] sm:-bottom-4 sm:-left-4 sm:w-3"
          />
        </motion.div>

        {/* Features content */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-[76px_minmax(0,1fr)] sm:gap-7 lg:gap-8">

          {/* Section number and vertical label */}
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.7 }}
            className="flex items-center gap-4 border-b border-[#e8e2df] pb-5 sm:flex-col sm:items-start sm:gap-5 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-5"
          >
            <span className="font-serif text-xl font-semibold text-[#8b102d]">
              {data.sectionNumber}
            </span>

            <div className="h-px w-10 bg-[#8b102d] sm:h-16 sm:w-px" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#777479] sm:leading-4">
              {data.label}
            </span>
          </motion.div>

          {/* Four feature cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 sm:gap-x-7"
          >
            {data.items.map(({ number, title, description, icon }, index) => {
              const Icon = featureIcons[icon];
              return (
              <motion.article
                key={number}
                variants={itemVariants}
                className={`group flex gap-4 border-b border-[#e8e2df] py-6 first:pt-0 sm:gap-4 sm:py-7 ${
                  index < 2 ? "sm:pt-0" : ""
                } ${
                  index % 2 === 0
                    ? "sm:border-r sm:pr-5 lg:pr-7"
                    : "sm:pl-1 lg:pl-2"
                } ${
                  index >= 2 ? "sm:border-b-0 sm:pb-0" : ""
                }`}
              >
                {/* Icon */}
                <motion.div
                  whileHover={
                    reduceMotion ? undefined : { scale: 1.08, rotate: -4 }
                  }
                  transition={{ duration: 0.25 }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center text-[#8b102d] sm:h-14 sm:w-14"
                >
                  <Icon
                    size={38}
                    strokeWidth={1.5}
                    className="h-8 w-8 sm:h-9 sm:w-9"
                    aria-hidden="true"
                  />
                </motion.div>

                {/* Text */}
                <div className="min-w-0 pt-1">
                  <h3 className="text-sm font-semibold leading-6 text-[#242226] transition-colors duration-300 group-hover:text-[#8b102d] sm:text-[15px]">
                    {title}
                  </h3>

                  <p className="mt-1.5 max-w-xs text-[13px] leading-6 text-[#777479] sm:text-sm sm:leading-[1.7]">
                    {description}
                  </p>
                </div>
              </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
