import { marqueeItems } from "@/lib/content";

/**
 * The blue band. It carries what the service actually is, rather than a
 * price ticker — this is a person's practice, not an exchange.
 */
function Row({ hidden }: { hidden?: boolean }) {
  return (
    <div className="flex items-center gap-12 pr-12" aria-hidden={hidden || undefined}>
      {marqueeItems.map((item) => (
        <div key={item} className="flex items-center gap-12 whitespace-nowrap">
          <span className="text-[13px] uppercase tracking-[0.22em] text-paper">{item}</span>
          <span aria-hidden="true" className="size-[4px] bg-paper/70" />
        </div>
      ))}
    </div>
  );
}

export function MarqueeBand() {
  return (
    <section
      aria-label="Services at a glance"
      className="overflow-hidden border-y border-paper/20 bg-accent py-[18px]"
    >
      <div className="marquee-track flex">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}
