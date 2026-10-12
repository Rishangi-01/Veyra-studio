import siteDataJson from "./site.json";

export type NavItem = {
  label: string;
  href: string;
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
};

export type Service = {
  title: string;
  description: string;
  href: string;
};

export type Project = {
  number: string;
  title: string;
  location: string;
  category: string;
  image: string;
  href: string;
  position?: "center" | "top" | "bottom" | "left" | "right";
};

export type Stat = {
  label: string;
  value: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type SiteData = {
  navItems: NavItem[];
  heroSlides: HeroSlide[];
  services: Service[];
  projects: Project[];
  stats: Stat[];
  testimonials: Testimonial[];
  processSteps: ProcessStep[];
};

const siteData: SiteData = siteDataJson as SiteData;

export const navItems = siteData.navItems;
export const heroSlides = siteData.heroSlides;
export const services = siteData.services;
export const projects = siteData.projects;
export const stats = siteData.stats;
export const testimonials = siteData.testimonials;
export const processSteps = siteData.processSteps;

export default siteData;
