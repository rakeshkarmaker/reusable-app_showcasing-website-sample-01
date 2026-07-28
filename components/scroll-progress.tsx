"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      role="progressbar"
      aria-label="Scroll progress"
      aria-hidden="true"
      style={{
        scaleX: scrollYProgress,
        background: "linear-gradient(90deg, #CCFF00, #B8F500)",
        transformOrigin: "left",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        zIndex: 200,
      }}
    />
  );
}
