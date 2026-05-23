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
    title: "Varnatari",
    category: "Fashion eCommerce Platform",
    image: "/projects/varnatari-homepage.png",
    live: "https://varnatari.com/",

    description:
      "Premium ethnic fashion eCommerce platform developed using WordPress and WooCommerce with responsive shopping experience, conversion-focused layouts, and optimized product presentation.",

    highlights: [
      "WooCommerce store customization",
      "Responsive shopping experience",
      "Optimized homepage product sections",
      "Enhanced mobile user experience",
    ],

    metrics: [
      "Fashion eCommerce UI",
      "Mobile Optimized",
      "Conversion-Focused Layout",
    ],

    tech: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "MySQL",
      "Custom CSS",
    ],
  },

  {
    title: "Montresor",
    category: "Luxury Jewelry Store",
    image: "/projects/montresor-store.png",
    live: "https://montresor.co.in/",

    description:
      "Luxury jewelry storefront built with WordPress and WooCommerce featuring premium product presentation, elegant visual hierarchy, and responsive shopping experience.",

    highlights: [
      "Luxury UI implementation",
      "Elegant product showcase",
      "Responsive storefront experience",
      "Premium brand-focused layouts",
    ],

    metrics: [
      "Premium UI Experience",
      "Responsive Design",
      "Optimized Product Visibility",
    ],

    tech: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "JavaScript",
      "Responsive Design",
    ],
  },

  {
    title: "BritePro AV",
    category: "Commercial AV Solutions Website",
    image: "/projects/britepro-website.png",
    live: "https://briteproav.com/",

    description:
      "Enterprise business website developed for residential and commercial AV solutions with structured product architecture, responsive layouts, and performance-focused business experience.",

    highlights: [
      "Large-scale business website structure",
      "Commercial product presentation",
      "Responsive service architecture",
      "Performance-focused user experience",
    ],

    metrics: [
      "Business-Focused UX",
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
    category: "Healthcare Information Platform",
    image: "/projects/felix-polyclinic.png",
    live: "https://felixpolyclinic.com/",

    description:
      "Responsive healthcare platform developed using Bootstrap and JavaScript focused on appointment accessibility, doctor management, and trust-oriented patient experience.",

    highlights: [
      "Appointment-focused interface",
      "Doctor management sections",
      "Healthcare responsive layouts",
      "Structured medical information flow",
    ],

    metrics: [
      "Responsive Healthcare UI",
      "Accessibility Focused",
      "Fast Content Structure",
    ],

    tech: [
      "Bootstrap",
      "JavaScript",
      "HTML5",
      "CSS3",
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
          description="A showcase of business websites, healthcare platforms, and eCommerce solutions developed for real-world clients across multiple industries."
        />

        <div className="space-y-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-cyan-400/40"
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
                  {/* CATEGORY */}
                  <div className="mb-5 flex items-center gap-3">
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs uppercase tracking-widest text-cyan-300">
                      {project.category}
                    </span>

                    <span className="flex items-center gap-2 text-sm text-gray-400">
                      <Globe size={14} />
                      Live Website
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-3xl font-bold text-white">
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}
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
                      View Case Study
                      <ArrowUpRight size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ADDITIONAL EXPERIENCE */}
        <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-8 lg:p-12">
          <div className="max-w-4xl">
            <span className="text-sm uppercase tracking-[0.3em] text-cyan-400">
              Additional Experience
            </span>

            <h3 className="mt-4 text-3xl font-bold text-white">
              Additional client and agency development experience.
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              Additional experience includes WordPress development,
              WooCommerce customization, Shopify storefronts,
              responsive landing pages, performance optimization,
              technical SEO improvements, hosting/server migration,
              and multi-site maintenance systems across multiple industries.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              Some projects are not publicly displayed due to
              client and company confidentiality policies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}