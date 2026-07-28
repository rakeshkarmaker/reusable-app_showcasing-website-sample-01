"use client";

import { motion, useReducedMotion } from "framer-motion";

const footerLinks = [
  { label: "About", href: "/" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Help & Support", href: "/help-support" },
];

const socials = [
  {
    name: "Instagram",
    href: "#",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "X / Twitter",
    href: "#",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.258 5.625L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "#",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34v-7a8.16 8.16 0 0 0 4.77 1.52V6.37a4.85 4.85 0 0 1-1-.32z" />
      </svg>
    ),
  },
];

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

export function Footer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="relative overflow-hidden bg-white border-t border-gray-border/40">
      {/* Top lime accent line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-0.5 rounded-full"
        style={{ background: "#CCFF00" }}
      />

      {/* Content */}
      <div className="flex flex-col items-center px-6 sm:px-10 pt-16 md:pt-20 pb-8 relative z-10">

        {/* Tagline */}
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
          className="mb-6 text-center leading-relaxed max-w-sm text-sm text-gray-text text-balance"
        >
          The platform where people connect, share, and grow together.
          Built for creators and communities.
        </motion.p>

        {/* Nav links */}
        <nav
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-8"
          aria-label="Footer navigation"
        >
          {footerLinks.map((link, i) => (
            <span key={link.label} className="flex items-center gap-5">
              <a
                href={link.href}
                data-cursor="GO"
                className="text-sm font-medium text-ink/50 hover:text-ink transition-colors duration-200"
              >
                {link.label}
              </a>
              {i < footerLinks.length - 1 && (
                <span aria-hidden="true" className="text-gray-border">·</span>
              )}
            </span>
          ))}
        </nav>

        {/* Social icons */}
        <div className="flex items-center gap-5 mb-14">
          {socials.map(({ name, href, svg }) => (
            <motion.a
              key={name}
              href={href}
              data-cursor={name.split(" ")[0].toUpperCase()}
              aria-label={name}
              whileHover={{ scale: 1.25, color: "#0A0A0A" }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="flex items-center text-ink/30 hover:text-ink transition-colors duration-200"
            >
              {svg}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-ink/30 mb-2">
          © {new Date().getFullYear()} Poity · All rights reserved
        </p>
      </div>

      {/* ── Large Poity wordmark with dot-grid logo ── */}
      <motion.div
        aria-hidden="true"
        className="relative z-10 pb-6 flex flex-col items-center select-none pointer-events-none"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        {/* Dot-grid logo icon */}
        <div className="mb-4 grid grid-cols-3 gap-[5px]">
          {Array.from({ length: 9 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.04, type: "spring", stiffness: 400, damping: 20 }}
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: "#0A0A0A" }}
            />
          ))}
        </div>

        {/* Large wordmark */}
        <span
          className="font-display font-800 leading-none tracking-tighter select-none"
          style={{
            fontSize: "clamp(4rem, 16vw, 12rem)",
            color: "#0A0A0A",
            letterSpacing: "-0.04em",
          }}
        >
          Poity
        </span>
      </motion.div>
    </footer>
  );
}
