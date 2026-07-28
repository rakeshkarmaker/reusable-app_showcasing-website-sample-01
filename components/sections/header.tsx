"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Search, ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#emotions", label: "Features" },
  { href: "#platform", label: "Platform" },
  { href: "#testimonials", label: "Community" },
  { href: "#download", label: "Download" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prevRef = useRef(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = prevRef.current;
    setScrolled(latest > 60);
    setHidden(latest > prev && latest > 350);
    prevRef.current = latest;
  });

  return (
    <>
      <motion.header
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] as const }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
      >
        <motion.div
          animate={{
            backgroundColor: scrolled
              ? "rgba(255, 255, 255, 0.92)"
              : "rgba(255, 255, 255, 0.75)",
            backdropFilter: scrolled ? "blur(28px)" : "blur(16px)",
            boxShadow: scrolled
              ? "0 8px 40px rgba(10,10,10,0.10), 0 1px 4px rgba(10,10,10,0.06)"
              : "0 4px 20px rgba(10,10,10,0.06)",
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="w-full max-w-6xl rounded-full px-5 sm:px-7 h-14 sm:h-[60px] flex items-center justify-between border border-gray-border/60"
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group" aria-label="Poity home">
            {/* Dot-grid logomark */}
            <div className="grid grid-cols-3 gap-[3px] p-1">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="w-[5px] h-[5px] rounded-full bg-ink transition-all duration-300 group-hover:bg-lime"
                  style={{ transitionDelay: `${i * 20}ms` }}
                />
              ))}
            </div>
            <span className="font-display font-800 text-[1.3rem] text-ink tracking-tight">
              Poity
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-ink/60 hover:text-ink transition-colors duration-200 rounded-full hover:bg-gray-mid group"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right actions */}
          <div className="hidden md:flex items-center gap-2">
            <button
              aria-label="Search"
              className="flex items-center justify-center size-9 rounded-full hover:bg-gray-mid transition-colors text-ink/60 hover:text-ink"
            >
              <Search className="w-4 h-4" />
            </button>
            <motion.a
              href="#download"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="pill-lime px-5 py-2 text-sm shadow-sm"
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center size-9 rounded-full bg-gray-mid text-ink"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <motion.div
              animate={{ rotate: mobileOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </motion.div>
          </button>
        </motion.div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
        animate={
          mobileOpen
            ? { opacity: 1, y: 0, scaleY: 1 }
            : { opacity: 0, y: -10, scaleY: 0.95 }
        }
        transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] as const }}
        className="fixed top-20 left-4 right-4 z-40 origin-top"
        style={{ pointerEvents: mobileOpen ? "auto" : "none" }}
      >
        <div className="glass-panel rounded-2xl p-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 rounded-xl text-sm font-medium text-ink/70 hover:text-ink hover:bg-gray-mid transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#download"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center mt-1 gradient-lime text-ink px-4 py-3 rounded-xl text-sm font-semibold"
          >
            Get Started
          </a>
        </div>
      </motion.div>
    </>
  );
}
