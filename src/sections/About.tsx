import SectionTitle from "@/components/common/SectionTitle";

export default function About() {
  return (
    <section
      id="about"
      className="section-spacing"
    >
      <div className="container-width">
        <SectionTitle
          label="About"
          title="Building scalable and performance-focused digital experiences."
          description="I specialize in WordPress, Shopify, Next.js, and modern frontend development with a strong focus on performance engineering, responsive UI/UX, and scalable architecture."
        />

        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold">
              What I Do
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
              I develop modern websites, eCommerce platforms,
              landing pages, and web applications for businesses,
              agencies, startups, and brands worldwide.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold">
              My Focus
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
              Performance optimization, Core Web Vitals,
              responsive design, technical SEO, and scalable
              frontend architecture are at the center of every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}