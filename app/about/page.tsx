import type { Metadata } from "next";
import Link from "next/link";
import { Kicker, Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { about, aboutPage, brand } from "@/lib/content";

export const metadata: Metadata = {
  title: aboutPage.title,
  description: aboutPage.description,
  openGraph: {
    type: "website",
    siteName: brand.full,
    title: `About — ${brand.full}`,
    description: aboutPage.ogDescription,
  },
};

/**
 * Three blocks and a way to get in touch — an intro, the story, and what
 * this deliberately isn't. Short on purpose: the copy note in
 * lib/content.ts asks that it stay that way.
 */
export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <div className="overflow-x-clip">
        <main>
          <section
            id="top"
            aria-labelledby="about-page-h"
            className="ground-base relative overflow-hidden"
          >
            <div
              aria-hidden="true"
              className="field-lines pointer-events-none absolute inset-0"
            />
            <div className="relative mx-auto w-full max-w-[1320px] px-gutter pt-[clamp(124px,15vh,180px)] pb-[clamp(56px,7vw,96px)]">
              <Reveal className="max-w-[760px]">
                <Kicker>{aboutPage.kicker}</Kicker>
                <h1 id="about-page-h" className="mt-7 text-hero balance text-on-base">
                  {aboutPage.headlineTop}{" "}
                  <span className="text-accent italic">{aboutPage.headlineItalic}</span>
                </h1>
                <p className="mt-7 max-w-[52ch] text-lead text-on-base-2">{aboutPage.lead}</p>
              </Reveal>

              {/* The same three facts the home page carries, repeated here
                  as the page's own summary line. */}
              <Reveal
                delay={0.14}
                className="mt-[clamp(40px,5vw,64px)] grid gap-px border border-on-base/[0.12] bg-on-base/[0.12]"
                style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}
              >
                {about.meta.map((item) => (
                  <div key={item.label} className="bg-base p-6">
                    <div className="label-sm text-kicker">{item.label}</div>
                    <div className="mt-2.5 font-display text-[32px] leading-none text-on-base">
                      {item.value}
                    </div>
                  </div>
                ))}
              </Reveal>
            </div>
          </section>

          <section aria-labelledby="story-h" className="ground-alt text-on-alt">
            <div className="mx-auto w-full max-w-[1320px] px-gutter py-section">
              <div className="grid items-start gap-colgap nav:grid-cols-[0.8fr_1fr]">
                <Reveal className="nav:sticky nav:top-[128px]">
                  <Kicker tone="light">{aboutPage.story.kicker}</Kicker>
                  <h2 id="story-h" className="mt-6 max-w-[12ch] text-h2 balance">
                    {aboutPage.story.headline}
                  </h2>
                </Reveal>

                <Reveal delay={0.12}>
                  {aboutPage.story.body.map((paragraph, i) => (
                    <p
                      key={paragraph.slice(0, 24)}
                      className={`max-w-[58ch] text-[17px] leading-[1.7] text-on-alt-2 ${
                        i === 0 ? "mt-0" : "mt-4.5"
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </Reveal>
              </div>
            </div>
          </section>

          <section
            id="what-this-isnt"
            aria-labelledby="not-h"
            className="ground-base-3 border-t border-accent/[0.14]"
          >
            <div className="mx-auto w-full max-w-[1320px] px-gutter py-section">
              <Reveal className="max-w-[620px]">
                <Kicker>{aboutPage.notThis.kicker}</Kicker>
                <h2 id="not-h" className="mt-6 text-h2 balance text-on-base">
                  {aboutPage.notThis.headline}
                </h2>
              </Reveal>

              <div
                className="mt-[clamp(44px,5vw,72px)] grid gap-[clamp(28px,3vw,48px)]"
                style={{ gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))" }}
              >
                {aboutPage.notThis.items.map((item, i) => (
                  <Reveal
                    key={item.title}
                    index={i}
                    className="border-t border-accent/[0.28] pt-6"
                  >
                    <h3 className="text-[26px] leading-[1.14] text-on-base">{item.title}</h3>
                    <p className="mt-3.5 text-[15px] leading-[1.72] text-on-base-3">
                      {item.body}
                    </p>
                  </Reveal>
                ))}
              </div>

              <Reveal
                delay={0.12}
                className="mt-[clamp(48px,5vw,72px)] flex flex-wrap items-center justify-between gap-6.5 border-t border-on-base/[0.12] pt-10"
              >
                <div className="max-w-[52ch]">
                  <h3 className="m-0 text-[clamp(25px,2.5vw,32px)] leading-[1.12] text-on-base">
                    {aboutPage.cta.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.72] text-on-base-3">
                    {aboutPage.cta.body}
                  </p>
                </div>
                <Link
                  href={aboutPage.cta.action.href}
                  className="btn-gold w-full shrink-0 justify-center px-7 py-4.5 text-[15px] hover:btn-gold-hover tab:w-auto tab:justify-start"
                >
                  {aboutPage.cta.action.label}
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
