"use client";

import { useEffect, useState } from "react";
import Button from "@/components/Button";
import { useCookieConsent } from "./CookieConsentProvider";

export default function CookiePreferencesPanel() {
  const {
    preferencesOpen,
    consent,
    closePreferences,
    savePreferences,
  } = useCookieConsent();
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    if (preferencesOpen) {
      setAnalytics(Boolean(consent?.analytics));
    }
  }, [preferencesOpen, consent]);

  if (!preferencesOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-start p-4 sm:items-center sm:justify-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-preferences-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/50"
        aria-label="Close cookie preferences"
        onClick={closePreferences}
      />

      <div className="relative z-10 w-full max-w-[440px] rounded-[16px] bg-white p-6 text-[#152D48] shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
        <h2
          id="cookie-preferences-title"
          className="m-0 text-p1 font-semibold !text-bg1"
        >
          Cookie preferences
        </h2>
        <p className="mt-3 m-0 text-body text-bg1/70">
          Essential cookies are always on. You can choose whether to allow
          analytics cookies.
        </p>

        <ul className="mt-5 m-0 flex list-none flex-col gap-4 p-0">
          <li className="rounded-[10px] border border-black/10 px-4 py-3">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="m-0 text-body font-semibold text-bg1">
                  Essential
                </p>
                <p className="mt-1 m-0 text-supporting text-bg1/65">
                  Required for the website to operate securely and correctly.
                </p>
              </div>
              <span className="shrink-0 text-supporting font-semibold text-orange">
                Always on
              </span>
            </div>
          </li>

          <li className="rounded-[10px] border border-black/10 px-4 py-3">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="m-0 text-body font-semibold text-bg1">
                  Analytics
                </p>
                <p className="mt-1 m-0 text-supporting text-bg1/65">
                  Helps us understand how visitors use the site and improve
                  performance.
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={analytics}
                aria-label="Allow analytics cookies"
                onClick={() => setAnalytics((value) => !value)}
                className={`relative mt-0.5 h-6 w-11 shrink-0 rounded-full transition-colors duration-200 ${
                  analytics ? "bg-orange" : "bg-[#D5DBE3]"
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform duration-200 ${
                    analytics ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </li>
        </ul>

        <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
          <Button
            outline
            onClick={closePreferences}
            className="!border-bg1 !text-bg1 hover:!bg-bg1 hover:!text-white"
          >
            Cancel
          </Button>
          <Button onClick={() => savePreferences(analytics)}>
            Save preferences
          </Button>
        </div>
      </div>
    </div>
  );
}
