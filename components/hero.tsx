import { HeroCarousel } from "@/components/hero-carousel";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex items-center"
      // A true first screen: the fixed header floats over this section, so the
      // hero owns the full viewport. The heavier top padding offsets the bar so
      // the content still reads as optically centred. min-height, not height —
      // on narrow screens the stacked columns may grow past it.
      style={{
        minHeight: "100svh",
        paddingTop: "clamp(104px, 12vh, 148px)",
        paddingBottom: "clamp(32px, 5vw, 64px)",
      }}
    >
      {/* The page's only gradient. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1100px 480px at 80% 4%, rgba(3,91,250,0.55), transparent 60%), radial-gradient(700px 380px at 92% 22%, rgba(1,231,255,0.14), transparent 66%)",
        }}
      />

      <div
        className="relative mx-auto grid w-full max-w-[1360px] items-center px-gutter"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
          gap: "clamp(36px, 4vw, 64px)",
        }}
      >
        <div>
          <div
            className="flex flex-wrap items-center gap-3"
            style={{ marginBottom: "clamp(18px, 2vw, 26px)" }}
          >
            <span
              className="size-[7px] rounded-full bg-accent-on-dark"
              style={{ boxShadow: "0 0 0 4px rgba(1,231,255,0.20)" }}
            />
            <span className="text-[11px] uppercase tracking-[0.26em] text-paper/55">
              {hero.status}
            </span>
            <span className="h-px w-6 bg-paper/18" />
            <span className="text-[11px] uppercase tracking-[0.16em] text-paper/50">
              {hero.note}
            </span>
          </div>

          <h1 className="text-h1 balance" style={{ margin: "0 0 clamp(16px, 2vw, 24px)" }}>
            {hero.headlineTop}
            <br />
            <span className="italic text-paper/72">{hero.headlineItalic}</span>{" "}
            {hero.headlineEnd}
          </h1>

          <p
            className="text-lead max-w-[46ch] text-paper/62"
            style={{ margin: "0 0 clamp(22px, 2.6vw, 32px)" }}
          >
            {hero.lead}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={hero.primary.href}
              className="bg-accent px-7 py-[14px] text-[13px] uppercase tracking-[0.12em] text-paper transition-[background-color,color,transform] duration-[220ms] hover:-translate-y-0.5 hover:bg-accent-on-dark hover:text-ink"
            >
              {hero.primary.label}
            </a>
            <a
              href={hero.secondary.href}
              className="border border-paper/22 px-7 py-[14px] text-[13px] uppercase tracking-[0.12em] text-paper transition-[border-color,background-color] duration-[220ms] hover:border-accent-on-dark hover:bg-accent-on-dark/10"
            >
              {hero.secondary.label}
            </a>
          </div>
        </div>

        <HeroCarousel />
      </div>
    </section>
  );
}
