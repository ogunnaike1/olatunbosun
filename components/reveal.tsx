"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

/**
 * The page's one scroll-reveal system: 26px rise + fade, 800ms, staggered in
 * groups of six. Honours prefers-reduced-motion by rendering at final state.
 */
export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.7, 0.3, 1],
      delay: (i % 6) * 0.07,
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
  /** Stagger index; delay is (index % 6) * 70ms. */
  index?: number;
  /** Explicit delay in seconds, overriding the index stagger. */
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
              hidden: { opacity: 0, y: 26 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.2, 0.7, 0.3, 1], delay },
              },
            }
      }
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -8% 0px" }}
    >
      {children}
    </Component>
  );
}
