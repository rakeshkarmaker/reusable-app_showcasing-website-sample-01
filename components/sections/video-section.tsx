"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Play, Clock, Sparkles } from "lucide-react";

const stats = [
  { label: "Calm Opening", value: "15 sec", color: "from-sage/20 to-sage/5" },
  {
    label: "Daily Devotion Flow",
    value: "45 sec",
    color: "from-gold/20 to-gold/5",
  },
  {
    label: "Community Connection",
    value: "60 sec",
    color: "from-blush/30 to-blush/5",
  },
];

export function VideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const videoReveal = useTransform(scrollYProgress, [0, 0.3, 0.5], [0.9, 1, 1]);
  const videoOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5],
    [0.6, 1, 1],
  );
  const videoY = useTransform(scrollYProgress, [0, 0.3], [60, 0]);

  const handlePlay = () => {
    setIsPlaying(true);
    // In production, this would trigger actual video playback
  };

  return (
    <section
      ref={sectionRef}
      id="video"
      className="py-24 md:py-36 px-6 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-sage-mist/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blush/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage/10 border border-sage/20 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-sage" />
              <span className="text-xs font-semibold uppercase tracking-wider text-sage">
                See It in Action
              </span>
            </div>
            <h2 className="heading-section text-4xl md:text-5xl lg:text-6xl text-ink text-balance mb-6">
              Watch Mercy <span className="text-gradient">come to life</span>
            </h2>
            <p className="text-ink/60 text-lg max-w-2xl mx-auto">
              A brief tour of the app experience, from the calm opening to
              community connection.
            </p>
          </div>
        </ScrollReveal>

        {/* Video container */}
        <ScrollReveal delay={0.15} y={30}>
          <motion.div
            style={{
              scale: videoReveal,
              opacity: videoOpacity,
              y: videoY,
            }}
            className="relative w-full aspect-video rounded-2xl overflow-hidden border border-sage/10 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Video placeholder */}
            <div className="absolute inset-0 bg-linear-to-br from-ink/5 via-sage/3 to-ink/5 flex items-center justify-center">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-[0.03]">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 25% 25%, oklch(0.38 0.075 158) 1px, transparent 1px), radial-gradient(circle at 75% 75%, oklch(0.70 0.14 65) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                  }}
                />
              </div>

              {!isPlaying ? (
                <motion.div
                  animate={{
                    scale: isHovered ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative flex flex-col items-center gap-6 z-10"
                >
                  {/* Play Button */}
                  <motion.button
                    onClick={handlePlay}
                    data-cursor="PLAY VIDEO"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative w-20 h-20 rounded-full bg-lime text-ink flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow btn-magnetic shimmer-btn"
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-white/30"
                      animate={{
                        scale: isHovered ? [1, 1.2, 1] : 1,
                        opacity: isHovered ? [0.4, 0, 0.4] : 0.4,
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <Play className="w-8 h-8 ml-1 fill-current" />
                  </motion.button>

                  <div className="text-center">
                    <h3 className="heading-card text-2xl text-ink mb-1">
                      The Mercy Experience
                    </h3>
                    <p className="text-ink/50 text-sm flex items-center gap-1.5 justify-center">
                      <Clock className="w-3.5 h-3.5" />2 minutes &bull; Full app
                      walkthrough
                    </p>
                  </div>
                </motion.div>
              ) : null}

              {/* Actual iframe (hidden until play is clicked in production) */}
              <iframe
                className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                  isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1&modestbranding=1&rel=0"
                title="Mercy App Walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Bottom gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/5 to-transparent pointer-events-none" />
          </motion.div>
        </ScrollReveal>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: [0.21, 0.47, 0.32, 0.98] as const,
          }}
          className="mt-12 grid md:grid-cols-3 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className={`relative overflow-hidden rounded-xl bg-linear-to-br ${stat.color} border border-white/60 p-6 text-center group`}
            >
              <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="relative text-sage text-xs font-bold uppercase tracking-widest mb-2">
                {stat.label}
              </p>
              <p className="relative font-light text-2xl text-ink">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
