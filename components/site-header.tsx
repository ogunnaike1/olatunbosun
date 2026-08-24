"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";
import { useEffect, useState } from "react";
import { brand, navLinks, primaryCta } from "@/lib/content";

function Wordmark({ size = 21 }: { size?: number }) {
  return (
    <span className="flex items-baseline gap-[10px]">
      <span
        className="font-semibold uppercase tracking-[0.16em]"
        style={{ fontSize: size }}
      >
        {brand.name}
      </span>
      <span className="inline-block size-[5px] -translate-y-[3px] bg-accent-2-on-dark" />
      <span className="text-[11px] uppercase tracking-[0.28em] text-paper/50">
        {brand.role}
      </span>
    </span>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  // Page scroll progress, smoothed, drawn as a hairline under the bar.
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

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

  return (
    <>
      <header
        // Fixed, not sticky — the hero runs underneath it, so at the top the
        // bar is genuinely transparent over the hero's glow rather than over a
        // flat strip of page background.
        className="fixed inset-x-0 top-0 z-50 border-b"
        style={{
          padding: scrolled ? "10px 0" : "20px 0",
          background: scrolled ? "rgba(14,14,14,0.94)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderColor: scrolled ? "rgba(252,252,251,0.16)" : "transparent",
          boxShadow: scrolled ? "0 18px 40px -30px rgba(0,0,0,0.95)" : "none",
          transition:
            "padding 320ms cubic-bezier(.2,.7,.3,1), background 320ms ease, border-color 320ms ease, box-shadow 320ms ease, backdrop-filter 320ms ease",
        }}
      >
        <div className="mx-auto flex w-full max-w-[1360px] items-center justify-between gap-8 px-gutter">
          <a href="#top" className="text-paper">
            <Wordmark />
          </a>

          <nav className="hidden items-center gap-[clamp(14px,1.7vw,30px)] nav:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap border-b border-transparent pb-[3px] text-[14.5px] tracking-[0.06em] text-paper/72 transition-[color,border-color] duration-200 hover:border-accent-on-dark hover:text-paper"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center whitespace-nowrap border border-accent bg-accent px-[22px] py-[11px] text-[14px] uppercase tracking-[0.10em] text-paper transition-[background-color,color,border-color,transform] duration-[220ms] hover:-translate-y-px hover:border-accent-on-dark hover:bg-accent-on-dark hover:text-ink"
            >
              {primaryCta.label}
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="inline-flex min-h-11 items-center gap-3 border border-paper/22 px-[18px] py-[10px] text-[13px] uppercase tracking-[0.10em] text-paper transition-colors duration-200 hover:border-accent-on-dark nav:hidden"
          >
            Menu
            <span className="flex flex-col gap-[4px]">
              <span className="block h-px w-[18px] bg-paper/72" />
              <span className="block h-px w-[18px] bg-paper/72" />
            </span>
          </button>
        </div>

        {/* Scroll progress. Sits on the bar's bottom edge, grows left to right. */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-x-0 -bottom-px h-0.5 origin-left bg-accent-on-dark"
          style={{ scaleX: progress }}
        />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-ink/98 backdrop-blur-[18px] nav:hidden"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? undefined : { opacity: 0 }}
            transition={{ duration: 0.24 }}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className="flex items-center justify-between px-gutter py-[22px]">
              <Wordmark />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                autoFocus
                className="inline-flex size-11 items-center justify-center border border-paper/22 text-[18px] text-paper transition-colors duration-200 hover:border-accent-on-dark"
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-6 px-gutter">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-[28px] tracking-[-0.01em] text-paper/72 transition-colors duration-200 hover:text-paper"
                  initial={reduced ? false : { opacity: 0, y: 18 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.42,
                      ease: [0.2, 0.7, 0.3, 1],
                      delay: reduced ? 0 : 0.06 + i * 0.05,
                    },
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="px-gutter pb-[clamp(28px,6vw,56px)]">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center justify-center bg-accent px-8 py-4 text-[14px] uppercase tracking-[0.12em] text-paper"
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
