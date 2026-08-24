import {
  EnvelopeSimple,
  InstagramLogo,
  Phone,
  TelegramLogo,
  WhatsappLogo,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { ContactForm } from "@/components/contact-form";
import { Chip, Reveal } from "@/components/reveal";
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
    <section id="contact" className="bg-stone py-section">
      <div
        className="mx-auto grid w-full max-w-[1280px] items-start gap-colgap px-gutter"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))" }}
      >
        <Reveal>
          <Chip>{contactIntro.kicker}</Chip>
          <h2 className="mt-6 text-h2 balance text-deep">
            {contactIntro.headlineTop} {contactIntro.headlineItalic}
          </h2>
          <p className="mt-5 max-w-[42ch] text-lead text-deep">{contactIntro.lead}</p>

          <ul className="mt-9 m-0 grid list-none gap-3 p-0">
            {channels.map((channel, i) => {
              const IconComponent = icons[channel.icon];
              return (
                <Reveal as="li" key={channel.name} index={i}>
                  <a
                    href={channel.href}
                    className="group card flex items-center gap-4 p-4 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-lift"
                  >
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-chip bg-pale text-deep transition-colors duration-300 group-hover:bg-bright group-hover:text-white">
                      <IconComponent size={20} weight="duotone" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[15px] font-bold text-deep">
                        {channel.name}
                      </span>
                      <span className="block truncate text-[13.5px] text-deep">
                        {channel.handle}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={17}
                      weight="bold"
                      aria-hidden="true"
                      className="ml-auto shrink-0 text-deep transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </Reveal>
              );
            })}
          </ul>

          <p className="mt-7 text-[14.5px] leading-[1.7] text-deep">
            Prefer email?{" "}
            <a
              href={`mailto:${contact.email}`}
              className="font-semibold text-deep underline decoration-deep/30 underline-offset-4 transition-colors duration-300 hover:decoration-deep"
            >
              {contact.email}
            </a>
          </p>
        </Reveal>

        <Reveal delay={0.08} className="card p-[clamp(24px,2.8vw,44px)]">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
