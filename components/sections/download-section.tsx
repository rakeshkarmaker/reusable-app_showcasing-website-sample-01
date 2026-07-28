"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Apple, Play } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export function DownloadSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="download"
      className="section-pad px-6 relative overflow-hidden"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={shouldReduceMotion ? {} : { opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(204,255,0,0.12) 0%, transparent 70%)" }}
        />
        <div className="dot-grid-light absolute inset-0 opacity-10" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Main heading */}
        <ScrollReveal y={32} delay={0}>
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] as const }}
            >
              <span className="text-eyebrow text-white/30 block mb-6">✦ Download now</span>
              <h2 className="heading-section text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-4"
                style={{ color: "#CCFF00" }}>
                Let&apos;s start now
              </h2>
              <p className="text-white/50 max-w-md mx-auto leading-relaxed text-base">
                Join 50,000+ people who are already connecting and sharing on Poity.
                Available on iOS and Android — free forever.
              </p>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Store badges */}
        <ScrollReveal y={24} delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            {/* App Store */}
            <motion.a
              href="#"
              data-cursor="IOS"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="flex items-center gap-3 bg-white rounded-xl px-5 py-3.5 shadow-xl hover:shadow-2xl transition-shadow btn-magnetic shimmer-btn"
              aria-label="Download on the App Store"
            >
              <Apple className="w-6 h-6 text-ink flex-shrink-0" />
              <div className="text-left">
                <div className="text-[9px] text-gray-text uppercase tracking-wider">Download on the</div>
                <div className="text-sm font-bold text-ink leading-tight">App Store</div>
              </div>
            </motion.a>

            {/* Google Play */}
            <motion.a
              href="#"
              data-cursor="ANDROID"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="flex items-center gap-3 rounded-xl px-5 py-3.5 shadow-xl border border-white/10 hover:border-white/20 transition-colors btn-magnetic"
              style={{ background: "rgba(255,255,255,0.07)" }}
              aria-label="Get it on Google Play"
            >
              <Play className="w-6 h-6 text-lime flex-shrink-0 fill-current" />
              <div className="text-left">
                <div className="text-[9px] text-white/40 uppercase tracking-wider">Get it on</div>
                <div className="text-sm font-bold text-white leading-tight">Google Play</div>
              </div>
            </motion.a>
          </div>
        </ScrollReveal>

        {/* Feature highlights in a row */}
        <ScrollReveal y={20} delay={0.15}>
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {[
              { value: "Free", label: "Forever", cursor: "FREE" },
              { value: "4.9★", label: "App rating", cursor: "RATING" },
              { value: "50K+", label: "Users", cursor: "USERS" },
            ].map((item, i) => (
              <motion.div
                key={i}
                data-cursor={item.cursor}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.45 }}
                className="text-center"
              >
                <div className="text-xl font-display font-800" style={{ color: "#CCFF00" }}>
                  {item.value}
                </div>
                <div className="text-xs text-white/40 mt-0.5">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
