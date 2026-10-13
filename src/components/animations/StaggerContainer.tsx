"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import type { HTMLAttributes, ReactNode } from "react";
import { staggerParent } from "@/lib/animations/variants";

const motionTags = {
  div: motion.div,
  section: motion.section,
  ul: motion.ul,
  ol: motion.ol,
  header: motion.header,
} as const;

type MotionTag = keyof typeof motionTags;

type StaggerContainerProps = {
  children: ReactNode;
  as?: MotionTag;
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
  amount?: number | "some" | "all";
  margin?: string;
  disabled?: boolean;
} & Omit<HTMLMotionProps<"div">, "children">;

export default function StaggerContainer({
  children,
  as = "div",
  className,
  stagger = 0.1,
  delay = 0,
  once = true,
  amount = "some",
  margin = "0px 0px 140px 0px",
  disabled = false,
  ...rest
}: StaggerContainerProps) {
  if (disabled) {
    const Tag = as;
    return (
      <Tag className={className} {...(rest as HTMLAttributes<HTMLElement>)}>
        {children}
      </Tag>
    );
  }

  const Tag = motionTags[as] as typeof motion.div;

  return (
    <Tag
      {...rest}
      data-motion-reveal=""
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount, margin }}
      variants={staggerParent(stagger, delay)}
    >
      {children}
    </Tag>
  );
}
