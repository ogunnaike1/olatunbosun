import { Chip, Reveal } from "@/components/reveal";
import { trust } from "@/lib/content";

export function TrustSection() {
  return (
    <section id="why-us" className="bg-cream py-section">
      <div
        className="mx-auto grid w-full max-w-[1280px] items-start gap-colgap px-gutter"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}
      >
        {/* Pins while the list scrolls past. An overflow-x:hidden ancestor
            would silently break this — the page wrapper uses clip. */}
        <Reveal className="tab:sticky tab:top-[112px]">
          <Chip>{trust.kicker}</Chip>
          <h2 className="mt-6 text-h2 balance text-deep">
            {trust.headlineTop} {trust.headlineItalic}
          </h2>
          <p className="mt-5 max-w-[40ch] text-lead text-deep">{trust.lead}</p>
        </Reveal>

        <ul className="m-0 grid list-none gap-4 p-0">
          {trust.points.map((point, i) => (
            <Reveal
              as="li"
              key={point.title}
              index={i}
              className="group grid grid-cols-[auto_1fr] gap-x-5 rounded-card border border-deep/8 bg-stone p-[clamp(20px,2vw,28px)] transition-[background-color,box-shadow] duration-300 hover:bg-cream hover:shadow-card"
            >
              <span className="inline-flex size-9 items-center justify-center rounded-chip bg-deep text-[12px] font-extrabold tabular text-cream transition-colors duration-300 group-hover:bg-deep-2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-h3 text-deep balance">{point.title}</h3>
                <p className="mt-2.5 max-w-[58ch] text-[15px] leading-[1.65] text-deep pretty">
                  {point.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
