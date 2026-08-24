"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.62,
      ease: [0.22, 0.61, 0.36, 1],
      delay: Math.min(i, 5) * 0.07,
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
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.62, ease: [0.22, 0.61, 0.36, 1], delay },
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

/** Pill label that opens every section. */
export function Chip({
  children,
  tone = "light",
}: {
  children: ReactNode;
  /** "light" = sitting on stone/cream; "dark" = sitting on deep blue. */
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={`chip ${
        tone === "dark"
          ? "bg-white/12 text-white ring-1 ring-white/15"
          : "bg-deep text-cream ring-1 ring-deep"
      }`}
    >
      <span
        aria-hidden="true"
        className={`size-1.5 rounded-full ${tone === "dark" ? "bg-pale" : "bg-deep"}`}
      />
      {children}
    </span>
  );
}
