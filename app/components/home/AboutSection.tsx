
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MoveUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export default function AboutSection() {
    const reduceMotion = useReducedMotion();

    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#faf9f6] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16"
        >
            <div className="mx-auto grid max-w-[1600px] items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 xl:gap-16">

                <motion.div
                    initial={reduceMotion ? false : { opacity: 0, x: -45 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.85,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative mx-auto w-full max-w-[700px] pb-7 pl-0 pr-3 pt-5 sm:pb-8 sm:pl-3 sm:pr-5 sm:pt-8 lg:pr-0"
                >
                    <motion.div
                        initial={reduceMotion ? false : { scale: 0.92, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="absolute left-0 top-0 h-[68%] w-[47%] bg-[#850d25]"
                    />

                    <div className="relative z-10 ml-[5%] mt-[5%] aspect-[1.22/1] overflow-hidden bg-neutral-200 shadow-sm">
                        <motion.div
                            initial={reduceMotion ? false : { scale: 1.08 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="absolute inset-0"
                        >
                            <Image
                                src="/images/home/about-us1.png"
                                alt="Contemporary Veyra Studio architectural residence"
                                fill
                                priority={false}
                                sizes="(max-width: 1023px) 90vw, 48vw"
                                className="object-cover object-center transition-transform duration-700 hover:scale-[1.035]"
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={reduceMotion ? false : { opacity: 0, y: 28, x: 20 }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.75,
                            delay: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute bottom-0 right-0 z-20 w-[27%] border-[5px] border-white bg-white shadow-xl sm:right-[-1%] sm:w-[27%] sm:border-[7px] lg:right-[-1%] lg:w-[27%]"
                    >
                        <div className="relative aspect-[0.72/1] overflow-hidden bg-neutral-200">
                            <Image
                                src="/images/home/about-us2.png"
                                alt="Architectural facade and material details"
                                fill
                                sizes="(max-width: 1023px) 28vw, 14vw"
                                className="object-cover transition-transform duration-700 hover:scale-110"
                            />
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={reduceMotion ? false : { opacity: 0, x: 35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.85,
                        delay: 0.1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex flex-col items-start lg:pl-1 xl:pl-5"
                >
                    <div className="mb-6 flex w-full max-w-[365px] items-center gap-6 sm:mb-7">
                        <span className="shrink-0 text-[11px] font-medium uppercase tracking-[0.18em] text-[#850d25] sm:text-sm sm:tracking-[0.2em]">
                            About Veyra Studio
                        </span>

                        <span className="h-px flex-1 bg-[#850d25]" />
                    </div>

                    <h2 className="max-w-[650px] font-serif text-[clamp(2.7rem,5vw,4.5rem)] leading-[1.06] tracking-[-0.045em] text-[#171717]">
                        <motion.span
                            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="block"
                        >
                            Designing a
                        </motion.span>

                        <motion.span
                            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.12 }}
                            className="mt-1 block text-[#850d25]"
                        >
                            Better Tomorrow
                        </motion.span>
                    </h2>

                    <motion.p
                        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: 0.25 }}
                        className="mt-7 max-w-[620px] text-[15px] leading-[1.75] text-[#686868] sm:text-base sm:leading-[1.75] lg:mt-7"
                    >
                        We are a multidisciplinary design studio specializing
                        in architecture, interior design, landscape and
                        planning. Our approach combines creativity, technical
                        expertise and a deep understanding of people’s needs
                        to create spaces that are timeless, sustainable and
                        uniquely yours.
                    </motion.p>

                    <motion.div
                        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: 0.4 }}
                        className="mt-7 sm:mt-8"
                    >
                        <Link
                            href="/about-us"
                            className="group inline-flex items-center gap-5 text-base font-semibold text-[#850d25] sm:gap-8 sm:text-lg"
                        >
                            <span className="relative">
                                More About Us
                                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#850d25] transition-all duration-300 group-hover:w-full" />
                            </span>

                            <motion.span
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#850d25] text-white shadow-lg shadow-[#850d25]/15 transition-colors duration-300 group-hover:bg-[#62091b] sm:h-[60px] sm:w-[60px]"
                            >
                                <ArrowRight
                                    size={25}
                                    strokeWidth={1.6}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </motion.span>
                        </Link>
                    </motion.div>

                    <div className="mt-10 flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-neutral-400 sm:mt-12">
                        <MoveUpRight size={14} className="text-[#850d25]" />
                        <span>Thoughtfully designed. Intentionally built.</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
