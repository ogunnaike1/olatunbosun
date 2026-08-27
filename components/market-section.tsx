"use client";

import { motion, useReducedMotion } from "motion/react";
import { Parallax, Reveal } from "@/components/reveal";
import { marketSection } from "@/lib/content";

/**
 * ILLUSTRATIVE ONLY — hand-authored, not data, not a call. The caption
 * beside the heading says so, and it stays with the chart.
 */
const LINE =
  "M0 336 L50 322 L100 340 L150 300 L200 314 L250 268 L300 288 L350 246 L400 262 L450 214 L500 236 L550 250 L600 208 L650 224 L700 176 L750 196 L800 152 L850 170 L900 126 L950 146 L1000 100 L1050 118 L1100 74 L1150 88 L1200 44";

export function MarketSection() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-label="Market illustration"
      className="ground-ink-close relative overflow-hidden border-t border-gold/[0.14]"
    >
      <div className="mx-auto w-full max-w-[1320px] px-gutter py-[clamp(68px,7vw,110px)]">
        <Reveal className="mb-9 flex flex-wrap items-end justify-between gap-5.5">
          <div>
            <div className="label text-faint">{marketSection.kicker}</div>
            <h2 className="mt-4 text-[clamp(32px,3.6vw,48px)] leading-[1.04] tracking-[-0.016em] text-cream">
              {marketSection.headline}
            </h2>
          </div>
          <p className="label m-0 max-w-[30ch] text-[10px] leading-[1.9] tracking-[0.08em] text-[#6e6862] tab:text-right">
            {marketSection.note}
          </p>
        </Reveal>

        {/* The chart drifts against the scroll as it passes — the one place
            on the page where a decorative element earns the depth. */}
        <Parallax distance={48}>
          <Reveal delay={0.12}>
            <svg
              viewBox="0 0 1200 380"
              role="img"
              aria-label="Illustrative long-term chart of Bitcoin price behaviour showing cycles of advance and drawdown"
              className="block h-auto w-full"
            >
              <defs>
                <linearGradient id="bigArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-gold)" stopOpacity=".22" />
                  <stop offset="100%" stopColor="var(--color-gold)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="bigLine" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--color-gold-deep)" />
                  <stop offset="55%" stopColor="var(--color-gold)" />
                  <stop offset="100%" stopColor="var(--color-cream)" />
                </linearGradient>
              </defs>

              <g stroke="rgba(245,239,230,.07)" strokeWidth="1">
                {[20, 110, 200, 290, 360].map((y) => (
                  <line key={y} x1="0" y1={y} x2="1200" y2={y} />
                ))}
              </g>

              {/* Both paths draw on entry, not on mount — the section sits
                  well down the page, and an animation nobody saw may as
                  well not have run. */}
              <motion.path
                d={`${LINE} L1200 380 L0 380 Z`}
                fill="url(#bigArea)"
                initial={reduced ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.6, delay: 0.8 }}
              />
              <motion.path
                d={LINE}
                fill="none"
                stroke="url(#bigLine)"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeDasharray="3000"
                initial={reduced ? false : { strokeDashoffset: 3000 }}
                whileInView={{ strokeDashoffset: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
              />
            </svg>

            {/* Six ticks is one too many below ~760px, where the labels
                start to touch; the first is dropped there rather than
                shrinking the type further. */}
            <div className="label-sm mt-3.5 flex justify-between text-[9.5px] tracking-[0.16em] text-[#6e6862]">
              {marketSection.ticks.map((tick, i) => (
                <span key={tick} className={i === 0 ? "hidden tab:inline" : undefined}>
                  {tick}
                </span>
              ))}
            </div>
          </Reveal>
        </Parallax>
      </div>
    </section>
  );
}
