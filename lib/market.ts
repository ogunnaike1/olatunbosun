/**
 * Deterministic series for the decorative hero panels.
 *
 * Everything here is an illustrative placeholder. When a real market data
 * provider is wired in, replace `buildCandles`/`buildPortfolioPath` inputs
 * with real OHLC / equity-curve points and keep the same normalisation so
 * the panels stay filled regardless of the price range.
 */

const CANDLE_COUNT = 26;
const VIEW_W = 420;
const CANDLE_VIEW_H = 150;
const PLOT_PAD = 12;

/** Linear congruential generator — same series on server and client. */
function lcg(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export type Candle = {
  /** body */
  x: number;
  y: number;
  w: number;
  h: number;
  /** wick */
  wx: number;
  wy: number;
  wh: number;
  color: string;
  up: boolean;
};

export function buildCandles(seed = 7): Candle[] {
  const rnd = lcg(seed);
  const raw: { open: number; close: number; high: number; low: number }[] = [];

  let price = 100;
  for (let i = 0; i < CANDLE_COUNT; i++) {
    const open = price;
    const close = open + (rnd() - 0.46) * 9;
    const high = Math.max(open, close) + rnd() * 4.5;
    const low = Math.min(open, close) - rnd() * 4.5;
    raw.push({ open, close, high, low });
    price = close;
  }

  // Normalise the whole series into the viewBox so candles fill the plot.
  const min = Math.min(...raw.map((c) => c.low));
  const max = Math.max(...raw.map((c) => c.high));
  const span = max - min || 1;
  const scale = (CANDLE_VIEW_H - PLOT_PAD * 2) / span;
  const toY = (v: number) => PLOT_PAD + (max - v) * scale;

  return raw.map((c, i) => {
    const up = c.close >= c.open;
    const x = 6 + i * 15.8;
    const top = toY(Math.max(c.open, c.close));
    const bottom = toY(Math.min(c.open, c.close));
    return {
      x,
      y: top,
      w: 8.5,
      h: Math.max(1.5, bottom - top),
      wx: x + 4.2,
      wy: toY(c.high),
      wh: Math.max(1, toY(c.low) - toY(c.high)),
      color: up ? "#01e7ff" : "#4e8bfa",
      up,
    };
  });
}

/** Rising equity curve for the portfolio slide, viewBox 420 × 120. */
export function buildPortfolioPath(seed = 19) {
  const rnd = lcg(seed);
  const points = 32;
  const h = 120;
  const values: number[] = [];
  let v = 22;
  for (let i = 0; i < points; i++) {
    v += (rnd() - 0.32) * 6;
    values.push(v);
  }
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;

  const coords = values.map((val, i) => {
    const x = (i / (points - 1)) * VIEW_W;
    const y = 10 + (1 - (val - min) / span) * (h - 22);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });

  const linePath = `M ${coords.join(" L ")}`;
  const areaPath = `${linePath} L ${VIEW_W},${h} L 0,${h} Z`;
  return { linePath, areaPath };
}
