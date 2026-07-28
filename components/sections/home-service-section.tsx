"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { TrendingUp, Users, BarChart3, Activity } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

// ── Stats counter ──────────────────────────────────────────────
const stats = [
  { value: "370+", label: "Communities built", icon: Users },
  { value: "40+", label: "Content categories", icon: Activity },
  { value: "5X", label: "Faster growth", icon: TrendingUp },
  { value: "50%", label: "More engagement", icon: BarChart3 },
];

// ── Analytics feature sub-cards ───────────────────────────────
const analyticsFeatures = [
  {
    title: "Real-time Insights",
    desc: "Watch your metrics update live. Track reach, engagement, and growth as it happens.",
    color: "#0A0A0A",
  },
  {
    title: "Audience Demographics",
    desc: "Understand who follows you — age, location, interests — and tailor your content.",
    color: "#CCFF00",
    textColor: "#0A0A0A",
  },
  {
    title: "Content Performance",
    desc: "See which posts resonate. Compare formats, lengths, and posting times at a glance.",
    color: "#FFFFFF",
    textColor: "#0A0A0A",
  },
];

export function HomeServiceSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* ── Stats Bar ── */}
      <section className="py-16 px-6 bg-white border-y border-gray-border/40">
        <div className="max-w-6xl mx-auto">
          <div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.value}
                  initial={{ opacity: 0, y: 24 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] as const }}
                  className="flex flex-col items-center md:items-start gap-2 group"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300 group-hover:bg-lime"
                      style={{ backgroundColor: "#F5F5F5" }}
                    >
                      <Icon className="w-4 h-4 text-ink/50 group-hover:text-ink transition-colors duration-300" />
                    </div>
                  </div>
                  <span className="font-display font-800 text-4xl md:text-5xl text-ink leading-none">
                    {stat.value}
                  </span>
                  <span className="text-sm text-gray-text text-center md:text-left">
                    {stat.label}
                  </span>
                  {/* Divider accent on hover */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "2rem" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    className="h-0.5 rounded-full"
                    style={{ backgroundColor: "#CCFF00" }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Analytics / Audience Feature Section ── */}
      <section
        id="analytics"
        className="section-pad px-6 overflow-hidden relative"
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <div className="max-w-6xl mx-auto">

          {/* Main pill card */}
          <ScrollReveal y={30} delay={0}>
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.005 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="rounded-[2rem] overflow-hidden relative"
              style={{ background: "linear-gradient(135deg, #CCFF00 0%, #B8F500 60%, #A0E800 100%)" }}
            >
              <div className="dot-grid absolute inset-0 opacity-[0.07]" />

              <div className="relative z-10 p-8 md:p-14">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  {/* Left copy */}
                  <div>
                    <span className="text-eyebrow text-ink/50 block mb-4">✦ Analytics</span>
                    <h2 className="heading-section text-3xl sm:text-4xl lg:text-5xl text-ink mb-5">
                      Navigating audience analysis for social networks
                    </h2>
                    <p className="text-ink/60 leading-relaxed mb-8 max-w-sm">
                      Deep-dive into your community data. Understand trends, optimize your
                      content strategy, and grow your audience with confidence.
                    </p>
                    <motion.a
                      href="#download"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 18 }}
                      className="pill-dark px-6 py-3 text-sm shadow-lg inline-flex items-center gap-2"
                    >
                      Start analyzing
                    </motion.a>
                  </div>

                  {/* Right: Mini chart */}
                  <div className="flex flex-col gap-3">
                    {/* Chart bars */}
                    <div className="bg-ink/10 rounded-2xl p-5 backdrop-blur-sm">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-ink/70">Weekly Reach</span>
                        <span className="text-xs font-bold text-ink bg-white/40 px-2 py-0.5 rounded-full">+32%</span>
                      </div>
                      <div className="flex items-end gap-1.5 h-20">
                        {[40, 65, 50, 80, 60, 95, 75].map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.07, duration: 0.5, ease: "easeOut" }}
                            className="flex-1 rounded-t-md"
                            style={{
                              background: i === 5 ? "#0A0A0A" : "rgba(10,10,10,0.25)",
                            }}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between mt-2">
                        {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d) => (
                          <span key={d} className="text-[9px] text-ink/50">{d}</span>
                        ))}
                      </div>
                    </div>

                    {/* Mini stat pills */}
                    <div className="flex gap-3">
                      {[
                        { label: "Followers", value: "24.3K", delta: "+8.2%" },
                        { label: "Impressions", value: "182K", delta: "+14%" },
                      ].map((s) => (
                        <div
                          key={s.label}
                          className="flex-1 bg-ink/10 rounded-xl p-3"
                        >
                          <p className="text-[9px] text-ink/50 mb-1">{s.label}</p>
                          <p className="text-lg font-display font-800 text-ink leading-none">{s.value}</p>
                          <p className="text-[9px] font-bold text-ink/70 mt-0.5">{s.delta}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Sub-feature cards */}
          <div className="grid md:grid-cols-3 gap-4 mt-5">
            {analyticsFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const }}
                whileHover={{ y: -4 }}
                className="rounded-2xl p-6"
                style={{ backgroundColor: f.color, color: f.textColor ?? "white" }}
              >
                <h3
                  className="heading-card text-base mb-2"
                  style={{ color: f.textColor ?? "white" }}
                >
                  {f.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: f.textColor ? "rgba(10,10,10,0.6)" : "rgba(255,255,255,0.65)" }}
                >
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
