import { Reveal } from "@/components/reveal";
import { focusStrip } from "@/lib/content";

/**
 * The hairline band under the hero. Static, not a marquee — there are four
 * items and nothing to scroll past. On narrow screens the items wrap into
 * a block and the trailing note drops onto its own line.
 */
export function FocusStrip() {
  return (
    <section aria-label="Areas of focus" className="border-y border-accent/[0.16] bg-base">
      <div className="mx-auto flex w-full max-w-[1320px] flex-wrap items-center gap-x-[clamp(16px,3vw,44px)] gap-y-3 px-gutter py-6.5">
        <Reveal className="label-sm text-on-base-4">{focusStrip.kicker}</Reveal>

        {focusStrip.items.map((item, i) => (
          <Reveal
            key={item}
            index={i + 1}
            className="flex items-center gap-x-[clamp(16px,3vw,44px)]"
          >
            <span className="text-sm text-sand">{item}</span>
            {i < focusStrip.items.length - 1 && (
              <span aria-hidden="true" className="size-1 rounded-full bg-accent" />
            )}
          </Reveal>
        ))}

        <Reveal index={5} className="label-sm text-on-base-4 tab:ml-auto">
          {focusStrip.note}
        </Reveal>
      </div>
    </section>
  );
}
