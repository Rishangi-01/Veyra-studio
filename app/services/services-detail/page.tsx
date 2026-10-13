import ArchitecturalDesignSection from "@/app/components/services-detail/ArchitecturalDesignSection";
import KeyFeatures from "@/app/components/services-detail/KeyFeatures";
import ServicesDetailsHero from "@/app/components/services-detail/ServicesDetailHero";
import OurDesignProcess from "@/app/components/services-detail/OurDesignProcess";
import ProjectGallery from "@/app/components/services-detail/ProjectGallery";
import RelatedServices from "@/app/components/services-detail/RelatedServices";
import ContactCTA from "@/app/components/home/ContactCTA";

export default function Services() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <ServicesDetailsHero />
            <ArchitecturalDesignSection />
            <KeyFeatures />
            <OurDesignProcess />
            <ProjectGallery />
            <RelatedServices />
            <ContactCTA />
        </div>
    );
}
