import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/ui/Button";

const projects = [
  {
    title: "WooCommerce Fashion Store",
    description:
      "Custom WooCommerce store with optimized performance, responsive UI, and enhanced conversion flow.",
    tech: ["WordPress", "WooCommerce", "PHP"],
  },
  {
    title: "Shopify Product Store",
    description:
      "Modern Shopify storefront with custom sections, product management, and optimized user experience.",
    tech: ["Shopify", "Liquid", "CSS"],
  },
  {
    title: "Next.js Portfolio Website",
    description:
      "Performance-focused developer portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-spacing"
    >
      <div className="container-width">
        <SectionTitle
          label="Projects"
          title="Selected projects & case studies."
          description="A showcase of web applications, eCommerce platforms, and performance-focused digital experiences."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400"
            >
              <div className="mb-6 h-52 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/10" />

              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-4 py-2 text-xs text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <Button variant="secondary">
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}