/** Dates from mysql2 are not serializable to client components. */
export function toPlain<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}
