import ProjectDetailsOverview from "@/app/components/projects-detail/ProjectDetailsOverview";
import ProjectGallery from "@/app/components/projects-detail/ProjectGallery";
import ProjectDetailsHero from "@/app/components/projects-detail/ProjectsDetailHero";

export default function ProjectDetails() {
  return (
    <div className="flex flex-col">
      <ProjectDetailsHero />
      <ProjectDetailsOverview />
      <ProjectGallery />
    </div>
  );
}
