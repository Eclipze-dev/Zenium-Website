"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  hasAnalyticsConsent,
  readCookieConsent,
  writeCookieConsent,
  type CookieConsentState,
} from "@/lib/cookieConsent";

type CookieConsentContextValue = {
  ready: boolean;
  consent: CookieConsentState | null;
  analyticsAllowed: boolean;
  bannerOpen: boolean;
  preferencesOpen: boolean;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (analytics: boolean) => void;
  openPreferences: () => void;
  closePreferences: () => void;
  openCookieSettings: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(
  null,
);

export function CookieConsentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);
  const [consent, setConsent] = useState<CookieConsentState | null>(null);
  const [bannerOpen, setBannerOpen] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  useEffect(() => {
    const stored = readCookieConsent();
    setConsent(stored);
    setBannerOpen(!stored);
    setReady(true);

    const onStorage = (event: StorageEvent) => {
      if (event.key !== "zenium-cookie-consent") return;
      const next = readCookieConsent();
      setConsent(next);
      setBannerOpen(!next);
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const persist = useCallback((analytics: boolean) => {
    const next = writeCookieConsent(analytics);
    setConsent(next);
    setBannerOpen(false);
    setPreferencesOpen(false);
  }, []);

  const acceptAll = useCallback(() => persist(true), [persist]);
  const rejectNonEssential = useCallback(() => persist(false), [persist]);
  const savePreferences = useCallback(
    (analytics: boolean) => persist(analytics),
    [persist],
  );

  const openPreferences = useCallback(() => {
    setPreferencesOpen(true);
  }, []);

  const closePreferences = useCallback(() => {
    setPreferencesOpen(false);
  }, []);

  const openCookieSettings = useCallback(() => {
    setPreferencesOpen(false);
    setBannerOpen(true);
  }, []);

  const value = useMemo<CookieConsentContextValue>(
    () => ({
      ready,
      consent,
      analyticsAllowed: hasAnalyticsConsent(consent),
      bannerOpen,
      preferencesOpen,
      acceptAll,
      rejectNonEssential,
      savePreferences,
      openPreferences,
      closePreferences,
      openCookieSettings,
    }),
    [
      ready,
      consent,
      bannerOpen,
      preferencesOpen,
      acceptAll,
      rejectNonEssential,
      savePreferences,
      openPreferences,
      closePreferences,
      openCookieSettings,
    ],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return ctx;
}
