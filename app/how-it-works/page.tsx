import type { Metadata } from "next";
import Link from "next/link";
import { Kicker, Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brand, howItWorksPage, process } from "@/lib/content";

export const metadata: Metadata = {
  title: howItWorksPage.title,
  description: howItWorksPage.description,
  openGraph: {
    type: "website",
    siteName: brand.full,
    title: `How It Works — ${brand.full}`,
    description: howItWorksPage.ogDescription,
  },
};

/**
 * The four steps at length, then the safety section — which is the part of
 * this page that actually protects someone. See the note on
 * `howItWorksPage` in lib/content.ts before editing either.
 */
export default function HowItWorksPage() {
  const { steps, safety } = howItWorksPage;

  return (
    <>
      <SiteHeader />

      <div className="overflow-x-clip">
        <main>
          <section
            id="top"
            aria-labelledby="hiw-h"
            className="ground-base relative overflow-hidden"
          >
            <div
              aria-hidden="true"
              className="field-lines pointer-events-none absolute inset-0"
            />
            <div className="relative mx-auto w-full max-w-[1320px] px-gutter pt-[clamp(124px,15vh,180px)] pb-[clamp(48px,6vw,80px)]">
              <Reveal className="max-w-[780px]">
                <Kicker>{howItWorksPage.kicker}</Kicker>
                <h1 id="hiw-h" className="mt-7 text-hero balance text-on-base">
                  {howItWorksPage.headlineTop}{" "}
                  <span className="text-accent italic">
                    {howItWorksPage.headlineItalic}
                  </span>
                </h1>
                <p className="mt-7 max-w-[56ch] text-lead text-on-base-2">
                  {howItWorksPage.lead}
                </p>
              </Reveal>
            </div>
          </section>

          <section aria-labelledby="steps-h" className="ground-alt text-on-alt">
            <div className="mx-auto w-full max-w-[1320px] px-gutter py-section">
              <Reveal>
                <Kicker tone="light">{steps.kicker}</Kicker>
                <h2 id="steps-h" className="mt-6 max-w-[14ch] text-h2 balance">
                  {process.headline}
                </h2>
              </Reveal>

              {/* One row per step. The number and title hold the left column
                  so the four read as a sequence down the page rather than
                  four cards side by side. */}
              <ol className="m-0 mt-[clamp(44px,5vw,72px)] list-none p-0">
                {process.steps.map((step, i) => (
                  <Reveal
                    key={step.title}
                    as="li"
                    index={i}
                    className="grid gap-x-colgap gap-y-6 border-t border-on-alt/[0.14] py-[clamp(32px,4vw,56px)] last:border-b nav:grid-cols-[0.85fr_1fr]"
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[10.5px] tracking-[0.18em] text-accent-2">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span aria-hidden="true" className="h-px w-10 bg-on-alt/[0.16]" />
                      </div>
                      <h3 className="mt-4 max-w-[14ch] text-[clamp(26px,2.8vw,36px)] leading-[1.08] balance">
                        {step.title}
                      </h3>
                    </div>

                    <div>
                      <p className="m-0 max-w-[56ch] text-[16.5px] leading-[1.7] text-on-alt-2">
                        {steps.detail[i].body}
                      </p>
                      <div className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-2 border-t border-on-alt/[0.14] pt-5">
                        <span className="label-sm text-kicker-2">What you get</span>
                        <span className="text-[15px] text-on-alt">
                          {steps.detail[i].expect}
                        </span>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </section>

          <section
            id="safety"
            aria-labelledby="safety-h"
            className="ground-base-3 border-t border-accent/[0.14]"
          >
            <div className="mx-auto w-full max-w-[1320px] px-gutter py-section">
              <Reveal className="max-w-[640px]">
                <Kicker>{safety.kicker}</Kicker>
                <h2 id="safety-h" className="mt-6 text-h2 balance text-on-base">
                  {safety.headline}
                </h2>
                <p className="mt-6 max-w-[52ch] text-body text-on-base-3">{safety.lead}</p>
              </Reveal>

              <div
                className="mt-[clamp(44px,5vw,72px)] grid gap-[clamp(28px,3vw,48px)]"
                style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}
              >
                {safety.items.map((item, i) => (
                  <Reveal
                    key={item.title}
                    index={i}
                    className="border-t border-accent/[0.28] pt-6"
                  >
                    <h3 className="text-[24px] leading-[1.16] text-on-base">{item.title}</h3>
                    <p className="mt-3.5 text-[15px] leading-[1.72] text-on-base-3">
                      {item.body}
                    </p>
                  </Reveal>
                ))}
              </div>

              <Reveal
                delay={0.12}
                className="mt-[clamp(48px,5vw,76px)] flex flex-wrap items-center justify-between gap-6.5 border-t border-on-base/[0.12] pt-10"
              >
                <div className="max-w-[52ch]">
                  <h3 className="m-0 text-[clamp(25px,2.5vw,32px)] leading-[1.12] text-on-base">
                    {howItWorksPage.cta.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.72] text-on-base-3">
                    {howItWorksPage.cta.body}
                  </p>
                </div>
                <Link
                  href={howItWorksPage.cta.action.href}
                  className="btn-gold w-full shrink-0 justify-center px-7 py-4.5 text-[15px] hover:btn-gold-hover tab:w-auto tab:justify-start"
                >
                  {howItWorksPage.cta.action.label}
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
