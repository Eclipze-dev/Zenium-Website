"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import type { HTMLAttributes, ReactNode } from "react";
import { staggerChild, type RevealDirection } from "@/lib/animations/variants";

const motionTags = {
  div: motion.div,
  article: motion.article,
  li: motion.li,
  header: motion.header,
} as const;

type MotionTag = keyof typeof motionTags;

type StaggerItemProps = {
  children: ReactNode;
  as?: MotionTag;
  className?: string;
  direction?: RevealDirection;
  disabled?: boolean;
} & Omit<HTMLMotionProps<"div">, "children" | "variants">;

export default function StaggerItem({
  children,
  as = "div",
  className,
  direction = "up",
  disabled = false,
  ...rest
}: StaggerItemProps) {
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
    <Tag {...rest} data-motion-reveal="" className={className} variants={staggerChild(direction)}>
      {children}
    </Tag>
  );
}
