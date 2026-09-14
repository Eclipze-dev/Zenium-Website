"use client";

import { cn } from "@/lib/cn";
import { useCookieConsent } from "./CookieConsentProvider";

type CookieSettingsLinkProps = {
  className?: string;
  /**
   * footer — matches footer legal links (zen-text, normal weight)
   * inline — light document pages (common text, bold)
   */
  variant?: "footer" | "inline";
};

export default function CookieSettingsLink({
  className,
  variant = "footer",
}: CookieSettingsLinkProps) {
  const { openCookieSettings } = useCookieConsent();

  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className={cn(
        "inline cursor-pointer border-0 bg-transparent p-0 text-left transition-colors duration-200 hover:text-orange",
        variant === "footer" &&
          "text-sm font-normal tracking-[0.04em] text-zen-text max-lg:text-caption max-sm:text-[11px]",
        variant === "inline" &&
          "text-p1 !font-bold tracking-normal !text-common hover:underline hover:!text-orange",
        className,
      )}
    >
      Cookie Settings
    </button>
  );
}
