import { ArrowUpRight, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { analysisPanel } from "@/lib/content";
import { buildSeries, VIEWBOX } from "@/lib/market";

const series = buildSeries();

/**
 * The hero's product surface. A real raised card — not a hairline frame — so
 * the hero has something with weight sitting in it.
 */
export function HeroPanel() {
  return (
    <div className="relative">
      {/* Offset card behind, to give the stack depth. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-4 translate-y-4 rounded-card bg-white/5 ring-1 ring-white/10"
      />

      <div
        className="relative rounded-card bg-white/[0.07] p-[clamp(20px,2.2vw,30px)] ring-1 ring-white/15 backdrop-blur-sm"
        style={{ boxShadow: "var(--shadow-panel)" }}
      >
        <div className="flex items-start justify-between gap-5">
          <div>
            <span className="chip bg-white/12 text-white ring-1 ring-white/15">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-pale" />
              Market note
            </span>
            <div className="mt-4 text-[26px] font-extrabold tracking-[-0.03em] text-white">
              {analysisPanel.instrument}
            </div>
          </div>
          <div className="rounded-chip bg-white/8 px-3.5 py-2.5 text-center ring-1 ring-white/12">
            <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-white">
              Timeframe
            </div>
            <div className="mt-1 text-[15px] font-semibold text-white">
              {analysisPanel.timeframe}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-chip bg-deep/40 p-4 ring-1 ring-white/10">
          <svg
            viewBox={VIEWBOX}
            preserveAspectRatio="none"
            aria-hidden="true"
            className="block w-full"
            style={{ height: "clamp(112px, 12vw, 148px)" }}
          >
            <defs>
              <linearGradient id="heroFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ccdde8" stopOpacity="0.34" />
                <stop offset="100%" stopColor="#ccdde8" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            {series.guides.map((y) => (
              <line
                key={y}
                x1="0"
                x2="460"
                y1={y}
                y2={y}
                stroke="#ffffff"
                strokeOpacity="0.08"
              />
            ))}
            <path d={series.areaPath} fill="url(#heroFill)" />
            <path
              d={series.linePath}
              fill="none"
              stroke="#ccdde8"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            <circle cx={series.end.x} cy={series.end.y} r="4" fill="#ffffff" />
          </svg>
        </div>

        <dl className="mt-5 grid grid-cols-3 gap-3">
          {analysisPanel.levels.map((level) => (
            <div key={level.label} className="rounded-chip bg-white/6 p-3.5 ring-1 ring-white/10">
              <dt className="text-[9.5px] font-bold uppercase tracking-[0.12em] text-white">
                {level.label}
              </dt>
              <dd className="m-0 mt-1.5 text-[16px] font-bold tabular text-white">
                {level.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-5 flex items-center gap-3 rounded-chip bg-white/6 p-3.5 ring-1 ring-white/10">
          <ShieldCheck size={20} weight="duotone" color="#ccdde8" aria-hidden="true" />
          <p className="m-0 text-[13px] leading-[1.5] text-white/90">
            Illustrative of the written notes clients receive. Not a recommendation.
          </p>
        </div>

        <a
          href="#services"
          className="mt-5 flex items-center justify-between gap-4 rounded-btn bg-cream px-5 py-3.5 text-[13.5px] font-bold text-deep transition-colors duration-300 hover:bg-stone"
        >
          See what a client receives
          <ArrowUpRight size={17} weight="bold" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
