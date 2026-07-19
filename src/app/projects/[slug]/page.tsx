import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  Globe,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Tag from "@/components/ui/Tag";

import ProjectGallery from "@/components/projects/ProjectGallery";
import ProjectFeatures from "@/components/projects/ProjectFeatures";
import ProjectTechStack from "@/components/projects/ProjectTechStack";
import ProjectCTA from "@/components/projects/ProjectCTA";

import {
  projects,
  getProjectBySlug,
  getRelatedProjects,
} from "@/data/projects";

type Props = {
  params: {
    slug: string;
  };
};

/**
 * Generate Static Routes
 */
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

/**
 * Dynamic SEO
 */
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {

  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.seo.title,

    description: project.seo.description,

    keywords: project.seo.keywords,

    alternates: {
      canonical: project.seo.canonical,
    },

    openGraph: {
      title: project.seo.title,

      description: project.seo.description,

      url: project.seo.canonical,

      images: [
        {
          url: project.seo.ogImage ?? project.thumbnail,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default function ProjectDetailsPage({
  params,
}: Props) {

  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(
    project.slug,
    3
  );

  return (
    <main className="section-spacing">

      <div className="container-width">

        {/* Breadcrumb */}

        <div className="mb-10 flex items-center gap-3 text-sm text-gray-400">

          <Link
            href="/"
            className="hover:text-cyan-400"
          >
            Home
          </Link>

          <span>/</span>

          <Link
            href="/projects"
            className="hover:text-cyan-400"
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

        <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight text-white">

          {project.title}

        </h1>

        {/* Description */}

        <p className="mt-8 max-w-4xl text-lg leading-9 text-gray-400">

          {project.description}

        </p>

        {/* CTA */}

        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>

              View Live Website

              <Globe size={18} />

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
              className="object-cover"
            />

          </div>

        </div>

        {/* Gallery */}

        <section className="mt-20">

          <ProjectGallery
            images={project.gallery}
          />

        </section>
                {/* Overview */}

        <section className="mt-20">

          <div className="grid gap-16 lg:grid-cols-[2fr_1fr]">

            <div>

              <h2 className="text-3xl font-bold text-white">
                Project Overview
              </h2>

              <p className="mt-6 leading-8 text-gray-400">
                {project.overview}
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-lg font-semibold text-white">
                Project Information
              </h3>

              <div className="mt-8 space-y-5">

                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    Category
                  </p>

                  <p className="mt-2 text-white">
                    {project.category}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    Technologies
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Tag key={tech}>
                        {tech}
                      </Tag>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    Live Website
                  </p>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
                  >
                    Visit Website

                    <ArrowUpRight size={16} />
                  </a>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* Challenge */}

        <section className="mt-24">

          <h2 className="text-3xl font-bold text-white">
            Challenge
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            {project.challenge}
          </p>

        </section>

        {/* Solution */}

        <section className="mt-20">

          <h2 className="text-3xl font-bold text-white">
            Solution
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            {project.solution}
          </p>

        </section>

        {/* Features */}

        <section className="mt-24">

          <ProjectFeatures
            features={project.features}
          />

        </section>

        {/* Technology Stack */}

        <section className="mt-24">

          <ProjectTechStack
            technologies={project.technologies}
          />

        </section>

        {/* Highlights */}

        <section className="mt-24">

          <h2 className="text-3xl font-bold text-white">
            Project Highlights
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">

            {project.highlights.map((highlight) => (

              <div
                key={highlight}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >

                <div className="flex items-start gap-3">

                  <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />

                  <p className="leading-7 text-gray-300">
                    {highlight}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* Results */}

        <section className="mt-24">

          <h2 className="text-3xl font-bold text-white">
            Results
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">

            {project.results.map((result) => (

              <div
                key={result}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6"
              >

                <div className="flex items-start gap-3">

                  <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />

                  <p className="leading-7 text-cyan-100">
                    {result}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* Project Metrics */}

        <section className="mt-24">

          <h2 className="text-3xl font-bold text-white">
            Key Outcomes
          </h2>

          <div className="mt-10 flex flex-wrap gap-4">

            {project.metrics.map((metric) => (

              <div
                key={metric.id}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-6 py-3 text-sm text-cyan-200"
              >
                {metric.label}
              </div>

            ))}

          </div>

        </section>
                {/* Call To Action */}

        <section className="mt-24">

          <ProjectCTA
            title="Interested in building a similar solution?"
            description="Looking for a high-performance, SEO-friendly website or web application tailored to your business? Let's discuss your project."
            buttonText="Start Your Project"
            buttonHref="/#contact"
          />

        </section>

        {/* Related Projects */}

        {relatedProjects.length > 0 && (
          <section className="mt-28">

            <div className="flex items-center justify-between">

              <div>

                <span className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                  More Work
                </span>

                <h2 className="mt-3 text-3xl font-bold text-white">
                  Related Projects
                </h2>

              </div>

              <Link
                href="/projects"
                className="text-cyan-400 hover:text-cyan-300"
              >
                View All Projects →
              </Link>

            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

              {relatedProjects.map((item) => (

                <Link
                  key={item.id}
                  href={`/projects/${item.slug}`}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:border-cyan-400/40"
                >

                  <div className="relative aspect-[16/10] overflow-hidden">

                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                  </div>

                  <div className="p-6">

                    <Badge>
                      {item.category}
                    </Badge>

                    <h3 className="mt-4 text-2xl font-semibold text-white">

                      {item.title}

                    </h3>

                    <p className="mt-4 line-clamp-3 leading-7 text-gray-400">

                      {item.shortDescription}

                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">

                      {item.technologies
                        .slice(0, 4)
                        .map((tech) => (

                          <Tag key={tech}>

                            {tech}

                          </Tag>

                        ))}

                    </div>

                  </div>

                </Link>

              ))}

            </div>

          </section>
        )}

        {/* Additional Experience */}

        <section className="mt-28 rounded-3xl border border-white/10 bg-white/5 p-10 lg:p-14">

          <span className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Additional Experience
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white">
            More client and agency development experience
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-gray-400">

            Beyond the showcased projects, I have contributed to numerous
            WordPress, WooCommerce, Shopify and custom web development
            projects involving technical SEO, website optimization,
            performance engineering, hosting migration, maintenance,
            landing pages and enterprise business websites.

          </p>

          <p className="mt-5 text-gray-500">

            Certain projects cannot be publicly displayed because of
            company policies and client confidentiality agreements.

          </p>

        </section>

        {/* Bottom Navigation */}

        <div className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-10">

          <Link href="/projects">

            <Button variant="secondary">

              ← Back to All Projects

            </Button>

          </Link>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >

            <Button>

              Visit Live Website

              <ArrowUpRight size={18} />

            </Button>

          </a>

        </div>

      </div>

    </main>
  );
}