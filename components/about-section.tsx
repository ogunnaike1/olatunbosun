import { Reveal } from "@/components/reveal";
import { about, brand } from "@/lib/content";

export function AboutSection() {
  return (
    <section id="about" className="bg-paper py-section-editorial text-ink-text">
      <div className="mx-auto w-full max-w-[1360px] px-gutter">
        <Reveal
          className="flex items-center gap-4 text-[11.5px] uppercase"
          style={{ marginBottom: "clamp(38px, 4.5vw, 64px)" }}
        >
          <span className="tracking-[0.30em] text-accent">{about.kicker}</span>
          <span className="h-px flex-1 bg-ink-text/20" />
          <span className="tracking-[0.24em] text-ink-text/60">{about.rail}</span>
        </Reveal>

        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "clamp(36px, 5vw, 84px)",
          }}
        >
          <Reveal delay={0.06}>
            <h2 className="text-h2-about balance">
              {about.headlineTop}
              <br />
              <span className="italic">{about.headlineItalic}</span>
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="text-[19px] italic leading-[1.62] text-ink-text/86 pretty">
              {about.lead}
            </p>
            {about.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="mt-7 text-[17px] leading-[1.68] text-ink-text/66 pretty"
              >
                {paragraph}
              </p>
            ))}

            <div
              className="mt-11 grid"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "clamp(20px, 2.4vw, 34px)",
              }}
            >
              {about.meta.map((item) => (
                <div key={item.label} className="border-t border-ink-text/22 pt-4">
                  <div className="text-[10.5px] uppercase tracking-[0.24em] text-ink-text/60">
                    {item.label}
                  </div>
                  <div className="mt-2 text-[16px]">{item.value}</div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-11 inline-block border-b border-accent pb-1 text-[14px] uppercase tracking-[0.12em] text-accent transition-colors duration-200 hover:border-ink-text hover:text-ink-text"
            >
              Work with {brand.name}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
