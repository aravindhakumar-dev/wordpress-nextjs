"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import AkLogo from "@/components/common/AkLogo";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Featured Work", href: "/#projects" },
  { name: "Case Studies", href: "/projects" },
  { name: "Services", href: "/#services" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="container-width flex h-20 items-center justify-between">
        <Link
          href="/"
          className="group flex items-center transition-transform active:scale-95"
          aria-label="Aravindhakumar Portfolio Home"
        >
          <AkLogo size="md" showName={true} />
        </Link>

        <nav className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-300 transition hover:text-cyan-400"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/919585367311?text=Hi%20Aravindhakumar,%20I%20would%20like%20to%20discuss%20a%20web%20or%20AI%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-300 transition hover:bg-emerald-500 hover:text-black"
          >
            <FaWhatsapp size={14} />
            <span>WhatsApp</span>
          </a>

          <Link
            href="/#contact"
            className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
          >
            Let&apos;s Talk
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden p-2.5 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl hover:bg-white/5 active:scale-95 transition"
          aria-label="Toggle Navigation Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#050816]/98 backdrop-blur-2xl md:hidden max-h-[calc(100dvh-5rem)] overflow-y-auto shadow-2xl">
          <nav className="container-width flex flex-col py-4 pb-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3.5 text-sm font-medium text-gray-200 active:text-cyan-400 transition min-h-[44px] flex items-center"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-5 space-y-3">
              <a
                href="https://wa.me/919585367311?text=Hi%20Aravindhakumar,%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 py-3 text-sm font-semibold text-black active:scale-95 transition min-h-[44px]"
              >
                <FaWhatsapp size={18} />
                <span>Chat on WhatsApp</span>
              </a>

              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="block text-center rounded-2xl bg-cyan-400 py-3 text-sm font-semibold text-black active:scale-95 transition min-h-[44px]"
              >
                Get in Touch
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
