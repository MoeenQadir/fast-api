"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Dashboard", href: "#overview" },
  { label: "Cities", href: "#cities" },
  { label: "People", href: "#people" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-night-950/80 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#overview" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-lg font-black text-white shadow-lg shadow-brand-600/30">
            MP
          </span>
          <span className="text-lg font-bold tracking-tight text-white">
            Metro<span className="bg-brand-gradient bg-clip-text text-transparent">Pulse</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-brand-gradient px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-transform hover:scale-105 md:inline-flex"
        >
          Get in touch
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-200 hover:bg-white/5 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-night-950/95 md:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-brand-gradient px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Get in touch
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}