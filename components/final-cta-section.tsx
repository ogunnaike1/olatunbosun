import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { finalCta, riskDisclaimer } from "@/lib/content";

/**
 * The close: one invitation, then the risk disclaimer in full. The
 * disclaimer is not a footnote and is not collapsed — it carries its own
 * heading and its own anchor, because the footer links to it.
 */
export function FinalCtaSection() {
  return (
    <section id="disclaimer" aria-labelledby="cta-h" className="ground-base-3 border-t border-accent/[0.14]">
      <div className="mx-auto w-full max-w-[1320px] px-gutter py-section">
        <Reveal className="max-w-[820px]">
          <h2 id="cta-h" className="text-h2 balance text-on-base">
            {finalCta.headlineTop}{" "}
            <span className="text-accent italic">{finalCta.headlineItalic}</span>
          </h2>
          <p className="mt-7 max-w-[54ch] text-lead text-on-base-2">{finalCta.body}</p>
          <Link
            href={finalCta.action.href}
            className="btn-gold mt-9 px-7.5 py-4.5 text-[15px] hover:btn-gold-hover"
          >
            {finalCta.action.label}
            <span aria-hidden="true" className="font-mono text-xs">
              →
            </span>
          </Link>
        </Reveal>

        <Reveal
          delay={0.12}
          className="mt-[clamp(52px,6vw,88px)] border-t border-on-base/[0.12] pt-8"
        >
          <h3 className="label m-0 text-accent">{riskDisclaimer.heading}</h3>
          <p className="mt-4 max-w-[86ch] text-[13.5px] leading-[1.8] text-on-base-4">
            {riskDisclaimer.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
