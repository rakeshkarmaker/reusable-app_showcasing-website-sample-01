"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Heart, Smile, Zap, MessageCircle, Share2, Camera, Plane, Palette, Music, Utensils } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

const emotions = [
  {
    icon: Heart,
    label: "Love",
    color: "#FF6B4A",
    bg: "#FFF0EC",
    desc: "Share moments that warm the heart",
  },
  {
    icon: Smile,
    label: "Joy",
    color: "#CCFF00",
    bg: "#F5FFD6",
    textColor: "#0A0A0A",
    desc: "Spread happiness through your content",
  },
  {
    icon: Zap,
    label: "Inspire",
    color: "#7C5FC8",
    bg: "#F0ECFF",
    desc: "Spark creativity in your community",
  },
  {
    icon: MessageCircle,
    label: "Connect",
    color: "#0A0A0A",
    bg: "#F5F5F5",
    desc: "Build meaningful conversations daily",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export function MissionSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="emotions"
      className="section-pad px-6 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ── Left: Phone mockup ── */}
          <ScrollReveal y={30} delay={0}>
            <div className="relative flex justify-center md:justify-start">
              {/* Decorative circle behind phone */}
              <motion.div
                animate={shouldReduceMotion ? {} : { scale: [1, 1.04, 1], rotate: [0, 3, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 m-auto w-72 h-72 rounded-full"
                style={{ background: "radial-gradient(circle, #E5FF80 0%, transparent 70%)" }}
              />

              {/* Phone */}
              <div
                data-cursor="EMOTIONS"
                className="relative phone-shadow rounded-[2.5rem] overflow-hidden z-10"
                style={{
                  width: 240,
                  height: 480,
                  background: "#F5F5F5",
                  border: "5px solid #E0E0E0",
                }}
              >
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-border rounded-full z-20" />

                {/* App content */}
                <div className="absolute inset-0 flex flex-col bg-white pt-10">
                  {/* Profile header */}
                  <div className="px-4 py-3 flex items-center gap-3 border-b border-gray-border/30">
                    <div className="w-9 h-9 rounded-full bg-coral flex items-center justify-center text-white text-sm font-bold">K</div>
                    <div>
                      <div className="text-xs font-bold text-ink">Kayla L.</div>
                      <div className="text-[9px] text-gray-text">Content Creator</div>
                    </div>
                    <div className="ml-auto w-6 h-6 rounded-full bg-lime flex items-center justify-center">
                      <Share2 className="w-3 h-3 text-ink" />
                    </div>
                  </div>

                  {/* Content grid */}
                  <div className="flex-1 p-3 grid grid-cols-2 gap-2 overflow-hidden">
                    {[
                      { bg: "#FF6B4A", label: "Travel", icon: Plane },
                      { bg: "#7C5FC8", label: "Art", icon: Palette },
                      { bg: "#CCFF00", label: "Music", textColor: "#0A0A0A", icon: Music },
                      { bg: "#0A0A0A", label: "Food", icon: Utensils },
                    ].map((item, i) => {
                      const CategoryIcon = item.icon;
                      return (
                        <motion.div
                          key={i}
                          data-cursor={item.label.toUpperCase()}
                          whileHover={{ scale: 1.06 }}
                          transition={{ type: "spring", stiffness: 400, damping: 20 }}
                          className="rounded-xl flex flex-col items-center justify-center h-24 cursor-pointer"
                          style={{ backgroundColor: item.bg }}
                        >
                          <CategoryIcon className="w-5 h-5 mb-1" style={{ color: item.textColor ?? "white" }} />
                          <span
                            className="text-[9px] font-bold"
                            style={{ color: item.textColor ?? "white" }}
                          >
                            {item.label}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Emotion reactions bar */}
                  <div className="px-3 pb-4">
                    <div className="bg-gray-mid rounded-2xl px-3 py-2.5 flex items-center justify-between">
                      {["❤️","😂","😮","😢","🔥","👏"].map((e, i) => (
                        <motion.button
                          key={i}
                          data-cursor="REACT"
                          whileHover={{ scale: 1.3 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 500, damping: 15 }}
                          className="text-base"
                        >
                          {e}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating reaction chip */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: -20 }}
                animate={{ opacity: 1, x: 0, y: -20 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 300, damping: 22 }}
                data-cursor="REACTIONS"
                className="absolute -right-4 top-1/3 bg-white rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2 z-20 border border-gray-border/30"
              >
                <span className="text-base">❤️</span>
                <div>
                  <div className="text-[9px] font-bold text-ink">247 reactions</div>
                  <div className="text-[8px] text-gray-text">on your last post</div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* ── Right: Content ── */}
          <div className="space-y-8">
            <ScrollReveal y={24} delay={0.05}>
              <span className="text-eyebrow text-gray-text">✦ Emotional connection</span>
              <h2 className="heading-section text-3xl sm:text-4xl lg:text-5xl text-ink mt-3">
                Emotions that you&apos;ll
                <br />
                want to feel and share
              </h2>
              <p className="text-gray-text leading-relaxed mt-4 max-w-md">
                Express yourself authentically. Every post, every reaction, every connection
                carries the emotion behind the moment that matters most.
              </p>
            </ScrollReveal>

            {/* Emotion cards grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-2 gap-3"
            >
              {emotions.map((emotion) => {
                const Icon = emotion.icon;
                return (
                  <motion.div
                    key={emotion.label}
                    variants={cardVariants}
                    data-cursor={emotion.label.toUpperCase()}
                    whileHover={{ y: -6, boxShadow: "0 14px 36px rgba(0,0,0,0.09)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="rounded-2xl p-4 cursor-default card-glow"
                    style={{ backgroundColor: emotion.bg }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 shadow-sm"
                      style={{ backgroundColor: emotion.color }}
                    >
                      <Icon
                        className="w-4.5 h-4.5"
                        style={{ color: emotion.textColor ?? "white" }}
                      />
                    </div>
                    <p className="font-bold text-sm text-ink mb-1">{emotion.label}</p>
                    <p className="text-xs text-gray-text leading-relaxed">{emotion.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            <ScrollReveal y={16} delay={0.2}>
              <motion.a
                href="#platform"
                data-cursor="EXPLORE"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                className="inline-flex items-center gap-2 pill-dark px-6 py-3 text-sm btn-magnetic shimmer-btn"
              >
                Explore features
              </motion.a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
