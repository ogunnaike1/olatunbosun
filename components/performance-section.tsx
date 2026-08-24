"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/reveal";
import { performance } from "@/lib/content";

type Stat = (typeof performance.stats)[number];

function format(value: number, decimals: number) {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function Counter({ stat, start }: { stat: Stat; start: boolean }) {
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(() => format(0, stat.decimals));
  const done = useRef(false);

  useEffect(() => {
    if (!start || reduced || done.current) return;
    done.current = true;

    const controls = animate(0, stat.value, {
      duration: 1.5,
      ease: [0, 0, 0.2, 1],
      onUpdate: (v) => setDisplay(format(v, stat.decimals)),
    });
    return () => controls.stop();
  }, [start, stat.value, stat.decimals, reduced]);

  return <>{reduced ? format(stat.value, stat.decimals) : display}</>;
}

export function PerformanceSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(gridRef, { once: true, amount: 0.3 });

  return (
    <section id="performance" className="py-section">
      <div className="mx-auto w-full max-w-[1360px] px-gutter">
        <Reveal className="max-w-[52ch]" style={{ marginBottom: "clamp(44px, 5vw, 70px)" }}>
          <div className="text-[11.5px] uppercase tracking-[0.30em] text-accent-on-dark">
            {performance.kicker}
          </div>
          <p className="mt-5 text-statement balance">{performance.headline}</p>
        </Reveal>

        <div
          ref={gridRef}
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "clamp(28px, 3.4vw, 52px)",
          }}
        >
          {performance.stats.map((stat, i) => (
            <Reveal key={stat.label} index={i} className="border-t border-paper/14 pt-5">
              <div className="flex items-baseline text-stat tabular">
                <span>
                  <Counter stat={stat} start={inView} />
                </span>
                {stat.suffix && (
                  <span className="text-[0.55em] text-accent-2-on-dark">{stat.suffix}</span>
                )}
              </div>
              <div className="mt-3 text-[12px] uppercase tracking-[0.20em] text-paper/50">
                {stat.label}
              </div>
            </Reveal>
          ))}
        </div>

        {/* The honesty line. Keep it visible until real records replace the figures. */}
        <Reveal
          className="mt-[clamp(36px,4vw,60px)] max-w-[70ch] border-t border-paper/14 pt-5"
          delay={0.1}
        >
          <p className="text-[13.5px] leading-[1.6] text-paper/62">
            {performance.disclaimerNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
