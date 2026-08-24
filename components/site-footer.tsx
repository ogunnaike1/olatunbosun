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
    <footer className="bg-ink" style={{ padding: "clamp(50px, 6vw, 80px) 0 40px" }}>
      <div className="mx-auto w-full max-w-[1360px] px-gutter">
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "clamp(30px, 4vw, 56px)",
          }}
        >
          <div>
            <span className="flex items-baseline gap-[10px]">
              <span className="text-[20px] font-semibold uppercase tracking-[0.16em]">
                {brand.name}
              </span>
              <span className="inline-block size-[5px] -translate-y-[3px] bg-accent-2-on-dark" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-paper/50">
                {brand.role}
              </span>
            </span>
            <p className="mt-5 max-w-[32ch] text-[15.5px] leading-[1.6] text-paper/50">
              {footerBlurb}
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.heading}>
              <div className="text-[11px] uppercase tracking-[0.24em] text-paper/50">
                {column.heading}
              </div>
              <ul className="mt-5 flex list-none flex-col gap-[9px] p-0">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[15.5px] text-paper/72 transition-colors duration-200 hover:text-accent-on-dark"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className="text-[11px] uppercase tracking-[0.24em] text-paper/50">
              Get in touch
            </div>
            <ul className="mt-5 flex list-none flex-col gap-[9px] p-0">
              {channels.map((channel) => (
                <li key={channel.name}>
                  <a
                    href={channel.href}
                    className="text-[15.5px] text-paper/72 transition-colors duration-200 hover:text-accent-on-dark"
                  >
                    {channel.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-[15.5px] text-paper/72 transition-colors duration-200 hover:text-accent-on-dark"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-[clamp(44px,5vw,72px)] flex flex-wrap items-start justify-between gap-8 border-t border-paper/[0.09] pt-[26px]">
          <p className="max-w-[70ch] text-[13.5px] leading-[1.6] text-paper/50">
            <span className="font-semibold text-paper/72">Risk disclaimer.</span>{" "}
            {riskDisclaimer}
          </p>

          <div className="flex flex-wrap items-center gap-5 text-[13.5px] text-paper/50">
            <span>
              © {new Date().getFullYear()} {brand.name}
            </span>
            {legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors duration-200 hover:text-accent-on-dark"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
