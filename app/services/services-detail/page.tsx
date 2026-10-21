import ArchitecturalDesignSection from "@/components/services-detail/ArchitecturalDesignSection";
import KeyFeatures from "@/components/services-detail/KeyFeatures";
import ServicesDetailsHero from "@/components/services-detail/ServicesDetailHero";
import OurDesignProcess from "@/components/services-detail/OurDesignProcess";
import ProjectGallery from "@/components/services-detail/ProjectGallery";
import RelatedServices from "@/components/services-detail/RelatedServices";

export default function Services() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <ServicesDetailsHero />
            <ArchitecturalDesignSection />
            <KeyFeatures />
            <OurDesignProcess />
            <ProjectGallery />
            <RelatedServices />
        </div>
    );
}
