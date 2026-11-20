import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Globe } from "lucide-react";

import { Project } from "@/types/project";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Tag from "@/components/ui/Tag";

type Props = {
  project: Project;
};

export default function ProjectCard({
  project,
}: Props) {
  const isExternalWebsite =
    project.liveUrl &&
    project.liveUrl.startsWith("http") &&
    !project.liveUrl.includes("aravindhakumar.com");

  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-cyan-400/40 hover:-translate-y-1">

      {/* Thumbnail */}

      <div className="relative aspect-[16/10] overflow-hidden">

        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover object-top transition duration-700 group-hover:scale-105"
        />

      </div>

      {/* Content */}

      <div className="p-6">

        {/* Category */}

        <Badge>

          {project.category}

        </Badge>

        {/* Title */}

        <h3 className="mt-5 text-2xl font-bold text-white">

          {project.title}

        </h3>

        {/* Description */}

        <p className="mt-4 line-clamp-3 leading-7 text-gray-400">

          {project.shortDescription}

        </p>

        {/* Technologies */}

        <div className="mt-6 flex flex-wrap gap-2">

          {project.technologies
            .slice(0, 5)
            .map((technology) => (

              <Tag key={technology}>

                {technology}

              </Tag>

            ))}

        </div>

        {/* CTA */}

        <div className="mt-8 flex flex-wrap gap-3">

          {isExternalWebsite ? (
            <>
              <Button href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Globe size={16} />
                Live Website
              </Button>

              <Button
                href={`/projects/${project.slug}`}
                variant="secondary"
              >
                Case Study
                <ArrowUpRight size={16} />
              </Button>
            </>
          ) : (
            <Button
              href={`/projects/${project.slug}`}
            >
              Read Technical Case Study
              <ArrowUpRight size={16} />
            </Button>
          )}

        </div>

      </div>

    </article>
  );
}