import Image from "next/image";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesShowcase from "@/components/services/ServicesShowcase";
import ClientLogos from "@/components/home/ClientLogos";

export default function Services() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <ServicesHero />
            <ServicesShowcase />
            <ClientLogos />
        </div>
    );
}
