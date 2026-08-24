import { Chip, Reveal } from "@/components/reveal";
import { howItWorks } from "@/lib/content";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-stone py-section">
      <div className="mx-auto w-full max-w-[1280px] px-gutter">
        <Reveal
          className="max-w-[52ch]"
          style={{ marginBottom: "clamp(40px, 4.5vw, 68px)" }}
        >
          <Chip>{howItWorks.kicker}</Chip>
          <h2 className="mt-6 text-h2 balance text-deep">
            {howItWorks.headlineTop} {howItWorks.headlineItalic}
          </h2>
        </Reveal>

        <ol
          className="grid list-none gap-5 p-0"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}
        >
          {howItWorks.steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              index={i}
              className="group relative card flex flex-col p-[clamp(24px,2.4vw,32px)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              {/* Connector to the next card, desktop only. */}
              {i < howItWorks.steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-11 -right-5 hidden h-px w-5 bg-deep/15 tab:block"
                />
              )}

              <span className="inline-flex size-11 items-center justify-center rounded-chip bg-deep text-[15px] font-extrabold tabular text-white transition-colors duration-300 group-hover:bg-bright">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-5 text-h3 text-deep balance">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-deep pretty">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
