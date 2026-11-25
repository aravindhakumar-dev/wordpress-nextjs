import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/ui/Button";
import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
  FaArrowRight,
  FaGlobe,
  FaFileContract,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-spacing"
    >
      <div className="container-width">
        <div className="rounded-3xl sm:rounded-[40px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-5 sm:p-10 md:p-14">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <SectionTitle
              label="International Inquiries &amp; Collaboration"
              title="Let’s build your next web, mobile app, or AI project."
              description="Open for custom WordPress engineering, reactive Next.js applications, cross-platform Flutter iOS &amp; Android mobile apps, and autonomous AI systems for global clients and startups."
            />
          </div>

          {/* Global Access Banner */}
          <div className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-4 text-xs text-cyan-200">
            <span className="flex items-center gap-2 font-semibold text-cyan-300">
              <FaGlobe size={14} />
              Overseas Client Ready:
            </span>
            <span>USA (EST/PST), UK (GMT), UAE (GST), Europe (CET) &amp; Global Timezones.</span>
            <span>•</span>
            <span>Direct Milestone Contracts (Zero Platform Escrow Fees).</span>
            <span>•</span>
            <span>Upwork / Fiverr setup also available on request.</span>
          </div>

          {/* Contact & Social Cards Grid */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* WhatsApp Card (Instant Overseas Chat) */}
            <a
              href="https://wa.me/919585367311?text=Hi%20Aravindhakumar,%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 transition hover:border-emerald-400 hover:bg-emerald-500/10"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                  <FaWhatsapp size={20} />
                </div>
                <h3 className="mt-4 font-semibold text-white">WhatsApp Chat</h3>
                <p className="mt-1 text-sm text-gray-400">+91 95853 67311</p>
                <p className="mt-1 text-xs text-emerald-300">Instant Messaging for Overseas Clients</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform">
                <span>Start Direct Chat</span>
                <FaArrowRight size={10} />
              </div>
            </a>

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
                <p className="mt-1 text-xs text-cyan-300">Detailed scopes, RFPs &amp; consultations</p>
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
                <p className="mt-1 text-sm text-gray-400">Professional Network</p>
                <p className="mt-1 text-xs text-gray-500">Endorsements &amp; Industry Verification</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
                <span>Connect on LinkedIn</span>
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
                <p className="mt-1 text-xs text-gray-500">Verified Location (Google Maps)</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
                <span>Open in Google Maps</span>
                <FaArrowRight size={10} />
              </div>
            </a>
          </div>

          {/* Academic & College Guidance Callout */}
          <div className="mt-10 rounded-2xl border border-purple-400/20 bg-purple-500/5 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-400/10 text-purple-400">
                <FaFileContract size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-white">Academic Project Guidance &amp; Django Mentoring</h4>
                <p className="mt-1 text-sm text-gray-400">
                  Providing architecture consulting, code review, and full-stack mentorship for student capstones,
                  Django web applications, and AI agent projects.
                </p>
              </div>
            </div>

            <Button
              href="mailto:aravindhakumar.dev@gmail.com?subject=Project%20Mentorship%20Inquiry"
              variant="secondary"
            >
              Inquire for Guidance
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8">
            <p className="text-sm text-gray-400">
              Prefer an introductory discussion? Reach out on WhatsApp or email for a quick turnaround within 24 hours.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/919585367311?text=Hi%20Aravindhakumar,%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-black hover:bg-emerald-400 transition-colors"
              >
                <FaWhatsapp size={16} />
                <span>Chat on WhatsApp</span>
              </a>

              <Button href="mailto:aravindhakumar.dev@gmail.com">
                Email Me Directly
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
