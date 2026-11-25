"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaEnvelope,
  FaGlobe,
  FaClock,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[130px]" />
      <div className="absolute right-10 top-1/3 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="container-width relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          {/* Availability & Global Badge */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              Available for Overseas &amp; Remote Projects
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1.5 text-xs text-purple-300">
              <FaGlobe size={12} />
              <span>UK • US • Europe • Global Timezones</span>
            </div>
          </div>

          {/* Subtitle */}
          <p className="mb-3 text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-cyan-400 font-semibold">
            Senior Web &amp; Mobile App Developer • AI Systems Consultant
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-white break-words">
            ARAVINDHAKUMAR G
          </h1>

          {/* Tech Stack */}
          <h2 className="mt-4 sm:mt-6 text-lg sm:text-2xl md:text-3xl leading-relaxed text-gray-200 font-semibold">
            WordPress • Next.js • Flutter Mobile Apps • AI Agents &amp; Django Systems
          </h2>

          {/* Description */}
          <p className="mt-5 sm:mt-7 max-w-3xl text-sm sm:text-base md:text-lg leading-7 sm:leading-8 text-gray-400">
            Specializing in complete WordPress engineering (bespoke themes, custom plugins, booking engines &amp; WooCommerce),
            high-performance Next.js web applications, cross-platform Flutter iOS &amp; Android mobile apps, and autonomous AI systems for international clients across the US, UK, and UAE.
          </p>

          {/* Overseas Client Perks Banner */}
          <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 sm:px-3 py-1.5">
              <FaClock className="text-cyan-400 shrink-0" /> Async Slack &amp; Git Workflows
            </span>
            <span className="flex items-center gap-1.5 rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-2.5 sm:px-3 py-1.5 text-cyan-300 font-medium">
              Flutter iOS &amp; Android Apps
            </span>
            <span className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 sm:px-3 py-1.5">
              Direct Contracts • Zero Platform Escrow Markups
            </span>
            <span className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 sm:px-3 py-1.5">
              College &amp; Enterprise Project Architecture Mentorship
            </span>
          </div>

          {/* Social & Contact Links */}
          <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
            <a
              href="https://www.linkedin.com/in/aravindhakumar-g"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-cyan-400 py-1"
            >
              <FaLinkedin size={16} />
              LinkedIn
            </a>

            <a
              href="https://github.com/aravindhakumar-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-cyan-400 py-1"
            >
              <FaGithub size={16} />
              GitHub
            </a>

            <a
              href="https://maps.app.goo.gl/gP5iaF4LRzRD37Gm9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-cyan-400 py-1"
            >
              <FaMapMarkerAlt size={16} />
              Tamil Nadu, India
            </a>

            <a
              href="mailto:aravindhakumar.dev@gmail.com"
              className="flex items-center gap-2 transition hover:text-cyan-400 py-1 break-all"
            >
              <FaEnvelope size={16} />
              aravindhakumar.dev@gmail.com
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <Button href="#projects" className="w-full sm:w-auto">
              View Featured Work
            </Button>

            <a
              href="https://wa.me/919585367311?text=Hi%20Aravindhakumar,%20I%20would%20like%20to%20discuss%20a%20web%20or%20AI%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500 hover:text-black min-h-[44px] active:scale-95"
            >
              <FaWhatsapp size={18} />
              <span>WhatsApp Chat</span>
            </a>

            <Button
              href="#contact"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Contact &amp; Bookings
            </Button>

            <Button
              href="/projects"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Case Studies
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
