import SectionTitle from "@/components/common/SectionTitle";

const techCategories = [
  {
    category: "CMS & eCommerce (Primary)",
    items: ["WordPress", "WooCommerce", "Shopify", "PHP", "MySQL", "Headless CMS"],
  },
  {
    category: "Modern Frontend (Primary)",
    items: ["Next.js (App Router)", "React.js", "TypeScript", "Tailwind CSS", "JavaScript (ES6+)", "Framer Motion"],
  },
  {
    category: "Performance & Security",
    items: ["Core Web Vitals", "Technical SEO", "Cloudflare CDN", "Server Hardening", "DevTools Protocol (CDP)"],
  },
  {
    category: "Backend & Infrastructure",
    items: ["Django / Python (APIs)", "REST APIs", "Git & GitHub", "Vercel", "DigitalOcean", "Linux Web Servers"],
  },
];

export default function TechStack() {
  return (
    <section className="section-spacing">
      <div className="container-width">
        <SectionTitle
          label="Tech Stack"
          title="Technologies, frameworks & engineering tools."
          description="A specialized toolkit focused heavily on high-speed WordPress architectures and reactive Next.js applications."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {techCategories.map((group) => (
            <div
              key={group.category}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                {group.category}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {group.items.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200 transition hover:border-cyan-400/40 hover:text-white"
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
