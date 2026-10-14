
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
} from "lucide-react";

import { RiMapPin2Fill } from "react-icons/ri";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Services", href: "/services" },
  { label: "Our Projects", href: "/projects" },
  { label: "Our Process", href: "/#process" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Get a Quote", href: "/get-a-quote" },
  { label: "Contact Us", href: "/contact-us" },
];
const services = [
  { label: "Architectural Design", href: "/services/architecture" },
  { label: "Interior Design", href: "/services/interior-design" },
  { label: "Landscape Design", href: "/services/landscape-design" },
  { label: "Project Management", href: "/services/project-management" },
  { label: "Urban Planning", href: "/services/urban-planning" },
  { label: "Residential Design", href: "/services/residential" },
  { label: "Commercial Design", href: "/services/commercial" },
  { label: "Consultation", href: "/contact-us" },
];

const contactItems = [
  {
    icon: RiMapPin2Fill,
    label: "Address",
    lines: ["123 Design Avenue,", "New York, NY 10001, USA"],
    href: "https://maps.google.com/?q=123+Design+Avenue+New+York",
  },
  {
    icon: FaPhoneAlt,
    label: "Phone",
    lines: ["+1 234 567 8900"],
    href: "tel:+12345678900",
  },
  {
    icon: MdEmail,
    label: "Email",
    lines: ["info@veyrastudio.com"],
    href: "mailto:info@veyrastudio.com",
  },
  {
    icon: CiGlobe,
    label: "Website",
    lines: ["www.veyrastudio.com"],
    href: "https://www.veyrastudio.com",
  },
];

const socialLinks = [
  { label: "Facebook", icon: FaFacebookF, href: "https://facebook.com" },
  { label: "Instagram", icon: FaInstagram, href: "https://instagram.com" },
  { label: "LinkedIn", icon: FaLinkedinIn, href: "https://linkedin.com" },
  { label: "YouTube", icon: FaYoutube, href: "https://youtube.com" },
];

const columns = [
  { title: "Quick Links", items: quickLinks },
  { title: "Our Services", items: services },
];

export default function Footer() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <footer className="relative isolate overflow-hidden bg-[#100f0e] text-white">

        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/footer.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 -z-10" />
        <div className="absolute inset-0 -z-10" />
        <div className="absolute inset-0 -z-10" />

        <div className="mx-auto max-w-[1600px] px-6 pb-12 pt-14 sm:px-10 sm:pb-14 sm:pt-16 lg:px-12 lg:pb-14 lg:pt-20">
          <motion.div
            variants={reveal}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.85fr_1.05fr_1.45fr] lg:gap-8 xl:gap-12"
          >
            {/* Brand column */}
            <div className="min-w-0">
              <Link
                href="/"
                aria-label="Veyra Studio homepage"
                className="group inline-flex max-w-full items-center"
              >
                <Image
                  src="/images/veyra-logo.png"
                  alt="Veyra Studio — Architecture, Interiors, Design"
                  width={310}
                  height={125}
                  className="h-auto w-[220px] max-w-full object-contain object-left transition-opacity duration-300 group-hover:opacity-80 sm:w-[250px] lg:w-[280px]"
                  priority={false}
                />
              </Link>

              <p className="mt-6 max-w-[370px] text-[13px] leading-[1.85] text-white/75 sm:text-sm">
                At Veyra Studio, we design spaces that inspire,
                function beautifully and elevate everyday living
                through thoughtful architecture and interiors.
              </p>

              <Link
                href="/about-us"
                className="group mt-5 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.15em] text-[#e0a2ae] transition-colors hover:text-white"
              >
                Discover our studio
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            {/* Quick links and services */}
            {columns.map((column, columnIndex) => (
              <div
                key={column.title}
                className={`min-w-0 ${columnIndex === 0
                    ? "lg:border-l lg:border-white/10 lg:pl-7"
                    : "lg:border-l lg:border-white/10 lg:pl-7"
                  }`}
              >
                <h2 className="font-serif text-[19px] text-white sm:text-xl">
                  {column.title}
                </h2>

                <div className="mb-5 mt-3 h-px w-8 bg-[#a90031]" />

                <ul className="space-y-2.5">
                  {column.items.map((item, index) => (
                    <motion.li
                      key={item.href + item.label}
                      initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        delay: reduceMotion ? 0 : index * 0.045,
                      }}
                    >
                      <Link
                        href={item.href}
                        className="group flex w-fit max-w-full items-start gap-2 text-[13px] leading-5 text-white/80 transition-colors duration-300 hover:text-white"
                      >
                        <FaChevronRight
                          size={14}
                          strokeWidth={1.7}
                          className="mt-0.5 shrink-0 text-[#a90031] transition-transform duration-300 group-hover:translate-x-1"
                        />
                        <span>{item.label}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact column */}
            <div className="min-w-0 lg:border-l lg:border-white/10 lg:pl-7">
              <h2 className="font-serif text-[19px] text-white sm:text-xl">
                Contact Us
              </h2>

              <div className="mb-6 mt-3 h-px w-8 bg-[#a90031]" />

              <ul className="space-y-4">
                {contactItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.li
                      key={item.label}
                      initial={reduceMotion ? false : { opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: reduceMotion ? 0 : index * 0.08,
                      }}
                    >
                      <a
                        href={item.href}
                        target={
                          item.label === "Address" || item.label === "Website"
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          item.label === "Address" || item.label === "Website"
                            ? "noreferrer"
                            : undefined
                        }
                        className="group flex items-center gap-3.5"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#850d25] text-white transition-all duration-300 group-hover:scale-105 group-hover:bg-[#a90031] group-hover:shadow-[0_0_22px_rgba(169,0,49,0.28)]">
                          <Icon size={17} strokeWidth={1.8} />
                        </span>

                        <span className="min-w-0 text-[13px] leading-[1.8] text-white/80 transition-colors duration-300 group-hover:text-white">
                          {item.lines.map((line) => (
                            <span key={line} className="block break-words">
                              {line}
                            </span>
                          ))}
                        </span>
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </div>

      </footer>
      <div className="border-t border-[#850d25]/80 bg-[#100f0e]">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-5 px-6 py-6 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-12">
          <p className="text-xs leading-5 text-white/65">
            © 2026 Veyra Studio. All Rights Reserved.
          </p>

          <div className="flex items-center gap-2.5">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="group flex h-8 w-8 items-center justify-center rounded-full border border-[#850d25] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#850d25] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Icon size={15} strokeWidth={1.7} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
