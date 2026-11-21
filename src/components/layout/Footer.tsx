import Link from "next/link";
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import AkLogo from "@/components/common/AkLogo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container-width flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-4">
          <Link href="/" className="group" aria-label="Aravindhakumar Home">
            <AkLogo size="sm" showName={false} />
          </Link>
          <div>
            <p className="text-sm font-semibold text-white tracking-wide">
              ARAVINDHAKUMAR G
            </p>
            <p className="mt-0.5 text-xs text-gray-500">
              WordPress • Next.js • Autonomous AI Agents • Django Systems
            </p>
          </div>
        </div>

        {/* Social Media & Location */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
          <a
            href="https://wa.me/919585367311?text=Hi%20Aravindhakumar,%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition hover:text-emerald-400"
            aria-label="WhatsApp Contact"
          >
            <FaWhatsapp size={16} className="text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          <a
            href="https://www.linkedin.com/in/aravindhakumar-g"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition hover:text-cyan-400"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={16} />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/aravindhakumar-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition hover:text-cyan-400"
            aria-label="GitHub Profile"
          >
            <FaGithub size={16} />
            <span>GitHub</span>
          </a>

          <a
            href="https://maps.app.goo.gl/gP5iaF4LRzRD37Gm9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition hover:text-cyan-400"
            aria-label="Google Maps Location"
          >
            <FaMapMarkerAlt size={16} />
            <span>Tamil Nadu, India</span>
          </a>

          <a
            href="mailto:aravindhakumar.dev@gmail.com"
            className="flex items-center gap-2 transition hover:text-cyan-400"
            aria-label="Email"
          >
            <FaEnvelope size={16} />
            <span>Email</span>
          </a>
        </div>

        <p className="text-xs text-gray-500">
          © 2026 Aravindhakumar G. Built with Next.js &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
