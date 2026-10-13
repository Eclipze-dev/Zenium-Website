"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";
import { revealEase, revealOffset, type RevealDirection } from "@/lib/animations/variants";

const motionTags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  header: motion.header,
  footer: motion.footer,
  h1: motion.h1,
  h2: motion.h2,
  li: motion.li,
  ul: motion.ul,
  main: motion.main,
} as const;

type MotionTag = keyof typeof motionTags;

type ScrollRevealProps = {
  children: ReactNode;
  as?: MotionTag;
  className?: string;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number | "some" | "all";
  margin?: string;
  disabled?: boolean;
  /** Small hover lift for cards. Ignored for touch and reduced motion. */
  lift?: boolean;
} & Omit<HTMLMotionProps<"div">, "children" | "initial" | "whileInView" | "viewport" | "transition">;

export default function ScrollReveal({
  children,
  as = "div",
  className,
  direction = "up",
  delay = 0,
  duration = 0.8,
  once = true,
  amount = "some",
  margin = "0px 0px 140px 0px",
  disabled = false,
  lift = false,
  ...rest
}: ScrollRevealProps) {
  const Tag = motionTags[as] as typeof motion.div;
  const offset = revealOffset[direction];

  return (
    <Tag
      {...rest}
      data-motion-reveal=""
      className={className}
      initial={disabled ? false : { opacity: 0, x: offset.x, y: offset.y }}
      whileInView={disabled ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount, margin }}
      transition={{ duration, delay, ease: revealEase }}
      whileHover={
        lift && !disabled ? { y: -2, transition: { duration: 0.2, delay: 0 } } : undefined
      }
    >
      {children}
    </Tag>
  );
}
