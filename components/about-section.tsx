import Link from "next/link";
import { Kicker, Reveal } from "@/components/reveal";
import { about } from "@/lib/content";

/**
 * No portrait: this is a brand, not a personal page. The left column holds
 * the heading and stays put on wide screens while the prose scrolls past
 * it, so the section still reads as two columns without needing an image
 * to fill one.
 */
export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-h" className="ground-alt text-on-alt">
      <div className="mx-auto w-full max-w-[1320px] px-gutter py-section">
        <div className="grid items-start gap-colgap nav:grid-cols-[0.8fr_1fr]">
          <Reveal className="nav:sticky nav:top-[128px]">
            <Kicker tone="light">{about.kicker}</Kicker>
            <h2 id="about-h" className="mt-6 max-w-[12ch] text-h2 balance">
              {about.headline}
            </h2>
            <Link
              href={about.link.href}
              className="mt-7 inline-flex items-center gap-2.5 border-b border-accent-2/40 pb-1.5 text-[14.5px] text-on-alt transition-colors duration-300 hover:border-accent-2 hover:text-accent-2"
            >
              {about.link.label}
              <span aria-hidden="true" className="font-mono text-xs text-accent-2">
                →
              </span>
            </Link>
          </Reveal>

          <Reveal delay={0.12}>
            {about.body.map((paragraph, i) => (
              <p
                key={paragraph.slice(0, 24)}
                className={`max-w-[58ch] text-[17px] leading-[1.7] text-on-alt-2 ${
                  i === 0 ? "mt-0" : "mt-4.5"
                }`}
              >
                {paragraph}
              </p>
            ))}

            {/* Hairline grid: the 1px gap over an ink ground is what draws
                the rules between cells, so the cells stay flat cream. */}
            <div
              className="mt-10 grid gap-px border border-on-alt/[0.12] bg-base/[0.12]"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}
            >
              {about.meta.map((item) => (
                <div key={item.label} className="bg-card p-5.5">
                  <div className="label-sm text-kicker-2">{item.label}</div>
                  <div className="mt-2.5 font-display text-[32px] leading-none">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
