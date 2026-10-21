
"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { contactFormData } from "../../data";

const burgundy = "#850d25";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

type IconName = "pin" | "phone" | "mail" | "clock" | "arrow";

function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: IconName;
  className?: string;
}) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "pin":
      return (
        <svg {...common}>
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.19 19a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.09 4.18 2 2 0 0 1 4.08 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.05 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.69A2 2 0 0 1 22 16.92Z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common}>
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      );
  }
}

const inputClass =
  "mt-2.5 w-full min-w-0 rounded-sm border border-[#e6e3e0] bg-white/90 px-3.5 py-3 text-sm text-[#25252a] outline-none transition duration-300 placeholder:text-[#a0a0a5] hover:border-[#c9b0b4] focus:border-[#850d25] focus:ring-2 focus:ring-[#850d25]/10";

const labelClass =
  "block text-sm font-medium text-[#24242a]";

export default function ContactFormSection() {
  const reduceMotion = useReducedMotion();
  const data = contactFormData;
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const animation = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: {
            duration: 0.65,
            delay,
            ease: [0.22, 1, 0.36, 1] as [
              number,
              number,
              number,
              number,
            ],
          },
        };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitted(false);

    // Frontend demonstration only.
    // Connect your API here to send the actual enquiry.
    await new Promise((resolve) => setTimeout(resolve, 500));

    setSubmitted(true);
    setIsSubmitting(false);
    event.currentTarget.reset();
  }

  return (
    <section
      id="contact-form"
      aria-label={data.ariaLabel}
      className="overflow-hidden bg-white py-12 sm:py-16 lg:pb-16 lg:pt-12 w-[100%]"
    >
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-start gap-10 px-5 sm:px-8 md:px-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-10 lg:px-[3.8%] xl:gap-12 xl:px-[5%]">

        <motion.div
          {...animation()}
          className="min-w-0 border border-[#efebe6] bg-[#fbf9f6] p-5 shadow-[0_5px_30px_rgba(30,20,10,0.025)] sm:p-8 md:p-10 xl:p-11"
        >
          <div className="mb-5 flex items-center gap-5 sm:mb-6">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#850d25] sm:text-sm">
              {data.sendMessageEyebrow}
            </span>
            <span className="h-[2px] w-16 bg-[#850d25]/50 sm:w-20" />
          </div>

          <h2 className="font-serif text-4xl font-medium leading-tight tracking-[-0.045em] text-[#111318] sm:text-5xl xl:text-[52px]">
            {data.titleFirst} <span className="text-[#850d25]">{data.titleHighlight}</span>
          </h2>

          <p className="mt-4 max-w-[510px] text-base leading-7 text-[#85858d]">
            {data.description}
          </p>

          <form onSubmit={handleSubmit} className="mt-7 space-y-5 sm:mt-8 sm:space-y-6">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5">
              <motion.div {...animation(0.05)}>
                <label htmlFor="contact-name" className={labelClass}>
                  {data.fields.fullName.label} <span className="text-[#850d25]">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder={data.fields.fullName.placeholder}
                  className={inputClass}
                  required
                  maxLength={100}
                />
              </motion.div>

              <motion.div {...animation(0.1)}>
                <label htmlFor="contact-email" className={labelClass}>
                  {data.fields.email.label} <span className="text-[#850d25]">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder={data.fields.email.placeholder}
                  className={inputClass}
                  required
                  maxLength={254}
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5">
              <motion.div {...animation(0.15)}>
                <label htmlFor="contact-phone" className={labelClass}>
                  {data.fields.phone.label} <span className="text-[#850d25]">*</span>
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder={data.fields.phone.placeholder}
                  className={inputClass}
                  required
                  maxLength={25}
                />
              </motion.div>

              <motion.div {...animation(0.2)}>
                <label htmlFor="project-type" className={labelClass}>
                  {data.fields.projectType.label}
                </label>
                <select
                  id="project-type"
                  name="projectType"
                  defaultValue=""
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="" disabled>
                    {data.fields.projectType.placeholder}
                  </option>
                  {data.projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </motion.div>
            </div>

            <motion.div {...animation(0.25)}>
              <label htmlFor="project-location" className={labelClass}>
                {data.fields.location.label}
              </label>
              <input
                id="project-location"
                name="projectLocation"
                type="text"
                placeholder={data.fields.location.placeholder}
                className={inputClass}
                maxLength={200}
              />
            </motion.div>

            <motion.div {...animation(0.3)}>
              <label htmlFor="contact-message" className={labelClass}>
                {data.fields.message.label} <span className="text-[#850d25]">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                placeholder={data.fields.message.placeholder}
                className={`${inputClass} min-h-[125px] resize-y sm:min-h-[140px]`}
                required
                maxLength={5000}
              />
            </motion.div>

            <motion.div {...animation(0.35)} className="pt-1">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                className="group inline-flex min-h-[60px] w-full items-center justify-between gap-6 bg-[#850d25] px-5 py-3 text-white shadow-sm transition-colors duration-300 hover:bg-[#68091d] disabled:cursor-wait disabled:opacity-70 sm:w-auto sm:min-w-[255px] sm:px-6"
              >
                <span className="text-sm font-medium sm:text-base">
                  {isSubmitting ? data.submittingLabel : data.submitLabel}
                </span>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#850d25] transition-transform duration-300 group-hover:translate-x-1">
                  <Icon name="arrow" className="h-5 w-5" />
                </span>
              </motion.button>

              {submitted && (
                <p
                  role="status"
                  className="mt-4 text-sm text-green-700"
                >
                  {data.successMessage}
                </p>
              )}
            </motion.div>
          </form>
        </motion.div>

        <div className="min-w-0 space-y-7 sm:space-y-8 lg:pt-3">
          <motion.div {...animation(0.1)}>
            <div className="mb-4 flex items-center gap-5">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#850d25] sm:text-sm">
                {data.locationEyebrow}
              </span>
              <span className="h-[2px] w-16 bg-[#850d25]/50 sm:w-20" />
            </div>

            <h2 className="font-serif text-4xl font-medium leading-tight tracking-[-0.045em] text-[#111318] sm:text-5xl">
              {data.locationTitleFirst} <span className="text-[#850d25]">{data.locationTitleHighlight}</span>
            </h2>

            <p className="mt-4 max-w-[600px] text-base leading-7 text-[#85858d]">
              {data.locationDescription}
            </p>
          </motion.div>

          <motion.div
            {...animation(0.18)}
            className="group relative isolate h-[270px] overflow-hidden rounded-lg border border-[#ece8e4] bg-[#edf2f5] sm:h-[330px] lg:h-[315px] xl:h-[570px]"
          >
            <iframe
              title={data.mapTitle}
              src={data.mapUrl}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            {/* Floating location card */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 flex w-[min(90%,320px)] -translate-x-1/2 -translate-y-1/2 items-center gap-4 rounded-lg border border-white/70 bg-white/95 p-4 shadow-[0_8px_30px_rgba(0,0,0,0.13)] backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-[55%]">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#850d25] text-white">
                <Icon name="pin" className="h-6 w-6" />
              </span>

              <span className="min-w-0">
                <span className="block font-semibold text-[#202027]">
                  {data.studioName}
                </span>
                <span className="mt-1 block text-sm leading-5 text-[#777780]">
                  {data.mapAddressLines[0]}
                  <br />
                  {data.mapAddressLines[1]}
                </span>
              </span>
            </div>
          </motion.div>

          {/* OFFICE DETAILS */}
          {/* <motion.div {...animation(0.25)}>
            <div className="mb-5 flex items-center gap-5">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#850d25] sm:text-sm">
                {data.officeEyebrow}
              </span>
              <span className="h-[2px] w-16 bg-[#850d25]/50 sm:w-20" />
            </div>

            <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] sm:gap-6">
              <motion.div
                whileHover={reduceMotion ? undefined : { scale: 1.015 }}
                className="relative h-[230px] overflow-hidden rounded-sm bg-[#eee7df] sm:h-[230px] lg:h-[210px] xl:h-[225px]"
              >
                <Image
                  src={data.officeImage}
                  alt={data.officeImageAlt}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 45vw, 24vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>

              <div className="min-w-0 sm:border-l sm:border-[#e8e4e0] sm:pl-6">
                <h3 className="font-serif text-2xl tracking-tight text-[#17171b]">
                  {data.studioName}
                </h3>

                <address className="mt-1 not-italic text-sm leading-[1.7] text-[#77777e]">
                  {data.addressLines[0]}
                  <br />
                  {data.addressLines[1]}
                </address>

                <div className="mt-4 space-y-3">
                  <a
                    href={data.phoneHref}
                    className="group flex items-center gap-3 text-sm text-[#5d5d64] transition-colors hover:text-[#850d25]"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#850d25] text-white transition-transform group-hover:scale-105">
                      <Icon name="phone" className="h-4 w-4" />
                    </span>
                    <span>{data.phone}</span>
                  </a>

                  <a
                    href={data.emailHref}
                    className="group flex items-center gap-3 text-sm text-[#5d5d64] transition-colors hover:text-[#850d25]"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#850d25] text-white transition-transform group-hover:scale-105">
                      <Icon name="mail" className="h-4 w-4" />
                    </span>
                    <span className="break-all">
                      {data.email}
                    </span>
                  </a>

                  <div className="flex items-start gap-3 text-sm leading-6 text-[#5d5d64]">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#850d25] text-white">
                      <Icon name="clock" className="h-4 w-4" />
                    </span>
                    <span>
                      {data.hours[0]}
                      <br />
                      {data.hours[1]}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
