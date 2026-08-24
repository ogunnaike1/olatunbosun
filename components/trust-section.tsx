import type { CSSProperties } from "react";
import { Reveal } from "@/components/reveal";
import { trust } from "@/lib/content";

/** The staircase offset. Intentional — flattens below the tablet breakpoint. */
const indents = [0, 24, 0, 48, 12, 0];

export function TrustSection() {
  return (
    <section id="why-us" className="py-section">
      <div
        className="mx-auto grid w-full max-w-[1360px] items-start gap-colgap px-gutter"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}
      >
        {/* Pins while the list scrolls past. Any ancestor with overflow-x:hidden
            would silently break this — the page wrapper uses overflow-x:clip. */}
        <Reveal className="tab:sticky tab:top-[130px]">
          <div className="text-[11.5px] uppercase tracking-[0.30em] text-accent-on-dark">
            {trust.kicker}
          </div>
          <h2 className="mt-6 text-h2 balance">
            {trust.headlineTop}
            <br />
            <span className="italic text-paper/70">{trust.headlineItalic}</span>
          </h2>
          <p className="mt-7 text-lead max-w-[36ch] text-paper/62">{trust.lead}</p>
        </Reveal>

        <ul className="flex list-none flex-col p-0" style={{ gap: "clamp(34px, 4vw, 58px)" }}>
          {trust.points.map((point, i) => (
            <Reveal
              as="li"
              key={point.title}
              index={i}
              className="grid grid-cols-[64px_1fr] border-b border-paper/[0.09] pb-[clamp(26px,3vw,40px)] tab:ml-[var(--indent)]"
              style={{ "--indent": `${indents[i]}px` } as CSSProperties}
            >
              <div className="pt-1.5 text-[15px] tracking-[0.10em] tabular text-accent-2-on-dark">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-h3-feature balance">{point.title}</h3>
                <p className="mt-4 max-w-[52ch] text-[16.5px] leading-[1.68] text-paper/62 pretty">
                  {point.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
