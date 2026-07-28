"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Users, BarChart2, MessageSquare, Sparkles, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

const features = [
  {
    id: 1,
    title: "Smart Feed",
    desc: "AI-powered content discovery tailored to your interests and connections. Surface what matters most.",
    icon: Sparkles,
    accentColor: "#CCFF00",
    accentText: "#0A0A0A",
    bgCard: "#FFFFFF",
    visual: (
      <div className="h-32 rounded-xl overflow-hidden relative" style={{ background: "#F0ECFF" }}>
        <div className="absolute inset-3 flex flex-col gap-2">
          {[90, 65, 80, 50].map((w, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full flex-shrink-0" style={{ background: ["#CCFF00","#FF6B4A","#7C5FC8","#0A0A0A"][i] }} />
              <div className="h-2 rounded-full bg-violet-mist" style={{ width: `${w}%` }} />
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Creator Tools",
    desc: "Build, schedule, and publish stunning content with powerful tools designed for modern creators.",
    icon: BarChart2,
    accentColor: "#FF6B4A",
    accentText: "#FFFFFF",
    bgCard: "#FFFFFF",
    visual: (
      <div className="h-32 rounded-xl overflow-hidden relative" style={{ background: "#FFF0EC" }}>
        <div className="absolute inset-3 flex items-end gap-1.5">
          {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-md transition-all"
              style={{
                height: `${h}%`,
                background: i === 5 ? "#FF6B4A" : `rgba(255,107,74,${0.2 + i * 0.05})`,
              }}
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Community Spaces",
    desc: "Create or join interest-based communities. Host live events, discussions, and exclusive drops.",
    icon: Users,
    accentColor: "#0A0A0A",
    accentText: "#CCFF00",
    bgCard: "#FFFFFF",
    visual: (
      <div className="h-32 rounded-xl overflow-hidden relative" style={{ background: "#F5F5F5" }}>
        <div className="absolute inset-3 grid grid-cols-4 gap-1.5">
          {["KL","AJ","MR","SB","TY","EK","RN","PM"].map((initials, i) => (
            <div
              key={i}
              className="rounded-xl flex items-center justify-center text-[9px] font-bold text-white"
              style={{ background: ["#FF6B4A","#7C5FC8","#CCFF00","#0A0A0A","#FF8C73","#9B82DC","#B8F500","#1A1A1A"][i], color: i === 2 || i === 6 ? "#0A0A0A" : "white" }}
            >
              {initials}
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  }),
};

export function AppFeaturesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="features"
      className="section-pad px-6 relative overflow-hidden"
      style={{ backgroundColor: "#7C5FC8" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="dot-grid-light absolute inset-0 opacity-20" />
        <motion.div
          animate={shouldReduceMotion ? {} : { scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(204,255,0,0.3) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={shouldReduceMotion ? {} : { scale: [1, 1.06, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,107,74,0.2) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal y={24} delay={0}>
          <div className="text-center mb-14">
            <span className="text-eyebrow text-white/50 mb-4 block">✦ Why Poity</span>
            <h2 className="heading-section text-3xl sm:text-4xl lg:text-5xl text-white mb-5">
              Get more with Poity.
              <br />
              <span style={{ color: "#CCFF00" }}>Explore our best features</span>
            </h2>
            <p className="text-white/60 max-w-md mx-auto leading-relaxed">
              Everything you need to create, connect, and grow — all in one beautifully designed platform.
            </p>
          </div>
        </ScrollReveal>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                custom={i}
                data-cursor={feature.title.toUpperCase()}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: shouldReduceMotion ? 0 : -6, transition: { type: "spring", stiffness: 400, damping: 22 } }}
                className="rounded-2xl p-5 flex flex-col gap-4 card-glow"
                style={{ backgroundColor: feature.bgCard }}
              >
                {/* Visual preview */}
                {feature.visual}

                {/* Icon + label */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                    style={{ backgroundColor: feature.accentColor }}
                  >
                    <Icon className="w-4.5 h-4.5" style={{ color: feature.accentText }} />
                  </div>
                  <h3 className="heading-card text-base text-ink">{feature.title}</h3>
                </div>

                <p className="text-sm text-gray-text leading-relaxed flex-1">
                  {feature.desc}
                </p>

                <motion.a
                  href="#download"
                  data-cursor="LEARN"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink group"
                >
                  Explore
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </motion.a>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <ScrollReveal y={16} delay={0.2}>
          <div className="text-center mt-12">
            <motion.a
              href="#download"
              data-cursor="ALL FEATURES"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="pill-lime px-7 py-3.5 text-sm shadow-lg btn-magnetic shimmer-btn"
            >
              Explore all features
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
