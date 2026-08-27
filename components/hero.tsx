"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import type { ReactNode } from "react";
import { HeroPanel } from "@/components/hero-panel";
import { contact, contactHref, hero } from "@/lib/content";

/** Staggered rise, timed off the hero's own sequence rather than scroll. */
function Enter({
  children,
  delay,
  className,
}: {
  children: ReactNode;
  delay: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.05, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-h" className="ground-base relative overflow-hidden">
      <div aria-hidden="true" className="field-lines pointer-events-none absolute inset-0" />
      {/* The one thing on the page that moves on its own: a slow bloom
          behind the headline. Opacity only, so it costs a composite. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -ml-[410px] h-[420px] w-[820px] blur-[20px] motion-safe:animate-[breathe_9s_ease-in-out_infinite]"
        style={{
          background: "radial-gradient(closest-side, var(--bloom-hero), transparent)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1320px] px-gutter pt-[clamp(132px,16vh,200px)] pb-[clamp(64px,8vw,110px)]">
        <div className="grid items-center gap-[clamp(48px,6vw,76px)] nav:grid-cols-[1fr_1.02fr]">
          <div className="max-w-[660px]">
            <Enter delay={0.05}>
              <div className="flex items-center gap-3.5">
                <span
                  aria-hidden="true"
                  className="h-px w-8.5 shrink-0"
                  style={{
                    background: "linear-gradient(90deg, var(--color-accent), transparent)",
                  }}
                />
                <span className="label text-kicker">{hero.eyebrow}</span>
              </div>
            </Enter>

            <Enter delay={0.14}>
              <h1 id="hero-h" className="mt-7 text-hero balance text-on-base">
                {hero.headlineTop}
                <br />
                <span className="text-accent italic">{hero.headlineItalic}</span>
              </h1>
            </Enter>

            <Enter delay={0.24}>
              <p className="mt-7 max-w-[52ch] text-lead text-on-base-2">{hero.lead}</p>
            </Enter>

            <Enter delay={0.34} className="mt-9.5 flex flex-wrap gap-3.5">
              <Link
                href={hero.primary.href}
                className="btn-gold px-7.5 py-4.5 text-[15px] hover:btn-gold-hover"
              >
                {hero.primary.label}
                <span aria-hidden="true" className="font-mono text-xs">
                  →
                </span>
              </Link>
              <Link
                href={hero.secondary.href}
                className="btn-ghost px-7 py-4.5 text-[15px] hover:border-accent hover:bg-accent/[0.08]"
              >
                {hero.secondary.label}
              </Link>
            </Enter>

            {/* The three channels, repeated here so the fastest way to reach
                him is above the fold on every screen size. */}
            <Enter delay={0.44} className="mt-9 flex flex-wrap items-center gap-x-5.5 gap-y-3">
              <a
                href={contactHref.phone}
                className="inline-flex items-center gap-2.5 font-mono text-[11.5px] tracking-[0.06em] text-on-base-3 transition-colors duration-300 hover:text-accent"
              >
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-accent"
                  style={{ boxShadow: "0 0 10px var(--glow-accent)" }}
                />
                {contact.phone}
              </a>
              <a
                href={contactHref.whatsapp}
                className="font-mono text-[11.5px] tracking-[0.06em] text-on-base-3 transition-colors duration-300 hover:text-accent"
              >
                WhatsApp
              </a>
              <a
                href={contactHref.email}
                className="font-mono text-[11.5px] tracking-[0.06em] text-on-base-3 transition-colors duration-300 hover:text-accent"
              >
                Email
              </a>
            </Enter>
          </div>

          <HeroPanel />
        </div>
      </div>
    </section>
  );
}
