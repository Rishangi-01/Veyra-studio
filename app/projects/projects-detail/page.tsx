import ProjectDetailsOverview from "@/components/projects-detail/ProjectDetailsOverview";
import ProjectGallery from "@/components/projects-detail/ProjectGallery";
import ProjectDetailsHero from "@/components/projects-detail/ProjectsDetailHero";

export default function ProjectDetails() {
  return (
    <div className="flex flex-col">
      <ProjectDetailsHero />
      <ProjectDetailsOverview />
      <ProjectGallery />
    </div>
  );
}
