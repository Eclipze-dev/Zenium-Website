"use client";

import Script from "next/script";
import { useCookieConsent } from "./CookieConsentProvider";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * Loads analytics only after analytics consent is granted.
 * Prefer GTM (`NEXT_PUBLIC_GTM_ID`) with GA4 configured in the container.
 * If GTM is unset, fall back to direct GA4 (`NEXT_PUBLIC_GA_MEASUREMENT_ID`).
 */
export default function ConsentAwareAnalytics() {
  const { ready, analyticsAllowed } = useCookieConsent();

  if (!ready || !analyticsAllowed) return null;

  if (GTM_ID) {
    return (
      <>
        <Script id="zenium-gtm-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
          `}
        </Script>
        <Script
          id="zenium-gtm"
          src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
          strategy="afterInteractive"
        />
      </>
    );
  }

  if (!GA_MEASUREMENT_ID) return null;

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
