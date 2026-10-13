
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  FiHome,
  FiMapPin,
  FiLayers,
  FiMaximize,
  FiCalendar,
  FiSettings,
  FiCheckCircle,
  FiAward,
  FiUsers,
  FiArrowUpRight,
} from "react-icons/fi";

import { FaLeaf } from "react-icons/fa";

const projectDetails = [
  {
    icon: FiHome,
    label: "Project Name",
    value: "Modern Family Residence",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "New York, USA",
  },
  {
    icon: FiLayers,
    label: "Project Type",
    value: "Residential",
  },
  {
    icon: FiMaximize,
    label: "Project Area",
    value: "4,200 Sq. Ft.",
  },
  {
    icon: FiCalendar,
    label: "Year Completed",
    value: "2024",
  },
  {
    icon: FiSettings,
    label: "Services",
    value: "Architecture, Interior Design, Landscape Design",
  },
];

const features = [
  "Spacious open-plan living area",
  "Floor-to-ceiling glass windows",
  "Modern kitchen with premium finishes",
  "Outdoor lounge and landscaped garden",
  "Sustainable and energy-efficient design",
];

const designPrinciples = [
  {
    icon: FaLeaf,
    title: "Sustainable Design",
    description: "Energy-efficient solutions for a greener future.",
  },
  {
    icon: FiAward,
    title: "Premium Materials",
    description: "High-quality materials for lasting beauty.",
  },
  {
    icon: FiUsers,
    title: "Client-Centric",
    description: "Designed around the client's lifestyle and needs.",
  },
];

function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-3">
      <h2 className="font-serif text-[25px] leading-tight tracking-tight text-[#15171d] sm:text-[28px]">
        {children}
      </h2>
      <span className="mt-2 block h-[2px] w-7 bg-[#9b102d]" />
    </div>
  );
}

export default function ProjectDetailsOverview() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 22,
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
    <section className="overflow-hidden bg-[#fcfbf9] px-4 py-12 text-[#17191f] sm:px-6 sm:py-16 lg:px-10 lg:pt-16 lg:pb-0">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,340px)] lg:gap-8 xl:gap-10">

        {/* LEFT: Project information */}
        <div className="min-w-0">

          {/* Project title */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h1 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
              Modern Family{" "}
              <span className="text-[#94102b]">Residence</span>
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#777980] sm:text-base">
              A contemporary home designed to offer a perfect
              balance of elegance, functionality and comfort
              for modern family living.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: reduceMotion ? 1 : 0.975,
            }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative mt-5 aspect-[1.8/1] w-full overflow-hidden bg-[#eae5df]"
          >
            <Image
              src="/images/projects/project-detail.png"
              alt="Modern family residence with contemporary architecture, warm lighting and landscaped gardens"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 70vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-70" />
          </motion.div>

          {/* Project overview */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-5"
          >
            <SectionHeading>
              Project <span className="text-[#94102b]">Overview</span>
            </SectionHeading>

            <p className="text-sm leading-[1.75] text-[#777980]">
              The Modern Family Residence is a thoughtfully
              designed home that blends contemporary architecture
              with warm, functional interiors. The project focuses
              on creating open, airy spaces, seamlessly connecting
              indoor and outdoor living while maintaining privacy
              and comfort for a modern family lifestyle.
            </p>
          </motion.div>

          {/* Design approach */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-5"
          >
            <SectionHeading>
              Design <span className="text-[#94102b]">Approach</span>
            </SectionHeading>

            <p className="text-sm leading-[1.75] text-[#777980]">
              Our design approach centers on minimal aesthetics,
              natural materials and abundant natural light. Every
              element, from spatial planning to material selection,
              is carefully considered to ensure a cohesive, elegant
              and timeless design that enhances everyday living.
            </p>
          </motion.div>

          {/* Design principles */}
          <div className="mt-5 grid grid-cols-1 divide-y divide-[#eeece8] border border-[#eeece8] bg-white sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {designPrinciples.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <motion.div
                  key={principle.title}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    delay: reduceMotion ? 0 : index * 0.12,
                  }}
                  className="group flex flex-col items-center px-5 py-5 text-center transition-colors duration-300 hover:bg-[#faf5f3] sm:px-3 lg:px-4"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f7eeeb] text-[#a21a35] transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>

                  <h3 className="mt-3 text-sm font-semibold">
                    {principle.title}
                  </h3>

                  <p className="mt-1 max-w-[210px] text-xs leading-5 text-[#85858b]">
                    {principle.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* RIGHT: Sidebar */}
        <aside className="flex min-w-0 flex-col gap-5 lg:sticky lg:top-6">

          {/* Project details card */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="bg-[#f7f3ef] p-5 sm:p-6"
          >
            <SectionHeading>
              Project <span className="text-[#94102b]">Details</span>
            </SectionHeading>

            <div className="mt-3">
              {projectDetails.map((detail, index) => {
                const Icon = detail.icon;

                return (
                  <motion.div
                    key={detail.label}
                    initial={{
                      opacity: 0,
                      x: reduceMotion ? 0 : 12,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.4,
                      delay: reduceMotion ? 0 : index * 0.07,
                    }}
                    className="flex items-start gap-3 border-b border-[#e9e2dc] py-3 last:border-b-0"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f1e8e4] text-[#b3233e]">
                      <Icon size={19} strokeWidth={1.6} />
                    </div>

                    <div className="min-w-0 pt-0.5">
                      <h3 className="text-xs font-semibold text-[#3a3b41]">
                        {detail.label}
                      </h3>

                      <p className="mt-0.5 break-words text-xs leading-[1.6] text-[#777980]">
                        {detail.value}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Key features */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <SectionHeading>
              Key <span className="text-[#94102b]">Features</span>
            </SectionHeading>

            <ul className="space-y-3 pt-1">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{
                    opacity: 0,
                    x: reduceMotion ? 0 : 10,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.4,
                    delay: reduceMotion ? 0 : index * 0.08,
                  }}
                  className="flex items-start gap-3 text-xs leading-5 text-[#666970]"
                >
                  <FiCheckCircle
                    size={16}
                    className="mt-0.5 shrink-0 text-[#b3233e]"
                  />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative overflow-hidden bg-[#f7f1ed] p-5 sm:p-6"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#e9d8d4]/40 blur-2xl" />

            <div className="relative">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#a01b35]">
                Like this project?
              </p>

              <h2 className="mt-2 font-serif text-[27px] leading-[1.15] tracking-tight">
                Let&apos;s Discuss
                <br />
                <span className="text-[#94102b]">Your Project</span>
              </h2>

              <Link
                href="/contact-us"
                className="group mt-4 inline-flex min-h-10 items-center justify-between gap-5 bg-[#8d0c28] px-4 py-2 text-xs font-semibold text-white transition-colors duration-300 hover:bg-[#68071d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d0c28] focus-visible:ring-offset-2"
              >
                Get a Quote

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#8d0c28] transition-transform duration-300 group-hover:translate-x-1">
                  <FiArrowUpRight size={17} />
                </span>
              </Link>
            </div>
          </motion.div>
        </aside>
      </div>
    </section>
  );
}
