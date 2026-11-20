import SectionTitle from "@/components/common/SectionTitle";
import { FaWordpress, FaReact, FaRobot, FaPython, FaGlobeAmericas, FaShieldAlt } from "react-icons/fa";

const services = [
  {
    title: "WordPress & WooCommerce Architecture",
    description:
      "Custom themes, high-converting WooCommerce storefronts, headless CMS setups, and enterprise speed/security optimizations built for high reliability.",
    icon: FaWordpress,
    tag: "Core Specialty",
  },
  {
    title: "Next.js & React Applications",
    description:
      "Modern full-stack web applications built with Next.js (App Router), React 19, TypeScript, dynamic Server Components, and sleek UI systems.",
    icon: FaReact,
    tag: "Core Specialty",
  },
  {
    title: "Autonomous AI Agents & Intelligent Automation",
    description:
      "Custom AI agents, LLM integrations (Gemini, OpenAI, Claude), multi-step reasoning workflows, intelligent tool-calling, and automated web scrapers.",
    icon: FaRobot,
    tag: "AI & Innovation",
  },
  {
    title: "Python & Django Backend Solutions",
    description:
      "Robust REST APIs with Django REST Framework, PostgreSQL schemas, Celery task queues, and technical guidance/mentoring for complex project architectures.",
    icon: FaPython,
    tag: "Backend & Mentorship",
  },
  {
    title: "Overseas Client & Remote Delivery",
    description:
      "Timezone-flexible collaboration for UK (GMT), US (EST/PST), and European clients. Transparent milestone delivery, async Slack/Git updates, and direct contracts without platform markups.",
    icon: FaGlobeAmericas,
    tag: "Global Collaboration",
  },
  {
    title: "Security Hardening & Forensic Recovery",
    description:
      "Emergency triage for WordPress/WooCommerce crashes, malware de-obfuscation, database regex sanitization, and 5-tier server lockdown.",
    icon: FaShieldAlt,
    tag: "DevOps & Security",
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
          label="Services & Capabilities"
          title="Full-Stack Web Engineering, AI Agents & Global Delivery."
          description="Combining high-performance WordPress CMS, reactive Next.js applications, intelligent AI agent automations, and battle-tested remote delivery for overseas businesses."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-400/50 hover:bg-white/[0.07]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-medium text-cyan-300">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400 text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
