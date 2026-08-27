import Link from "next/link";
import { Kicker, Reveal } from "@/components/reveal";
import { ServiceIcon } from "@/components/service-icons";
import { services, servicesIntro } from "@/lib/content";

/**
 * ONE service, so this is a single feature block rather than a card grid —
 * a lone card in a three-column layout reads as two missing cards. The
 * space that would have gone to siblings goes to the includes list
 * instead, which is the more useful thing to show anyway.
 */
export function ServicesSection() {
  const service = services[0];

  return (
    <section
      id="services"
      aria-labelledby="services-h"
      className="ground-base-2 relative overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1320px] px-gutter py-section">
        <div className="grid items-start gap-colgap nav:grid-cols-[0.8fr_1fr]">
          <Reveal className="nav:sticky nav:top-[128px]">
            <Kicker>{servicesIntro.kicker}</Kicker>
            <h2 id="services-h" className="mt-6 max-w-[14ch] text-h2 balance text-on-base">
              {servicesIntro.headline}
            </h2>
            <p className="mt-6 max-w-[36ch] text-body text-on-base-3">
              {servicesIntro.lead}
            </p>
            <Link
              href={servicesIntro.link.href}
              className="mt-7 inline-flex items-center gap-2.5 border-b border-accent/40 pb-1.5 text-[14.5px] text-on-base transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              {servicesIntro.link.label}
              <span aria-hidden="true" className="font-mono text-xs text-accent">
                →
              </span>
            </Link>
          </Reveal>

          <Reveal
            as="article"
            delay={0.12}
            className="card-surface p-[clamp(26px,3vw,44px)] transition-[border-color,box-shadow] duration-500 hover:border-accent/40 hover:shadow-card"
          >
            <ServiceIcon icon={service.icon} size={32} />

            <h3 className="mt-7 max-w-[20ch] text-[clamp(26px,2.8vw,36px)] leading-[1.08] tracking-[-0.014em] balance text-on-base">
              {service.name}
            </h3>
            <p className="mt-5 max-w-[52ch] text-[16px] leading-[1.7] text-on-base-2">
              {service.blurb}
            </p>

            {/* Hairline-led, not bulleted — the same drawing language as the
                rest of the site. */}
            <ul className="mt-8 flex list-none flex-col gap-3 border-t border-on-base/[0.12] p-0 pt-7">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-4">
                  <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                  <span className="max-w-[52ch] text-[15px] leading-[1.7] text-on-base-3">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
