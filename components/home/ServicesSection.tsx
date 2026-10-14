
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Sofa,
  Trees,
  ClipboardList,
  MapPinned,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { homeServicesData } from "../../data";

const iconMap = {
  Building2,
  Sofa,
  Trees,
  ClipboardList,
  MapPinned,
} as const;

const services = homeServicesData.items.map((item) => ({
  ...item,
  icon: iconMap[item.icon],
}));

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const activeService = services[activeIndex];
  const ActiveIcon = activeService.icon;

  return (
    <section
      id="services"
      className="overflow-hidden bg-[#faf9f6] px-5 py-6 sm:px-8 sm:py-24 lg:px-12 lg:pb-16 lg:pt-10 xl:px-16 w-[100%]"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid items-center gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12 xl:grid-cols-[0.78fr_1.22fr] xl:gap-16">

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10"
          >
            <div className="mb-5 flex items-center gap-5 sm:mb-6">
              <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-neutral-600 sm:text-xs">
                {homeServicesData.label}
              </span>
              <span className="h-px w-20 bg-[#850d25] sm:w-24" />
            </div>

            <h2 className="font-serif text-5xl leading-[1.05] tracking-[-0.045em] text-[#181818] sm:text-6xl xl:text-[68px]">
              {homeServicesData.title}
            </h2>

            <div className="mt-9 sm:mt-11">
              {services.map((service, index) => {
                const isActive = activeIndex === index;

                return (
                  <motion.button
                    key={service.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    aria-pressed={isActive}
                    className={`group relative flex w-full items-center gap-5 border-b py-[14px] text-left transition-colors duration-300 sm:gap-7 sm:py-[15px] ${
                      isActive
                        ? "border-[#850d25] text-[#850d25]"
                        : "border-neutral-200 text-[#77797e] hover:text-[#850d25]"
                    }`}
                  >
                    <span
                      className={`w-10 shrink-0 text-sm font-medium transition-colors duration-300 sm:text-base ${
                        isActive ? "text-[#850d25]" : ""
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`flex-1 text-[15px] transition-all duration-300 sm:text-base xl:text-[17px] ${
                        isActive
                          ? "translate-x-1 font-semibold"
                          : "font-normal"
                      }`}
                    >
                      {service.title}
                    </span>

                    <motion.span
                      animate={{
                        opacity: isActive ? 1 : 0,
                        x: isActive ? 0 : -6,
                      }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 text-[#850d25]"
                    >
                      <ArrowRight size={17} />
                    </motion.span>

                    {isActive && (
                      <motion.span
                        layoutId="service-active-line"
                        className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#850d25]"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            <Link
              href={homeServicesData.viewAllHref}
              className="group mt-6 inline-flex items-center gap-4 sm:mt-7 sm:gap-6"
            >
              <motion.span
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#850d25] text-white shadow-md shadow-[#850d25]/15 transition-colors duration-300 group-hover:bg-[#62091b] sm:h-[49px] sm:w-[49px]"
              >
                <ArrowRight size={23} />
              </motion.span>

              <span className="text-sm font-medium text-[#850d25] transition-colors group-hover:text-[#62091b] sm:text-base">
                {homeServicesData.viewAllLabel}
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.9,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative min-w-0 pb-8 pt-2 sm:pb-10 sm:pt-4 lg:pb-5 lg:pt-0"
          >
            <div className="absolute left-0 top-0 z-0 h-28 w-[38%] bg-[#dce4e9]/80 sm:h-36" />

            <div className="relative ml-[16%] aspect-[1.13/1] overflow-hidden bg-[#e6e2da] sm:aspect-[1.28/1] lg:aspect-[1.15/1] xl:aspect-[1.26/1]">
              <Image
                src={homeServicesData.image}
                alt={homeServicesData.imageAlt}
                fill
                sizes="(max-width: 1023px) 90vw, 58vw"
                className="object-cover object-center transition-transform duration-1000 hover:scale-[1.035]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

              <div className="absolute right-4 top-4 hidden items-center gap-2 bg-white/90 px-3 py-2 text-[9px] uppercase tracking-[0.2em] text-[#850d25] backdrop-blur sm:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-[#850d25]" />
                {homeServicesData.badge}
              </div>
            </div>

            <motion.div
              layout
              className="relative z-10 -mt-14 ml-0 w-[94%] border border-white/70 bg-[#faf9f6]/[0.98] p-6 shadow-[0_15px_50px_rgba(0,0,0,0.07)] sm:absolute sm:left-0 sm:top-1/2 sm:mt-0 sm:w-[57%] sm:-translate-y-1/2 sm:p-7 md:p-8 lg:w-[59%] xl:p-9"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.title}
                  initial={
                    reduceMotion ? false : { opacity: 0, y: 12 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center text-[#171717] sm:mb-6 sm:h-14 sm:w-14">
                    <ActiveIcon
                      size={47}
                      strokeWidth={1.45}
                      className="max-h-12 max-w-12"
                    />
                  </div>

                  <h3 className="font-serif text-[25px] leading-tight tracking-[-0.025em] text-[#181818] sm:text-[27px] xl:text-[30px]">
                    {activeService.title}
                  </h3>

                  <p className="mt-3 max-w-md text-[13px] leading-[1.7] text-[#696969] sm:text-sm sm:leading-[1.75]">
                    {activeService.description}
                  </p>

                  <Link
                    href={activeService.href}
                    className="group mt-5 inline-flex items-center gap-4 text-sm font-medium text-[#850d25] sm:mt-6"
                  >
                    <span className="relative">
                      Learn More
                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#850d25] transition-all duration-300 group-hover:w-full" />
                    </span>

                    <motion.span
                      whileHover={{ x: 4 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#850d25] text-white transition-colors duration-300 group-hover:bg-[#62091b]"
                    >
                      <ArrowRight size={20} />
                    </motion.span>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <div className="absolute bottom-0 right-0 h-1 w-20 bg-[#850d25] sm:bottom-2 sm:w-28" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
