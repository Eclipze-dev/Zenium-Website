"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const AnimationProvider = dynamic(
  () => import("@/components/animations/AnimationProvider"),
);
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
      {isAdmin ? children : <AnimationProvider>{children}</AnimationProvider>}
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
