import type { Session } from "next-auth";

/** Local bypass. Production never honors this, even if the variable is set. */
export function isCmsAuthSkipped() {
  return (
    process.env.NODE_ENV !== "production" && process.env.CMS_SKIP_AUTH === "1"
  );
}

const LOCAL_SECRET = "local-cms-skip-auth";

export function cmsAuthSecret() {
  if (process.env.NEXTAUTH_SECRET) return process.env.NEXTAUTH_SECRET;
  if (isCmsAuthSkipped()) return LOCAL_SECRET;
  return undefined;
}

export const LOCAL_CMS_COOKIE = "next-auth.session-token";

export const LOCAL_CMS_TOKEN = {
  id: "local",
  sub: "local",
  role: "admin" as const,
  name: "Local admin",
  email: "local@localhost",
};

export function localCmsSession(): Session {
  return {
    user: {
      id: "local",
      role: "admin",
      name: "Local admin",
      email: "local@localhost",
    },
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
  };
}
