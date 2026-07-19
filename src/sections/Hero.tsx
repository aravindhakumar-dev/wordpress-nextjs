"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="container-width relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          {/* Availability Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />

            Available for Remote Opportunities
          </div>

          {/* Subtitle */}
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Full-Stack Web Developer
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            ARAVINDHAKUMAR G
          </h1>

          {/* Tech Stack */}
          <h2 className="mt-6 text-2xl leading-relaxed text-gray-300 md:text-3xl">
            WordPress • Shopify • Next.js • Performance Engineering
          </h2>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Building scalable websites, eCommerce platforms,
            and modern web experiences for businesses,
            agencies, and growing brands worldwide.
          </p>

          {/* Social Links */}
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
              href="https://share.google/tONq2WUENHtTK9pK1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-cyan-400"
            >
             <FaMapMarkerAlt size={18} />
              Tamil Nadu, India
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#projects">
              View Projects
            </Button>

            <Button
              href="#contact"
              variant="secondary"
            >
              Contact Me
            </Button>

            <Button
              href="/aravindhakumar-resume.pdf"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}