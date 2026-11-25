import SectionTitle from "@/components/common/SectionTitle";
import { FaWordpress, FaReact, FaRobot, FaPython, FaShieldAlt } from "react-icons/fa";

function FlutterIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path d="M14.314 0L2.3 12l3.7 3.7L21.686 0h-7.372z" fill="#02569B" />
      <path d="M14.286 11.429L8.571 17.143l5.715 5.714h7.428l-9.428-9.428 9.428-9.429h-7.428z" fill="#0175C2" />
      <path d="M14.3 22.857h7.4l-5.7-5.714-3.7 3.714z" fill="#4AC7F0" />
    </svg>
  );
}

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
    title: "Cross-Platform Flutter Mobile Apps",
    description:
      "Production-ready native iOS and Android mobile applications built with Flutter & Dart. Clean architecture, Riverpod/Bloc state management, responsive UI/UX, REST API/Firebase integration, and App Store & Play Store deployment.",
    icon: FlutterIcon,
    tag: "Mobile Specialty",
  },
  {
    title: "Autonomous AI Agents & Automation",
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
    title: "Overseas Delivery & Security Hardening",
    description:
      "Timezone-flexible collaboration for UK (GMT), US (EST/PST), and UAE clients. Direct milestone delivery, async Slack/Git updates, 90+ PageSpeed tuning, emergency fatal crash recovery, and server lockdown.",
    icon: FaShieldAlt,
    tag: "Global & DevOps",
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
          title="Full-Stack Web, Flutter Mobile Apps & AI Engineering."
          description="Combining high-performance WordPress CMS, reactive Next.js web applications, cross-platform Flutter iOS & Android apps, and battle-tested remote delivery for overseas businesses."
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
