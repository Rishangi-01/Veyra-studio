
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { pageHeroData } from "../../data";

export default function ProjectDetailsHero() {
  const reduceMotion = useReducedMotion();
  const hero = pageHeroData.projectsDetail;

  return (
    <section
      aria-labelledby="project-details-heading"
      className="relative isolate flex min-h-[300px] items-end overflow-hidden bg-[#11191d] sm:min-h-[350px] md:min-h-[390px] lg:min-h-[420px] xl:min-h-[450px] w-[100%]"
    >
      <motion.div
        initial={reduceMotion ? false : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: reduceMotion ? 0 : 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0 -z-20"
      >
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      <div className="absolute inset-0 -z-10 bg-black/35" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071014]/75 via-[#071014]/20 to-black/10" />

      <div className="absolute inset-0 -z-10 bg-[#18303b]/10" />

      <div className="mx-auto w-full max-w-[1600px] px-6 pb-10 sm:px-10 sm:pb-12 md:px-12 md:pb-14 lg:px-[5.5%] lg:pb-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            delay: reduceMotion ? 0 : 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h1
            id="project-details-heading"
            className="font-sans text-4xl font-medium tracking-[-0.055em] text-white drop-shadow-md sm:text-5xl md:text-[56px] lg:text-[64px] xl:text-[70px]"
          >
            {hero.title}
          </h1>

          <motion.div
            initial={reduceMotion ? false : { width: 0 }}
            animate={{ width: 48 }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              delay: reduceMotion ? 0 : 0.65,
              ease: "easeOut",
            }}
            className="mt-4 h-[3px] bg-[#850d25]"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-white/20" />
    </section>
  );
}
