import { Reveal } from "@/components/reveal";
import { finalCta } from "@/lib/content";

export function FinalCtaSection() {
  return (
    <section aria-label="Get in touch" className="py-section">
      <div className="mx-auto w-full max-w-[1360px] px-gutter">
        <Reveal className="max-w-[26ch]">
          <h2 className="text-h2 balance">
            {finalCta.headlineTop}
            <br />
            <span className="italic text-paper/70">{finalCta.headlineItalic}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-8 flex flex-wrap items-center gap-x-12 gap-y-7">
          <p className="m-0 text-lead max-w-[42ch] text-paper/62">{finalCta.body}</p>
          <a
            href={finalCta.cta.href}
            className="bg-accent px-8 py-4 text-[14px] uppercase tracking-[0.12em] text-paper transition-[background-color,color,transform] duration-[220ms] hover:-translate-y-0.5 hover:bg-accent-on-dark hover:text-ink"
          >
            {finalCta.cta.label}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
