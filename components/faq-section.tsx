"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useId, useState } from "react";
import { Reveal } from "@/components/reveal";
import { faqIntro, faqs } from "@/lib/content";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  const reduced = useReducedMotion();
  const baseId = useId();

  return (
    <section
      id="faq"
      className="border-t border-ink-text/20 bg-paper py-section-editorial text-ink-text"
    >
      <div
        className="mx-auto grid w-full max-w-[1360px] items-start gap-colgap px-gutter"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
      >
        <Reveal className="tab:sticky tab:top-[130px]">
          <div className="text-[11.5px] uppercase tracking-[0.30em] text-accent">
            {faqIntro.kicker}
          </div>
          <h2 className="mt-6 text-h2 balance">
            {faqIntro.headlineTop}
            <br />
            <span className="italic text-accent">{faqIntro.headlineItalic}</span>
          </h2>
          <p className="mt-7 text-lead max-w-[34ch] text-ink-text/66">
            {faqIntro.lead}
          </p>
        </Reveal>

        <dl className="m-0">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-panel-${i}`;
            const buttonId = `${baseId}-button-${i}`;

            return (
              <Reveal key={faq.q} index={i} className="border-t border-ink-text/20">
                <dt>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors duration-200 hover:text-accent"
                  >
                    <span className="text-[clamp(18px,1.6vw,21px)] leading-[1.35] balance">
                      {faq.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className="mt-[3px] shrink-0 text-[20px] leading-none text-accent"
                      style={{
                        transform: isOpen ? "rotate(45deg)" : "none",
                        transition: reduced
                          ? undefined
                          : "transform 260ms cubic-bezier(.2,.7,.3,1)",
                      }}
                    >
                      +
                    </span>
                  </button>
                </dt>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.dd
                      id={panelId}
                      aria-labelledby={buttonId}
                      className="m-0 overflow-hidden"
                      initial={reduced ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduced ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.34, ease: [0.2, 0.7, 0.3, 1] }}
                    >
                      <p className="max-w-[62ch] pb-7 text-[16.5px] leading-[1.68] text-ink-text/66 pretty">
                        {faq.a}
                      </p>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
