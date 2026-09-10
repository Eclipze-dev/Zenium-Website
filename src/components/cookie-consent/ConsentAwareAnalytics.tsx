"use client";

import Script from "next/script";
import { useCookieConsent } from "./CookieConsentProvider";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * Loads Google Analytics only after analytics consent is granted.
 * Set NEXT_PUBLIC_GA_MEASUREMENT_ID to enable.
 */
export default function ConsentAwareAnalytics() {
  const { ready, analyticsAllowed } = useCookieConsent();

  if (!ready || !analyticsAllowed || !GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="zenium-ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
