
"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiLinkedin,
  FiInstagram,
  FiMail,
} from "react-icons/fi";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  instagram?: string;
  email?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Arjun Mehta",
    role: "Principal Architect",
    image: "/images/team/team1.png",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
    email: "arjun@example.com",
  },
  {
    name: "Neha Kapoor",
    role: "Interior Designer",
    image: "/images/team/team2.png",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
    email: "neha@example.com",
  },
  {
    name: "Rohan Sinha",
    role: "Project Manager",
    image: "/images/team/team3.png",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
    email: "rohan@example.com",
  },
  {
    name: "Kavya Rao",
    role: "Design Consultant",
    image: "/images/team/team4.png",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
    email: "kavya@example.com",
  },
  {
    name: "Vikram Sharma",
    role: "Senior Architect",
    image: "/images/team/team3.png",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
    email: "vikram@example.com",
  },
  {
    name: "Ananya Verma",
    role: "Interior Stylist",
    image: "/images/team/team1.png",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
    email: "ananya@example.com",
  },
];

const burgundy = "#850d25";

export default function OurTeamMembers() {
  const [startIndex, setStartIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  // Responsive number of cards visible at a time.
  // CSS breakpoints control card widths; this state controls the page size.
  const [visibleCount, setVisibleCount] = useState(4);

  // Keep the number of visible cards in sync with screen width.
  // ResizeObserver is not needed; use a browser resize listener.
  // The effect is declared below.

  const maxStart = Math.max(0, teamMembers.length - visibleCount);

  const goTo = (index: number) => {
    setStartIndex(Math.max(0, Math.min(index, maxStart)));
  };

  const next = () => {
    goTo(startIndex >= maxStart ? 0 : startIndex + 1);
  };

  const previous = () => {
    goTo(startIndex <= 0 ? maxStart : startIndex - 1);
  };

  return (
    <section className="relative overflow-hidden bg-[#faf9f7] px-4 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20 w-[100%]">
      <div className="mx-auto max-w-[1600px]">

        {/* Section heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-8 flex items-end justify-between gap-4 sm:mb-10"
        >

          {/* Desktop controls */}
          <div className="hidden shrink-0 gap-3 sm:flex">



          </div>
        </motion.div>

        {/* Slider viewport */}
        <div className="overflow-hidden flex items-center gap-4">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous team members"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#850d25]/70 text-[#850d25] transition-all duration-300 hover:bg-[#850d25] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#850d25]"
          >
            <FiChevronLeft size={22} />
          </button>
          <motion.div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 w-[100%]"
            layout
          >
            {teamMembers
              .slice(startIndex, startIndex + visibleCount)
              .map((member, index) => (
                <motion.article
                  key={member.name}
                  layout
                  initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.45,
                    delay: reduceMotion ? 0 : index * 0.07,
                  }}
                  className="group min-w-0 overflow-hidden bg-white shadow-[0_8px_35px_rgba(25,20,20,0.035)] transition-shadow duration-500 hover:shadow-[0_18px_45px_rgba(25,20,20,0.12)]"
                >
                  {/* Image */}
                  <div className="relative aspect-[1.25/1] overflow-hidden bg-[#e9e3dc]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.055]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>

                  {/* Details */}
                  <div className="px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                    <h3 className="font-serif text-2xl leading-tight tracking-tight text-[#17191c]">
                      {member.name}
                    </h3>

                    <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#7b7b7e] sm:text-xs">
                      {member.role}
                    </p>

                    <motion.div
                      initial={false}
                      className="mt-3 h-[2px] w-10 bg-[#850d25] transition-all duration-500 group-hover:w-16"
                    />

                    {/* Social links */}
                    <div className="mt-5 flex items-center gap-3 text-[#858589]">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${member.name} on LinkedIn`}
                        className="transition-colors hover:text-[#850d25] focus-visible:outline-2 focus-visible:outline-[#850d25]"
                      >
                        <FiLinkedin size={19} />
                      </a>

                      <span className="h-4 w-px bg-[#d8d5d2]" />

                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${member.name} on Instagram`}
                        className="transition-colors hover:text-[#850d25] focus-visible:outline-2 focus-visible:outline-[#850d25]"
                      >
                        <FiInstagram size={19} />
                      </a>

                      <span className="h-4 w-px bg-[#d8d5d2]" />

                      <a
                        href={`mailto:${member.email}`}
                        aria-label={`Email ${member.name}`}
                        className="transition-colors hover:text-[#850d25] focus-visible:outline-2 focus-visible:outline-[#850d25]"
                      >
                        <FiMail size={19} />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
          </motion.div>
          <button
            type="button"
            onClick={next}
            aria-label="Next team members"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#850d25]/70 text-[#850d25] transition-all duration-300 hover:bg-[#850d25] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#850d25]"
          >
            <FiChevronRight size={22} />
          </button>
        </div>

        {/* Bottom controls and pagination */}
        <div className="mt-8 flex items-center justify-between sm:mt-10">
          {/* Mobile controls */}
          <div className="flex gap-2 sm:hidden">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous team members"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#850d25]/60 text-[#850d25] transition hover:bg-[#850d25] hover:text-white"
            >
              <FiChevronLeft size={21} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next team members"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#850d25]/60 text-[#850d25] transition hover:bg-[#850d25] hover:text-white"
            >
              <FiChevronRight size={21} />
            </button>
          </div>

          <span className="text-xs tracking-wider text-[#858589]">

          </span>

          <div className="flex items-center justify-center gap-2">
            {Array.from(
              { length: Math.max(1, teamMembers.length - visibleCount + 1) },
              (_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Go to team slide ${index + 1}`}
                  aria-current={startIndex === index ? "step" : undefined}
                  className={`h-[6px] rounded-full transition-all duration-300 ${startIndex === index
                      ? "w-9 bg-[#850d25]"
                      : "w-6 bg-[#dedbd7] hover:bg-[#b7a6a9]"
                    }`}
                />
              )
            )}
          </div>

          <span className="hidden text-xs tracking-wider text-[#858589] sm:block">

          </span>
        </div>
      </div>
    </section>
  );
}
