import { type ReactNode } from "react";

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative phone-shadow rounded-[3rem] bg-[#1a1a1a] p-[10px] w-[280px] sm:w-[300px] h-[580px] sm:h-[620px] border border-[#333] shadow-inner ring-4 ring-[#111] mx-auto">
      {/* Outer Metallic Rim */}
      <div className="absolute inset-0 rounded-[3rem] border-2 border-white/10 pointer-events-none z-30" />

      {/* Dynamic Island */}
      <div className="absolute top-[20px] left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-black rounded-full z-20 flex items-center justify-between px-2">
        <div className="size-2 rounded-full bg-white/10" />
        <div className="size-2.5 rounded-full bg-[#0a0a0a] ring-1 ring-white/10" />
      </div>

      {/* Screen Gloss Reflection */}
      <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-white/10 to-transparent rounded-t-[2.2rem] pointer-events-none z-30 mix-blend-overlay" />

      {/* Screen content */}
      <div 
        className="relative h-full w-full overflow-hidden rounded-[2.2rem] bg-cream shadow-inner isolate"
        style={{ transform: "translateZ(0)" }}
      >
        {children}

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-[5px] bg-ink/80 rounded-full z-30 backdrop-blur-sm" />
      </div>
    </div>
  );
}
