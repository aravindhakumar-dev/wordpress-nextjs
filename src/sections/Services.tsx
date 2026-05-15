import SectionTitle from "@/components/common/SectionTitle";

const services = [
  {
    title: "WordPress Development",
    description:
      "Custom WordPress websites, theme development, optimization, and scalable CMS solutions.",
  },
  {
    title: "Shopify Development",
    description:
      "Modern Shopify storefronts, product management, theme customization, and integrations.",
  },
  {
    title: "Next.js Applications",
    description:
      "High-performance React and Next.js applications with scalable frontend architecture.",
  },
  {
    title: "Performance Engineering",
    description:
      "Core Web Vitals optimization, technical SEO, speed improvements, and UX enhancements.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-spacing"
    >
      <div className="container-width">
        <SectionTitle
          label="Services"
          title="Professional web solutions for modern businesses."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-400"
            >
              <h3 className="text-2xl font-semibold">
                {service.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}