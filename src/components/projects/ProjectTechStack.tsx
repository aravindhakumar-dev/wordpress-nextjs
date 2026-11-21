import {
  Code2,
  Database,
  Globe,
  Layers3,
  Server,
  Wrench,
} from "lucide-react";

type Props = {
  technologies: string[];
};

const getIcon = (technology: string) => {
  const tech = technology.toLowerCase();

  if (
    tech.includes("wordpress") ||
    tech.includes("php")
  ) {
    return <Globe size={20} />;
  }

  if (
    tech.includes("mysql") ||
    tech.includes("postgres") ||
    tech.includes("database")
  ) {
    return <Database size={20} />;
  }

  if (
    tech.includes("react") ||
    tech.includes("next") ||
    tech.includes("javascript") ||
    tech.includes("typescript")
  ) {
    return <Code2 size={20} />;
  }

  if (
    tech.includes("cloudflare") ||
    tech.includes("vercel") ||
    tech.includes("hosting")
  ) {
    return <Server size={20} />;
  }

  if (
    tech.includes("bootstrap") ||
    tech.includes("tailwind") ||
    tech.includes("css") ||
    tech.includes("html")
  ) {
    return <Layers3 size={20} />;
  }

  return <Wrench size={20} />;
};

const getDescription = (technology: string) => {
  const tech = technology.toLowerCase();

  if (tech.includes("wordpress"))
    return "Content Management System";

  if (tech.includes("woocommerce"))
    return "eCommerce Platform";

  if (tech.includes("shopify"))
    return "Online Store Platform";

  if (tech.includes("next"))
    return "React Framework";

  if (tech.includes("react"))
    return "Frontend Library";

  if (tech.includes("php"))
    return "Backend Language";

  if (tech.includes("mysql"))
    return "Relational Database";

  if (tech.includes("bootstrap"))
    return "CSS Framework";

  if (tech.includes("tailwind"))
    return "Utility-first CSS";

  if (tech.includes("javascript"))
    return "Programming Language";

  if (tech.includes("typescript"))
    return "Typed JavaScript";

  if (tech.includes("cloudflare"))
    return "CDN & Security";

  if (tech.includes("ai") || tech.includes("agent"))
    return "Artificial Intelligence & Agents";

  if (tech.includes("django"))
    return "Python Web Framework";

  if (tech.includes("python"))
    return "Backend & AI Language";

  return "Technology Used";
};

export default function ProjectTechStack({
  technologies,
}: Props) {
  if (!technologies.length) {
    return null;
  }

  return (
    <section>
      <div className="mb-10">
        <span className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          Technology Stack
        </span>

        <h2 className="mt-3 text-3xl font-bold text-white">
          Technologies Used
        </h2>

        <p className="mt-4 max-w-3xl leading-8 text-gray-400">
          The project was developed using modern technologies,
          frameworks and tools to ensure scalability,
          maintainability and high performance.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {technologies.map((technology) => (
          <div
            key={technology}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-400">
                {getIcon(technology)}
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  {technology}
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  {getDescription(technology)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}