"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

const testimonials = [
  {
    id: 1,
    name: "Kayla M.",
    handle: "@kaylacreates",
    avatar: "#FF6B4A",
    initials: "KM",
    rating: 5,
    text: "Poity completely changed how I connect with my audience. The analytics tools are incredible and the community features helped me grow from 500 to 24K followers in just 3 months!",
    role: "Content Creator",
  },
  {
    id: 2,
    name: "Alex J.",
    handle: "@alexjdesigns",
    avatar: "#7C5FC8",
    initials: "AJ",
    rating: 5,
    text: "The best social platform I've ever used. The interface is clean, the features are powerful, and the community is genuinely positive and supportive. Highly recommended!",
    role: "UX Designer",
  },
  {
    id: 3,
    name: "Morgan R.",
    handle: "@morganruns",
    avatar: "#0A0A0A",
    initials: "MR",
    rating: 5,
    text: "I've tried every social platform out there. Poity stands out because it actually cares about creators. The monetization tools alone are worth switching for.",
    role: "Fitness Coach",
  },
  {
    id: 4,
    name: "Sam B.",
    handle: "@sambakes",
    avatar: "#CCFF00",
    textColor: "#0A0A0A",
    initials: "SB",
    rating: 5,
    text: "My engagement tripled in the first week. The algorithm actually shows your content to people who care about it. Finally, a platform that works FOR creators.",
    role: "Food Blogger",
  },
  {
    id: 5,
    name: "Taylor Y.",
    handle: "@tayloryoga",
    avatar: "#FF8C73",
    initials: "TY",
    rating: 5,
    text: "The community spaces feature is unlike anything else. I built a 2,000-member wellness community in just 6 weeks. The engagement is real and the conversations are meaningful.",
    role: "Wellness Coach",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.55,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  }),
};

export function SocialProofSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="testimonials"
      className="section-pad px-6 bg-white relative overflow-hidden"
    >
      {/* Background blob */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #CCFF00 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <ScrollReveal y={24} delay={0}>
          <div className="text-center mb-14">
            <span className="text-eyebrow text-gray-text block mb-4">✦ What people say</span>
            <h2 className="heading-section text-3xl sm:text-4xl lg:text-5xl text-ink">
              People Say
            </h2>
            <p className="text-gray-text mt-4 max-w-sm mx-auto">
              Hear from the creators, communities, and individuals who love Poity.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={shouldReduceMotion ? {} : { y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.09)" }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="bg-gray-mid rounded-2xl p-6 flex flex-col gap-4 cursor-default"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-current text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-text leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-gray-border/40">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm"
                  style={{
                    backgroundColor: t.avatar,
                    color: t.textColor ?? "white",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-ink">{t.name}</p>
                  <p className="text-xs text-gray-text">{t.role}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-[9px] font-bold text-gray-text/70 bg-white px-2 py-1 rounded-full">
                    {t.handle}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Second row — 2 centered cards */}
        <div className="mt-5 grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {testimonials.slice(3).map((t, i) => (
            <motion.div
              key={t.id}
              custom={i + 3}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={shouldReduceMotion ? {} : { y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.09)" }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="bg-gray-mid rounded-2xl p-6 flex flex-col gap-4 cursor-default"
            >
              <div className="flex items-center gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-current text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-gray-text leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-gray-border/40">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm"
                  style={{
                    backgroundColor: t.avatar,
                    color: t.textColor ?? "white",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-ink">{t.name}</p>
                  <p className="text-xs text-gray-text">{t.role}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-[9px] font-bold text-gray-text/70 bg-white px-2 py-1 rounded-full">
                    {t.handle}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 1 }}
              animate={i === 0 ? { scale: 1.2 } : { scale: 1 }}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === 0 ? 24 : 8,
                height: 8,
                backgroundColor: i === 0 ? "#CCFF00" : "#E0E0E0",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
