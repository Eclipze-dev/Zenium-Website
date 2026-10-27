/**
 * Logs the Node.js version when the Next.js Node.js server starts.
 * Hostinger's managed runtime is chosen in the hosting panel; this line
 * only records whichever version actually starts the process.
 * Build and server phases are labeled so they are not confused.
 * No environment variables are printed.
 */
export async function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs") return;

  const phase = process.env.NEXT_PHASE ?? "server";
  console.info(`[zenium] Node.js ${process.version} (${phase})`);
}
