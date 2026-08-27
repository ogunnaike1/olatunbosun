import { Kicker, Reveal } from "@/components/reveal";
import { services, servicesIntro, type Service } from "@/lib/content";

/**
 * Line-drawn, 28px, one gold element each. Deliberately not an icon set —
 * three marks that read as chart, volume and target at a glance.
 */
const icons: Record<Service["icon"], React.ReactNode> = {
  trend: (
    <>
      <circle cx="14" cy="14" r="13" fill="none" stroke="rgba(245,239,230,.2)" />
      <path
        d="M7 18.5 L12 12 L16 15.5 L21.5 8"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="1.5"
      />
    </>
  ),
  bars: (
    <>
      <rect x="1" y="1" width="26" height="26" fill="none" stroke="rgba(245,239,230,.2)" />
      <rect x="7" y="16" width="3.5" height="6" fill="var(--color-gold)" />
      <rect x="12.5" y="10" width="3.5" height="12" fill="var(--color-gold)" />
      <rect x="18" y="6" width="3.5" height="16" fill="var(--color-gold-deep)" />
    </>
  ),
  target: (
    <>
      <circle cx="14" cy="14" r="13" fill="none" stroke="rgba(245,239,230,.2)" />
      <circle cx="14" cy="14" r="4.5" fill="var(--color-gold)" />
    </>
  ),
};

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-h"
      className="ground-ink-2 relative overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1320px] px-gutter py-section">
        <Reveal className="flex flex-wrap items-end justify-between gap-6.5">
          <div>
            <Kicker>{servicesIntro.kicker}</Kicker>
            <h2 id="services-h" className="mt-6 max-w-[22ch] text-h2 balance text-cream">
              {servicesIntro.headline}
            </h2>
          </div>
          <p className="m-0 max-w-[34ch] text-body text-mute">{servicesIntro.lead}</p>
        </Reveal>

        {/* Three cards, and the first one leads: it is the actual trading,
            so it gets the wider column and the larger heading. */}
        <div className="mt-[clamp(48px,5vw,74px)] grid gap-[clamp(16px,1.6vw,22px)] tab:grid-cols-2 nav:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.name}
              as="article"
              index={i}
              className={`card-dark flex min-h-[290px] flex-col justify-between p-[clamp(26px,3vw,40px)] transition-[border-color,box-shadow] duration-500 hover:border-gold/40 hover:shadow-card ${
                i === 0 ? "tab:col-span-2 nav:col-span-1" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] tracking-[0.18em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
                  {icons[service.icon]}
                </svg>
              </div>

              <div className="mt-11">
                <h3
                  className={`m-0 text-cream ${
                    i === 0 ? "text-[clamp(26px,2.6vw,34px)] leading-[1.1]" : "text-h3"
                  }`}
                >
                  {service.name}
                </h3>
                <p className="mt-4 max-w-[44ch] text-body text-mute">{service.blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
