import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/ui/Button";
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaArrowRight } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-spacing"
    >
      <div className="container-width">
        <div className="rounded-[40px] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-8 md:p-16">
          <SectionTitle
            label="Get in Touch"
            title="Let’s discuss your next web project."
            description="Available for WordPress development, custom Next.js applications, WooCommerce platforms, and technical architecture consulting."
          />

          {/* Contact & Social Cards Grid */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Email Card */}
            <a
              href="mailto:aravindhakumar.dev@gmail.com"
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/50 hover:bg-cyan-500/5"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <FaEnvelope size={18} />
                </div>
                <h3 className="mt-4 font-semibold text-white">Direct Email</h3>
                <p className="mt-1 text-sm text-gray-400 break-all">aravindhakumar.dev@gmail.com</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
                <span>Send Message</span>
                <FaArrowRight size={10} />
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/aravindhakumar-g"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/50 hover:bg-cyan-500/5"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <FaLinkedin size={18} />
                </div>
                <h3 className="mt-4 font-semibold text-white">LinkedIn</h3>
                <p className="mt-1 text-sm text-gray-400">Professional Profile &amp; Network</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
                <span>Connect</span>
                <FaArrowRight size={10} />
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/aravindhakumar-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/50 hover:bg-cyan-500/5"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <FaGithub size={18} />
                </div>
                <h3 className="mt-4 font-semibold text-white">GitHub</h3>
                <p className="mt-1 text-sm text-gray-400">Repositories &amp; Open Source</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
                <span>Explore Code</span>
                <FaArrowRight size={10} />
              </div>
            </a>

            {/* Location / Google Maps Card */}
            <a
              href="https://maps.app.goo.gl/gP5iaF4LRzRD37Gm9"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/50 hover:bg-cyan-500/5"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <FaMapMarkerAlt size={18} />
                </div>
                <h3 className="mt-4 font-semibold text-white">Location</h3>
                <p className="mt-1 text-sm text-gray-400">Tamil Nadu, India</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
                <span>Open Google Maps</span>
                <FaArrowRight size={10} />
              </div>
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8">
            <p className="text-sm text-gray-400">
              Prefer a direct conversation? Drop an email and expect a response within 24 hours.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="mailto:aravindhakumar.dev@gmail.com">
                Email Me Directly
              </Button>
              <Button
                href="https://www.linkedin.com/in/aravindhakumar-g"
                variant="secondary"
              >
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
