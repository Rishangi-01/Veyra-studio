
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import { testimonialsIntroData } from "../../data";

function AnimatedStat({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });
  const reduceMotion = useReducedMotion();
  const match = /^(\d+(?:\.\d+)?)(.*)$/.exec(value);
  const numericPrefix = match?.[1] ?? "";
  const isNumeric = numericPrefix.length > 0;
  const target = isNumeric ? Number(numericPrefix) : 0;
  const suffix = match?.[2] ?? "";
  const decimalPlaces = numericPrefix.split(".")[1]?.length ?? 0;
  const count = useMotionValue(0);
  const formattedCount = useTransform(
    count,
    (current) => `${current.toFixed(decimalPlaces)}${suffix}`
  );

  useEffect(() => {
    if (!isInView || !isNumeric) return;

    if (reduceMotion) {
      count.set(target);
      return;
    }

    const animation = animate(count, target, {
      duration: 1.6,
      ease: "easeOut",
    });

    return () => animation.stop();
  }, [count, isInView, isNumeric, reduceMotion, target]);

  return (
    <motion.span ref={ref} aria-label={value}>
      {isNumeric ? formattedCount : value}
    </motion.span>
  );
}

export default function TestimonialsIntro() {
  const reduceMotion = useReducedMotion();
  const data = testimonialsIntroData;

  return (
    <section className="relative isolate overflow-hidden lg:mt-12">
      {/* Architectural background */}
      <div className="absolute inset-y-0 right-0 -z-20 w-full lg:w-[55%]">
        <Image
          src={data.image}
          alt=""
          fill
          priority
          sizes="(max-width: 1023px) 100vw, 55vw"
          className="object-cover object-center"
        />
      </div>

      {/* Soft, premium white overlay */}
      <div className="absolute inset-0 -z-10" />

      <div className="absolute inset-y-0 right-0 -z-10 hidden w-[58%] lg:block" />

      {/* Main content */}
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-10 px-6 py-8 sm:px-10 sm:py-12 lg:grid-cols-[1.2fr_1fr] lg:gap-12 lg:px-[5.6%] lg:py-12 xl:gap-8">
        
        {/* Left content */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative"
        >
          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-5">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#850d25] sm:text-xs sm:tracking-[0.2em]">
              {data.eyebrow}
            </span>

            <span className="h-[2px] w-16 bg-[#a7a1a2]" />
          </div>

          {/* Heading */}
          <h2 className="max-w-[800px] font-serif text-[clamp(2.5rem,4.8vw,5rem)] font-medium leading-[1.04] tracking-[-0.055em] text-[#111820]">
            {data.titleFirst}{" "}
            <span className="text-[#850d25]">
              {data.titleHighlight}
            </span>
          </h2>

          {/* Description */}
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-5 max-w-[710px] text-base leading-[1.7] text-[#777980] sm:text-lg lg:text-[21px] lg:leading-[1.55]"
          >
            {data.description}
          </motion.p>
        </motion.div>

        {/* Right statistics */}
        <div className="relative lg:border-l lg:border-[#d1ccca] lg:pl-4 xl:pl-6">
          <div className="grid grid-cols-3 gap-5 sm:grid-cols-3 sm:gap-0">
            {data.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 24 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.65,
                  delay: reduceMotion ? 0 : 0.15 * index,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group flex flex-col justify-center border-[#d6d1cf] py-2 sm:px-5 lg:px-4 xl:px-7 ${
                  index !== 0
                    ? "sm:border-l"
                    : ""
                }`}
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { y: -3 }}
                  className="font-serif text-4xl font-semibold tracking-tight text-[#850d25] sm:text-3xl md:text-4xl xl:text-[42px]"
                >
                  <AnimatedStat value={stat.value} />
                </motion.span>

                <p className="mt-1 text-sm leading-relaxed text-[#686970] sm:text-xs md:text-sm xl:text-base">
                  {stat.label}
                </p>

                {/* Decorative accent */}
                <motion.div
                  initial={false}
                  className="mt-3 h-[2px] w-0 bg-[#850d25] transition-all duration-500 group-hover:w-10"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-[#e6e0dc]" />
    </section>
  );
}
