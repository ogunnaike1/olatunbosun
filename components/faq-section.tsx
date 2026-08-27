"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useId, useState } from "react";
import { Kicker, Reveal } from "@/components/reveal";
import { faqIntro, faqs } from "@/lib/content";

/**
 * One open at a time, first open by default. Built from buttons rather
 * than <details> so the height can animate and the open state stays in
 * React — <details> gives you neither.
 */
export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  const reduced = useReducedMotion();
  const baseId = useId();

  return (
    <section
      id="faq"
      aria-labelledby="faq-h"
      className="border-t border-on-alt/10 bg-card text-on-alt"
    >
      <div className="mx-auto w-full max-w-[1320px] px-gutter py-section">
        <div className="grid items-start gap-colgap nav:grid-cols-[0.72fr_1fr]">
          <Reveal className="nav:sticky nav:top-[128px]">
            <Kicker tone="light">{faqIntro.kicker}</Kicker>
            <h2 id="faq-h" className="mt-6 max-w-[16ch] text-h2 balance">
              {faqIntro.headline}
            </h2>
            <p className="mt-6 max-w-[36ch] text-[16.5px] leading-[1.7] text-on-alt-3">
              {faqIntro.lead}
            </p>
          </Reveal>

          <dl className="m-0">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              const panelId = `${baseId}-panel-${i}`;
              const buttonId = `${baseId}-button-${i}`;

              return (
                <Reveal
                  key={faq.q}
                  index={i}
                  className={`border-t border-on-alt/[0.14] ${
                    i === faqs.length - 1 ? "border-b" : ""
                  }`}
                >
                  <dt className="m-0">
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
                    >
                      <span
                        className={`font-display text-[clamp(19px,1.8vw,23px)] leading-[1.28] balance transition-colors duration-300 ${
                          isOpen ? "text-on-alt" : "text-on-alt-2"
                        }`}
                      >
                        {faq.q}
                      </span>
                      {/* A plus that rotates into a cross — the only motion
                          the control needs. */}
                      <span
                        aria-hidden="true"
                        className="relative flex size-6 shrink-0 items-center justify-center"
                        style={{
                          transform: isOpen ? "rotate(45deg)" : "none",
                          transition: reduced
                            ? undefined
                            : "transform 380ms cubic-bezier(.16,1,.3,1)",
                        }}
                      >
                        <span className="absolute h-px w-3.5 bg-accent-2" />
                        <span className="absolute h-3.5 w-px bg-accent-2" />
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
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className="m-0 max-w-[62ch] pb-7 text-[15.5px] leading-[1.72] text-on-alt-3 pretty">
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
      </div>
    </section>
  );
}
