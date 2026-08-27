import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ThemeToggle } from "@/components/theme-toggle";
import { Wordmark } from "@/components/wordmark";
import { brand, contact, contactHref, footer } from "@/lib/content";

const CHANNEL_LINK =
  "font-mono text-[11px] tracking-[0.08em] transition-colors duration-300 hover:text-accent";

export function SiteFooter() {
  return (
    <footer className="border-t border-accent/[0.16] bg-base text-on-base-4">
      <div className="mx-auto w-full max-w-[1320px] px-gutter pt-[clamp(50px,5vw,76px)] pb-8">
        <div className="flex flex-col gap-9 tab:flex-row tab:flex-wrap tab:items-end tab:justify-between">
          <Reveal className="max-w-[34ch]">
            <Wordmark size={50} />
            <p className="mt-4 text-[14.5px] leading-[1.74]">{footer.blurb}</p>
          </Reveal>

          <Reveal index={1} as="div">
            <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3">
              {footer.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-colors duration-300 hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </Reveal>

          {/* The one channel, spelled out rather than iconified — a visitor
              checking whether a message is genuinely from him should be able
              to read the number straight off the page. */}
          <Reveal index={2}>
            <a
              href={contactHref.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={CHANNEL_LINK}
            >
              WhatsApp · {contact.number}
            </a>
          </Reveal>

          {/* The theme switch lives here rather than in the header: it is a
              preference, not navigation, and the footer is where a reader
              goes looking for one. */}
          <Reveal
            index={3}
            className="flex w-full flex-wrap items-center justify-between gap-x-8 gap-y-5 border-t border-on-base/10 pt-5.5"
          >
            <span className="font-mono text-[10px] leading-[1.8] tracking-[0.12em] text-on-base-5">
              © {new Date().getFullYear()} {brand.full}. {footer.legal}
            </span>
            <ThemeToggle />
          </Reveal>
        </div>
      </div>
    </footer>
  );
}
