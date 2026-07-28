"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/scroll-reveal";

const verses = [
  {
    text: "Be still, and know that I am God.",
    ref: "— Psalm 46:10",
  },
  {
    text: "For we walk by faith, not by sight.",
    ref: "— 2 Corinthians 5:7",
  },
  {
    text: "The Lord is my shepherd; I shall not want.",
    ref: "— Psalm 23:1",
  },
  {
    text: "Let your light shine before others.",
    ref: "— Matthew 5:16",
  },
  {
    text: "Trust in the Lord with all your heart.",
    ref: "— Proverbs 3:5",
  },
];

interface ScriptureDividerProps {
  variant?: number;
  className?: string;
}

export function ScriptureDivider({
  variant,
  className = "",
}: ScriptureDividerProps) {
  const verse =
    variant !== undefined
      ? verses[variant % verses.length]
      : verses[Math.floor(Math.random() * verses.length)];

  return (
    <ScrollReveal y={20} duration={0.8}>
      <div className={`relative py-16 md:py-20 ${className}`}>
        {/* Decorative top line */}
        <div className="sacred-divider mb-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-sage/15 to-transparent" />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center size-6"
          >
            {/* Cross symbol */}
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 text-sage/30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="12" y1="4" x2="12" y2="20" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </motion.div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-sage/15 to-transparent" />
        </div>

        {/* Verse card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="max-w-xl mx-auto text-center px-6"
        >
          <div className="relative">
            {/* Opening quote */}
            <svg
              className="absolute -top-6 -left-2 w-8 h-8 text-sage/10"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
            </svg>

            <p className="font-light text-2xl md:text-3xl lg:text-4xl leading-relaxed text-ink/80">
              {verse.text}
            </p>

            {/* Closing quote */}
            <svg
              className="absolute -bottom-6 -right-2 w-8 h-8 text-sage/10 rotate-180"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
            </svg>
          </div>

          <p className="text-sm text-sage/60 font-medium mt-4 tracking-wider uppercase">
            {verse.ref}
          </p>
        </motion.div>

        {/* Decorative bottom line */}
        <div className="sacred-divider mt-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-sage/15 to-transparent" />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-sage/20" />
              ))}
            </div>
          </motion.div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-sage/15 to-transparent" />
        </div>
      </div>
    </ScrollReveal>
  );
}
