// import siteDataJson from "./site.json";

// export type NavItem = {
//   label: string;
//   href: string;
// };

// export type HeroSlide = {
//   eyebrow: string;
//   title: string[];
//   highlight: string;
//   description: string;
//   image: string;
//   featuredImage: string;
//   project: string;
//   location: string;
//   year: string;
//   category: string;
// };

// export type Service = {
//   title: string;
//   description: string;
//   href: string;
// };

// export type Project = {
//   number: string;
//   title: string;
//   location: string;
//   category: string;
//   image: string;
//   href: string;
//   position?: "center" | "top" | "bottom" | "left" | "right";
// };

// export type Stat = {
//   label: string;
//   value: string;
// };

// export type Testimonial = {
//   name: string;
//   role: string;
//   quote: string;
//   avatar: string;
// };

// export type ProcessStep = {
//   number: string;
//   title: string;
//   description: string;
// };

// export type SiteData = {
//   navItems: NavItem[];
//   heroSlides: HeroSlide[];
//   services: Service[];
//   projects: Project[];
//   stats: Stat[];
//   testimonials: Testimonial[];
//   processSteps: ProcessStep[];
// };

// const siteData: SiteData = siteDataJson as SiteData;

// export const navItems = siteData.navItems;
// export const heroSlides = siteData.heroSlides;
// export const services = siteData.services;
// export const projects = siteData.projects;
// export const stats = siteData.stats;
// export const testimonials = siteData.testimonials;
// export const processSteps = siteData.processSteps;

// export default siteData;


import siteData from "./site.json";

export type NavbarItem = {
  label: string;
  href: string;
  submenu?: Array<{ label: string; href: string }>;
};

export type NavbarData = {
  logo: string;
  navigation: NavbarItem[];
  quoteButton: {
    label: string;
    href: string;
  };
  mobileTagline: string;
};

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  items: FooterLink[];
};

export type FooterIconName =
  | "RiMapPin2Fill"
  | "FaPhoneAlt"
  | "MdEmail"
  | "CiGlobe";

export type FooterContactItem = {
  label: string;
  lines: string[];
  href: string;
  icon: FooterIconName;
};

export type FooterSocialIconName =
  | "FaFacebookF"
  | "FaInstagram"
  | "FaLinkedinIn"
  | "FaYoutube";

export type FooterSocialLink = {
  label: string;
  href: string;
  icon: FooterSocialIconName;
};

export type FooterData = {
  backgroundImage: string;
  logo: string;
  description: string;
  discoverLink: {
    label: string;
    href: string;
  };
  columns: FooterColumn[];
  contactTitle: string;
  contactItems: FooterContactItem[];
  socialLinks: FooterSocialLink[];
  copyright: string;
};

export type ClientLogo = {
  name: string;
  subtitle: string;
  type: string;
};

export type HeroSlide = {
  eyebrow: string;
  title: string[];
  highlight: string;
  description: string;
  image: string;
  featuredImage: string;
  project: string;
  location: string;
  year: string;
  category: string;
  metaLabels?: string[];
  ctaLabel?: string;
};

export type ProcessIconName =
  | "PencilRuler"
  | "DraftingCompass"
  | "HardHat";

export type ProcessStepData = {
  number: string;
  title: string;
  description: string;
  image: string;
  icon: ProcessIconName;
  linkLabel: string;
  linkHref: string;
};

export type ProcessSectionData = {
  eyebrow: string;
  title: string[];
  description: string;
  steps: ProcessStepData[];
};

export type ProjectItem = {
  number: string;
  title: string;
  location: string;
  category: string;
  image: string;
  href: string;
  position?: string;
};

export type ProjectSectionData = {
  label: string;
  prevLabel: string;
  nextLabel: string;
  verticalLabel: string;
  items: ProjectItem[];
};

export type ServiceIconName =
  | "Building2"
  | "Sofa"
  | "Trees"
  | "ClipboardList"
  | "MapPinned";

export type ServiceItem = {
  title: string;
  description: string;
  icon: ServiceIconName;
  href: string;
};

export type ServicesSectionData = {
  label: string;
  title: string;
  viewAllLabel: string;
  viewAllHref: string;
  image: string;
  imageAlt: string;
  badge: string;
  items: ServiceItem[];
};

export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  projectImage: string;
};

export type TestimonialsSectionData = {
  eyebrow: string;
  items: TestimonialItem[];
};

export type ContactCtaData = {
  eyebrow: string;
  title: string[];
  description: string;
  button: {
    label: string;
    href: string;
  };
  image: string;
  imageAlt: string;
};

export const navbarData: NavbarData = siteData.Veyra.home.navbar;
export const footerData: FooterData = siteData.Veyra.home.footer;
export const clientLogos: ClientLogo[] = siteData.Veyra.home.clientLogos;
export const heroSlides: HeroSlide[] = siteData.Veyra.home.hero.slides;
export const processSectionData: ProcessSectionData = siteData.Veyra.home.process;
export const homeProjectsData: ProjectSectionData = siteData.Veyra.home.projects;
export const homeServicesData: ServicesSectionData = siteData.Veyra.home.services;
export const homeTestimonialsData: TestimonialsSectionData = siteData.Veyra.home.testimonials;
export const contactCtaData: ContactCtaData = siteData.Veyra.home.contactCta;

export type VeyraAboutSectionData = typeof siteData.Veyra.home.about;
export const aboutSectionData: VeyraAboutSectionData = siteData.Veyra.home.about;

// ── Root Schema Types ──
export type RawSiteData = typeof siteData;
export type ConstrixSchema = typeof siteData.Constrix;
export type ConstrixSections = ConstrixSchema["sections"];
export type ConstrixTemplateComponents = ConstrixSchema["templateComponents"];

// ── Universal SectionProps Interface (ai-builder Standard) ──
export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

// ── Strongly Typed Section Variant Data Models ──
export type ConstrixHeaderData =
  ConstrixSections["Header"]["variants"]["ConstrixHeader1"];
export type ConstrixFooterData =
  ConstrixSections["Footer"]["variants"]["ConstrixFooter1"];
export type ConstrixBannerData =
  ConstrixSections["Banner"]["variants"]["ConstrixBanner1"];
export type ConstrixPageBannerData =
  ConstrixSections["PageBanner"]["variants"]["ConstrixPageBanner1"];
export type ConstrixAboutData =
  ConstrixSections["About"]["variants"]["ConstrixAbout1"];
export type ConstrixServicesData =
  ConstrixSections["Services"]["variants"]["ConstrixServices1"];
export type ConstrixWhyChooseUsData =
  ConstrixSections["WhyChooseUs"]["variants"]["ConstrixWhyChooseUs1"];
export type ConstrixProjectsData =
  ConstrixSections["Projects"]["variants"]["ConstrixProjects1"];
export type ConstrixProcessData =
  ConstrixSections["Process"]["variants"]["ConstrixProcess1"];
export type ConstrixTestimonialData =
  ConstrixSections["Testimonial"]["variants"]["ConstrixTestimonial1"];
export type ConstrixCtaData =
  ConstrixSections["Cta"]["variants"]["ConstrixCta1"];
export type ConstrixBlogData =
  ConstrixSections["Blog"]["variants"]["ConstrixBlog1"];
export type ConstrixContactData =
  ConstrixSections["Contact"]["variants"]["ConstrixContact1"];
export type ConstrixQuoteData =
  ConstrixSections["Quote"]["variants"]["ConstrixQuote1"];
export type ConstrixFAQData =
  ConstrixSections["FAQ"]["variants"]["ConstrixFAQ1"];
export type ConstrixTermsData =
  ConstrixSections["Terms"]["variants"]["ConstrixTerms1"];
export type ConstrixPrivacyPolicyData =
  ConstrixSections["PrivacyPolicy"]["variants"]["ConstrixPrivacyPolicy1"];
export type ConstrixSitemapData =
  ConstrixSections["Sitemap"]["variants"]["ConstrixSitemap1"];

// ── Item-level types inferred from site.json ──
export type ConstrixNavLink = ConstrixHeaderData["nav"][number];
export type ConstrixServiceItem = ConstrixServicesData["items"][number];
export type ConstrixServiceDetail = ConstrixServicesData["detail"];
export type ConstrixProjectItem = ConstrixProjectsData["items"][number];
export type ConstrixProcessStep = ConstrixProcessData["steps"][number];
export type ConstrixBlogPost = ConstrixBlogData["posts"][number];
export type ConstrixBlogDetail = ConstrixBlogData["detail"];
export type ConstrixFaqItem = ConstrixFAQData["items"][number];
export type ConstrixTermsItem = ConstrixTermsData["items"][number];
export type ConstrixPrivacyPolicyItem =
  ConstrixPrivacyPolicyData["items"][number];
export type ConstrixTestimonialItem =
  ConstrixTestimonialData["home"]["items"][number];

// ── Legacy Site Map for Standalone Constrix Site ──
const sec = siteData.Constrix.sections;

const site = {
  header: sec.Header.variants.ConstrixHeader1.header,
  nav: sec.Header.variants.ConstrixHeader1.nav,
  site: sec.Header.variants.ConstrixHeader1.site,
  navbar: sec.Header.variants.ConstrixHeader1,
  hero: sec.Banner.variants.ConstrixBanner1,
  banner: sec.Banner.variants.ConstrixBanner1,
  pageBanner: sec.PageBanner.variants.ConstrixPageBanner1,
  pages: sec.PageBanner.variants.ConstrixPageBanner1.pages,
  about: sec.About.variants.ConstrixAbout1,
  aboutUsSection: sec.About.variants.ConstrixAbout1,
  services: sec.Services.variants.ConstrixServices1,
  ourServicesSection: sec.Services.variants.ConstrixServices1,
  serviceDetail: sec.Services.variants.ConstrixServices1.detail,
  whyChoose: sec.WhyChooseUs.variants.ConstrixWhyChooseUs1,
  whyChooseUsSection: sec.WhyChooseUs.variants.ConstrixWhyChooseUs1,
  projects: sec.Projects.variants.ConstrixProjects1,
  projectsSection: sec.Projects.variants.ConstrixProjects1,
  process: sec.Process.variants.ConstrixProcess1,
  processSection: sec.Process.variants.ConstrixProcess1,
  testimonial: sec.Testimonial.variants.ConstrixTestimonial1,
  testimonialSection: sec.Testimonial.variants.ConstrixTestimonial1,
  homeTestimonials: sec.Testimonial.variants.ConstrixTestimonial1.home,
  testimonialsPage: sec.Testimonial.variants.ConstrixTestimonial1.page,
  cta: sec.Cta.variants.ConstrixCta1,
  ctaSection: sec.Cta.variants.ConstrixCta1,
  blog: sec.Blog.variants.ConstrixBlog1,
  blogSection: sec.Blog.variants.ConstrixBlog1,
  blogDetail: sec.Blog.variants.ConstrixBlog1.detail,
  footer: sec.Footer.variants.ConstrixFooter1,
  contact: sec.Contact.variants.ConstrixContact1,
  contactPage: sec.Contact.variants.ConstrixContact1,
  quote: sec.Quote.variants.ConstrixQuote1,
  quoteSection: sec.Quote.variants.ConstrixQuote1,
  faq: sec.FAQ.variants.ConstrixFAQ1,
  faqPage: sec.FAQ.variants.ConstrixFAQ1,
  terms: sec.Terms.variants.ConstrixTerms1,
  termsPage: sec.Terms.variants.ConstrixTerms1,
  privacy: sec.PrivacyPolicy.variants.ConstrixPrivacyPolicy1,
  privacyPolicyPage: sec.PrivacyPolicy.variants.ConstrixPrivacyPolicy1,
  sitemap: sec.Sitemap.variants.ConstrixSitemap1,
  sitemapPage: sec.Sitemap.variants.ConstrixSitemap1,
  Constrix: siteData.Constrix,
};

// Also export individual sections for convenience
export const header = site.header;
export const nav = site.nav;
export const siteInfo = site.site;
export const navbar = site.navbar;
export const hero = site.hero;
export const banner = site.banner;
export const pageBanner = site.pageBanner;
export const about = site.about;
export const services = site.services;
export const serviceDetail = site.serviceDetail;
export const whyChoose = site.whyChoose;
export const projects = site.projects;
export const process = site.process;
export const testimonial = site.testimonial;
export const homeTestimonials = site.homeTestimonials;
export const testimonialsPage = site.testimonialsPage;
export const cta = site.cta;
export const blog = site.blog;
export const blogDetail = site.blogDetail;
export const footer = site.footer;
export const contact = site.contact;
export const quote = site.quote;
export const faq = site.faq;
export const terms = site.terms;
export const privacy = site.privacy;
export const sitemap = site.sitemap;

// Browser tab title: "<page> | <site name>"
export const pageTitle = (title: string) => `${title} | ${site.site.name}`;

// Phone, email and address live once in site.json (Header > site > contact).
export const contactInfo = site.site.contact;

// A card either carries its own `lines` or points at a contact field with `source`.
export function contactLines(item: { source?: string; lines?: string[] }): string[] {
  if (!item.source) return item.lines ?? [];
  const value = contactInfo[item.source as keyof typeof contactInfo];
  return Array.isArray(value) ? value : [value];
}

// Fills {phone} / {email} placeholders inside long text such as the privacy policy.
export const fillContact = (text: string) =>
  text.replaceAll("{phone}", contactInfo.phone).replaceAll("{email}", contactInfo.email);

export type SiteData = typeof site;
export { site };
export default siteData;
