export const COOKIE_CONSENT_KEY = "zenium-cookie-consent";

export type CookieConsentState = {
  essential: true;
  analytics: boolean;
  decidedAt: string;
};

export function readCookieConsent(): CookieConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<CookieConsentState>;
    if (typeof parsed.analytics !== "boolean") return null;
    return {
      essential: true,
      analytics: parsed.analytics,
      decidedAt:
        typeof parsed.decidedAt === "string"
          ? parsed.decidedAt
          : new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

export function writeCookieConsent(
  analytics: boolean,
): CookieConsentState {
  const next: CookieConsentState = {
    essential: true,
    analytics,
    decidedAt: new Date().toISOString(),
  };
  window.localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(next));
  window.dispatchEvent(
    new CustomEvent("zenium-cookie-consent-change", { detail: next }),
  );
  return next;
}

export function hasAnalyticsConsent(consent: CookieConsentState | null) {
  return Boolean(consent?.analytics);
}
