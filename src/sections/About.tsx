import SectionTitle from "@/components/common/SectionTitle";

export default function About() {
  return (
    <section
      id="about"
      className="section-spacing"
    >
      <div className="container-width">
        <SectionTitle
          label="About Me &amp; Philosophy"
          title="Building scalable web platforms, autonomous AI agents &amp; robust backends."
          description="A multi-disciplinary web engineer specializing in enterprise WordPress, Next.js applications, autonomous AI agent pipelines, and Python/Django architecture guidance for international clients and developers."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {/* Card 1 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-400/40">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              01 • CMS &amp; Web Apps
            </span>
            <h3 className="mt-3 text-xl font-bold text-white">
              WordPress &amp; Next.js
            </h3>

            <p className="mt-4 leading-7 text-gray-400 text-sm">
              End-to-end expertise in custom WordPress themes, bespoke plugins, WooCommerce platforms,
              complex booking systems, and high-performance Next.js/React web applications.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl border border-purple-400/20 bg-purple-500/5 p-8 transition hover:border-purple-400/40">
            <span className="text-xs uppercase tracking-widest text-purple-300 font-semibold">
              02 • Intelligent Systems
            </span>
            <h3 className="mt-3 text-xl font-bold text-white">
              AI Agents &amp; Automation
            </h3>

            <p className="mt-4 leading-7 text-gray-400 text-sm">
              Developing autonomous agent workflows, tool-calling pipelines, automated data extraction,
              and connecting LLMs (Gemini, OpenAI, Claude) to web apps.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl border border-emerald-400/20 bg-emerald-500/5 p-8 transition hover:border-emerald-400/40">
            <span className="text-xs uppercase tracking-widest text-emerald-300 font-semibold">
              03 • Backend &amp; Mentorship
            </span>
            <h3 className="mt-3 text-xl font-bold text-white">
              Django &amp; Student Guidance
            </h3>

            <p className="mt-4 leading-7 text-gray-400 text-sm">
              Architecting modular Django REST APIs and actively guiding university students and junior
              developers through complex capstones and full-stack software design.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-3xl border border-blue-400/20 bg-blue-500/5 p-8 transition hover:border-blue-400/40">
            <span className="text-xs uppercase tracking-widest text-blue-300 font-semibold">
              04 • Global Delivery
            </span>
            <h3 className="mt-3 text-xl font-bold text-white">
              Overseas Collaboration
            </h3>

            <p className="mt-4 leading-7 text-gray-400 text-sm">
              Comfortable working asynchronously across UK, US, and European business hours with clean
              Git workflows, milestone deliverables, and zero platform friction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
