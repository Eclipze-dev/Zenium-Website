"use client";

import { cn } from "@/lib/cn";
import Button from "@/components/Button";
import { useCookieConsent } from "./CookieConsentProvider";

export default function CookieSettingsLink({
  className,
}: {
  className?: string;
}) {
  const { openCookieSettings } = useCookieConsent();

  return (
    <Button
      variant="text"
      showArrow={false}
      onClick={openCookieSettings}
      className={cn(
        "text-sm font-normal tracking-[0.04em] !text-zen-text hover:!text-orange",
        className,
      )}
    >
      Cookie Settings
    </Button>
  );
}
