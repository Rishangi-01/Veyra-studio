import ProjectsHero from "@/components/projects/ProjectsHero";
import FeaturedWork from "@/components/projects/FeaturedWork";

export default function Projects() {
  return (
    <div className="flex flex-col">
      <ProjectsHero />
      <FeaturedWork />
    </div>
  );
}
