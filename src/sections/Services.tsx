import SectionTitle from "@/components/common/SectionTitle";
import { FaWordpress, FaReact, FaShieldAlt, FaBolt } from "react-icons/fa";

const services = [
  {
    title: "WordPress & WooCommerce Architecture",
    description:
      "Custom WordPress themes, robust WooCommerce stores, headless CMS architectures, and scalable plugin customizations built for high reliability.",
    icon: FaWordpress,
    tag: "Core Specialty",
  },
  {
    title: "Next.js & React Applications",
    description:
      "High-performance frontend and full-stack web applications built with Next.js (App Router), React, TypeScript, and modern API architectures.",
    icon: FaReact,
    tag: "Core Specialty",
  },
  {
    title: "Performance Engineering & Core Web Vitals",
    description:
      "Sub-second page speeds, Core Web Vitals optimization, asset minimization, Cloudflare edge caching, and mobile touch tuning for iOS WebKit.",
    icon: FaBolt,
    tag: "Speed & SEO",
  },
  {
    title: "Security Hardening & Technical Forensics",
    description:
      "Incident response, malware removal, database sanitization, server-level .htaccess protections, and secure backend integration (including Django / Python APIs).",
    icon: FaShieldAlt,
    tag: "Security & DevOps",
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
          label="Services & Solutions"
          title="World-class web architecture tailored for businesses."
          description="Combining the flexibility of WordPress, the speed of Next.js, and enterprise-grade performance engineering."
        />

        <div className="grid gap-6 md:grid-cols-2 mt-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-400/50 hover:bg-white/[0.07]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-medium text-cyan-300">
                    {service.tag}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
