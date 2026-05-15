"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <p className="mb-4 text-cyan-400">
            Full-Stack Web Developer
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            ARAVINDHAKUMAR G
          </h1>

          <h2 className="mt-6 text-2xl text-gray-300 md:text-3xl">
            WordPress • Shopify • Next.js • Performance Engineering
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Building scalable websites, eCommerce platforms,
            and modern web experiences for businesses and brands.
          </p>
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
        </div>
        </motion.div>
      </div>
    </section>
  );
}