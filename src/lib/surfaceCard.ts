import { cn } from "./cn";

/** Smooth hover: background + text color only — no transform, shadow, or icon scale. */
export const surfaceCardHover =
  "group bg-box transition-colors duration-500 ease-out hover:bg-hover-surface";

export const surfaceCardTitle =
  "transition-colors duration-500 ease-out group-hover:text-white";

export const surfaceCardMuted =
  "transition-colors duration-500 ease-out group-hover:text-white/75";

export const surfaceCardLabel =
  "transition-colors duration-500 ease-out group-hover:text-white/80";

export function surfaceCardClass(...extra: (string | false | undefined)[]) {
  return cn(surfaceCardHover, ...extra);
}
