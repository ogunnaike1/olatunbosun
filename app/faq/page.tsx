import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/faq-accordion";
import { Kicker, Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brand, faqPage, faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: faqPage.title,
  description: faqPage.description,
  openGraph: {
    type: "website",
    siteName: brand.full,
    title: `FAQ — ${brand.full}`,
    description: faqPage.ogDescription,
  },
};

/**
 * FAQPage structured data, built from the same array the page renders — so
 * the markup can never describe answers the visitor isn't shown.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <SiteHeader />

      <div className="overflow-x-clip">
        <main>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />

          <section
            id="top"
            aria-labelledby="faq-page-h"
            className="ground-base relative overflow-hidden"
          >
            <div
              aria-hidden="true"
              className="field-lines pointer-events-none absolute inset-0"
            />
            <div className="relative mx-auto w-full max-w-[1320px] px-gutter pt-[clamp(124px,15vh,180px)] pb-[clamp(48px,6vw,80px)]">
              <Reveal className="max-w-[800px]">
                <Kicker>{faqPage.kicker}</Kicker>
                <h1 id="faq-page-h" className="mt-7 text-hero balance text-on-base">
                  {faqPage.headlineTop}{" "}
                  <span className="text-accent italic">{faqPage.headlineItalic}</span>
                </h1>
                <p className="mt-7 max-w-[56ch] text-lead text-on-base-2">{faqPage.lead}</p>
              </Reveal>
            </div>
          </section>

          {/* The accordion is authored for the alternating ground, so the
              page gives it that ground rather than restyling it. */}
          <section aria-label="Questions and answers" className="ground-alt text-on-alt">
            <div className="mx-auto w-full max-w-[900px] px-gutter py-section">
              <FaqAccordion faqs={faqs} />
            </div>
          </section>

          <section
            aria-labelledby="faq-cta-h"
            className="ground-base-3 border-t border-accent/[0.14]"
          >
            <div className="mx-auto flex w-full max-w-[1320px] flex-wrap items-center justify-between gap-6.5 px-gutter py-[clamp(56px,7vw,96px)]">
              <Reveal className="max-w-[52ch]">
                <h2
                  id="faq-cta-h"
                  className="m-0 text-[clamp(28px,3vw,40px)] leading-[1.1] balance text-on-base"
                >
                  {faqPage.closing.title}
                </h2>
                <p className="mt-4 text-[15.5px] leading-[1.72] text-on-base-3">
                  {faqPage.closing.body}
                </p>
              </Reveal>
              <Reveal delay={0.1} className="w-full tab:w-auto">
                <Link
                  href={faqPage.closing.action.href}
                  className="btn-gold w-full justify-center px-7.5 py-4.5 text-[15px] hover:btn-gold-hover tab:w-auto"
                >
                  {faqPage.closing.action.label}
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
