import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const DB_KEYS = [
  "DB_HOST",
  "DB_PORT",
  "DB_NAME",
  "DB_USER",
  "DB_PASSWORD",
] as const;

export type DbEnvKey = (typeof DB_KEYS)[number];

let fileEnv: Partial<Record<DbEnvKey, string>> | null = null;

function unescapeEnvValue(raw: string): string {
  let value = raw.trim();
  const quote = value[0];
  if (
    (quote === '"' || quote === "'") &&
    value.endsWith(quote) &&
    value.length >= 2
  ) {
    value = value.slice(1, -1);
  }
  return value.replace(/\\\$/g, "$");
}

function parseEnvFile(contents: string): Partial<Record<DbEnvKey, string>> {
  const parsed: Partial<Record<DbEnvKey, string>> = {};

  for (const line of contents.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;

    const key = trimmed.slice(0, eq).trim() as DbEnvKey;
    if (!DB_KEYS.includes(key)) continue;

    let raw = trimmed.slice(eq + 1);
    const firstNonSpace = raw.trim()[0];
    if (firstNonSpace !== '"' && firstNonSpace !== "'") {
      raw = raw.split("#")[0];
    }

    parsed[key] = unescapeEnvValue(raw);
  }

  return parsed;
}

function loadFileEnv(): Partial<Record<DbEnvKey, string>> {
  if (fileEnv) return fileEnv;

  fileEnv = {};
  const cwd = process.cwd();
  for (const name of [".env", ".env.local"]) {
    const filePath = path.join(cwd, name);
    if (!existsSync(filePath)) continue;
    Object.assign(fileEnv, parseEnvFile(readFileSync(filePath, "utf8")));
  }
  return fileEnv;
}

/** DB_* from .env without Next.js `$VAR` expansion; Hostinger panel env is the fallback. */
export function getDbEnv(key: DbEnvKey): string {
  const fromFile = loadFileEnv()[key];
  if (fromFile !== undefined && fromFile !== "") {
    return fromFile;
  }
  return process.env[key] ?? "";
}
