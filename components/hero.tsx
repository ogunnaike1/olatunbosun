import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { HeroPanel } from "@/components/hero-panel";
import { Chip } from "@/components/reveal";
import { hero, heroFacts } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex items-center overflow-hidden bg-deep text-white"
      style={{
        minHeight: "100svh",
        paddingTop: "clamp(126px, 14vh, 180px)",
        paddingBottom: "clamp(56px, 7vw, 96px)",
      }}
    >
      {/* Soft depth behind the panel — one wash, not a light show. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 620px at 82% 18%, rgba(23,143,214,0.55), transparent 62%), radial-gradient(700px 500px at 8% 92%, rgba(204,221,232,0.14), transparent 60%)",
        }}
      />

      <div
        className="relative mx-auto grid w-full max-w-[1280px] items-center px-gutter"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
          gap: "clamp(44px, 5vw, 84px)",
        }}
      >
        <div>
          <Chip tone="dark">{hero.status}</Chip>

          <h1
            className="text-display balance"
            style={{ margin: "clamp(22px,2.6vw,30px) 0 clamp(20px,2.4vw,28px)" }}
          >
            {hero.headlineTop}
            <br />
            <span className="text-pale">{hero.headlineItalic}</span>
            <br />
            {hero.headlineEnd}
          </h1>

          <p
            className="text-lead max-w-[52ch] text-white/90"
            style={{ marginBottom: "clamp(30px, 3.4vw, 42px)" }}
          >
            {hero.lead}
          </p>

          <div className="flex flex-wrap gap-3.5">
            <a
              href={hero.primary.href}
              className="group inline-flex items-center gap-2.5 rounded-btn bg-cream px-7 py-4 text-[14px] font-bold text-deep transition-colors duration-300 hover:bg-stone"
            >
              {hero.primary.label}
              <ArrowRight
                size={16}
                weight="bold"
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href={hero.secondary.href}
              className="inline-flex items-center rounded-btn bg-white/10 px-7 py-4 text-[14px] font-bold text-white ring-1 ring-white/20 transition-colors duration-300 hover:bg-white/16"
            >
              {hero.secondary.label}
            </a>
          </div>

          <dl
            className="mt-[clamp(36px,4vw,56px)] grid gap-3"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(168px, 1fr))" }}
          >
            {heroFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-chip bg-white/[0.07] p-4 ring-1 ring-white/12"
              >
                <dt className="text-[9.5px] font-bold uppercase tracking-[0.14em] text-white">
                  {fact.label}
                </dt>
                <dd className="m-0 mt-2 text-[15px] font-semibold text-white">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <HeroPanel />
      </div>
    </section>
  );
}
