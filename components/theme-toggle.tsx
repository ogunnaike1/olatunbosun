"use client";

import { useCallback, useSyncExternalStore } from "react";

export type Theme = "dark" | "light";

/** Read by the inline script in app/layout.tsx too — keep them in step. */
export const THEME_KEY = "obtc-theme";

/**
 * Dark / light switch.
 *
 * The applied theme is a `data-theme` attribute on <html>; every colour in
 * globals.css is a role token that swaps with it. The choice is remembered
 * in localStorage; a visitor who has never chosen gets whatever their OS
 * asks for, resolved by the inline script in the document head so the page
 * never paints the wrong theme first.
 *
 * Rendered as a two-position control rather than a single icon button:
 * both destinations are visible, so nobody has to click to find out what it
 * does. `aria-pressed` on each half reports which one is live.
 */
/** The <html> attribute is the single source of truth — not React state. */
const EVENT = "obtc-themechange";

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  return () => window.removeEventListener(EVENT, onChange);
}

function getSnapshot(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";
}

/** The server cannot know the visitor's theme; it renders the default. */
function getServerSnapshot(): Theme {
  return "dark";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const apply = useCallback((next: Theme) => {
    document.documentElement.setAttribute("data-theme", next);
    try {
      window.localStorage.setItem(THEME_KEY, next);
    } catch {
      // Private mode, or storage disabled. The theme still applies for
      // this visit; it just will not be remembered.
    }
    window.dispatchEvent(new Event(EVENT));
  }, []);

  const options: { value: Theme; label: string }[] = [
    { value: "dark", label: "Dark" },
    { value: "light", label: "Light" },
  ];

  return (
    <div className="flex items-center gap-3">
      <span className="label-sm text-on-base-5">Theme</span>
      <div
        className="flex items-center rounded-edge border p-0.5"
        style={{ borderColor: "var(--line-accent)" }}
      >
        {options.map((option) => {
          const active = theme === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => apply(option.value)}
              aria-pressed={active}
              aria-label={`${option.label} theme`}
              className={`label-sm cursor-pointer px-3 py-2 transition-colors duration-300 ${
                active ? "text-on-base" : "text-on-base-4 hover:text-on-base-2"
              }`}
              style={active ? { background: "var(--fill-accent)" } : undefined}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
