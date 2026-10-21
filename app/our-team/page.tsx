import Image from "next/image";
import TeamHero from "@/components/our-team/TeamHero";
import AboutTeam from "@/components/our-team/AboutTeam";
import OurTeamMembers from "@/components/our-team/OurTeamMembers";

export default function OurTeam() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <TeamHero />
            <div className="lg:pt-12 w-[100%]">
                <AboutTeam />
            </div>
            <OurTeamMembers />
        </div>
    );
}
