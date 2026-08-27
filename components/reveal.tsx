"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "motion/react";
import { useRef, type ReactNode } from "react";

/** The one entrance on the site: a short rise, staggered by index. */
export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay: Math.min(i, 5) * 0.1,
    },
  }),
};

const elements = {
  div: motion.div,
  article: motion.article,
  section: motion.section,
  header: motion.header,
  li: motion.li,
  a: motion.a,
} as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  index?: number;
  delay?: number;
  as?: keyof typeof elements;
  style?: React.CSSProperties;
};

export function Reveal({
  children,
  className,
  index = 0,
  delay,
  as = "div",
  style,
}: RevealProps) {
  const reduced = useReducedMotion();
  const Component = elements[as];

  if (reduced) {
    const Static = as as React.ElementType;
    return (
      <Static className={className} style={style}>
        {children}
      </Static>
    );
  }

  return (
    <Component
      className={className}
      style={style}
      variants={
        delay === undefined
          ? revealVariants
          : {
              hidden: { opacity: 0, y: 24 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
              },
            }
      }
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -6% 0px" }}
    >
      {children}
    </Component>
  );
}

/**
 * Scroll-linked drift. The element travels `distance` pixels against the
 * scroll across the span where its section is on screen — enough to give
 * the page depth, never enough to leave a gap where content should be.
 *
 * Transform only, and spring-smoothed so a fast wheel scroll doesn't snap
 * it. Under reduced motion it renders a plain div and reads no scroll at
 * all.
 */
export function Parallax({
  children,
  distance = 40,
  className,
}: {
  children: ReactNode;
  /** Total travel in px across the whole pass. Keep it under ~60. */
  distance?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const raw = useTransform(scrollYProgress, [0, 1], [distance / 2, -distance / 2]);
  const y = useSpring(raw, { stiffness: 120, damping: 30, restDelta: 0.5 });

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}

/**
 * The eyebrow that opens every section: a short rule that fades out into
 * the ground, then the label. On ink the rule is a gradient (it has
 * somewhere to fade *to*); on cream a flat gold-deep hairline, because a
 * gradient to transparent over a warm ground just looks dirty.
 */
export function Kicker({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  /** "dark" = sitting on ink; "light" = sitting on cream. */
  tone?: "dark" | "light";
}) {
  return (
    <div className="flex items-center gap-3.5">
      <span
        aria-hidden="true"
        className="h-px w-8.5 shrink-0"
        style={{
          background:
            tone === "dark"
              ? "linear-gradient(90deg, var(--color-accent), transparent)"
              : "var(--color-accent-2)",
        }}
      />
      <span className={`label ${tone === "dark" ? "text-kicker" : "text-kicker-2"}`}>
        {children}
      </span>
    </div>
  );
}
