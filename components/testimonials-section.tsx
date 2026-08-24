import { Chip, Reveal } from "@/components/reveal";
import { testimonials } from "@/lib/content";

/**
 * Renders nothing until real, client-approved reviews exist in
 * `lib/content.ts`. An empty testimonial wall beats an invented one.
 */
export function TestimonialsSection() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="bg-cream py-section">
      <div className="mx-auto w-full max-w-[1280px] px-gutter">
        <Reveal style={{ marginBottom: "clamp(48px, 5.5vw, 80px)" }}>
          <Chip>In their words</Chip>
        </Reveal>

        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}
        >
          {testimonials.map((item, i) => (
            <Reveal as="article" key={item.name} index={i} className="card p-[clamp(24px,2.4vw,34px)]">
              <figure className="m-0">
                <blockquote className="m-0 text-[17px] leading-[1.65] text-deep pretty">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 text-[13px] font-bold text-deep">
                  <span aria-hidden="true" className="h-px w-5 bg-deep" />
                  {item.name}
                  {item.service && <span className="font-medium text-deep">· {item.service}</span>}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
