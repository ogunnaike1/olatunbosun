"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/wordmark";
import { brand, contact, navLinks, primaryCta } from "@/lib/content";

/**
 * Fixed, and transparent at rest — the hero's own gradient is the header's
 * background until you scroll, at which point the bar takes on ink, a gold
 * hairline and a shorter height. All three transition together.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  // Read progress off the document rather than a ref, so the bar tracks the
  // whole page. The spring is what stops it snapping on fast wheel scrolls;
  // with reduced motion the raw value is bound and moves instantly.
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });
  const progress = reduced ? scrollYProgress : smoothProgress;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The panel is part of the fixed bar, so the page behind it still
  // scrolls; lock the body while it is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className="fixed inset-x-0 top-0 z-90"
      style={{
        background: solid ? "rgba(14,13,12,0.92)" : "rgba(14,13,12,0)",
        borderBottom: `1px solid ${solid ? "rgba(232,184,75,0.18)" : "rgba(232,184,75,0)"}`,
        backdropFilter: solid ? "saturate(150%) blur(16px)" : "none",
        WebkitBackdropFilter: solid ? "saturate(150%) blur(16px)" : "none",
        transition:
          "background 500ms cubic-bezier(.16,1,.3,1), border-color 500ms ease, backdrop-filter 500ms ease",
      }}
    >
      {/* Scroll progress, a hairline along the bar's bottom edge. Shown
          only once the bar has taken its solid state — at rest it would be
          a stray line across the hero. Decorative: the same information is
          already in the scrollbar, so it stays out of the a11y tree. */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left"
        style={{
          scaleX: progress,
          background:
            "linear-gradient(90deg, var(--color-gold-deep) 0%, var(--color-gold) 100%)",
          opacity: solid ? 1 : 0,
          transition: "opacity 500ms ease",
        }}
      />

      <div
        className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-gutter"
        style={{
          height: scrolled ? 68 : 88,
          transition: "height 500ms cubic-bezier(.16,1,.3,1)",
        }}
      >
        <Link href="/#top" aria-label={`${brand.full} — home`} onClick={() => setOpen(false)}>
          <Wordmark />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-[clamp(18px,2.3vw,32px)] whitespace-nowrap nav:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[13.5px] text-[#bfb6aa] transition-colors duration-300 hover:text-cream"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={primaryCta.href}
            className="btn-gold px-[22px] py-3 text-[13px] tracking-[0.01em] hover:btn-gold-hover"
          >
            {primaryCta.label}
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="-mr-2.5 inline-flex cursor-pointer flex-col gap-1.5 border-0 bg-none p-2.5 nav:hidden"
        >
          {/* Two rules, gold over cream. They cross into an X when open. */}
          <span
            aria-hidden="true"
            className="block h-px w-[22px] bg-gold"
            style={{
              transform: open ? "translateY(3.5px) rotate(45deg)" : "none",
              transition: reduced ? undefined : "transform 380ms cubic-bezier(.16,1,.3,1)",
            }}
          />
          <span
            aria-hidden="true"
            className="block h-px w-[22px] bg-cream"
            style={{
              transform: open ? "translateY(-3.5px) rotate(-45deg)" : "none",
              transition: reduced ? undefined : "transform 380ms cubic-bezier(.16,1,.3,1)",
            }}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            // max-height + scroll: on a landscape phone the panel is taller
            // than the viewport, and the body is locked behind it.
            className="max-h-[calc(100dvh-68px)] overflow-y-auto border-t border-gold/[0.18] bg-ink/[0.97] px-gutter pt-2 pb-7 backdrop-blur-[18px] nav:hidden"
            initial={reduced ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-cream/[0.08] py-4 font-display text-[27px] text-cream"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={primaryCta.href}
                onClick={() => setOpen(false)}
                className="btn-gold mt-5.5 justify-between px-5 py-4.5 text-[15px]"
              >
                {primaryCta.label}
                <span aria-hidden="true" className="font-mono text-xs">
                  →
                </span>
              </Link>
              <a
                href={contact.phoneHref}
                className="mt-4.5 font-mono text-[11px] tracking-[0.1em] text-[#8e877c]"
              >
                {contact.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
