"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, Play, Heart, MessageSquare, Share2, Home, Search, Plus, Bell, User } from "lucide-react";

const floatingAvatars = [
  { id: 1, initials: "KL", color: "#FF6B4A", x: "-14%", y: "18%", delay: 0, size: 52 },
  { id: 2, initials: "AJ", color: "#7C5FC8", x: "108%", y: "12%", delay: 0.15, size: 44 },
  { id: 3, initials: "MR", color: "#CCFF00", textColor: "#0A0A0A", x: "-18%", y: "62%", delay: 0.3, size: 40 },
  { id: 4, initials: "SB", color: "#0A0A0A", x: "112%", y: "55%", delay: 0.45, size: 48 },
  { id: 5, initials: "TY", color: "#FF6B4A", x: "6%", y: "88%", delay: 0.6, size: 36 },
  { id: 6, initials: "EK", color: "#7C5FC8", x: "82%", y: "85%", delay: 0.75, size: 42 },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-dvh flex flex-col justify-center overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24 px-6"
      style={{ backgroundColor: "#CCFF00" }}
    >
      {/* Background decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={shouldReduceMotion ? {} : { scale: [1, 1.06, 1], rotate: [0, 8, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-80 h-80 rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, #B8F500 0%, transparent 70%)" }}
        />
        <motion.div
          animate={shouldReduceMotion ? {} : { scale: [1, 1.1, 1], rotate: [0, -6, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #FF6B4A 0%, transparent 65%)" }}
        />

        {/* Squiggle decorations */}
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, -14, 0], rotate: [-8, 4, -8] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-24 right-[8%] text-ink/20 pointer-events-none"
        >
          <svg width="56" height="36" viewBox="0 0 56 36" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M4 18 Q 18 2, 28 18 T 52 18" />
          </svg>
        </motion.div>

        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 18, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 left-[5%] w-5 h-5 rounded-full bg-ink/20 pointer-events-none"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, -22, 0], rotate: [45, 90, 45] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-40 left-[12%] w-8 h-8 border-[3px] border-ink/20 rounded-sm pointer-events-none"
        />

        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-[0.06]" />
      </div>

      <div className="relative max-w-7xl w-full mx-auto z-10">
        <motion.div
          style={shouldReduceMotion ? {} : { opacity: contentOpacity, y: contentY }}
          className="grid md:grid-cols-2 gap-12 md:gap-8 items-center"
        >
          {/* ── Left Content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants}>
              <span className="text-eyebrow text-ink/60 tracking-widest">
                ✦ The social platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants}>
              <h1 className="heading-display text-[2.4rem] sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-ink">
                Space for people to connect,
                <br />
                and share content
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-ink/60 leading-relaxed max-w-sm"
            >
              A digital platform designed to facilitate social interaction,
              connection, and content sharing among individuals and communities.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              <motion.a
                href="#download"
                data-cursor="START"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                className="pill-dark px-6 py-3 text-sm shadow-lg btn-magnetic shimmer-btn"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#platform"
                data-cursor="PLAY"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(10,10,10,0.08)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 border-ink/20 text-sm font-semibold text-ink btn-magnetic"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                See how it works
              </motion.a>
            </motion.div>

            {/* Social proof mini */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 pt-1"
              data-cursor="50K+"
            >
              <div className="flex -space-x-2">
                {["#FF6B4A","#7C5FC8","#0A0A0A","#FF6B4A"].map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-lime flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: color, zIndex: 4 - i }}
                  >
                    {["K","A","M","S"][i]}
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-ink/70">
                <span className="font-bold text-ink">50K+</span> people connected
              </p>
            </motion.div>
          </motion.div>

          {/* ── Right: Phone Mockup ── */}
          <motion.div
            style={shouldReduceMotion ? {} : { y: phoneY }}
            initial={{ opacity: 0, x: 40, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] as const }}
            className="flex justify-center md:justify-end relative"
          >
            <div className="relative">
              {/* Floating avatars */}
              {floatingAvatars.map((avatar) => (
                <motion.div
                  key={avatar.id}
                  data-cursor={avatar.initials}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.6 + avatar.delay,
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  style={{
                    position: "absolute",
                    left: avatar.x,
                    top: avatar.y,
                    zIndex: 20,
                    animation: shouldReduceMotion
                      ? "none"
                      : `float-y-slow ${5 + avatar.id}s ease-in-out infinite`,
                    animationDelay: `${avatar.delay}s`,
                  }}
                >
                  <div
                    className="rounded-full font-bold text-white flex items-center justify-center shadow-lg border-2 border-white"
                    style={{
                      width: avatar.size,
                      height: avatar.size,
                      backgroundColor: avatar.color,
                      color: avatar.textColor ?? "white",
                      fontSize: avatar.size * 0.3,
                    }}
                  >
                    {avatar.initials}
                  </div>
                </motion.div>
              ))}

              {/* Phone frame */}
              <div
                data-cursor="APP"
                className="relative phone-shadow rounded-[3rem] overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
                style={{
                  width: 260,
                  height: 520,
                  background: "#1A1A1A",
                  border: "6px solid #2A2A2A",
                }}
              >
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20" />

                {/* App UI */}
                <div className="absolute inset-0 flex flex-col" style={{ background: "#FF6B4A" }}>
                  {/* App header */}
                  <div className="pt-10 pb-3 px-4 flex items-center justify-between">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <div className="w-4 h-0.5 bg-white mb-0.5 rounded" />
                    </div>
                    <span className="text-white text-xs font-bold">Poity</span>
                    <div className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center text-white text-xs font-bold">
                      K
                    </div>
                  </div>

                  {/* Feed preview */}
                  <div className="flex-1 px-3 space-y-2 overflow-hidden">
                    {/* Story strip */}
                    <div className="flex gap-2 py-1">
                      {["#CCFF00","#7C5FC8","#0A0A0A","#FF8C73"].map((c, i) => (
                        <div key={i} className="flex flex-col items-center gap-1">
                          <div
                            className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                            style={{ backgroundColor: c, color: c === "#CCFF00" ? "#0A0A0A" : "white" }}
                          >
                            {["A","M","S","K"][i]}
                          </div>
                          <div className="w-8 h-1 bg-white/30 rounded-full" />
                        </div>
                      ))}
                    </div>

                    {/* Post card 1 */}
                    <div className="bg-white rounded-2xl p-3 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded-full bg-violet flex items-center justify-center text-white text-[9px] font-bold">AJ</div>
                        <div>
                          <div className="w-14 h-1.5 bg-gray-200 rounded" />
                          <div className="w-10 h-1 bg-gray-100 rounded mt-1" />
                        </div>
                      </div>
                      <div className="w-full h-20 rounded-xl bg-gradient-to-br from-lime to-lime-deep mb-2" />
                      <div className="flex items-center gap-3 text-slate-500">
                        <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                        <MessageSquare className="w-3.5 h-3.5 text-slate-600" />
                        <Share2 className="w-3.5 h-3.5 text-slate-600" />
                      </div>
                    </div>

                    {/* Post card 2 */}
                    <div className="bg-white/90 rounded-2xl p-3 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded-full bg-coral flex items-center justify-center text-white text-[9px] font-bold">MR</div>
                        <div className="w-16 h-1.5 bg-gray-200 rounded" />
                      </div>
                      <div className="space-y-1">
                        <div className="w-full h-1.5 bg-gray-100 rounded" />
                        <div className="w-4/5 h-1.5 bg-gray-100 rounded" />
                        <div className="w-3/5 h-1.5 bg-gray-100 rounded" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom nav with Lucide icons */}
                  <div className="flex items-center justify-around py-3 px-2 bg-black/20 backdrop-blur-sm text-white">
                    {[Home, Search, Plus, Bell, User].map((IconComp, i) => (
                      <button
                        key={i}
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${i === 0 ? "bg-white/25 text-white" : "text-white/80 hover:text-white"}`}
                      >
                        <IconComp className="w-4 h-4" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
