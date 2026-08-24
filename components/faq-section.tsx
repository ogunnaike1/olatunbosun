"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useId, useState } from "react";
import { Chip, Reveal } from "@/components/reveal";
import { faqIntro, faqs } from "@/lib/content";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  const reduced = useReducedMotion();
  const baseId = useId();

  return (
    <section id="faq" className="bg-stone py-section">
      <div
        className="mx-auto grid w-full max-w-[1280px] items-start gap-colgap px-gutter"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
      >
        <Reveal className="tab:sticky tab:top-[112px]">
          <Chip>{faqIntro.kicker}</Chip>
          <h2 className="mt-6 text-h2 balance text-deep">
            {faqIntro.headlineTop} {faqIntro.headlineItalic}
          </h2>
          <p className="mt-5 max-w-[36ch] text-lead text-deep">{faqIntro.lead}</p>
        </Reveal>

        <dl className="m-0 grid gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-panel-${i}`;
            const buttonId = `${baseId}-button-${i}`;

            return (
              <Reveal key={faq.q} index={i} className="card overflow-hidden px-5 transition-shadow duration-300 hover:shadow-lift">
                <dt>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span
                      className={`text-[16.5px] font-bold leading-[1.4] balance transition-colors duration-300 ${
                        isOpen ? "text-deep" : "text-deep"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`relative flex size-8 shrink-0 items-center justify-center rounded-chip transition-colors duration-300 ${
                        isOpen ? "bg-deep" : "bg-pale"
                      }`}
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "none",
                        transition: reduced
                          ? undefined
                          : "transform 320ms cubic-bezier(.22,.61,.36,1)",
                      }}
                    >
                      <span className={`absolute h-0.5 w-3 rounded-full ${isOpen ? "bg-cream" : "bg-deep"}`} />
                      <span
                        className={`absolute h-3 w-0.5 rounded-full transition-opacity duration-300 ${isOpen ? "bg-cream" : "bg-deep"}`}
                        style={{ opacity: isOpen ? 0 : 1 }}
                      />
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
                      transition={{ duration: 0.36, ease: [0.22, 0.61, 0.36, 1] }}
                    >
                      <p className="m-0 max-w-[64ch] pb-6 text-[15px] leading-[1.7] text-deep pretty">
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
