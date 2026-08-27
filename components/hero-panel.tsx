"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { heroPanel, heroSlides, SLIDE_INTERVAL_MS } from "@/lib/content";

/**
 * ILLUSTRATIVE ONLY. The path below is hand-authored to look like a market
 * — an advance carrying pullbacks — and is not data. The card states that
 * on its face, and that label must survive any edit that keeps the chart.
 */
const LINE =
  "M0 236 L28 220 L56 244 L84 208 L112 216 L140 182 L168 196 L196 152 L224 172 L252 134 L280 148 L308 112 L336 128 L364 90 L392 104 L420 72 L448 86 L476 52 L504 64 L532 36 L560 28";

function ChartSlide({ animate }: { animate: boolean }) {
  return (
    <svg
      viewBox="0 0 560 300"
      role="img"
      aria-label="Illustrative line chart of an upward-trending market with pullbacks"
      className="block h-auto w-full overflow-visible"
    >
      <defs>
        <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity=".26" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="heroLine" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-accent-2)" />
          <stop offset="100%" stopColor="var(--color-accent)" />
        </linearGradient>
      </defs>

      <g stroke="var(--grid-line)" strokeWidth="1">
        {[60, 130, 200, 270].map((y) => (
          <line key={y} x1="0" y1={y} x2="560" y2={y} />
        ))}
      </g>

      <motion.path
        d={`${LINE} L560 300 L0 300 Z`}
        fill="url(#heroArea)"
        initial={animate ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      />
      {/* Drawn, not faded: the line arrives left to right like a chart
          filling in. 1400 comfortably exceeds the path length. */}
      <motion.path
        d={LINE}
        fill="none"
        stroke="url(#heroLine)"
        strokeWidth="2.2"
        strokeLinejoin="round"
        strokeDasharray="1400"
        initial={animate ? { strokeDashoffset: 1400 } : false}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.circle
        cx="560"
        cy="28"
        r="4.5"
        fill="var(--color-accent)"
        initial={animate ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.7 }}
      />
    </svg>
  );
}

function ListSlide({ rows }: { rows: { label: string; value: string }[] }) {
  return (
    <dl className="m-0">
      {rows.map((row) => (
        <div
          key={row.label}
          className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-on-base/[0.09] py-3.5 first:border-t-0 first:pt-0"
        >
          <dt className="label-sm text-on-base-4">{row.label}</dt>
          <dd className="m-0 text-[15px] text-on-base">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function NotesSlide({
  notes,
}: {
  notes: { day: string; title: string; note: string }[];
}) {
  return (
    <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
      {notes.map((entry) => (
        <li key={entry.day} className="flex gap-4">
          <span className="label-sm w-9 shrink-0 pt-1 text-accent">{entry.day}</span>
          <span className="flex flex-col gap-1">
            <span className="text-[14.5px] leading-[1.4] text-on-base">{entry.title}</span>
            <span className="text-[13px] leading-[1.5] text-on-base-3">{entry.note}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

/**
 * The hero card, as a carousel of four faces.
 *
 * Auto-advance is a convenience, not the interface: it stops on hover, on
 * keyboard focus, when the tab is hidden, and entirely under reduced
 * motion — where the card becomes a plain tab panel that only moves when
 * someone asks it to. The tabs are real tabs (roving arrow keys), and the
 * live region is `off` because an auto-rotating region must not announce
 * itself over whatever the visitor is actually reading.
 */
export function HeroPanel() {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const slide = heroSlides[index];

  const go = useCallback((next: number) => {
    setIndex((next + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (reduced || paused) return;

    const id = window.setInterval(() => {
      // A hidden tab still runs timers in some browsers; skip the advance
      // so the visitor doesn't return to a card four slides on.
      if (document.hidden) return;
      setIndex((i) => (i + 1) % heroSlides.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [reduced, paused]);

  function onTabKeyDown(event: React.KeyboardEvent) {
    const delta =
      event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    event.preventDefault();
    const next = (index + delta + heroSlides.length) % heroSlides.length;
    go(next);
    tabsRef.current[next]?.focus();
  }

  return (
    <div className="relative">
      <div
        className="panel relative p-[clamp(20px,2.4vw,32px)] backdrop-blur-[8px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <div className="mb-5.5 flex items-start justify-between gap-4">
          <div>
            <div className="label-sm text-on-base-4">{slide.kicker}</div>
            <div className="mt-1.5 font-display text-[clamp(24px,4.6vw,29px)] leading-[1.1] text-on-base">
              {slide.title}
            </div>
          </div>
          {/* The disclaimer belongs to the two slides that depict a market.
              On the process slides there is nothing to mistake for data. */}
          {slide.kind !== "list" && (
            <div className="label-sm text-right leading-[1.8] text-on-base-4">
              {heroPanel.disclaimer.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
          )}
        </div>

        {/*
          Fixed minimum height. The four slides are different shapes, and a
          card that resized on every advance would shove the whole hero
          around under the reader.
        */}
        <div
          className="relative min-h-[236px] tab:min-h-[248px]"
          aria-live="off"
          role="region"
          aria-label="Highlights"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={slide.id}
              id={`hero-slide-${slide.id}`}
              role="tabpanel"
              aria-labelledby={`hero-tab-${slide.id}`}
              tabIndex={0}
              initial={reduced ? false : { opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduced ? undefined : { opacity: 0, x: -18 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="focus-visible:outline-none"
            >
              {slide.kind !== "chart" && (
                <p className="mt-0 mb-4 max-w-[42ch] text-[13.5px] leading-[1.6] text-on-base-3">
                  {slide.lead}
                </p>
              )}
              {slide.kind === "chart" && <ChartSlide animate={!reduced} />}
              {slide.kind === "list" && <ListSlide rows={slide.rows} />}
              {slide.kind === "notes" && <NotesSlide notes={slide.notes} />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tabs, not dots: each face is worth naming, and a name is a far
            better affordance than a row of identical circles. On narrow
            screens the labels drop away and the rules alone remain. */}
        <div
          role="tablist"
          aria-label="Hero highlights"
          onKeyDown={onTabKeyDown}
          className="mt-5 flex gap-2 border-t border-on-base/[0.09] pt-4"
        >
          {heroSlides.map((item, i) => {
            const active = i === index;
            return (
              <button
                key={item.id}
                ref={(node) => {
                  tabsRef.current[i] = node;
                }}
                type="button"
                role="tab"
                id={`hero-tab-${item.id}`}
                aria-selected={active}
                aria-controls={`hero-slide-${item.id}`}
                tabIndex={active ? 0 : -1}
                onClick={() => go(i)}
                className="group flex flex-1 cursor-pointer flex-col gap-2 pb-1 text-left"
              >
                <span className="relative block h-px w-full bg-on-base/[0.14]">
                  {/* The active rule fills left-to-right over the dwell
                      time, so the bar doubles as the timer. */}
                  <motion.span
                    className="absolute inset-y-0 left-0 block origin-left bg-accent"
                    initial={false}
                    animate={{ scaleX: active ? 1 : 0 }}
                    transition={
                      reduced || !active || paused
                        ? { duration: 0.3 }
                        : { duration: SLIDE_INTERVAL_MS / 1000, ease: "linear" }
                    }
                    style={{ width: "100%" }}
                  />
                </span>
                <span
                  className={`label-sm hidden truncate transition-colors duration-300 tab:block ${
                    active ? "text-on-base" : "text-on-base-4 group-hover:text-on-base-3"
                  }`}
                >
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-5 flex flex-wrap gap-x-7 gap-y-3 border-t border-on-base/[0.09] pt-5">
          {heroPanel.facts.map((fact) => (
            <div key={fact.label}>
              <div className="label-sm text-on-base-4">{fact.label}</div>
              <div className="mt-1.5 text-[13.5px] text-on-base">{fact.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Overhangs the card's bottom-right corner on wide screens only. On
          narrow ones it returns to the flow underneath, where it has room
          to be read instead of being clipped by the hero's overflow. */}
      <motion.div
        className="glass mt-5 px-6 py-5 backdrop-blur-[14px] nav:absolute nav:-right-4 nav:-bottom-8 nav:mt-0"
        initial={reduced ? false : { opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="label-sm text-accent">{heroPanel.glass.kicker}</div>
        <div className="mt-2.5 max-w-[19ch] font-display text-[21px] leading-[1.25]">
          {heroPanel.glass.line}
        </div>
        {/* Six bars, two lit. Rhythm, not a reading. */}
        <div aria-hidden="true" className="mt-4 flex h-6.5 items-end gap-1">
          {[40, 65, 50, 85, 70, 100].map((height, i) => (
            <span
              key={i}
              className={`w-1 ${height >= 85 ? "bg-accent" : "bg-sand/50"}`}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
