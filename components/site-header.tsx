"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { brand, navLinks, primaryCta } from "@/lib/content";

/** `light` = the bar has taken its solid state, so the mark inverts to deep blue. */
function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span
        className={`inline-flex size-10 items-center justify-center rounded-chip text-[16px] font-extrabold transition-colors duration-300 ${
          light ? "bg-deep text-white" : "bg-white/12 text-white ring-1 ring-white/20"
        }`}
      >
        {brand.name.charAt(0)}
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`text-[17px] font-extrabold tracking-[-0.02em] transition-colors duration-300 ${
            light ? "text-deep" : "text-white"
          }`}
        >
          {brand.name}
        </span>
        <span
          className={`mt-1 text-[10px] font-bold uppercase tracking-[0.16em] transition-colors duration-300 ${
            light ? "text-deep" : "text-white"
          }`}
        >
          {brand.role}
        </span>
      </span>
    </span>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body scroll lock + Esc to close while the mobile sheet is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const light = scrolled;

  return (
    <>
      <header
        // Fixed, so the hero runs underneath and the bar is genuinely
        // transparent at rest rather than sitting on a strip of background.
        className="fixed inset-x-0 top-0 z-50"
        style={{
          padding: scrolled ? "10px 0" : "20px 0",
          background: scrolled ? "rgba(237,236,232,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(3,68,136,0.08)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 10px 30px -24px rgba(3,68,136,0.5)" : "none",
          transition:
            "padding 380ms cubic-bezier(.22,.61,.36,1), background 380ms ease, border-color 380ms ease, box-shadow 380ms ease",
        }}
      >
        <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-8 px-gutter">
          <a href="#top" aria-label={`${brand.name} — home`}>
            <Wordmark light={light} />
          </a>

          <nav className="hidden items-center gap-1 nav:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-btn px-3.5 py-2 text-[14px] font-semibold transition-colors duration-300 ${
                  light
                    ? "text-deep hover:bg-stone hover:text-deep"
                    : "text-white/90 hover:bg-white/12 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}

            <a
              href={primaryCta.href}
              className={`ml-3 inline-flex items-center whitespace-nowrap rounded-btn px-6 py-3 text-[13.5px] font-bold transition-colors duration-300 ${
                light
                  ? "bg-deep text-white hover:bg-deep-2"
                  : "bg-cream text-deep hover:bg-stone"
              }`}
            >
              {primaryCta.label}
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className={`inline-flex min-h-11 items-center gap-3 rounded-btn px-5 py-2.5 text-[13px] font-bold transition-colors duration-300 nav:hidden ${
              light
                ? "bg-cream text-deep hover:bg-stone"
                : "bg-white/12 text-white ring-1 ring-white/20 hover:bg-white/20"
            }`}
          >
            Menu
            <span className="flex flex-col gap-1">
              <span
                className={`block h-0.5 w-4 rounded-full ${light ? "bg-deep" : "bg-cream"}`}
              />
              <span
                className={`block h-0.5 w-4 rounded-full ${light ? "bg-deep" : "bg-cream"}`}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-deep nav:hidden"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? undefined : { opacity: 0 }}
            transition={{ duration: 0.24 }}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className="flex items-center justify-between px-gutter py-5">
              <Wordmark />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                autoFocus
                className="inline-flex size-11 items-center justify-center rounded-btn bg-white/12 text-[17px] text-white ring-1 ring-white/20 transition-colors duration-300 hover:bg-white/20"
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-2 px-gutter">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-btn px-4 py-3.5 text-[26px] font-bold tracking-[-0.02em] text-white/85 transition-colors duration-300 hover:bg-white/10 hover:text-white"
                  initial={reduced ? false : { opacity: 0, y: 14 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.4,
                      ease: [0.22, 0.61, 0.36, 1],
                      delay: reduced ? 0 : 0.06 + i * 0.05,
                    },
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="px-gutter pb-[clamp(28px,6vw,52px)]">
              <a
                href={primaryCta.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center justify-center rounded-btn bg-deep px-8 py-4 text-[14px] font-bold text-white"
              >
                {primaryCta.label}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
