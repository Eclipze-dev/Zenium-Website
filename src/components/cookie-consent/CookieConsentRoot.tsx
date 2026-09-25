"use client";

import { usePathname } from "next/navigation";
import CookieBanner from "./CookieBanner";
import CookiePreferencesPanel from "./CookiePreferencesPanel";
import ConsentAwareAnalytics from "./ConsentAwareAnalytics";
import { CookieConsentProvider } from "./CookieConsentProvider";

export default function CookieConsentRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <CookieConsentProvider>
      {children}
      {!isAdmin ? (
        <>
          <CookieBanner />
          <CookiePreferencesPanel />
          <ConsentAwareAnalytics />
        </>
      ) : null}
    </CookieConsentProvider>
  );
}
