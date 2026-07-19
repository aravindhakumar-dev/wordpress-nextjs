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
    "Explore WordPress, WooCommerce, Shopify and Next.js projects developed for real-world clients across multiple industries.",
  keywords: [
    "WordPress Portfolio",
    "WooCommerce Projects",
    "Next.js Portfolio",
    "Shopify Developer",
    "Web Development Portfolio",
  ],
  url: "https://aravindhakumar.com/projects",
});

type Props = {
  searchParams: {
    page?: string;
  };
};

const PROJECTS_PER_PAGE = 5;

export default function ProjectsPage({
  searchParams,
}: Props) {
  const currentPage = Number(searchParams.page ?? "1");

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

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {items.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-16">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              hasNext={hasNext}
              hasPrevious={hasPrevious}
              basePath="/projects"
            />
          </div>
        )}

        <div className="mt-24 rounded-3xl border border-white/10 bg-white/5 p-10">

          <span className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Additional Experience
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white">
            Additional client and agency development experience.
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            Additional experience includes WordPress development,
            WooCommerce customization, Shopify storefronts,
            landing pages, performance optimization,
            technical SEO improvements, hosting migration,
            website maintenance and custom business solutions
            across multiple industries.
          </p>

          <p className="mt-4 text-sm leading-7 text-gray-500">
            Some client work cannot be publicly showcased due to
            confidentiality agreements and company policies.
          </p>

          <div className="mt-8">
            <Link
              href="/#contact"
              className="text-cyan-400 hover:text-cyan-300"
            >
              Interested in working together?
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}