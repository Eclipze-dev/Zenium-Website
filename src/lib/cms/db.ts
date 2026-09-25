import dns from "node:dns";
import mysql from "mysql2/promise";
import { getDbEnv } from "@/lib/cms/env";

dns.setDefaultResultOrder("ipv4first");

export type SqlParam = string | number | boolean | Date | Buffer | null;

let pool: mysql.Pool | null = null;

function requiredDbEnv(name: "DB_HOST" | "DB_USER"): string {
  const value = getDbEnv(name);
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export function getPool(): mysql.Pool {
  if (!pool) {
    pool = mysql.createPool({
      host: requiredDbEnv("DB_HOST"),
      port: Number(getDbEnv("DB_PORT") || 3306),
      user: requiredDbEnv("DB_USER"),
      password: getDbEnv("DB_PASSWORD"),
      database: getDbEnv("DB_NAME") || "zenium_ai",
      waitForConnections: true,
      connectionLimit: 10,
      namedPlaceholders: false,
      timezone: "Z",
    });
  }

  return pool;
}

export async function query<T>(sql: string, params: SqlParam[] = []): Promise<T[]> {
  const [rows] = await getPool().execute(sql, params);
  return rows as T[];
}

export async function queryOne<T>(
  sql: string,
  params: SqlParam[] = [],
): Promise<T | null> {
  const rows = await query<T>(sql, params);
  return rows[0] ?? null;
}

export async function execute(
  sql: string,
  params: SqlParam[] = [],
): Promise<mysql.ResultSetHeader> {
  const [result] = await getPool().execute(sql, params);
  return result as mysql.ResultSetHeader;
}
