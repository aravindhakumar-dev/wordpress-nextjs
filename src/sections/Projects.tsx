import Image from "next/image";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/ui/Button";
import {
  ArrowUpRight,
  Globe,
  TrendingUp,
} from "lucide-react";

const projects = [
  {
    title: "BritePro AV",
    category: "Commercial AV Solutions",
    image: "/projects/britepro.jpg",
    live: "https://briteproav.com/",
    description:
      "Enterprise-grade AV and smart automation website built for residential and commercial entertainment solutions with structured product architecture and performance-focused UX.",

    highlights: [
      "Responsive multi-page business website",
      "Optimized product showcase experience",
      "Structured service architecture",
      "Improved business-focused UI/UX",
    ],

    metrics: [
      "Performance Optimization",
      "SEO Structured Layout",
      "Responsive Architecture",
    ],

    tech: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "MySQL",
      "Cloudflare",
    ],
  },

  {
    title: "Felix Polyclinic",
    category: "Healthcare Platform",
    image: "/projects/felix.jpg",
    live: "https://felixpolyclinic.com/",
    description:
      "Healthcare-focused website developed for a multi-speciality clinic with appointment systems, doctor management, responsive patient experience, and trust-oriented UI structure.",

    highlights: [
      "Doctor management interface",
      "Appointment booking flow",
      "Healthcare-focused responsive UI",
      "Structured medical information architecture",
    ],

    metrics: [
      "Mobile Optimized",
      "Trust-Focused UX",
      "Fast Content Accessibility",
    ],

    tech: [
      "WordPress",
      "Elementor",
      "PHP",
      "MySQL",
      "Custom CSS",
    ],
  },

  {
    title: "Varnatari",
    category: "Fashion eCommerce",
    image: "/projects/varnatari.jpg",
    live: "https://varnatari.com/",
    description:
      "Ethnic fashion eCommerce platform focused on premium product presentation, category structuring, responsive shopping experience, and conversion-oriented design.",

    highlights: [
      "WooCommerce customization",
      "Fashion-focused UI design",
      "Mobile shopping optimization",
      "Conversion-focused homepage layout",
    ],

    metrics: [
      "Responsive eCommerce UI",
      "Optimized Product Structure",
      "Enhanced User Experience",
    ],

    tech: [
      "WooCommerce",
      "WordPress",
      "PHP",
      "LiteSpeed",
      "Custom CSS",
    ],
  },

  {
    title: "Montresor",
    category: "Luxury Jewelry Store",
    image: "/projects/montresor.jpg",
    live: "https://montresor.co.in/",
    description:
      "Premium jewelry storefront designed with elegant visual hierarchy, luxury branding experience, responsive layouts, and optimized product presentation.",

    highlights: [
      "Luxury UI implementation",
      "Elegant product showcase",
      "Premium responsive design",
      "Conversion-oriented shopping flow",
    ],

    metrics: [
      "Premium Brand Experience",
      "Mobile Responsive",
      "Improved Product Visibility",
    ],

    tech: [
      "Shopify",
      "Liquid",
      "CSS",
      "JavaScript",
      "Responsive Design",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-spacing"
    >
      <div className="container-width">
        <SectionTitle
          label="Featured Projects"
          title="Real-world projects & production case studies."
          description="A showcase of business websites, healthcare platforms, luxury eCommerce stores, and performance-focused digital experiences built for real clients."
        />

        <div className="space-y-10">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-cyan-400/50"
            >
              <div className="grid gap-10 lg:grid-cols-2">
                {/* IMAGE */}
                <div className="relative h-[320px] overflow-hidden lg:h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs tracking-widest text-cyan-300 uppercase">
                      {project.category}
                    </span>

                    <span className="flex items-center gap-1 text-sm text-gray-400">
                      <Globe size={14} />
                      Live Project
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-5 leading-8 text-gray-400">
                    {project.description}
                  </p>

                  {/* HIGHLIGHTS */}
                  <div className="mt-8 space-y-3">
                    {project.highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-sm text-gray-300"
                      >
                        <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* METRICS */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric}
                        className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs text-cyan-200"
                      >
                        <TrendingUp size={14} />
                        {metric}
                      </div>
                    ))}
                  </div>

                  {/* TECH STACK */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 px-4 py-2 text-xs text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className="mt-10 flex flex-wrap gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button>
                        View Live Website
                      </Button>
                    </a>

                    <Button variant="secondary">
                      Case Study
                      <ArrowUpRight size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}