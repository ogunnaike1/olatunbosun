import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Wordmark } from "@/components/wordmark";
import { brand, contact, contactHref, footer } from "@/lib/content";

const CHANNEL_LINK =
  "font-mono text-[11px] tracking-[0.08em] transition-colors duration-300 hover:text-gold";

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/[0.16] bg-ink text-[#8e877c]">
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
                  className="text-sm transition-colors duration-300 hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </Reveal>

          {/* The three real channels, spelled out rather than iconified — a
              visitor checking whether a message is genuinely from him should
              be able to read the number straight off the page. */}
          <Reveal index={2} className="flex flex-wrap gap-x-6 gap-y-2">
            <a href={contactHref.phone} className={CHANNEL_LINK}>
              {contact.phone}
            </a>
            <a href={contactHref.whatsapp} className={CHANNEL_LINK}>
              WhatsApp
            </a>
            <a href={contactHref.email} className={CHANNEL_LINK}>
              {contact.email}
            </a>
          </Reveal>

          <Reveal
            index={3}
            className="w-full border-t border-cream/10 pt-5.5 font-mono text-[10px] leading-[1.8] tracking-[0.12em] text-[#6e6862]"
          >
            © {new Date().getFullYear()} {brand.full}. {footer.legal}
          </Reveal>
        </div>
      </div>
    </footer>
  );
}
