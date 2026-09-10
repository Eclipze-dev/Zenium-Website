"use client";

import CookieBanner from "./CookieBanner";
import CookiePreferencesPanel from "./CookiePreferencesPanel";
import ConsentAwareAnalytics from "./ConsentAwareAnalytics";
import { CookieConsentProvider } from "./CookieConsentProvider";

export default function CookieConsentRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CookieConsentProvider>
      {children}
      <CookieBanner />
      <CookiePreferencesPanel />
      <ConsentAwareAnalytics />
    </CookieConsentProvider>
  );
}
