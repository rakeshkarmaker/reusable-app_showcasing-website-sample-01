"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Palette, Share2, Layers, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

const proFeatures = [
  { icon: Palette, label: "Custom themes" },
  { icon: Layers, label: "Content layers" },
  { icon: Share2, label: "Cross-platform" },
];

export function FeaturesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="promote"
      className="section-pad px-6 relative overflow-hidden"
      style={{ backgroundColor: "#FF6B4A" }}
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="dot-grid-light absolute inset-0 opacity-10" />
        <motion.div
          animate={shouldReduceMotion ? {} : { scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #CCFF00 0%, transparent 70%)" }}
        />
        <motion.div
          animate={shouldReduceMotion ? {} : { scale: [1, 1.07, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #7C5FC8 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Phone screens ── */}
          <ScrollReveal y={30} delay={0}>
            <div className="relative flex justify-center md:justify-start">
              {/* Back phone (tilted) */}
              <motion.div
                initial={{ opacity: 0, x: -20, rotate: -8 }}
                whileInView={{ opacity: 1, x: 0, rotate: -8 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const }}
                className="absolute top-6 -left-6 phone-shadow rounded-[2rem] overflow-hidden"
                style={{
                  width: 190,
                  height: 380,
                  background: "#7C5FC8",
                  border: "5px solid rgba(255,255,255,0.15)",
                }}
              >
                {/* Simple UI content */}
                <div className="absolute inset-0 pt-8 px-3 flex flex-col gap-2">
                  <div className="w-12 h-1.5 bg-white/30 rounded-full mx-auto mb-3" />
                  {[70, 50, 85, 60].map((w, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-white/20 flex-shrink-0" />
                      <div className="h-2 rounded-full bg-white/20 flex-1" style={{ width: `${w}%` }} />
                    </div>
                  ))}
                  <div className="mt-3 h-24 rounded-xl bg-white/10" />
                </div>
              </motion.div>

              {/* Front phone (main) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.75, ease: [0.21, 0.47, 0.32, 0.98] as const }}
                className="relative phone-shadow rounded-[2.5rem] overflow-hidden ml-14"
                style={{
                  width: 220,
                  height: 440,
                  background: "#CCFF00",
                  border: "5px solid rgba(255,255,255,0.2)",
                  zIndex: 10,
                }}
              >
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-black/20 rounded-full z-20" />

                {/* App UI */}
                <div className="absolute inset-0 flex flex-col pt-10">
                  {/* Header */}
                  <div className="px-4 py-3 flex items-center justify-between">
                    <span className="text-xs font-bold text-ink">Profile</span>
                    <div className="w-6 h-6 rounded-full bg-ink/10 flex items-center justify-center">
                      <Palette className="w-3 h-3 text-ink" />
                    </div>
                  </div>

                  {/* Profile card */}
                  <div className="mx-3 bg-ink rounded-2xl p-4 mb-3">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-coral flex items-center justify-center text-white text-sm font-bold">K</div>
                      <div>
                        <div className="text-white text-xs font-bold">Kayla L.</div>
                        <div className="text-white/50 text-[9px]">@kaylacreates</div>
                      </div>
                      <div className="ml-auto">
                        <div className="bg-lime rounded-lg px-2 py-1 text-[9px] font-bold text-ink">PRO</div>
                      </div>
                    </div>
                    <div className="flex gap-4 text-center">
                      {[["247","Posts"],["12.4K","Followers"],["834","Following"]].map(([v, l]) => (
                        <div key={l}>
                          <div className="text-white text-sm font-bold">{v}</div>
                          <div className="text-white/40 text-[9px]">{l}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Theme picker */}
                  <div className="mx-3 bg-white/30 rounded-2xl p-3">
                    <div className="text-[10px] font-bold text-ink mb-2">Choose theme</div>
                    <div className="flex gap-2">
                      {["#CCFF00","#FF6B4A","#7C5FC8","#0A0A0A"].map((color, i) => (
                        <motion.button
                          key={i}
                          data-cursor="COLOR"
                          whileHover={{ scale: 1.25 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-8 h-8 rounded-full border-2 border-white/40 shadow-sm"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Content grid */}
                  <div className="flex-1 mx-3 mt-3 grid grid-cols-3 gap-1.5">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        data-cursor="GALLERY"
                        className="rounded-lg aspect-square transition-transform duration-200 hover:scale-105"
                        style={{
                          background: [
                            "#FF6B4A","#7C5FC8","#0A0A0A",
                            "#B8F500","#FF8C73","#9B82DC",
                          ][i],
                          opacity: 0.85,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring", stiffness: 300, damping: 22 }}
                data-cursor="ANALYTICS"
                className="absolute -bottom-4 right-4 bg-white rounded-2xl shadow-xl px-4 py-3 z-20"
              >
                <div className="text-[10px] text-gray-text mb-0.5">Profile views</div>
                <div className="text-xl font-display font-800 text-ink">+2,340</div>
                <div className="text-[9px] font-bold text-coral">↑ 18% this week</div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* ── Right: Copy ── */}
          <div className="space-y-7">
            <ScrollReveal y={24} delay={0.05}>
              <span className="text-eyebrow text-white/50 block mb-4">✦ Creator Pro</span>
              <h2 className="heading-section text-3xl sm:text-4xl lg:text-5xl text-white">
                Customize &amp; go professional with others
              </h2>
            </ScrollReveal>

            <ScrollReveal y={16} delay={0.1}>
              <p className="text-white/70 leading-relaxed max-w-md">
                Stand out with fully customizable profiles, branded content, and professional
                tools. Collaborate with other creators and grow your audience faster.
              </p>
            </ScrollReveal>

            {/* Feature list */}
            <ScrollReveal y={16} delay={0.15}>
              <div className="flex flex-col gap-3">
                {proFeatures.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <motion.div
                      key={f.label}
                      data-cursor="PRO"
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.08, duration: 0.45 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-white">{f.label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </ScrollReveal>

            <ScrollReveal y={16} delay={0.2}>
              <motion.a
                href="#download"
                data-cursor="GO PRO"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                className="pill-dark px-6 py-3 text-sm shadow-lg inline-flex items-center gap-2 btn-magnetic shimmer-btn"
              >
                Go Pro
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
