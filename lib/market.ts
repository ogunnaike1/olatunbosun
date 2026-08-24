/**
 * Deterministic series for the hero panel's chart.
 *
 * Illustrative of the format of a market note — not a published call and not
 * live data. Swap the generated values for real OHLC/closes when a provider
 * exists; the normalisation keeps the plot filled at any price range.
 */

const VIEW_W = 460;
const VIEW_H = 150;
const PAD_Y = 14;

/** Linear congruential generator — same series on server and client. */
function lcg(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export type Series = {
  linePath: string;
  areaPath: string;
  /** Horizontal guide lines, as viewBox y-coordinates. */
  guides: number[];
  /** Where the line ends, for the terminal dot. */
  end: { x: number; y: number };
};

export function buildSeries(seed = 11, points = 56): Series {
  const rnd = lcg(seed);
  const values: number[] = [];
  let v = 50;
  for (let i = 0; i < points; i++) {
    // Gentle drift with mean reversion — a market, not a rocket.
    v += (rnd() - 0.47) * 7 - (v - 50) * 0.04;
    values.push(v);
  }

  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  const toY = (val: number) => PAD_Y + (1 - (val - min) / span) * (VIEW_H - PAD_Y * 2);

  const coords = values.map((val, i) => {
    const x = (i / (points - 1)) * VIEW_W;
    return { x, y: toY(val) };
  });

  const linePath = `M ${coords.map((c) => `${c.x.toFixed(1)},${c.y.toFixed(1)}`).join(" L ")}`;
  const areaPath = `${linePath} L ${VIEW_W},${VIEW_H} L 0,${VIEW_H} Z`;

  return {
    linePath,
    areaPath,
    guides: [0.25, 0.55, 0.82].map((f) => PAD_Y + f * (VIEW_H - PAD_Y * 2)),
    end: coords[coords.length - 1],
  };
}

export const VIEWBOX = `0 0 ${VIEW_W} ${VIEW_H}`;
