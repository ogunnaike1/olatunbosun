import {
  EnvelopeSimple,
  InstagramLogo,
  Phone,
  TelegramLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { channels, contact, contactIntro } from "@/lib/content";

const icons: Record<string, Icon> = {
  "whatsapp-logo": WhatsappLogo,
  "telegram-logo": TelegramLogo,
  "instagram-logo": InstagramLogo,
  "envelope-simple": EnvelopeSimple,
  phone: Phone,
};

export function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-ink-text/20 bg-paper text-ink-text"
      style={{ padding: "clamp(78px, 10vw, 140px) 0 clamp(72px, 9vw, 120px)" }}
    >
      <div
        className="mx-auto grid w-full max-w-[1360px] items-start px-gutter"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "clamp(40px, 5vw, 88px)",
        }}
      >
        <Reveal>
          <div className="text-[11.5px] uppercase tracking-[0.30em] text-accent">
            {contactIntro.kicker}
          </div>
          <h2 className="mt-6 text-h2 balance">
            {contactIntro.headlineTop}
            <br />
            <span className="italic text-accent">{contactIntro.headlineItalic}</span>
          </h2>
          <p className="mt-7 text-lead max-w-[38ch] text-ink-text/66">{contactIntro.lead}</p>

          {/* Navy tiles on the paper ground — the 1px gap lets the paper through
              as the hairline, so the grid is drawn by the background itself. */}
          <div
            className="mt-11 grid gap-px bg-paper"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))" }}
          >
            {channels.map((channel, i) => {
              const IconComponent = icons[channel.icon];
              return (
                <Reveal key={channel.name} index={i} className="bg-ink text-paper">
                  <a
                    href={channel.href}
                    className="block h-full p-[clamp(18px,2vw,26px)] transition-colors duration-[240ms] hover:bg-accent"
                  >
                    <IconComponent
                      size={24}
                      weight="duotone"
                      color="#01e7ff"
                      aria-hidden="true"
                    />
                    <div className="mt-4 text-[16.5px]">{channel.name}</div>
                    <div className="mt-1 text-[13px] text-paper/90">{channel.handle}</div>
                  </a>
                </Reveal>
              );
            })}
          </div>

          <p className="mt-8 text-[15px] leading-[1.6] text-ink-text/66">
            Or email{" "}
            <a
              href={`mailto:${contact.email}`}
              className="border-b border-accent/40 text-accent transition-colors duration-200 hover:border-accent"
            >
              {contact.email}
            </a>
            .
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
