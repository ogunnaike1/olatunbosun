import { Reveal } from "@/components/reveal";
import { howItWorks } from "@/lib/content";

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="bg-paper py-section-editorial text-ink-text"
    >
      <div className="mx-auto w-full max-w-[1360px] px-gutter">
        <Reveal
          className="max-w-[52ch]"
          style={{ marginBottom: "clamp(44px, 5vw, 72px)" }}
        >
          <div className="text-[11.5px] uppercase tracking-[0.30em] text-accent">
            {howItWorks.kicker}
          </div>
          <h2 className="mt-6 text-h2 balance">
            {howItWorks.headlineTop}
            <br />
            <span className="italic text-accent">{howItWorks.headlineItalic}</span>
          </h2>
        </Reveal>

        <ol
          className="grid list-none p-0"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "clamp(30px, 3.4vw, 56px)",
          }}
        >
          {howItWorks.steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              index={i}
              className="border-t-2 border-ink-text pt-6"
            >
              <div className="text-stat tabular text-accent">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 text-h3-feature balance">{step.title}</h3>
              <p className="mt-4 text-[16.5px] leading-[1.68] text-ink-text/66 pretty">
                {step.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
