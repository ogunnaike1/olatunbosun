import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { finalCta } from "@/lib/content";

export function FinalCtaSection() {
  return (
    <section aria-label="Get in touch" className="bg-cream pb-section">
      <div className="mx-auto w-full max-w-[1280px] px-gutter">
        <Reveal
          className="relative overflow-hidden rounded-card bg-deep p-[clamp(32px,4.5vw,80px)] text-white"
          style={{ boxShadow: "var(--shadow-lift)" }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(620px 420px at 88% 12%, rgba(23,143,214,0.6), transparent 62%)",
            }}
          />

          <div
            className="relative grid items-center gap-x-12 gap-y-8"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
          >
            <div>
              <h2 className="text-h2 balance">
                {finalCta.headlineTop}{" "}
                <span className="text-pale">{finalCta.headlineItalic}</span>
              </h2>
              <p className="mt-5 max-w-[46ch] text-lead text-white/90">{finalCta.body}</p>
            </div>

            <div className="flex flex-wrap gap-3.5 tab:justify-end">
              <a
                href={finalCta.cta.href}
                className="group inline-flex items-center gap-2.5 rounded-btn bg-cream px-8 py-4 text-[14px] font-bold text-deep transition-colors duration-300 hover:bg-stone"
              >
                {finalCta.cta.label}
                <ArrowRight
                  size={16}
                  weight="bold"
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href="#services"
                className="inline-flex items-center rounded-btn bg-white/10 px-8 py-4 text-[14px] font-bold text-white ring-1 ring-white/20 transition-colors duration-300 hover:bg-white/16"
              >
                View Services
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
