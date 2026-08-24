import { Reveal } from "@/components/reveal";
import { testimonials } from "@/lib/content";

/**
 * Renders nothing until real, client-approved reviews exist in
 * `lib/content.ts`. An empty testimonial wall is better than an invented one.
 */
export function TestimonialsSection() {
  if (testimonials.length === 0) return null;

  return (
    <section
      id="testimonials"
      className="border-t border-ink-text/20 bg-paper text-ink-text"
      style={{ padding: "clamp(78px, 10vw, 140px) 0" }}
    >
      <div className="mx-auto w-full max-w-[1360px] px-gutter">
        <Reveal
          className="flex flex-wrap items-center gap-5"
          style={{ marginBottom: "clamp(34px, 4vw, 58px)" }}
        >
          <h2 className="text-h2-insights">In their words</h2>
          <span className="h-px flex-1 bg-ink-text/20" />
          <span className="text-[11.5px] uppercase tracking-[0.24em] text-ink-text/60">
            Client feedback
          </span>
        </Reveal>

        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "clamp(28px, 3.4vw, 56px)",
          }}
        >
          {testimonials.map((item, i) => (
            <Reveal as="article" key={item.name} index={i}>
              <figure className="m-0 border-t-2 border-ink-text pt-6">
                <blockquote className="m-0 text-[18px] italic leading-[1.6] text-ink-text/86 pretty">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6 text-[12.5px] uppercase tracking-[0.14em] text-ink-text/60">
                  {item.name}
                  {item.service && (
                    <>
                      {" · "}
                      <span className="text-accent">{item.service}</span>
                    </>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
