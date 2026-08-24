import {
  ArrowRight,
  Check,
  ChartLineUp,
  ClipboardText,
  Newspaper,
  Scales,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Chip, Reveal } from "@/components/reveal";
import { services, servicesIntro } from "@/lib/content";

const icons: Record<string, Icon> = {
  chart: ChartLineUp,
  mentor: UsersThree,
  review: ClipboardText,
  risk: Scales,
  briefing: Newspaper,
};

export function ServicesSection() {
  return (
    <section id="services" className="bg-cream py-section">
      <div className="mx-auto w-full max-w-[1280px] px-gutter">
        <Reveal
          className="max-w-[56ch]"
          style={{ marginBottom: "clamp(40px, 4.5vw, 68px)" }}
        >
          <Chip>{servicesIntro.kicker}</Chip>
          <h2 className="mt-6 text-h2 balance text-deep">
            {servicesIntro.headlineTop} {servicesIntro.headlineItalic}
          </h2>
          <p className="mt-5 text-lead text-deep">{servicesIntro.lead}</p>
        </Reveal>

        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))" }}
        >
          {services.map((service, i) => {
            const IconComponent = icons[service.icon];
            return (
              <Reveal
                as="article"
                key={service.name}
                index={i}
                className="group flex flex-col rounded-card border border-deep/8 bg-stone p-[clamp(24px,2.4vw,34px)] transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-cream hover:shadow-lift"
              >
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-chip bg-pale text-deep transition-colors duration-300 group-hover:bg-bright group-hover:text-white">
                  <IconComponent size={23} weight="duotone" aria-hidden="true" />
                </span>

                <h3 className="mt-5 text-h3 text-deep balance">{service.name}</h3>

                <p className="mt-3 text-[15px] leading-[1.65] text-deep pretty">
                  {service.blurb}
                </p>

                <div className="mt-5 rounded-chip bg-pale/70 px-4 py-3">
                  <div className="text-[9.5px] font-bold uppercase tracking-[0.14em] text-deep">
                    Who it&rsquo;s for
                  </div>
                  <p className="mt-1.5 text-[14px] leading-[1.55] text-deep">
                    {service.forWho}
                  </p>
                </div>

                <ul className="mt-5 flex list-none flex-col gap-2.5 p-0">
                  {service.receives.map((item) => (
                    <li key={item} className="flex gap-3 text-[14.5px] leading-[1.5]">
                      <Check
                        size={15}
                        weight="bold"
                        color="#034488"
                        aria-hidden="true"
                        className="mt-1 shrink-0"
                      />
                      <span className="text-deep">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 self-start text-[13px] font-bold text-deep transition-colors duration-300 group-hover:text-deep"
                >
                  {servicesIntro.cta}
                  <ArrowRight
                    size={14}
                    weight="bold"
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
