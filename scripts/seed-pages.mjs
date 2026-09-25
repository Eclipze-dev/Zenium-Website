/**
 * Upsert all marketing routes into CMS pages (SEO registry).
 * Does not delete custom rows. Requires DB_* in .env.
 *
 * Run: node scripts/seed-pages.mjs
 */
import { existsSync, readFileSync } from "node:fs";
import dns from "node:dns";
import path from "node:path";
import mysql from "mysql2/promise";
import { CMS_PAGES_SEED } from "./cms-pages-seed-data.mjs";

dns.setDefaultResultOrder("ipv4first");

const DB_KEYS = ["DB_HOST", "DB_PORT", "DB_NAME", "DB_USER", "DB_PASSWORD"];

function parseEnvFile(contents) {
  const parsed = {};
  for (const line of contents.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    if (!DB_KEYS.includes(key)) continue;
    let raw = trimmed.slice(eq + 1);
    const first = raw.trim()[0];
    if (first !== '"' && first !== "'") raw = raw.split("#")[0];
    let value = raw.trim();
    const quote = value[0];
    if (
      (quote === '"' || quote === "'") &&
      value.endsWith(quote) &&
      value.length >= 2
    ) {
      value = value.slice(1, -1);
    }
    parsed[key] = value.replace(/\\\$/g, "$");
  }
  return parsed;
}

function loadDbEnv() {
  const fromFile = {};
  for (const name of [".env", ".env.local"]) {
    const filePath = path.join(process.cwd(), name);
    if (!existsSync(filePath)) continue;
    Object.assign(fromFile, parseEnvFile(readFileSync(filePath, "utf8")));
  }
  return {
    host: fromFile.DB_HOST || process.env.DB_HOST || "",
    port: Number(fromFile.DB_PORT || process.env.DB_PORT || 3306),
    database: fromFile.DB_NAME || process.env.DB_NAME || "",
    user: fromFile.DB_USER || process.env.DB_USER || "",
    password: fromFile.DB_PASSWORD || process.env.DB_PASSWORD || "",
  };
}

async function main() {
  const cfg = loadDbEnv();
  if (!cfg.host || !cfg.user) {
    console.error("Set DB_HOST and DB_USER in .env before running.");
    process.exit(1);
  }

  const connection = await mysql.createConnection({
    host: cfg.host,
    port: cfg.port,
    database: cfg.database,
    user: cfg.user,
    password: cfg.password,
  });

  let upserted = 0;
  for (const page of CMS_PAGES_SEED) {
    await connection.execute(
      `INSERT INTO pages (title, slug, content, status, seo_title, seo_description)
       VALUES (?, ?, '', 'published', ?, ?)
       ON DUPLICATE KEY UPDATE
         title = VALUES(title),
         status = VALUES(status),
         seo_title = VALUES(seo_title),
         seo_description = VALUES(seo_description)`,
      [page.title, page.slug, page.seo_title, page.seo_description],
    );
    upserted += 1;
  }

  await connection.end();
  console.log(`Upserted ${upserted} CMS pages (SEO registry).`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
