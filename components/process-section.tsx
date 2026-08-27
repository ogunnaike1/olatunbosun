import Link from "next/link";
import { Kicker, Reveal } from "@/components/reveal";
import { process } from "@/lib/content";

export function ProcessSection() {
  return (
    <section id="process" aria-labelledby="proc-h" className="ground-alt-2 text-on-alt">
      <div className="mx-auto w-full max-w-[1320px] px-gutter py-section">
        <Reveal className="max-w-[640px]">
          <Kicker tone="light">{process.kicker}</Kicker>
          <h2 id="proc-h" className="mt-6 text-h2 balance">
            {process.headline}
          </h2>
          <Link
            href={process.link.href}
            className="mt-7 inline-flex items-center gap-2.5 border-b border-accent-2/40 pb-1.5 text-[14.5px] text-on-alt transition-colors duration-300 hover:border-accent-2 hover:text-accent-2"
          >
            {process.link.label}
            <span aria-hidden="true" className="font-mono text-xs text-accent-2">
              →
            </span>
          </Link>
        </Reveal>

        <ol
          className="mt-[clamp(48px,5vw,76px)] grid list-none gap-[clamp(24px,3vw,44px)] p-0"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
        >
          {process.steps.map((step, i) => (
            <Reveal key={step.title} as="li" index={i}>
              {/* The rule runs off to the right of the number, so the four
                  steps read as one line of travel rather than four boxes. */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10.5px] tracking-[0.18em] text-accent-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span aria-hidden="true" className="h-px flex-1 bg-base/[0.16]" />
              </div>
              <h3 className="mt-5 text-[27px] leading-[1.12]">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.72] text-on-alt-3">{step.body}</p>
            </Reveal>
          ))}
        </ol>

        {/* The one block that inverts against its section — it carries the
            money question, and the answer is "not here". */}
        <Reveal className="block-invert mt-[clamp(44px,4.5vw,64px)] flex flex-wrap items-center justify-between gap-6.5 p-[clamp(26px,3vw,40px)]">
          <div className="max-w-[52ch]">
            <h3 className="m-0 text-[clamp(25px,2.5vw,32px)] leading-[1.12] text-on-base">
              {process.cta.title}
            </h3>
            <p className="mt-3 text-[15px] leading-[1.72] text-on-base-3">{process.cta.body}</p>
          </div>
          <Link
            href={process.cta.action.href}
            className="btn-gold w-full shrink-0 justify-center px-7 py-4.5 text-[15px] hover:btn-gold-hover tab:w-auto tab:justify-start"
          >
            {process.cta.action.label}
            <span aria-hidden="true" className="font-mono text-xs">
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
