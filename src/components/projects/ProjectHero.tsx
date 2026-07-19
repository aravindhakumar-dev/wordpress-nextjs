import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";

import { Project } from "@/types/project";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

type Props = {
  project: Project;
};

export default function ProjectHero({
  project,
}: Props) {
  return (
    <>
      {/* Breadcrumb */}

      <div className="mb-10 flex items-center gap-3 text-sm text-gray-400">

        <Link
          href="/"
          className="transition hover:text-cyan-400"
        >
          Home
        </Link>

        <span>/</span>

        <Link
          href="/projects"
          className="transition hover:text-cyan-400"
        >
          Projects
        </Link>

        <span>/</span>

        <span className="text-white">
          {project.title}
        </span>

      </div>

      {/* Category */}

      <Badge>
        {project.category}
      </Badge>

      {/* Title */}

      <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-tight text-white lg:text-6xl">

        {project.title}

      </h1>

      {/* Description */}

      <p className="mt-8 max-w-4xl text-lg leading-9 text-gray-400">

        {project.description}

      </p>

      {/* Technologies */}

      <div className="mt-10 flex flex-wrap gap-3">

        {project.technologies.map((technology) => (

          <span
            key={technology}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
          >
            {technology}
          </span>

        ))}

      </div>

      {/* Actions */}

      <div className="mt-12 flex flex-wrap gap-4">

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>

            <Globe size={18} />

            View Live Website

          </Button>

        </a>

        <Link href="/projects">

          <Button variant="secondary">

            Back to Projects

          </Button>

        </Link>

      </div>

      {/* Hero Image */}

      <div className="relative mt-16 overflow-hidden rounded-3xl border border-white/10">

        <div className="relative aspect-[16/9]">

          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            priority
            className="object-cover object-top transition duration-700"
          />

        </div>

      </div>
    </>
  );
}