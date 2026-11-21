import { Metadata } from "next";
import Link from "next/link";

import SectionTitle from "@/components/common/SectionTitle";
import Pagination from "@/components/common/Pagination";
import ProjectCard from "@/components/projects/ProjectCard";

import { projects } from "@/data/projects";
import { paginate } from "@/lib/pagination";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Projects | Aravindhakumar G",
  description:
    "Explore WordPress, WooCommerce, Next.js and React web applications developed for real-world clients across multiple industries.",
  keywords: [
    "WordPress Portfolio",
    "WooCommerce Projects",
    "Next.js Portfolio",
    "React Developer",
    "Web Development Portfolio",
  ],
  url: "https://aravindhakumar.com/projects",
});

type Props = {
  searchParams: Promise<{
    page?: string;
  }>;
};

const PROJECTS_PER_PAGE = 9;

export default async function ProjectsPage({
  searchParams,
}: Props) {
  const resolvedSearchParams = await searchParams;
  const currentPage = Number(resolvedSearchParams?.page ?? "1");

  const {
    items,
    totalPages,
    hasNext,
    hasPrevious,
  } = paginate(
    projects,
    currentPage,
    PROJECTS_PER_PAGE
  );

  return (
    <main className="section-spacing">
      <div className="container-width">

        <SectionTitle
          label="Portfolio"
          title="Projects & Case Studies"
          description="A collection of business websites, healthcare platforms, WooCommerce stores and modern web applications developed for clients."
        />

        <div className="mt-10 sm:mt-16 grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {items.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 sm:mt-16">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              hasNext={hasNext}
              hasPrevious={hasPrevious}
              basePath="/projects"
            />
          </div>
        )}

        <div className="mt-16 sm:mt-24 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-10">

          <span className="text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-cyan-400 font-semibold">
            Additional Experience
          </span>

          <h2 className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-white">
            Additional client and agency development experience.
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-7 sm:leading-8 text-gray-400">
            Additional experience includes complete WordPress themes and plugins,
            WooCommerce platforms, custom booking systems,
            Next.js &amp; React web applications, autonomous AI agents, performance optimization,
            technical SEO improvements, hosting migration,
            website maintenance and custom business solutions
            across multiple industries.
          </p>

          <p className="mt-4 text-xs sm:text-sm leading-6 sm:leading-7 text-gray-500">
            Some client work cannot be publicly showcased due to
            confidentiality agreements and company policies.
          </p>

          <div className="mt-6 sm:mt-8">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 min-h-[44px]"
            >
              Interested in working together? →
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}