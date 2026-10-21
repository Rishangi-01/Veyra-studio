import AboutHero from "@/components/about-us/AboutHero";
import AboutSection from "@/components/about-us/AboutSection";
import ClientLogos from "@/components/home/ClientLogos";
import ProcessSection from "@/components/home/ProcessSection";


export default function AboutUs() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <AboutHero />
            <AboutSection />
            <ClientLogos />
            <ProcessSection />
        </div>
    );
}
