import Link from "next/link";
import { Kicker, Reveal } from "@/components/reveal";
import { experience } from "@/lib/content";

/**
 * A definition list, not a stat block. There are deliberately no figures
 * here — see the note in lib/content.ts. Anything numeric added later must
 * arrive with its basis stated alongside it.
 */
export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="exp-h"
      className="border-t border-accent/[0.14] bg-base"
    >
      <div className="mx-auto w-full max-w-[1320px] px-gutter py-section">
        <div className="grid gap-colgap nav:grid-cols-[0.85fr_1fr]">
          <Reveal>
            <Kicker>{experience.kicker}</Kicker>
            <h2 id="exp-h" className="mt-6 max-w-[20ch] text-h2 balance text-on-base">
              {experience.headline}
            </h2>
            <p className="mt-6.5 max-w-[48ch] text-[16.5px] leading-[1.7] text-on-base-3">
              {experience.lead}
            </p>
            <Link
              href={experience.link.href}
              className="mt-7.5 inline-flex items-center gap-2.5 border-b border-accent/40 pb-1.5 text-[14.5px] text-on-base transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              {experience.link.label}
              <span aria-hidden="true" className="font-mono text-xs text-accent">
                →
              </span>
            </Link>
          </Reveal>

          <dl className="m-0">
            {experience.rows.map((row, i) => (
              <Reveal
                key={row.label}
                index={i}
                className={`flex flex-wrap items-baseline justify-between gap-4 border-t border-on-base/[0.12] py-6 ${
                  i === experience.rows.length - 1 ? "border-b" : ""
                }`}
              >
                <dt className="label w-[170px] shrink-0 text-[10.5px] tracking-[0.16em] text-on-base-4">
                  {row.label}
                </dt>
                <dd className="m-0 font-display text-figure text-on-base">{row.value}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
