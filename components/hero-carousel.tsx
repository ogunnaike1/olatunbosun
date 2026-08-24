"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { buildCandles, buildPortfolioPath } from "@/lib/market";
import {
  analysisPanel,
  notesPanel,
  recordPanel,
  SLIDE_INTERVAL_MS,
  slides,
  workingPanel,
  workingPanelNote,
} from "@/lib/content";

const candles = buildCandles();
const { linePath, areaPath } = buildPortfolioPath();

const PANEL =
  "flex h-full flex-col bg-paper/[0.06] backdrop-blur-[22px] border border-paper/12 shadow-glass p-glass";
const KICKER = "text-[11.5px] uppercase tracking-[0.24em] text-paper/50";
const MICRO_LABEL = "text-[10.5px] uppercase tracking-[0.20em] text-paper/50";

/** How a piece of analysis is presented — the instrument, the levels, the risk. */
function AnalysisSlide() {
  return (
    <div className={`${PANEL} gap-[22px]`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className={KICKER}>Analysis</div>
          <div className="mt-[6px] text-slide-pair">{analysisPanel.instrument}</div>
        </div>
        <div className="text-right">
          <div className="text-[11.5px] uppercase tracking-[0.20em] text-paper/50">
            Timeframe
          </div>
          <div className="mt-[6px] text-[17px]">{analysisPanel.timeframe}</div>
        </div>
      </div>

      <svg
        viewBox="0 0 420 150"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="block w-full"
        style={{ height: "clamp(130px, 14vw, 168px)" }}
      >
        {candles.map((c, i) => (
          <g key={i}>
            <rect x={c.wx} y={c.wy} width={1} height={c.wh} fill={c.color} opacity={0.5} />
            <rect x={c.x} y={c.y} width={c.w} height={c.h} fill={c.color} />
          </g>
        ))}
      </svg>

      <div className="grid grid-cols-3 gap-4 border-t border-paper/10 pt-[18px]">
        {analysisPanel.levels.map((level) => (
          <div key={level.label}>
            <div className={MICRO_LABEL}>{level.label}</div>
            <div className="mt-[6px] text-[17px] tabular">{level.value}</div>
          </div>
        ))}
      </div>

      <p className="text-[15px] leading-[1.6] text-paper/62">{analysisPanel.summary}</p>
    </div>
  );
}

/** Explicitly framed as historical. No forward-looking claim. */
function RecordSlide() {
  return (
    <div className={`${PANEL} gap-6`}>
      <div>
        <div className={KICKER}>Historical record</div>
        <div className="mt-[10px] text-[13px] text-paper/62">{recordPanel.label}</div>
      </div>
      <svg
        viewBox="0 0 420 120"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="block w-full"
        style={{ height: "clamp(110px, 12vw, 140px)" }}
      >
        <path d={areaPath} fill="rgba(1,231,255,0.12)" />
        <path d={linePath} fill="none" stroke="#01e7ff" strokeWidth={1.6} />
      </svg>
      <div className="grid grid-cols-3 gap-4 border-t border-paper/10 pt-[18px]">
        {recordPanel.rows.map((row) => (
          <div key={row.label}>
            <div className={MICRO_LABEL}>{row.label}</div>
            <div className="mt-[6px] text-[17px]">{row.value}</div>
          </div>
        ))}
      </div>
      <p className="mt-auto text-[13px] leading-[1.55] text-paper/62">
        {recordPanel.caption}
      </p>
    </div>
  );
}

function NotesSlide() {
  return (
    <div className={`${PANEL} gap-5`}>
      <div className={KICKER}>This week&rsquo;s notes</div>
      <div className="flex flex-col gap-[22px]">
        {notesPanel.map((item) => (
          <div key={item.day} className="flex gap-4">
            <div className="min-w-[52px] pt-[3px] text-[11px] uppercase tracking-[0.16em] text-accent-2-on-dark">
              {item.day}
            </div>
            <div>
              <div className="text-[17px]">{item.title}</div>
              <div className="mt-1 text-[13.5px] text-paper/62">{item.note}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkingSlide() {
  return (
    <div className={`${PANEL} gap-5`}>
      <div className={KICKER}>Working together</div>
      <div className="flex flex-col">
        {workingPanel.map((row) => (
          <div
            key={row.label}
            className="flex items-baseline justify-between gap-6 border-b border-paper/10 py-[14px] last:border-b-0"
          >
            <span className={MICRO_LABEL}>{row.label}</span>
            <span className="text-right text-[16px]">{row.value}</span>
          </div>
        ))}
      </div>
      <p className="mt-auto text-[15px] leading-[1.6] text-paper/62">
        {workingPanelNote}
      </p>
    </div>
  );
}

type Props = {
  autoplay?: boolean;
  /** Slide interval in ms — sensible range 3000–12000. */
  intervalMs?: number;
};

export function HeroCarousel({ autoplay = true, intervalMs = SLIDE_INTERVAL_MS }: Props) {
  const [slide, setSlide] = useState(0);
  const paused = useRef(false);
  const reduced = useReducedMotion();

  const go = useCallback((next: number) => {
    setSlide(((next % slides.length) + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!autoplay || reduced) return;
    const id = window.setInterval(() => {
      if (paused.current) return;
      setSlide((s) => (s + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [autoplay, intervalMs, reduced]);

  const panels = [
    <AnalysisSlide key="analysis" />,
    <RecordSlide key="record" />,
    <NotesSlide key="notes" />,
    <WorkingSlide key="working" />,
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onFocusCapture={() => (paused.current = true)}
      onBlurCapture={() => (paused.current = false)}
    >
      <div className="relative" style={{ minHeight: "clamp(360px, 34vw, 450px)" }}>
        <AnimatePresence initial={false}>
          <motion.div
            key={slide}
            className="absolute inset-0"
            style={{ willChange: "opacity, transform" }}
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: 22 }}
            transition={{ duration: 0.62, ease: [0.2, 0.7, 0.3, 1] }}
            drag="x"
            dragSnapToOrigin
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.14}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60 || info.velocity.x < -420) go(slide + 1);
              else if (info.offset.x > 60 || info.velocity.x > 420) go(slide - 1);
            }}
          >
            {panels[slide]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="sr-only" aria-live="polite">
        {`Slide ${slide + 1} of ${slides.length}: ${slides[slide].name}`}
      </div>

      <div
        className="mt-[22px] flex flex-wrap items-center justify-between gap-4"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            go(slide + 1);
          }
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            go(slide - 1);
          }
        }}
      >
        <div className="flex items-center gap-[6px]">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-label={`Go to ${s.name}`}
              aria-current={i === slide}
              onClick={() => go(i)}
              className="h-[2px]"
              style={{
                width: i === slide ? 44 : 18,
                background: i === slide ? "#01e7ff" : "rgba(252,252,251,0.25)",
                transition: "width 400ms ease, background 400ms ease",
              }}
            />
          ))}
        </div>

        <div className="text-[11.5px] uppercase tracking-[0.20em] tabular text-paper/50">
          {String(slide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")} —{" "}
          {slides[slide].name}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => go(slide - 1)}
            className="size-[38px] border border-paper/20 text-paper transition-colors duration-200 hover:border-accent-on-dark hover:bg-accent-on-dark/[0.12]"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => go(slide + 1)}
            className="size-[38px] border border-paper/20 text-paper transition-colors duration-200 hover:border-accent-on-dark hover:bg-accent-on-dark/[0.12]"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
