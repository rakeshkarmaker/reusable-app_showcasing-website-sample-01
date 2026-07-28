"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for outer ring follower
  const springConfig = { damping: 28, stiffness: 350, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only run on client
    setMounted(true);

    // Disable custom cursor on touch/mobile devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setIsVisible(true);
    document.body.classList.add("custom-cursor-active");

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest<HTMLElement>(
        "button, a, [role='button'], [data-cursor], input, textarea, select"
      );

      if (interactive) {
        setIsHovered(true);
        const cursorAttr = interactive.getAttribute("data-cursor");
        if (cursorAttr) {
          setHoverText(cursorAttr);
        } else {
          setHoverText("");
        }
      } else {
        setIsHovered(false);
        setHoverText("");
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [mouseX, mouseY]);

  if (!mounted || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden" aria-hidden="true">
      {/* Outer Spring Follower Ring & High-Contrast Label */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          scale: hoverText ? 2.4 : isHovered ? 1.7 : 1,
          borderColor: isHovered ? "rgba(10, 10, 10, 0.9)" : "rgba(10, 10, 10, 0.5)",
          backgroundColor: isHovered ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.15)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="fixed -top-4 -left-4 w-8 h-8 rounded-full border-2 border-black/70 backdrop-blur-[2px] flex items-center justify-center shadow-[0_2px_12px_rgba(0,0,0,0.2)]"
      >
        {hoverText && (
          <span className="text-[7px] font-black text-lime bg-black tracking-widest uppercase px-1.5 py-0.5 rounded-full shadow-md whitespace-nowrap border border-white/20">
            {hoverText}
          </span>
        )}
      </motion.div>

      {/* Inner High-Contrast Dual-Tone Center Dot (Black Core + White Border) */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          scale: isHovered ? 0.6 : 1,
        }}
        className="fixed -top-2 -left-2 w-4 h-4 rounded-full bg-black border-2 border-white shadow-[0_0_8px_rgba(0,0,0,0.6)]"
      />
    </div>
  );
}
