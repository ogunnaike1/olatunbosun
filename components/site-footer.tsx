import {
  brand,
  channels,
  contact,
  footerBlurb,
  footerColumns,
  riskDisclaimer,
} from "@/lib/content";

/** TODO: these pages do not exist yet. */
const legal = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Risk Disclaimer", href: "#" },
];

export function SiteFooter() {
  return (
    <footer className="bg-deep text-white">
      <div
        className="mx-auto w-full max-w-[1280px] px-gutter"
        style={{ padding: "clamp(64px, 7vw, 104px) var(--spacing-gutter) 44px" }}
      >
        <div
          className="grid gap-x-12 gap-y-14"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
        >
          <div>
            <span className="flex items-center gap-3">
              <span className="inline-flex size-11 items-center justify-center rounded-chip bg-deep text-[17px] font-extrabold text-white">
                {brand.name.charAt(0)}
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-[18px] font-extrabold tracking-[-0.02em]">
                  {brand.name}
                </span>
                <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                  {brand.role}
                </span>
              </span>
            </span>
            <p className="mt-6 max-w-[34ch] text-[14.5px] leading-[1.7] text-white/70">
              {footerBlurb}
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.heading}>
              <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                {column.heading}
              </div>
              <ul className="mt-6 flex list-none flex-col gap-3 p-0">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14.5px] text-white/90 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-white">
              Get in touch
            </div>
            <ul className="mt-6 flex list-none flex-col gap-3 p-0">
              {channels.map((channel) => (
                <li key={channel.name}>
                  <a
                    href={channel.href}
                    className="text-[14.5px] text-white/90 transition-colors duration-300 hover:text-white"
                  >
                    {channel.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-[14.5px] text-white/90 transition-colors duration-300 hover:text-white"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-[clamp(52px,6vw,88px)] rounded-card bg-white/[0.05] p-6 ring-1 ring-white/10">
          <p className="m-0 max-w-[86ch] text-[13px] leading-[1.75] text-white/70">
            <span className="font-bold text-white">Risk disclaimer.</span>{" "}
            {riskDisclaimer}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 text-[13px] text-white/60">
            <span>
              © {new Date().getFullYear()} {brand.name}. All rights reserved.
            </span>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
              {legal.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
