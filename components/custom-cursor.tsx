"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const circleRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer devices (non-touch)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setIsVisible(true);

    let mouseX = -100;
    let mouseY = -100;
    let circleX = -100;
    let circleY = -100;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      if (circleRef.current) circleRef.current.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      if (circleRef.current) circleRef.current.style.opacity = "1";
    };

    const render = () => {
      // Linear Interpolation (Lerp) with factor 0.15
      circleX += (mouseX - circleX) * 0.15;
      circleY += (mouseY - circleY) * 0.15;

      if (circleRef.current) {
        // Translate3d for GPU acceleration; offset by -15px to center the 30px circle on cursor tip
        circleRef.current.style.transform = `translate3d(${circleX - 15}px, ${circleY - 15}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={circleRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] w-[30px] h-[30px] rounded-full border border-white/60 bg-transparent transition-opacity duration-300 shadow-[0_0_8px_rgba(255,255,255,0.2)]"
      style={{ willChange: "transform" }}
    />
  );
}
