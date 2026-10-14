"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogSectionData } from "../../data";

export default function BlogSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    const section = sectionRef.current;

    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="blog-section relative overflow-hidden bg-[#faf9f6] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-[5%]">
        {/* Section heading */}
        <div
          className={`blog-heading mb-10 max-w-3xl sm:mb-12 lg:mb-14 ${
            visible ? "is-visible" : ""
          }`}
        >
          <div className="mb-4 flex items-center gap-12">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#850d29] sm:text-sm">
              {blogSectionData.eyebrow}
            </span>
            <span className="h-px w-24 bg-[#a9a5a2]" />
          </div>

          <h2 className="font-serif text-4xl leading-[1.12] tracking-tight text-[#11151c] sm:text-5xl lg:text-[60px]">
            {blogSectionData.titleFirst}{" "}
            <span className="text-[#850d29]">{blogSectionData.titleHighlight}</span>
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[#77777d] sm:text-lg sm:leading-8">
            {blogSectionData.description}
          </p>
        </div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
          {blogSectionData.items.map((blog, index) => (
            <article
              key={blog.href}
              className={`blog-card group min-w-0 ${
                visible ? "is-visible" : ""
              }`}
              style={{ transitionDelay: `${index * 160}ms` }}
            >
              {/* Image and date */}
              <Link
                href={blog.href}
                aria-label={`${blogSectionData.readArticleLabelPrefix} ${blog.title}`}
                className="blog-image relative block aspect-[1.12/1] overflow-hidden bg-[#e8e4de] sm:aspect-[1.08/1] lg:aspect-[1.08/1]"
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute bottom-0 left-6 flex min-h-[84px] min-w-[90px] flex-col items-center justify-center bg-[#850d29] px-4 py-3 text-white shadow-lg transition-colors duration-300 group-hover:bg-[#65081e] sm:left-6 sm:min-h-[86px]">
                  <span className="font-serif text-3xl leading-none">
                    {blog.date}
                  </span>
                  <span className="mt-2 text-[10px] font-medium tracking-wide">
                    {blog.month}
                  </span>
                </div>
              </Link>

              {/* Blog content */}
              <div className="border-r border-[#e7e4e0] px-4 pb-1 pt-6 sm:px-5 lg:px-6">
                <div className="mb-4 flex items-center gap-6">
                  <span className="text-[11px] font-semibold tracking-[0.08em] text-[#850d29] sm:text-xs">
                    {blog.category}
                  </span>
                  <span className="h-px w-16 bg-[#850d29]/70 transition-all duration-500 group-hover:w-24" />
                </div>

                <h3 className="font-serif text-[25px] leading-[1.23] tracking-tight text-[#171920] transition-colors duration-300 group-hover:text-[#850d29] sm:text-[27px]">
                  <Link href={blog.href}>{blog.title}</Link>
                </h3>

                <p className="mt-4 text-[15px] leading-[1.75] text-[#77777d]">
                  {blog.description}
                </p>

                <Link
                  href={blogSectionData.detailsHref}
                  className="blog-read-more mt-5 inline-flex items-center gap-7 border-b border-[#850d29] pb-2 text-sm font-semibold text-[#850d29] transition-all duration-300 hover:gap-10 sm:text-base"
                >
                  {blogSectionData.readMoreLabel}
                  <span
                    aria-hidden="true"
                    className="text-2xl leading-none transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .blog-heading,
        .blog-card {
          opacity: 0;
          transform: translateY(35px);
          transition:
            opacity 850ms ease,
            transform 850ms cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .blog-heading.is-visible,
        .blog-card.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .blog-image img {
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .blog-heading,
          .blog-card {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .blog-image img,
          .blog-read-more {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
