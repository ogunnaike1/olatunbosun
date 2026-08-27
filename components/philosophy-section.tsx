import { Kicker, Reveal } from "@/components/reveal";
import { philosophy } from "@/lib/content";

/**
 * Four rules, no cards. Each one opens on a gold hairline that runs the
 * full column width — the rule *is* the container.
 */
export function PhilosophySection() {
  return (
    <section
      aria-labelledby="phil-h"
      className="ground-ink-3 relative overflow-hidden border-t border-gold/[0.14]"
    >
      <div className="mx-auto w-full max-w-[1320px] px-gutter py-section">
        <Reveal className="max-w-[660px]">
          <Kicker>{philosophy.kicker}</Kicker>
          <h2 id="phil-h" className="mt-6 text-h2 balance text-cream">
            {philosophy.headline}
          </h2>
        </Reveal>

        <div
          className="mt-[clamp(52px,6vw,88px)] grid gap-[clamp(28px,3vw,48px)]"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))" }}
        >
          {philosophy.rules.map((rule, i) => (
            <Reveal
              key={rule.label}
              index={i}
              className="border-t border-gold/[0.28] pt-6"
            >
              <div className="font-mono text-[10.5px] tracking-[0.18em] text-gold">
                {String(i + 1).padStart(2, "0")} — {rule.label}
              </div>
              <h3 className="mt-4.5 text-[28px] leading-[1.14] text-cream">{rule.title}</h3>
              <p className="mt-3.5 text-[15px] leading-[1.72] text-mute">{rule.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
