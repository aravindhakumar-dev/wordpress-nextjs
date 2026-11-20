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
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400 font-semibold">
            Senior Web Developer &amp; AI Systems Consultant
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            ARAVINDHAKUMAR G
          </h1>

          {/* Tech Stack */}
          <h2 className="mt-6 text-2xl leading-relaxed text-gray-200 md:text-3xl font-semibold">
            WordPress • Next.js • Autonomous AI Agents • Django Systems
          </h2>

          {/* Description */}
          <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-400">
            Architecting high-performance WordPress platforms, reactive Next.js applications,
            and autonomous AI agent workflows for international businesses, startups, and agencies.
            Specialized in Core Web Vitals, enterprise security, and Python/Django backend systems.
          </p>

          {/* Overseas Client Perks Banner */}
          <div className="mt-6 flex flex-wrap gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">
              <FaClock className="text-cyan-400" /> Async Slack, Notion &amp; Git Workflows
            </span>
            <span className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">
              Direct Contracts • Zero Platform Escrow Markups
            </span>
            <span className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">
              College &amp; Enterprise Project Architecture Mentorship
            </span>
          </div>

          {/* Social & Contact Links */}
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <a
              href="https://www.linkedin.com/in/aravindhakumar-g"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-cyan-400"
            >
              <FaLinkedin size={18} />
              LinkedIn
            </a>

            <a
              href="https://github.com/aravindhakumar-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-cyan-400"
            >
              <FaGithub size={18} />
              GitHub
            </a>

            <a
              href="https://maps.app.goo.gl/gP5iaF4LRzRD37Gm9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-cyan-400"
            >
              <FaMapMarkerAlt size={18} />
              Tamil Nadu, India
            </a>

            <a
              href="mailto:aravindhakumar.dev@gmail.com"
              className="flex items-center gap-2 transition hover:text-cyan-400"
            >
              <FaEnvelope size={18} />
              aravindhakumar.dev@gmail.com
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#projects">
              View Featured Work
            </Button>

            <a
              href="https://wa.me/919585367311?text=Hi%20Aravindhakumar,%20I%20would%20like%20to%20discuss%20a%20web%20or%20AI%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-6 py-3 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500 hover:text-black"
            >
              <FaWhatsapp size={18} />
              <span>WhatsApp Chat</span>
            </a>

            <Button
              href="#contact"
              variant="secondary"
            >
              Contact &amp; Bookings
            </Button>

            <Button
              href="/projects"
              variant="secondary"
            >
              Case Studies
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
