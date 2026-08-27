import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { Wordmark } from "@/components/wordmark";
import { brand, contactPage } from "@/lib/content";

export const metadata: Metadata = {
  title: contactPage.title,
  description: contactPage.description,
  openGraph: {
    type: "website",
    siteName: brand.full,
    title: `Contact — ${brand.full}`,
    description: contactPage.ogDescription,
  },
};

/** 20px line art, one stroke weight, gold. */
const icons = {
  phone: (
    <>
      <rect x="5.5" y="1.5" width="9" height="17" rx="1.6" fill="none" strokeWidth="1.3" />
      <line x1="8.6" y1="15.6" x2="11.4" y2="15.6" strokeWidth="1.3" />
    </>
  ),
  whatsapp: (
    <>
      <circle cx="10" cy="10" r="8.4" fill="none" strokeWidth="1.3" />
      <path d="M7 12.5 L5.6 15.4 L8.6 14.1" fill="none" strokeWidth="1.3" />
    </>
  ),
  mail: (
    <>
      <rect x="1.6" y="4.4" width="16.8" height="11.2" fill="none" strokeWidth="1.3" />
      <path d="M1.6 4.4 L10 11 L18.4 4.4" fill="none" strokeWidth="1.3" />
    </>
  ),
};

export default function ContactPage() {
  return (
    <>
      {/* Sticky rather than fixed, and stripped to a wordmark and a way
          back — this page has one job and no navigation to offer. */}
      <header className="sticky top-0 z-90 border-b border-accent/[0.22] bg-base/[0.84] backdrop-blur-[16px] backdrop-saturate-150">
        <div className="mx-auto flex h-18 w-full max-w-[1320px] items-center justify-between px-gutter">
          <Link href="/#top" aria-label={`${brand.full} — home`}>
            <Wordmark />
          </Link>
          <Link
            href="/#top"
            className="label inline-flex items-center gap-2.5 text-[10px] tracking-[0.18em] text-on-base-3 transition-colors duration-300 hover:text-accent"
          >
            <span aria-hidden="true" className="text-xs">
              ←
            </span>
            Back to site
          </Link>
        </div>
      </header>

      <main>
        <section aria-labelledby="c-h" className="ground-base relative overflow-hidden">
          <div
            aria-hidden="true"
            className="field-lines pointer-events-none absolute inset-0"
          />
          <div className="relative mx-auto w-full max-w-[1320px] px-gutter pt-[clamp(60px,8vw,116px)] pb-[clamp(44px,5vw,76px)]">
            <div className="grid items-start gap-[clamp(40px,5vw,84px)] nav:grid-cols-[1fr_1.05fr]">
              <div>
                <Reveal>
                  <div className="flex items-center gap-3.5">
                    <span
                      aria-hidden="true"
                      className="h-px w-8.5 shrink-0"
                      style={{
                        background:
                          "linear-gradient(90deg, var(--color-accent), transparent)",
                      }}
                    />
                    <span className="label text-kicker">{contactPage.kicker}</span>
                  </div>
                  <h1
                    id="c-h"
                    className="mt-6.5 text-[clamp(46px,6.8vw,86px)] leading-none tracking-[-0.02em] text-on-base"
                  >
                    {contactPage.headline}
                  </h1>
                  <p className="mt-6.5 max-w-[42ch] text-[17px] leading-[1.7] text-on-base-2">
                    {contactPage.lead}
                  </p>
                </Reveal>

                {/* Each channel is a full-width row that indents on hover —
                    the same gesture as a list item stepping forward. */}
                <Reveal delay={0.12} className="mt-11 flex flex-col">
                  {contactPage.channels.map((channel, i) => (
                    <a
                      key={channel.label}
                      href={channel.href}
                      className={`group flex items-center gap-4.5 border-t border-accent/[0.22] px-1.5 py-6 transition-[padding-left,background] duration-500 hover:bg-accent/[0.06] hover:pl-4.5 ${
                        i === contactPage.channels.length - 1 ? "border-b" : ""
                      }`}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="shrink-0"
                        stroke="var(--color-accent)"
                      >
                        {icons[channel.icon]}
                      </svg>
                      <span className="flex flex-col gap-1.5">
                        <span className="label-sm text-on-base-4">{channel.label}</span>
                        <span className="text-lg text-on-base">{channel.value}</span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="ml-auto font-mono text-xs text-accent"
                      >
                        →
                      </span>
                    </a>
                  ))}
                </Reveal>

                <Reveal delay={0.2} className="mt-7 flex items-start gap-3">
                  <span aria-hidden="true" className="mt-0.5 h-10 w-px shrink-0 bg-accent" />
                  <p className="label m-0 max-w-[40ch] text-[10px] leading-[1.9] tracking-[0.06em] text-on-base-5">
                    {contactPage.emailNote}
                  </p>
                </Reveal>
              </div>

              <Reveal delay={0.08}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>

        {/* The three things worth knowing before anyone sends money or
            trusts a message claiming to be him. */}
        <section aria-label="Before you get in touch" className="ground-alt text-on-alt">
          <div
            className="mx-auto grid w-full max-w-[1320px] gap-[clamp(24px,3vw,48px)] px-gutter py-[clamp(52px,6vw,88px)]"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))" }}
          >
            {contactPage.assurances.map((item, i) => (
              <Reveal key={item.title} index={i}>
                <div className="font-mono text-[10.5px] tracking-[0.18em] text-accent-2">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="mt-4 text-[25px] leading-[1.14]">{item.title}</h2>
                <p className="mt-3 text-[14.5px] leading-[1.72] text-on-alt-3">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
