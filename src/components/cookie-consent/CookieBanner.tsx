"use client";

import Link from "next/link";
import Button from "@/components/Button";
import { useCookieConsent } from "./CookieConsentProvider";

export default function CookieBanner() {
  const {
    ready,
    bannerOpen,
    preferencesOpen,
    acceptAll,
    rejectNonEssential,
    openPreferences,
  } = useCookieConsent();

  if (!ready || !bannerOpen || preferencesOpen) return null;

  return (
    <div
      className="fixed bottom-5 left-5 z-[70] w-[min(calc(100%-2.5rem),560px)] max-sm:bottom-3 max-sm:left-3 max-sm:right-3 max-sm:w-auto"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-description"
    >
      <div className="rounded-[12px] bg-[#F7F7F7] p-6 text-[#152D48] shadow-[0_16px_48px_rgba(0,0,0,0.4)] max-sm:p-4">
        <h2
          id="cookie-banner-title"
          className="m-0 text-p1 font-semibold !text-bg1"
        >
          Your privacy choices
        </h2>
        <p
          id="cookie-banner-description"
          className="mt-3 m-0 text-body leading-[1.5] text-[#152D48]/75"
        >
          We use essential cookies to keep our website working. With your
          consent, we also use analytics cookies to understand how visitors use
          the site and improve its performance.
        </p>
        <p className="mt-2 m-0 text-supporting text-[#152D48]/65">
          Learn more in our{" "}
          <Link
            href="/privacy"
            className="font-semibold !text-[#152D48] !underline underline-offset-2 transition-colors duration-200 hover:!text-orange"
          >
            Privacy Policy
          </Link>
          .
        </p>

        <div className="mt-6 flex items-center justify-between gap-4 max-sm:flex-col max-sm:items-stretch">
          <button
            type="button"
            onClick={openPreferences}
            className="shrink-0 text-body font-medium text-[#152D48] !underline underline-offset-2 transition-colors duration-200 hover:text-orange max-sm:order-3 max-sm:text-left"
          >
            Manage preferences
          </button>

          <div className="flex items-center gap-2 max-sm:w-full">
            <Button
              outline
              onClick={rejectNonEssential}
              className="!border-[#152D48] !text-[#152D48] hover:!bg-[#152D48] hover:!text-white max-sm:flex-1"
            >
              Reject non-essential
            </Button>
            <Button onClick={acceptAll} className="max-sm:flex-1">
              Accept all
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
