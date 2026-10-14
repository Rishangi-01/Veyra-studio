"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FileText,
  MessageCircle,
  CheckCircle2,
  Paperclip,
  Upload,
} from "lucide-react";

const projectTypes = [
  "Architectural Design",
  "Interior Design",
  "Landscape Design",
  "Residential Design",
  "Commercial Design",
  "Project Management",
  "Consultation",
];

const budgets = [
  "Below ₹5 Lakhs",
  "₹5–10 Lakhs",
  "₹10–25 Lakhs",
  "₹25–50 Lakhs",
  "₹50 Lakhs–1 Crore",
  "Above ₹1 Crore",
];

const timelines = [
  "Immediately",
  "Within 1 Month",
  "1–3 Months",
  "3–6 Months",
  "Flexible",
];

const benefits = [
  {
    icon: FileText,
    title: "Customised Quote",
    description: "Tailored to your needs and budget.",
  },
  {
    icon: MessageCircle,
    title: "Expert Guidance",
    description: "Consult with our design specialists.",
  },
  {
    icon: CheckCircle2,
    title: "Quick Response",
    description: "We'll get back to you shortly.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function QuoteSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);

  const inputClass =
    "mt-2 w-full min-w-0 rounded-sm border border-[#e5e3e0] bg-white/90 px-3 py-3 text-sm text-[#25232a] outline-none transition-all duration-300 placeholder:text-[#a3a1a1] hover:border-[#b98a90] focus:border-[#850d27] focus:ring-2 focus:ring-[#850d27]/10";

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setError("");
    setSubmitted(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const phone = String(formData.get("phone") ?? "").trim();

    if (!/^[+]?[\d\s()-]{10,18}$/.test(phone)) {
      setError("Please enter a valid phone number.");
      return;
    }

    setLoading(true);

    try {
      // Connect your backend API here before using this form in production.
      const response = await fetch("/api/quotes", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to submit your request.");
      }

      setSubmitted(true);
      form.reset();
      setFiles(null);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="request-quote"
      className="relative overflow-hidden bg-[#fcfbf9] px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#850d27]/[0.035] blur-3xl" />

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 xl:gap-16">
        {/* Left content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="flex flex-col"
        >
          <div className="mb-5 flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#850d27] sm:text-sm">
              Get a Quote
            </span>
            <span className="h-px w-16 bg-[#850d27]/70 sm:w-24" />
          </div>

          <h1 className="max-w-2xl font-serif text-4xl font-medium leading-[1.12] tracking-[-0.045em] text-[#15151d] sm:text-5xl md:text-6xl xl:text-[68px]">
            Let’s Bring Your
            <br />
            Vision to{" "}
            <span className="text-[#850d27]">Life</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#85838b] sm:text-lg sm:leading-8">
            Share your requirements with us and our team will get
            back to you with a customised quote tailored to your
            project.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="group relative mt-7 overflow-hidden border border-[#e8e5e1] bg-[#eee8e1]"
          >
            <div className="aspect-[1.15/1] overflow-hidden sm:aspect-[1.25/1] lg:aspect-[1.1/1] xl:aspect-[1.2/1]">
              <img
                src="/images/get-quote/banner4.jpg"
                alt="Contemporary luxury residence designed by Veyra Studio"
                className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.045]"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-70" />
          </motion.div>

          {/* Benefits */}
          <div className="mt-7 grid grid-cols-1 divide-y divide-[#e9e6e3] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  whileHover={{ y: -4 }}
                  className="flex flex-row items-center gap-4 px-3 py-5 first:pl-0 last:pr-0 sm:flex-col sm:justify-center sm:px-3 sm:py-4 sm:text-center"
                >
                  <Icon
                    size={32}
                    strokeWidth={1.5}
                    className="shrink-0 text-[#850d27] sm:mb-1 sm:h-9 sm:w-9"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-[#22212a] sm:text-base">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-[#8a8790] sm:text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
          className="relative border border-[#e9e6e2] bg-white/65 p-5 shadow-[0_15px_60px_rgba(31,22,22,0.035)] sm:p-8 lg:p-7 xl:p-9"
        >
          <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 bg-gradient-to-bl from-[#850d27]/[0.045] to-transparent" />

          <h2 className="relative font-serif text-3xl font-medium tracking-[-0.035em] text-[#15151d] sm:text-4xl md:text-[42px]">
            Request a{" "}
            <span className="text-[#850d27]">Quote</span>
          </h2>

          <span className="mt-3 block h-[2px] w-14 bg-[#850d27]" />

          <p className="mt-3 text-sm leading-6 text-[#85838b] sm:text-base sm:leading-7">
            Fill out the form below and tell us about your project.
            Our team will reach out with a personalised quote.
          </p>

          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="relative mt-6 space-y-5"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="fullName" className="text-sm font-semibold text-[#292730]">
                  Full Name <span className="text-[#850d27]">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your name"
                  required
                  minLength={2}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-semibold text-[#292730]">
                  Email Address <span className="text-[#850d27]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="phone" className="text-sm font-semibold text-[#292730]">
                  Phone Number <span className="text-[#850d27]">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Enter phone number"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="projectType" className="text-sm font-semibold text-[#292730]">
                  Project Type <span className="text-[#850d27]">*</span>
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  defaultValue=""
                  required
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="" disabled>
                    Select project type
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="location" className="text-sm font-semibold text-[#292730]">
                Project Location <span className="text-[#850d27]">*</span>
              </label>
              <input
                id="location"
                name="location"
                type="text"
                placeholder="Enter your location"
                required
                className={inputClass}
              />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="budget" className="text-sm font-semibold text-[#292730]">
                  Estimated Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  defaultValue=""
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="" disabled>
                    Select budget range
                  </option>
                  {budgets.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="timeline" className="text-sm font-semibold text-[#292730]">
                  Preferred Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  defaultValue=""
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="" disabled>
                    Select timeline
                  </option>
                  {timelines.map((timeline) => (
                    <option key={timeline} value={timeline}>
                      {timeline}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="details" className="text-sm font-semibold text-[#292730]">
                Project Details <span className="text-[#850d27]">*</span>
              </label>
              <textarea
                id="details"
                name="details"
                rows={4}
                placeholder="Tell us about your project requirements..."
                required
                minLength={10}
                className={`${inputClass} min-h-28 resize-y`}
              />
            </div>

            {/* Optional file upload */}
            <div>
              <label
                htmlFor="attachments"
                className="group flex cursor-pointer items-start gap-4 border border-dashed border-[#d9d5d1] bg-[#fbfaf8] p-4 transition-colors duration-300 hover:border-[#850d27] hover:bg-[#850d27]/[0.025] sm:p-5"
              >
                <Paperclip
                  size={25}
                  strokeWidth={1.7}
                  className="mt-1 shrink-0 text-[#850d27] transition-transform group-hover:rotate-[-12deg]"
                />

                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2 text-sm font-semibold text-[#292730]">
                    Upload Files (Optional)
                    <Upload size={14} className="text-[#850d27]" />
                  </span>

                  <span className="mt-1 block text-xs leading-5 text-[#939098] sm:text-sm">
                    Upload reference images, floor plans or any other
                    document. Max 10 MB total, JPG, PNG, PDF.
                  </span>

                  {files && files.length > 0 && (
                    <span className="mt-2 block break-words text-xs font-medium text-[#850d27]">
                      {Array.from(files).map((file) => file.name).join(", ")}
                    </span>
                  )}
                </span>
              </label>

              <input
                id="attachments"
                name="attachments"
                type="file"
                multiple
                accept=".jpg,.jpeg,.png,.pdf"
                className="sr-only"
                onChange={(event) => {
                  const selected = event.target.files;

                  if (!selected) return;

                  const allowedTypes = [
                    "image/jpeg",
                    "image/png",
                    "application/pdf",
                  ];

                  const totalSize = Array.from(selected).reduce(
                    (sum, file) => sum + file.size,
                    0
                  );

                  const invalidFile = Array.from(selected).some(
                    (file) => !allowedTypes.includes(file.type)
                  );

                  if (invalidFile || totalSize > 10 * 1024 * 1024) {
                    setError(
                      "Please select JPG, PNG or PDF files within a combined 10 MB limit."
                    );
                    event.target.value = "";
                    setFiles(null);
                    return;
                  }

                  setError("");
                  setFiles(selected);
                }}
              />
            </div>

            {error && (
              <p role="alert" className="text-sm font-medium text-red-700">
                {error}
              </p>
            )}

            {submitted && (
              <p role="status" className="text-sm font-medium text-green-700">
                Your quote request has been submitted successfully!
              </p>
            )}

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="group flex min-h-14 w-full items-center justify-center gap-4 bg-[#850d27] px-5 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#69091e] disabled:cursor-not-allowed disabled:opacity-70 sm:text-base"
            >
              <span>{loading ? "Submitting..." : "Request a Quote"}</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#850d27] transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={21} />
              </span>
            </motion.button>

            <p className="text-center text-xs leading-5 text-[#99959a]">
              Your project details will be handled with care.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
