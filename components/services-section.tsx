import { Reveal } from "@/components/reveal";
import { services, servicesIntro } from "@/lib/content";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="border-t border-ink-text/20 bg-paper text-ink-text"
      style={{ padding: "clamp(78px, 10vw, 140px) 0" }}
    >
      <div className="mx-auto w-full max-w-[1360px] px-gutter">
        <Reveal
          className="max-w-[52ch]"
          style={{ marginBottom: "clamp(44px, 5vw, 72px)" }}
        >
          <div className="text-[11.5px] uppercase tracking-[0.30em] text-accent">
            {servicesIntro.kicker}
          </div>
          <h2 className="mt-6 text-h2 balance">
            {servicesIntro.headlineTop}
            <br />
            <span className="italic text-accent">{servicesIntro.headlineItalic}</span>
          </h2>
          <p className="mt-7 text-lead text-ink-text/66">{servicesIntro.lead}</p>
        </Reveal>

        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "clamp(30px, 3.4vw, 56px)",
          }}
        >
          {services.map((service, i) => (
            <Reveal
              as="article"
              key={service.name}
              index={i}
              className="group flex flex-col border-t-2 border-ink-text pt-6 transition-colors duration-200 hover:border-accent"
            >
              <h3 className="text-h3-card balance">{service.name}</h3>

              <p className="mt-4 text-[16px] leading-[1.6] text-ink-text/66 pretty">
                {service.blurb}
              </p>

              <div className="mt-7 border-t border-ink-text/20 pt-4">
                <div className="text-[10.5px] uppercase tracking-[0.24em] text-ink-text/60">
                  Who it&rsquo;s for
                </div>
                <p className="mt-2 text-[15.5px] leading-[1.55] text-ink-text/66">
                  {service.forWho}
                </p>
              </div>

              <div className="mt-6 border-t border-ink-text/20 pt-4">
                <div className="text-[10.5px] uppercase tracking-[0.24em] text-ink-text/60">
                  What you receive
                </div>
                <ul className="mt-3 flex list-none flex-col gap-2 p-0">
                  {service.receives.map((item) => (
                    <li key={item} className="flex gap-3 text-[15.5px] leading-[1.5]">
                      <span aria-hidden="true" className="mt-[9px] size-[4px] shrink-0 bg-accent" />
                      <span className="text-ink-text/66">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className="mt-8 inline-block self-start border-b border-accent pb-1 text-[13px] uppercase tracking-[0.12em] text-accent transition-colors duration-200 hover:border-ink-text hover:text-ink-text"
              >
                {servicesIntro.cta}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
