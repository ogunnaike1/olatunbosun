"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { contactHref, whatsappButton } from "@/lib/content";

/**
 * The floating WhatsApp button, bottom-left on every page.
 *
 * Left, not right: the right-hand corner is where chat widgets live and
 * where a reader's thumb rests over content — and nothing here is a widget.
 * It opens wa.me in a new tab with the message already typed (see
 * `whatsappMessage` in lib/content.ts), so the visitor never faces an empty
 * compose box.
 *
 * It appears only once the visitor has scrolled clear of the hero. Fixed
 * from the first paint, it would sit on top of the hero's own CTAs at
 * laptop heights — and the hero already carries the number in plain sight,
 * so nothing is lost by waiting.
 */
export function WhatsAppButton() {
  const reduced = useReducedMotion();
  const [past, setPast] = useState(false);

  useEffect(() => {
    // One viewport height, so it clears the hero on any screen rather than
    // at one hard-coded pixel value.
    const onScroll = () => setPast(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {past && (
        <motion.a
          href={contactHref.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={whatsappButton.label}
          className="fixed bottom-5 left-5 z-80 flex items-center gap-3 rounded-pill py-3 pr-4 pl-3 tab:bottom-7 tab:left-7"
          style={{
            background:
              "linear-gradient(135deg, var(--color-btn-from) 0%, var(--color-btn-to) 100%)",
            color: "var(--color-btn-fg)",
            boxShadow: "var(--shadow-float)",
          }}
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? undefined : { opacity: 0, y: 16 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          whileHover={reduced ? undefined : { y: -2 }}
        >
          {/* The WhatsApp glyph, drawn rather than imported — one file fewer,
              and it inherits the button's ink colour. */}
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="shrink-0"
          >
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.84-.2-.49-.4-.42-.56-.43h-.47c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.03s.87 2.35.99 2.51c.12.16 1.71 2.61 4.15 3.66.58.25 1.03.4 1.39.51.58.19 1.11.16 1.53.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
          </svg>

          <span className="label-sm hidden tab:block">{whatsappButton.short}</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
