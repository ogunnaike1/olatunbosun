import { brand } from "@/lib/content";

/**
 * The mark: a square rotated to a diamond, a lit dot at its apex, and the
 * monogram centred inside. Drawn in spans rather than an SVG so it inherits
 * the display face and scales with the `size` prop alone.
 */
export function Wordmark({ size = 38 }: { size?: number }) {
  return (
    <span className="flex items-center" style={{ gap: size >= 46 ? 16 : 13 }}>
      <span
        aria-hidden="true"
        className="relative grid shrink-0 place-items-center"
        style={{ width: size, height: size }}
      >
        <span
          className="absolute border border-gold/60"
          style={{ inset: size * 0.13, transform: "rotate(45deg)" }}
        />
        <span
          className="absolute top-0 left-1/2 rounded-full bg-gold"
          style={{
            width: size * 0.105,
            height: size * 0.105,
            marginLeft: -size * 0.0525,
            boxShadow: "0 0 8px rgba(232,184,75,.9)",
          }}
        />
        <span
          className="font-display text-gold"
          style={{ fontSize: size * 0.5, lineHeight: 1 }}
        >
          {brand.monogram}
        </span>
      </span>

      <span className="flex flex-col gap-[3px]">
        <span
          className="font-display leading-none tracking-[-0.005em] text-cream"
          style={{ fontSize: size * 0.58 }}
        >
          {brand.name}
        </span>
        <span className="font-mono text-[8px] tracking-[0.34em] text-gold uppercase">
          {brand.role}
        </span>
      </span>
    </span>
  );
}
