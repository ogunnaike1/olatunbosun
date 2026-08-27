import type { Metadata } from "next";
import Link from "next/link";
import { Kicker, Reveal } from "@/components/reveal";
import { ServiceIcon } from "@/components/service-icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brand, services, servicesPage } from "@/lib/content";

export const metadata: Metadata = {
  title: servicesPage.title,
  description: servicesPage.description,
  openGraph: {
    type: "website",
    siteName: brand.full,
    title: `Services — ${brand.full}`,
    description: servicesPage.ogDescription,
  },
};

/**
 * The three services at length, then cost, then a way in. Each service is
 * one full-width row rather than a card: on a page there is room to say
 * who it is for and what is actually handed over, which is the whole
 * reason this page exists over the home section's three cards.
 */
export default function ServicesPage() {
  return (
    <>
      <SiteHeader />

      <div className="overflow-x-clip">
        <main>
          <section
            id="top"
            aria-labelledby="services-page-h"
            className="ground-base relative overflow-hidden"
          >
            <div
              aria-hidden="true"
              className="field-lines pointer-events-none absolute inset-0"
            />
            <div className="relative mx-auto w-full max-w-[1320px] px-gutter pt-[clamp(124px,15vh,180px)] pb-[clamp(48px,6vw,80px)]">
              <Reveal className="max-w-[760px]">
                <Kicker>{servicesPage.kicker}</Kicker>
                <h1 id="services-page-h" className="mt-7 text-hero balance text-on-base">
                  {servicesPage.headlineTop}{" "}
                  <span className="text-accent italic">{servicesPage.headlineItalic}</span>
                </h1>
                <p className="mt-7 max-w-[54ch] text-lead text-on-base-2">
                  {servicesPage.lead}
                </p>
              </Reveal>
            </div>
          </section>

          <section aria-label="The service in detail" className="bg-base">
            <div className="mx-auto w-full max-w-[1320px] px-gutter pb-section">
              {services.map((service) => (
                <Reveal
                  key={service.name}
                  as="article"
                  className="grid gap-x-colgap gap-y-8 border-t border-on-base/[0.12] py-[clamp(40px,5vw,72px)] nav:grid-cols-[0.85fr_1fr]"
                >
                  <div>
                    <ServiceIcon icon={service.icon} size={28} />
                    <h2 className="mt-5 max-w-[16ch] text-[clamp(28px,3.2vw,42px)] leading-[1.06] tracking-[-0.016em] balance text-on-base">
                      {service.name}
                    </h2>
                  </div>

                  <div>
                    <p className="m-0 max-w-[58ch] text-[16.5px] leading-[1.7] text-on-base-2">
                      {service.blurb}
                    </p>

                    <div className="mt-8">
                      <div className="label-sm text-on-base-4">
                        {servicesPage.detail.forWho}
                      </div>
                      <p className="mt-3 max-w-[58ch] text-[15px] leading-[1.72] text-on-base-3">
                        {service.forWho}
                      </p>
                    </div>

                    <div className="mt-8">
                      <div className="label-sm text-on-base-4">
                        {servicesPage.detail.includes}
                      </div>
                      {/* Hairline-led list: each line opens on a short rule
                          rather than a bullet, so it stays in the same
                          drawing language as the rest of the site. */}
                      <ul className="mt-4 flex list-none flex-col gap-3 p-0">
                        {service.includes.map((item) => (
                          <li key={item} className="flex gap-4">
                            <span
                              aria-hidden="true"
                              className="mt-2.5 h-px w-4 shrink-0 bg-accent"
                            />
                            <span className="max-w-[52ch] text-[15px] leading-[1.7] text-on-base-2">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section aria-labelledby="cost-h" className="ground-alt text-on-alt">
            <div className="mx-auto w-full max-w-[1320px] px-gutter py-section">
              <div className="grid items-start gap-colgap nav:grid-cols-[0.8fr_1fr]">
                <Reveal className="nav:sticky nav:top-[128px]">
                  <Kicker tone="light">{servicesPage.pricing.kicker}</Kicker>
                  <h2 id="cost-h" className="mt-6 max-w-[12ch] text-h2 balance">
                    {servicesPage.pricing.headline}
                  </h2>
                </Reveal>

                <Reveal delay={0.12}>
                  {servicesPage.pricing.body.map((paragraph, i) => (
                    <p
                      key={paragraph.slice(0, 24)}
                      className={`max-w-[58ch] text-[17px] leading-[1.7] text-on-alt-2 ${
                        i === 0 ? "mt-0" : "mt-4.5"
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}

                  <div
                    className="mt-10 grid gap-px border border-on-alt/[0.12] bg-on-alt/[0.12]"
                    style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}
                  >
                    {servicesPage.pricing.points.map((point) => (
                      <div key={point.label} className="bg-card p-5.5">
                        <div className="label-sm text-kicker-2">{point.label}</div>
                        <div className="mt-2.5 font-display text-[22px] leading-[1.2]">
                          {point.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          <section
            aria-labelledby="svc-cta-h"
            className="ground-base-3 border-t border-accent/[0.14]"
          >
            <div className="mx-auto flex w-full max-w-[1320px] flex-wrap items-center justify-between gap-6.5 px-gutter py-[clamp(56px,7vw,96px)]">
              <Reveal className="max-w-[52ch]">
                <h2
                  id="svc-cta-h"
                  className="m-0 text-[clamp(28px,3vw,40px)] leading-[1.1] balance text-on-base"
                >
                  {servicesPage.cta.title}
                </h2>
                <p className="mt-4 text-[15.5px] leading-[1.72] text-on-base-3">
                  {servicesPage.cta.body}
                </p>
              </Reveal>
              <Reveal delay={0.1} className="w-full tab:w-auto">
                <Link
                  href={servicesPage.cta.action.href}
                  className="btn-gold w-full justify-center px-7.5 py-4.5 text-[15px] hover:btn-gold-hover tab:w-auto"
                >
                  {servicesPage.cta.action.label}
                  <span aria-hidden="true" className="font-mono text-xs">
                    →
                  </span>
                </Link>
              </Reveal>
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
