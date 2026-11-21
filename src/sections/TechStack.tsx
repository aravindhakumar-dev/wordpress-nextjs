import SectionTitle from "@/components/common/SectionTitle";

const techCategories = [
  {
    category: "WordPress & E-Commerce Architecture (Primary)",
    items: ["WordPress", "Custom Themes & Plugins", "WooCommerce", "Booking Systems", "PHP", "MySQL", "Headless CMS"],
  },
  {
    category: "Modern Frontend (Primary)",
    items: ["Next.js (App Router)", "React.js", "TypeScript", "Tailwind CSS", "JavaScript (ES6+)", "Framer Motion"],
  },
  {
    category: "AI Agents & Automation (Featured)",
    items: ["Autonomous AI Agents", "Tool Calling & Reasoning", "Gemini & OpenAI APIs", "Web Scraping Bots", "Vector Search & Retrieval"],
  },
  {
    category: "Backend & Systems Guidance",
    items: ["Python", "Django & DRF", "PostgreSQL", "REST APIs", "Project Architecture Mentorship", "Celery Queues"],
  },
  {
    category: "Performance, Security & DevOps",
    items: ["Core Web Vitals", "Server Hardening", "Cloudflare CDN", "Git & GitHub", "Vercel", "DigitalOcean"],
  },
];

export default function TechStack() {
  return (
    <section className="section-spacing">
      <div className="container-width">
        <SectionTitle
          label="Tech Stack"
          title="Technologies, frameworks & engineering tools."
          description="A specialized toolkit focused heavily on high-speed WordPress architectures, reactive Next.js applications, autonomous AI agents, and robust Django backends."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((group) => (
            <div
              key={group.category}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-400/30"
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                {group.category}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-gray-200 transition hover:border-cyan-400/40 hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
