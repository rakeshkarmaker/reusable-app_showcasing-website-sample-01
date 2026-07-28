# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Mercy** — a single-page marketing site that showcases a fictional faith-based mobile app. The page is dominated by a scroll-driven phone "walkthrough" that pins a device frame on the right, swaps in four app screens (Splash → Devotion → Ask → Community), and synchronizes a left-side text panel with each step.

There is no backend, no routing, and no test suite. Everything is rendered from `app/page.tsx`.

## Commands

```bash
npm install      # install dependencies
npm run dev      # local dev server at http://localhost:3000
npm run build    # production build (Next 16)
npm start        # serve the production build
npm run lint     # ESLint over the project
```

No test runner is configured (no Jest, Vitest, or Playwright). `npm run lint` is the only static-analysis command. There is also no ESLint config file checked in — `npm run lint` runs whatever Next's defaults provide.

## Tech Stack

- **Next.js 16.2** (App Router) on **React 19**
- **TypeScript 5.7** — `strict: true`, but `next.config.mjs` sets `typescript.ignoreBuildErrors: true`
- **Tailwind CSS v4** — configured *in CSS only* via `@theme inline {}` in `app/globals.css` (no `tailwind.config.*`)
- **GSAP 3.15 + ScrollTrigger** for the pinned scroll progress on the phone walkthrough
- **Framer Motion** for everything else (entry animations, parallax, hover/tap, scroll-reveal)
- **@base-ui/react** + **class-variance-authority** for the `Button` primitive (shadcn "base-nova" style)
- **lucide-react** for icons
- **npm** as the package manager

## Directory Layout

```
app/
  layout.tsx        # Root layout, Poppins font loading, metadata, favicon set
  page.tsx          # The single page — composes all sections in order
  globals.css       # Tailwind v4 @theme tokens + custom utility classes
  privacy-policy/   # /privacy-policy route (static legal page)
  terms-and-conditions/  # /terms-and-conditions route (static legal page)
components/
  sections/         # One file per page section, all "use client"
    header.tsx                  sticky header w/ scroll-direction hide + mobile menu
    hero-section.tsx            full-bleed hero with floating phone + decorative blobs
    mission-section.tsx         mission statement with scripture divider
    phone-showcase.tsx          # PINNED scroll-driven walkthrough (GSAP + Framer)
    app-features-section.tsx    six-icon feature list flanking a phone mockup
    video-section.tsx           scroll-progress video/image reveal (currently disabled in page.tsx)
    features-section.tsx        bento-style feature grid (sage/gold/blush color sets)
    social-proof-section.tsx    testimonials / community signals
    download-section.tsx        CTA + App Store / Google Play badges
    footer.tsx                  footer with link columns
  phone-frame.tsx             # iPhone-style bezel wrapper (no logic, just chrome)
  phone-screens.tsx           # Four screen mockups: ScreenSplash/Devotion/Ask/Community
  scroll-progress.tsx         # Fixed top progress bar (Framer useScroll)
  scroll-reveal.tsx           # Generic whileInView wrapper used by most sections
  scripture-divider.tsx       # Decorative cross + rotating Bible verse
  ui/button.tsx               # CVA-driven Button on @base-ui/react
.agents/skills/      # Skill references (shadcn, lucide-icons, frontend-design, vercel-react-best-practices)
lib/utils.ts          # cn() = twMerge(clsx(...)) — the only util
public/               # Static icons + placeholders
```

Path alias: `@/*` → repo root (see `tsconfig.json`).

## Architecture Notes

### Composition root
`app/page.tsx` is a `"use client"` component that stacks the page sections inside a `<div id="main" className="bg-background">`, with `ScrollProgressBar` rendered above the `Header`. The current order is: `Header → HeroSection → MissionSection → PhoneShowcase → AppFeaturesSection → FeaturesSection → SocialProofSection → DownloadSection → Footer`. `VideoSection` exists in `components/sections/` but is currently commented out of `page.tsx`. Anything new added to the page should follow the same pattern: a section in `components/sections/<name>.tsx`, then a single import + JSX line in `page.tsx`.

### Phone walkthrough (`components/sections/phone-showcase.tsx`)
The single most complex piece. The pattern is:

1. A ref'd `<section>` is the GSAP `ScrollTrigger` target — `pin: true`, `scrub: 1.2`, end distance `+=(NUM_SCREENS - 1) * 130%`.
2. The `onUpdate` callback writes `self.progress` (0→1) into a Framer Motion `useMotionValue`.
3. That motion value is then **smoothed with `useSpring`** and piped into three derived motion values:
   - Phone `x / y / rotateZ / rotateY / scale` — interpolated from a 4-step `positions` array (a smooth 3D arc).
   - Each `<ScreenLayer>` and `<TextPanel>` keyed by `index` reads `smoothProgress` and uses `useTransform` with a snap-through range `[center - halfRange, center + halfRange]` to fade/drift opacity, y, scale, and x.
   - `<ProgressDot>` does the same for the four indicator dots.
4. The cleanup function must call `trigger.kill()` (it does) — easy to forget when adding dependencies.

If you add a fifth screen, append a `Screen*` component to `phone-screens.tsx`, add an entry to the `screens` array in `phone-showcase.tsx`, and either reuse or extend `positions`. Nothing else needs to change — `NUM_SCREENS`, `RANGE`, and the per-index centers are derived.

### Theme & styling conventions
- Colors are OKLCH tokens declared in `app/globals.css` under `@theme inline {}` (sage, gold, cream, ink, blush, sacred, parchment, incense, divine, plus `-light`/`-soft`/`-mist` variants). Use them as Tailwind utilities (`bg-sage`, `text-ink/70`, etc.) — do not add a `tailwind.config.ts`.
- Custom utilities live in the same file under `@layer utilities`: `phone-shadow`, `glass-panel`, `glass-card`, `verse-gradient`, `hill`, `perspective`, `perspective-ct`, `divine-light` / `divine-light-strong`, `cross-pattern` / `cross-pattern-subtle`, `verse-card`, `sacred-divider`, `cross-icon`, `text-gradient` / `text-gradient-sacred`, `mask-fade-*`, plus `font-script` / `font-serif` / `font-verse` / `text-balance` / `text-pretty`.
- Fonts: **Poppins** is the only font loaded, via `next/font/google` in `app/layout.tsx` with weights 300–700, exposed as `--font-poppins` and aliased to `--font-sans` in `globals.css`. CSS variables `--font-script` / `--font-serif` / `--font-verse` are also exposed in `globals.css` (and used by the corresponding `font-*` utility classes), but no font file is currently loaded for them — they will fall back to system defaults until a `<link>` or `next/font` import is added.
- `cn()` is the only helper in `lib/utils.ts`. Use it for any conditional class composition.

### Client/server boundary
Every section in `components/sections/` is a `"use client"` component because they all use Framer Motion or GSAP. The root `app/page.tsx` is also `"use client"` because it imports the `ScrollProgressBar` from `framer-motion`. Keep new sections client-side unless they are pure markup.

### Animations
Two systems coexist:
- **Framer Motion** — entry/exit, hover/tap, parallax via `useScroll` + `useTransform`, `ScrollReveal` (in-view fade with optional blur). The default easing tuple `[0.21, 0.47, 0.32, 0.98]` shows up everywhere; reuse it for consistency.
- **GSAP** — *only* the pinned scroll progress in `phone-showcase.tsx`. Don't introduce GSAP for anything else; reach for Framer Motion first.

### Type & config gotchas
- `next.config.mjs` sets `typescript.ignoreBuildErrors: true` and `images.unoptimized: true`. Type errors will not fail a build — do not rely on that to ship broken code.
- `components.json` declares the shadcn "base-nova" style and the `@base-ui/react` stack. When adding new primitives, mirror the CVA + `@base-ui/react` pattern in `components/ui/button.tsx`.
- `pnpm-workspace.yaml` blocks `msw` and `sharp` from building; don't try to add them.
- The `metadata.icons` block in `app/layout.tsx` references `/icon-light-32x32.png`, `/icon-dark-32x32.png`, `/icon.svg`, and `/apple-icon.png`. As of writing those files have been deleted from `public/`; re-add them (or update the metadata) before shipping, or Next will log missing-favicon warnings at build time.
- `.agents/skills/` contains reference docs for `shadcn`, `lucide-icons`, `frontend-design`, and `vercel-react-best-practices` — consult them when picking icons, scaffolding primitives, or tuning React perf. They are tooling references, not project rules.
