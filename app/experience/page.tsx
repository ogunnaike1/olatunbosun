import type { Metadata } from "next";
import Link from "next/link";
import { Kicker, Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brand, experience, experiencePage } from "@/lib/content";

export const metadata: Metadata = {
  title: experiencePage.title,
  description: experiencePage.description,
  openGraph: {
    type: "website",
    siteName: brand.full,
    title: `Experience — ${brand.full}`,
    description: experiencePage.ogDescription,
  },
};

/**
 * Four blocks: the summary rows, the years, what can and can't be shown,
 * and a way in. There are no figures anywhere on this page — see the note
 * on `experiencePage` in lib/content.ts before adding any.
 */
export default function ExperiencePage() {
  const { timeline, evidence } = experiencePage;

  return (
    <>
      <SiteHeader />

      <div className="overflow-x-clip">
        <main>
          <section
            id="top"
            aria-labelledby="exp-page-h"
            className="ground-base relative overflow-hidden"
          >
            <div
              aria-hidden="true"
              className="field-lines pointer-events-none absolute inset-0"
            />
            <div className="relative mx-auto w-full max-w-[1320px] px-gutter pt-[clamp(124px,15vh,180px)] pb-[clamp(48px,6vw,80px)]">
              <Reveal className="max-w-[820px]">
                <Kicker>{experiencePage.kicker}</Kicker>
                <h1 id="exp-page-h" className="mt-7 text-hero balance text-on-base">
                  {experiencePage.headlineTop}{" "}
                  <span className="text-accent italic">
                    {experiencePage.headlineItalic}
                  </span>
                </h1>
                <p className="mt-7 max-w-[58ch] text-lead text-on-base-2">
                  {experiencePage.lead}
                </p>
              </Reveal>

              {/* The same five rows the home section carries — the page's
                  own summary before the years begin. */}
              <dl className="m-0 mt-[clamp(40px,5vw,64px)]">
                {experience.rows.map((row, i) => (
                  <Reveal
                    key={row.label}
                    index={i}
                    className={`flex flex-wrap items-baseline justify-between gap-4 border-t border-on-base/[0.12] py-5 ${
                      i === experience.rows.length - 1 ? "border-b" : ""
                    }`}
                  >
                    <dt className="label w-[170px] shrink-0 text-[10.5px] tracking-[0.16em] text-on-base-4">
                      {row.label}
                    </dt>
                    <dd className="m-0 font-display text-[clamp(20px,2vw,26px)] leading-none text-on-base">
                      {row.value}
                    </dd>
                  </Reveal>
                ))}
              </dl>
            </div>
          </section>

          <section aria-labelledby="years-h" className="ground-alt text-on-alt">
            <div className="mx-auto w-full max-w-[1320px] px-gutter py-section">
              <div className="grid items-start gap-colgap nav:grid-cols-[0.8fr_1fr]">
                <Reveal className="nav:sticky nav:top-[128px]">
                  <Kicker tone="light">{timeline.kicker}</Kicker>
                  <h2 id="years-h" className="mt-6 max-w-[12ch] text-h2 balance">
                    {timeline.headline}
                  </h2>
                  <p className="label mt-7 max-w-[38ch] text-[10px] leading-[1.9] tracking-[0.06em] text-on-alt-4">
                    {timeline.note}
                  </p>
                </Reveal>

                {/* A rail, not a card stack: one continuous hairline with the
                    year sitting on it, so five entries read as one run of
                    time rather than five separate claims. */}
                <ol className="m-0 list-none p-0">
                  {timeline.years.map((entry, i) => (
                    <Reveal
                      key={entry.year}
                      as="li"
                      index={i}
                      className="relative grid gap-x-8 gap-y-3 border-l border-on-alt/[0.16] pb-10 pl-7 last:pb-0 tab:grid-cols-[120px_1fr]"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute top-2 -left-[3.5px] size-1.5 rounded-full bg-accent-2"
                      />
                      <span className="label-sm pt-1 text-kicker-2">{entry.year}</span>
                      <div>
                        <h3 className="m-0 text-[24px] leading-[1.16]">{entry.title}</h3>
                        <p className="mt-3 max-w-[54ch] text-[15.5px] leading-[1.72] text-on-alt-3">
                          {entry.body}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          <section
            aria-labelledby="evidence-h"
            className="ground-base-3 border-t border-accent/[0.14]"
          >
            <div className="mx-auto w-full max-w-[1320px] px-gutter py-section">
              <Reveal className="max-w-[620px]">
                <Kicker>{evidence.kicker}</Kicker>
                <h2 id="evidence-h" className="mt-6 text-h2 balance text-on-base">
                  {evidence.headline}
                </h2>
              </Reveal>

              {/* Two columns, given equal weight on purpose — the right-hand
                  one is the more important of the two. */}
              <div className="mt-[clamp(44px,5vw,72px)] grid gap-x-colgap gap-y-12 tab:grid-cols-2">
                {[evidence.can, evidence.cannot].map((column, columnIndex) => (
                  <Reveal
                    key={column.heading}
                    index={columnIndex}
                    className="border-t border-accent/[0.28] pt-7"
                  >
                    <h3 className="m-0 text-[26px] leading-[1.14] text-on-base">
                      {column.heading}
                    </h3>
                    <ul className="mt-6 flex list-none flex-col gap-4 p-0">
                      {column.items.map((item) => (
                        <li key={item} className="flex gap-4">
                          <span
                            aria-hidden="true"
                            className={`mt-2.5 h-px w-4 shrink-0 ${
                              columnIndex === 0 ? "bg-accent" : "bg-on-base-4"
                            }`}
                          />
                          <span className="max-w-[46ch] text-[15px] leading-[1.7] text-on-base-2">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                ))}
              </div>

              <Reveal
                delay={0.12}
                className="mt-[clamp(48px,5vw,76px)] flex flex-wrap items-center justify-between gap-6.5 border-t border-on-base/[0.12] pt-10"
              >
                <div className="max-w-[52ch]">
                  <h3 className="m-0 text-[clamp(25px,2.5vw,32px)] leading-[1.12] text-on-base">
                    {experiencePage.cta.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.72] text-on-base-3">
                    {experiencePage.cta.body}
                  </p>
                </div>
                <Link
                  href={experiencePage.cta.action.href}
                  className="btn-gold w-full shrink-0 justify-center px-7 py-4.5 text-[15px] hover:btn-gold-hover tab:w-auto tab:justify-start"
                >
                  {experiencePage.cta.action.label}
                  <span aria-hidden="true" className="font-mono text-xs">
                    →
                  </span>
                </Link>
              </Reveal>
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
