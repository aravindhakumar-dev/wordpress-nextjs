import SectionTitle from "@/components/common/SectionTitle";

export default function About() {
  return (
    <section
      id="about"
      className="section-spacing"
    >
      <div className="container-width">
        <SectionTitle
          label="About Me"
          title="Building scalable and performance-focused digital experiences."
          description="Specializing in WordPress architectures, custom WooCommerce stores, and reactive Next.js applications with a relentless focus on performance engineering, security hardening, and intuitive UI/UX."
        />

        <div className="grid gap-8 md:grid-cols-3 mt-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              Approach
            </span>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              Engineering First
            </h3>

            <p className="mt-4 leading-8 text-gray-400">
              I treat every web project with an engineering mindset—clean code, modular architecture,
              minimal script bloat, and defensive security from day one.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              Performance
            </span>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              Sub-Second Speed
            </h3>

            <p className="mt-4 leading-8 text-gray-400">
              Core Web Vitals, asset compression, edge caching, and mobile touch optimizations
              are engineered directly into every layout to maximize conversion and search ranking.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              Reliability
            </span>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              Battle-Tested
            </h3>

            <p className="mt-4 leading-8 text-gray-400">
              From high-traffic e-commerce storefronts to multi-stage forensic malware recoveries,
              I ensure your web infrastructure stays online, secure, and resilient.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
