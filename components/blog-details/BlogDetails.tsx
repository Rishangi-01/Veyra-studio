"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogDetailsData } from "../../data";

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`blog-reveal ${visible ? "blog-reveal-visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SidebarCard({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <section className="border border-[#e9e6e2] bg-white/80 p-4 sm:p-5">
        <h3 className="font-serif text-xl leading-tight text-[#17171c]">
          {title}
        </h3>
        <span className="mt-2 block h-[2px] w-9 bg-[#850d29]" />
        <div className="mt-4">{children}</div>
      </section>
    </Reveal>
  );
}

export default function BlogDetails() {
  const { article, sidebar } = blogDetailsData;

  const shareUrl =
    typeof window !== "undefined" ? window.location.href : "";

  const shareLinks = sidebar.shareLinks.map((social) => ({
    ...social,
    href: social.href.replace("{url}", encodeURIComponent(shareUrl)),
  }));

  return (
    <main className="min-h-screen bg-[#faf9f6] py-10 sm:py-14 lg:py-16">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-start gap-9 px-5 sm:px-8 lg:grid-cols-[minmax(0,2.25fr)_minmax(280px,1fr)] lg:gap-10 lg:px-10">
        {/* Main article */}
        <article className="min-w-0">
          <Reveal>
            <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#850d29] sm:text-xs">
              <span>{article.category}</span>
              <span className="h-px w-10 bg-[#a99da0]" />
              <time dateTime={article.dateTime} className="text-[#85858a]">
                {article.date}
              </time>
            </div>

            <h1 className="max-w-4xl font-serif text-3xl leading-[1.13] tracking-tight text-[#15151c] sm:text-4xl lg:text-[48px]">
              {article.title}
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-6 text-[#7c7c82] sm:text-base sm:leading-7">
              {article.description}
            </p>
          </Reveal>

          {/* Featured image */}
          <Reveal delay={100}>
            <div className="blog-featured-image relative mt-6 aspect-[1.55/1] w-full overflow-hidden bg-[#e8e4de] sm:aspect-[1.58/1]">
              <Image
                src={article.image}
                alt={article.imageAlt}
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 68vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.035]"
              />
            </div>
          </Reveal>

          {/* Article sections */}
          <div className="mt-7 space-y-6 sm:mt-8 sm:space-y-7">
            {article.features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 100}>
                <section>
                  <h2 className="font-serif text-[23px] leading-tight tracking-tight text-[#19191f] sm:text-[27px]">
                    {feature.title}
                  </h2>
                  <span className="mt-2 block h-[2px] w-8 bg-[#850d29]" />
                  <p className="mt-3 text-[13px] leading-[1.8] text-[#77777d] sm:text-sm sm:leading-6">
                    {feature.text}
                  </p>
                </section>
              </Reveal>
            ))}

            {/* Quote */}
            <Reveal>
              <blockquote className="border-l-2 border-[#850d29] bg-[#f3f0ed] px-4 py-5 sm:px-6">
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="font-serif text-4xl leading-none text-[#850d29]"
                  >
                    “
                  </span>
                  <p className="font-serif text-base italic leading-7 text-[#303037] sm:text-lg">
                    {article.quote}
                  </p>
                </div>
              </blockquote>
            </Reveal>

            {/* Supporting images */}
            <Reveal>
              <div className="grid grid-cols-2 gap-3">
                {article.gallery.map((image) => (
                  <div key={image.image} className="relative aspect-[1.5/1] overflow-hidden bg-[#e8e4de]">
                    <Image
                      src={image.image}
                      alt={image.imageAlt}
                      fill
                      sizes="(max-width: 1023px) 50vw, 34vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="flex min-w-0 flex-col gap-4 lg:sticky lg:top-8">
          <SidebarCard title={sidebar.recentBlogsTitle}>
            <div className="space-y-3">
              {sidebar.recentBlogs.map((blog) => (
                <Link
                  href={blog.href}
                  key={blog.title}
                  className="group flex items-start gap-3 border-b border-[#eeece9] pb-3 last:border-0 last:pb-0"
                >
                  <div className="relative h-[60px] w-[82px] shrink-0 overflow-hidden bg-[#e8e4de]">
                    <Image
                      src={blog.image}
                      alt=""
                      fill
                      sizes="82px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-medium leading-[1.45] text-[#24242a] transition-colors group-hover:text-[#850d29]">
                      {blog.title}
                    </h4>
                    <p className="mt-1 text-[10px] text-[#89898e]">
                      {blog.date}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </SidebarCard>

          <SidebarCard title={sidebar.categoriesTitle} delay={100}>
            <nav aria-label={sidebar.categoriesAriaLabel} className="space-y-0.5">
              {sidebar.categories.map((category) => (
                <Link
                  key={category}
                  href={`${sidebar.categoryHrefPrefix}${category.toLowerCase().replaceAll(" ", "-")}`}
                  className="group flex items-center justify-between border-b border-[#eeece9] py-2 text-xs text-[#393940] last:border-0 hover:text-[#850d29]"
                >
                  {category}
                  <span className="text-lg leading-none text-[#850d29] transition-transform group-hover:translate-x-1">
                    ›
                  </span>
                </Link>
              ))}
            </nav>
          </SidebarCard>

          <SidebarCard title={sidebar.shareTitle} delay={200}>
            <div className="flex flex-wrap gap-2">
              {shareLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${sidebar.shareOnLabelPrefix} ${social.label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e7e0df] text-xs font-semibold text-[#850d29] transition-all duration-300 hover:-translate-y-1 hover:border-[#850d29] hover:bg-[#850d29] hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
              <button
                type="button"
                aria-label={sidebar.copyLinkLabel}
                onClick={() => {
                  if (typeof window !== "undefined") {
                    void navigator.clipboard.writeText(window.location.href);
                  }
                }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e7e0df] text-sm text-[#850d29] transition-all duration-300 hover:-translate-y-1 hover:border-[#850d29] hover:bg-[#850d29] hover:text-white"
              >
                ↗
              </button>
            </div>
          </SidebarCard>

          <SidebarCard title={sidebar.consultationTitle} delay={300}>
            <p className="text-xs leading-[1.8] text-[#77777d]">
              {sidebar.consultationDescription}
            </p>

            <Link
              href={sidebar.consultationHref}
              className="mt-4 inline-flex min-h-10 items-center gap-5 bg-[#850d29] px-4 py-2 text-xs font-medium text-white transition-colors duration-300 hover:bg-[#65081e]"
            >
              {sidebar.consultationButton}
              <span aria-hidden="true" className="text-lg leading-none">
                →
              </span>
            </Link>
          </SidebarCard>
        </aside>
      </div>

      <style jsx global>{`
        .blog-reveal {
          opacity: 0;
          transform: translateY(22px);
          transition:
            opacity 750ms ease,
            transform 750ms cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .blog-reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .blog-featured-image img {
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .blog-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .blog-featured-image img {
            transition: none;
          }
        }
      `}</style>
    </main>
  );
}
