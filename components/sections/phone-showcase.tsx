"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

// Partner / logo placeholder names for marquee
const brands = [
  "TechCrunch", "Forbes", "Product Hunt", "Wired", "Fast Company",
  "The Verge", "TechCrunch", "Forbes", "Product Hunt", "Wired",
  "Fast Company", "The Verge",
];

export function PhoneShowcase() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="platform"
      className="section-pad px-6 overflow-hidden"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Content ── */}
          <div className="space-y-8">
            <ScrollReveal y={24} delay={0}>
              <span className="text-eyebrow text-gray-text">✦ Our platform</span>
              <h2 className="heading-section text-3xl sm:text-4xl lg:text-5xl text-ink mt-3">
                Digital platform designed to facilitate social interaction, connection, and content sharing among individuals &amp; communities.
              </h2>
            </ScrollReveal>

            <ScrollReveal y={16} delay={0.1}>
              <p className="text-gray-text leading-relaxed max-w-md">
                We believe that meaningful connections change lives. Poity brings people
                together through shared experiences, stories, and moments that matter.
              </p>
            </ScrollReveal>

            <ScrollReveal y={16} delay={0.15}>
              <div className="flex flex-wrap gap-3">
                <motion.a
                  href="#download"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  className="pill-lime px-6 py-3 text-sm shadow-sm"
                >
                  Get the App
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="#features"
                  whileHover={{ scale: 1.04, backgroundColor: "rgba(10,10,10,0.06)" }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-border text-sm font-semibold text-ink"
                >
                  Learn more
                </motion.a>
              </div>
            </ScrollReveal>
          </div>

          {/* ── Right: Stats + Decorative ── */}
          <ScrollReveal y={30} delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "50K+", label: "Active users", bg: "#CCFF00", textColor: "#0A0A0A" },
                { value: "98%", label: "Satisfaction rate", bg: "#0A0A0A", textColor: "#CCFF00" },
                { value: "4.9★", label: "App store rating", bg: "#FF6B4A", textColor: "#FFFFFF" },
                { value: "120+", label: "Countries reached", bg: "#7C5FC8", textColor: "#FFFFFF" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.88 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl p-6 flex flex-col justify-between min-h-[130px]"
                  style={{ backgroundColor: stat.bg }}
                >
                  <span
                    className="text-3xl font-display font-800 leading-none"
                    style={{ color: stat.textColor }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-sm font-medium opacity-80 mt-2"
                    style={{ color: stat.textColor }}
                  >
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Logo / Brand Marquee ── */}
      <div className="mt-20 border-t border-gray-border/50 pt-12">
        <p className="text-center text-xs text-gray-text-2 mb-8 tracking-widest uppercase">
          As featured in
        </p>
        <div className="overflow-hidden mask-fade-sides">
          <div className={shouldReduceMotion ? "flex gap-12 justify-center flex-wrap" : "marquee-track gap-16"}>
            {brands.map((brand, i) => (
              <span
                key={i}
                className="text-sm font-bold text-gray-text/50 whitespace-nowrap tracking-wide uppercase hover:text-ink transition-colors duration-200 cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
