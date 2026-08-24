"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Chip, Reveal } from "@/components/reveal";
import { experience } from "@/lib/content";

type Stat = (typeof experience.stats)[number];

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
      duration: 1.4,
      ease: [0.22, 0.61, 0.36, 1],
      onUpdate: (v) => setDisplay(format(v, stat.decimals)),
    });
    return () => controls.stop();
  }, [start, stat.value, stat.decimals, reduced]);

  return <>{reduced ? format(stat.value, stat.decimals) : display}</>;
}

/** One of the two dark interludes in an otherwise light page. */
export function ExperienceSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(gridRef, { once: true, amount: 0.3 });

  return (
    <section id="experience" className="relative overflow-hidden bg-deep py-section text-white">
      <div className="mx-auto w-full max-w-[1280px] px-gutter">
        <Reveal className="max-w-[56ch]" style={{ marginBottom: "clamp(48px, 5.5vw, 80px)" }}>
          <Chip tone="dark">{experience.kicker}</Chip>
          <p className="mt-6 text-quote font-semibold text-white balance">
            {experience.headline}
          </p>
        </Reveal>

        <div
          ref={gridRef}
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))" }}
        >
          {experience.stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              index={i}
              className="rounded-card bg-white/[0.07] p-6 ring-1 ring-white/12"
            >
              <div className="flex items-baseline text-figure font-extrabold tabular text-white">
                <span>
                  <Counter stat={stat} start={inView} />
                </span>
                {stat.suffix && <span className="text-pale">{stat.suffix}</span>}
              </div>
              <div className="mt-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                {stat.label}
              </div>
            </Reveal>
          ))}
        </div>

        {/* The honesty line. Stays until verified records replace the figures. */}
        <Reveal
          className="mt-[clamp(32px,3.6vw,52px)] max-w-[80ch] rounded-card bg-white/[0.05] p-5 ring-1 ring-white/10"
          delay={0.1}
        >
          <p className="m-0 text-[13.5px] leading-[1.7] text-white/70">
            {experience.disclaimerNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
