import SectionTitle from "@/components/common/SectionTitle";

const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "WordPress",
  "WooCommerce",
  "Shopify",
  "PHP",
  "MySQL",
  "AWS",
  "DigitalOcean",
  "Netlify",
  "GitHub",
];

export default function TechStack() {
  return (
    <section className="section-spacing">
      <div className="container-width">
        <SectionTitle
          label="Tech Stack"
          title="Technologies & tools I work with."
        />

        <div className="flex flex-wrap gap-4">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-300"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}