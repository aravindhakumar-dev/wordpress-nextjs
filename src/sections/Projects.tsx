import SectionTitle from "@/components/common/SectionTitle";
import ProjectGrid from "@/components/projects/ProjectGrid";
import Button from "@/components/ui/Button";

import { featuredProjects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-spacing"
    >
      <div className="container-width">

        <SectionTitle
          label="Featured Work &amp; Case Studies"
          title="Real-world projects &amp; production case studies."
          description="A showcase of high-performance WordPress platforms, custom Next.js applications, autonomous AI agent architectures, and in-depth engineering forensic case studies."
        />

        {/* Featured Projects */}
        <div className="mt-16">
          <ProjectGrid
            projects={featuredProjects}
            limit={8}
          />
        </div>

        {/* View All Projects */}
        <div className="mt-12 flex justify-center">
          <Button
            href="/projects"
            variant="secondary"
          >
            View All Projects
          </Button>
        </div>

        {/* Additional Experience */}
        <div className="mt-14 sm:mt-20 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-10 lg:p-12">
          <div className="max-w-4xl">

            <span className="text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-cyan-400 font-semibold">
              Additional Experience
            </span>

            <h3 className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Additional client and agency development experience.
            </h3>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-7 sm:leading-8 text-gray-400">
              Additional experience includes complete WordPress themes and plugins,
              WooCommerce platforms, custom booking systems,
              Next.js &amp; React web applications, autonomous AI agents, performance optimization,
              technical SEO improvements, hosting migration,
              website maintenance and enterprise web solutions
              across multiple industries.
            </p>

            <p className="mt-4 text-xs sm:text-sm leading-6 sm:leading-7 text-gray-500">
              Some client projects cannot be publicly showcased due to
              company policies and confidentiality agreements.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}