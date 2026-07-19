import { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";

type Props = {
  projects: Project[];
  limit?: number;
  className?: string;
};

export default function ProjectGrid({
  projects,
  limit,
  className = "",
}: Props) {
  const displayedProjects = limit
    ? projects.slice(0, limit)
    : projects;

  if (displayedProjects.length === 0) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 py-16 text-center">
        <h3 className="text-2xl font-semibold text-white">
          No projects found
        </h3>

        <p className="mt-4 text-gray-400">
          Projects will appear here once they are added.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`grid gap-8 md:grid-cols-2 xl:grid-cols-3 ${className}`}
    >
      {displayedProjects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}