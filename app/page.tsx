import Image from "next/image";
import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/home/AboutSection";
import ServicesSection from "./components/home/ServicesSection";
import ClientLogos from "./components/home/ClientLogos";
import ProjectsSection from "./components/home/ProjectsSection";
import ProcessSection from "./components/home/ProcessSection";
import ContactCTA from "./components/home/ContactCTA";
import TestimonialsSection from "./components/home/TestimonialsSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ClientLogos />
      <ProjectsSection />
      <ProcessSection />
      <ContactCTA />
      <TestimonialsSection />
    </div>
  );
}
