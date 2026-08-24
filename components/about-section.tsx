import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Chip, Reveal } from "@/components/reveal";
import { about } from "@/lib/content";

export function AboutSection() {
  return (
    <section id="about" className="bg-stone py-section">
      <div className="mx-auto w-full max-w-[1280px] px-gutter">
        <div
          className="grid gap-colgap"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))" }}
        >
          <Reveal className="tab:sticky tab:top-[112px] tab:self-start">
            <Chip>{about.kicker}</Chip>
            <h2 className="mt-6 text-h2 balance text-deep">
              {about.headlineTop} {about.headlineItalic}
            </h2>

            <dl className="mt-9 grid gap-3" style={{ gridTemplateColumns: "1fr" }}>
              {about.meta.map((item) => (
                <div
                  key={item.label}
                  className="card flex items-center justify-between gap-6 px-5 py-4"
                >
                  <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-deep">
                    {item.label}
                  </dt>
                  <dd className="m-0 text-right text-[15px] font-semibold text-deep">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2.5 rounded-btn bg-deep px-6 py-3.5 text-[13.5px] font-bold text-white transition-colors duration-300 hover:bg-deep-2"
            >
              Start a conversation
              <ArrowRight
                size={15}
                weight="bold"
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="card p-[clamp(26px,3vw,44px)]">
              <p className="m-0 text-quote font-semibold text-deep pretty">{about.lead}</p>

              <div className="mt-7 h-px w-full bg-deep/10" />

              {about.body.map((paragraph, i) => (
                <p key={i} className="mt-6 text-body text-deep pretty">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
