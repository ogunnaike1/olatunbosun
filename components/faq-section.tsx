import Link from "next/link";
import { FaqAccordion } from "@/components/faq-accordion";
import { Kicker, Reveal } from "@/components/reveal";
import { faqIntro, faqs } from "@/lib/content";

/** The home page's FAQ. The accordion itself lives in faq-accordion.tsx. */
export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-h"
      className="border-t border-on-alt/10 bg-alt text-on-alt"
    >
      <div className="mx-auto w-full max-w-[1320px] px-gutter py-section">
        <div className="grid items-start gap-colgap nav:grid-cols-[0.72fr_1fr]">
          <Reveal className="nav:sticky nav:top-[128px]">
            <Kicker tone="light">{faqIntro.kicker}</Kicker>
            <h2 id="faq-h" className="mt-6 max-w-[16ch] text-h2 balance">
              {faqIntro.headline}
            </h2>
            <p className="mt-6 max-w-[36ch] text-[16.5px] leading-[1.7] text-on-alt-3">
              {faqIntro.lead}
            </p>
            <Link
              href={faqIntro.link.href}
              className="mt-7 inline-flex items-center gap-2.5 border-b border-accent-2/40 pb-1.5 text-[14.5px] text-on-alt transition-colors duration-300 hover:border-accent-2 hover:text-accent-2"
            >
              {faqIntro.link.label}
              <span aria-hidden="true" className="font-mono text-xs text-accent-2">
                →
              </span>
            </Link>
          </Reveal>

          <FaqAccordion faqs={faqs} />
        </div>
      </div>
    </section>
  );
}
