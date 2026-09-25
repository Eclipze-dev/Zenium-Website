import nodemailer from "nodemailer";
import type { ContactFormPayload } from "./contactValidation";

const SMTP_TIMEOUT_MS = 12_000;

export type ContactMailReason =
  | "timeout"
  | "rejected"
  | "not_configured"
  | "tls"
  | "unknown";

export type ContactMailErrorDetails = {
  reason: ContactMailReason;
  code?: string;
  command?: string;
  response?: string;
  syscall?: string;
  message: string;
};

type SmtpLikeError = {
  code?: string;
  command?: string;
  response?: string;
  responseCode?: number;
  syscall?: string;
  message?: string;
};

export class ContactMailError extends Error {
  readonly details: ContactMailErrorDetails;

  constructor(details: ContactMailErrorDetails) {
    super(details.message);
    this.name = "ContactMailError";
    this.details = details;
  }
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function fieldRow(label: string, value: string, href?: string): string {
  const display = value || "—";
  const cell = href
    ? `<a href="${escapeHtml(href)}" style="color:#F36B21;text-decoration:none;font-weight:600;">${escapeHtml(display)}</a>`
    : escapeHtml(display);
  return `<tr>
    <td style="padding:14px 0;border-bottom:1px solid #E6EDF3;color:#5A6B7C;font-size:13px;letter-spacing:0.4px;text-transform:uppercase;width:160px;vertical-align:top;">${escapeHtml(label)}</td>
    <td style="padding:14px 0;border-bottom:1px solid #E6EDF3;color:#152D48;font-size:15px;line-height:1.5;white-space:pre-wrap;">${cell}</td>
  </tr>`;
}

function wrapEmail(title: string, intro: string, body: string): string {
  return `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background:#F4F7FA;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F4F7FA;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background:#ffffff;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="background:#0B1F33;padding:28px 32px 24px;">
                <p style="margin:0 0 10px;color:#F36B21;font-size:12px;letter-spacing:2px;font-weight:700;">ZENIUM</p>
                <div style="width:48px;height:3px;background:#F36B21;margin:0 0 16px;"></div>
                <h1 style="margin:0;color:#ffffff;font-size:24px;line-height:1.3;font-weight:700;">${escapeHtml(title)}</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px 8px;">
                <p style="margin:0;color:#5A6B7C;font-size:15px;line-height:1.6;">${intro}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 32px;">
                ${body}
              </td>
            </tr>
            <tr>
              <td style="background:#F4F7FA;padding:18px 32px;color:#5A6B7C;font-size:12px;line-height:1.5;">
                Zenium · zenium.ai
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function getGraphConfig() {
  const tenantId = process.env.MS_GRAPH_TENANT_ID?.trim();
  const clientId = process.env.MS_GRAPH_CLIENT_ID?.trim();
  const clientSecret = process.env.MS_GRAPH_CLIENT_SECRET?.trim();

  if (!tenantId || !clientId || !clientSecret) {
    return null;
  }

  return { tenantId, clientId, clientSecret };
}

function getMailConfig() {
  const host = process.env.SMTP_HOST?.trim();
  const port = Number(process.env.SMTP_PORT ?? 25);
  const from = process.env.MAIL_FROM?.trim() || "noreply@zenium.ai";
  const sender = process.env.MAIL_SENDER?.trim() || from;
  const internalTo = process.env.MAIL_INTERNAL_TO?.trim() || "info@zenium.ai";
  const bcc = process.env.MAIL_BCC?.trim() || "";
  const graph = getGraphConfig();

  if (graph) {
    return { host, port, from, sender, internalTo, bcc, graph };
  }

  if (!host) {
    throw new ContactMailError({
      reason: "not_configured",
      message: "SMTP_HOST is not configured.",
    });
  }

  if (!Number.isFinite(port) || port <= 0) {
    throw new ContactMailError({
      reason: "not_configured",
      message: "SMTP_PORT is invalid.",
    });
  }

  return { host, port, from, sender: from, internalTo, bcc, graph: null };
}

function bccFor(to: string, bcc: string): string | undefined {
  if (!bcc || bcc.toLowerCase() === to.toLowerCase()) return undefined;
  return bcc;
}

async function getGraphAccessToken(graph: NonNullable<ReturnType<typeof getGraphConfig>>): Promise<string> {
  const response = await fetch(`https://login.microsoftonline.com/${graph.tenantId}/oauth2/v2.0/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: graph.clientId,
      client_secret: graph.clientSecret,
      scope: "https://graph.microsoft.com/.default",
      grant_type: "client_credentials",
    }),
    signal: AbortSignal.timeout(SMTP_TIMEOUT_MS),
  });

  const payload = (await response.json().catch(() => null)) as {
    access_token?: string;
    error?: string;
    error_description?: string;
  } | null;

  if (!response.ok || !payload?.access_token) {
    throw new ContactMailError({
      reason: response.status === 401 || response.status === 400 ? "not_configured" : "rejected",
      code: payload?.error || String(response.status),
      response: payload?.error_description,
      message: payload?.error_description || "Microsoft Graph token request failed.",
    });
  }

  return payload.access_token;
}

async function sendGraphMail({
  token,
  sender,
  from,
  to,
  bcc,
  replyTo,
  subject,
  html,
}: {
  token: string;
  sender: string;
  from: string;
  to: string;
  bcc?: string;
  replyTo?: string;
  subject: string;
  html: string;
}): Promise<void> {
  const response = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(sender)}/sendMail`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: {
          subject,
          body: { contentType: "HTML", content: html },
          toRecipients: [{ emailAddress: { address: to } }],
          bccRecipients: bcc ? [{ emailAddress: { address: bcc } }] : undefined,
          replyTo: replyTo ? [{ emailAddress: { address: replyTo } }] : undefined,
          from: { emailAddress: { address: from, name: "Zenium" } },
        },
        saveToSentItems: true,
      }),
      signal: AbortSignal.timeout(SMTP_TIMEOUT_MS),
    },
  );

  if (response.ok || response.status === 202) {
    return;
  }

  const payload = (await response.json().catch(() => null)) as {
    error?: { code?: string; message?: string };
  } | null;
  const graphMessage = payload?.error?.message || `Microsoft Graph sendMail failed (${response.status}).`;
  const graphCode = payload?.error?.code || String(response.status);
  const reason =
    response.status === 401
      ? "not_configured"
      : response.status === 403 || response.status === 404 || response.status >= 400
        ? "rejected"
        : "unknown";

  throw new ContactMailError({
    reason,
    code: graphCode,
    command: "sendMail",
    response: graphMessage,
    message: graphMessage,
  });
}

function asSmtpError(error: unknown): SmtpLikeError {
  if (error && typeof error === "object") {
    return error as SmtpLikeError;
  }

  return { message: error instanceof Error ? error.message : String(error) };
}

export function classifyMailError(error: unknown): ContactMailErrorDetails {
  if (error instanceof ContactMailError) {
    return error.details;
  }

  const smtp = asSmtpError(error);
  const code = smtp.code?.toUpperCase();
  const syscall = smtp.syscall?.toLowerCase();
  const message = smtp.message || "Unknown mail error";
  const combined = `${code ?? ""} ${smtp.command ?? ""} ${smtp.response ?? ""} ${message}`.toUpperCase();
  const responseCode = smtp.responseCode ?? Number.parseInt(smtp.response ?? "", 10);

  let reason: ContactMailReason = "unknown";

  if (
    code === "ETIMEDOUT" ||
    code === "ETIMEOUT" ||
    code === "ECONNECTION" ||
    code === "ESOCKET" ||
    code === "ABORTERROR" ||
    code === "EDNS" ||
    code === "ENOTFOUND" ||
    code === "EAI_AGAIN" ||
    syscall === "connect" ||
    syscall === "getaddrinfo" ||
    combined.includes("TIMED OUT") ||
    combined.includes("TIMEOUT") ||
    combined.includes("ABORTED")
  ) {
    reason = "timeout";
  } else if (
    responseCode >= 500 ||
    combined.includes("550") ||
    combined.includes("553") ||
    combined.includes("554") ||
    combined.includes("5.7.") ||
    combined.includes("NOT ALLOWED") ||
    combined.includes("REJECT")
  ) {
    reason = "rejected";
  } else if (
    combined.includes("WRONG VERSION NUMBER") ||
    combined.includes("CERTIFICATE") ||
    code === "ETLS" ||
    code === "EPROTOCOL"
  ) {
    reason = "tls";
  } else if (combined.includes("SMTP_HOST") || combined.includes("SMTP_PORT") || combined.includes("NOT CONFIGURED")) {
    reason = "not_configured";
  }

  return {
    reason,
    code: smtp.code,
    command: smtp.command,
    response: smtp.response,
    syscall: smtp.syscall,
    message,
  };
}

function wrapMailError(error: unknown): ContactMailError {
  if (error instanceof ContactMailError) {
    return error;
  }

  return new ContactMailError(classifyMailError(error));
}

export async function sendContactEmails(data: ContactFormPayload): Promise<void> {
  const { host, port, from, sender, internalTo, bcc, graph } = getMailConfig();

  const visitorName = `${data.firstName} ${data.lastName}`.trim();
  const internalSubject = `New website enquiry from ${visitorName}`;
  const internalText = [
    `New website enquiry from ${visitorName}`,
    `Business email: ${data.email}`,
    `Company: ${data.company}`,
    `Phone: ${data.phone || "—"}`,
    `Interested in: ${data.interest}`,
    "",
    data.message,
  ].join("\n");
  const internalHtml = wrapEmail(
    "New website enquiry",
    "A visitor submitted the contact form on zenium.ai.",
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${fieldRow("First name", data.firstName)}
      ${fieldRow("Last name", data.lastName)}
      ${fieldRow("Business email", data.email, `mailto:${data.email}`)}
      ${fieldRow("Company", data.company)}
      ${fieldRow("Phone", data.phone)}
      ${fieldRow("Interested in", data.interest)}
      ${fieldRow("Message", data.message)}
    </table>`,
  );
  const thankYouSubject = "Thank you for contacting Zenium";
  const thankYouText = `Hi ${data.firstName},\n\nThank you for getting in touch. We have received your message and a member of the Zenium team will follow up shortly.\n\nIf you need to add anything, write to info@zenium.ai.`;
  const thankYouHtml = wrapEmail(
    "Thank you for contacting Zenium",
    `Hi ${escapeHtml(data.firstName)},`,
    `<p style="margin:0 0 16px;color:#152D48;font-size:16px;line-height:1.6;">Thank you for getting in touch. We have received your message and a member of the Zenium team will follow up shortly.</p>
    <p style="margin:0;color:#5A6B7C;font-size:15px;line-height:1.6;">If you need to add anything, reply to this email or write to <a href="mailto:info@zenium.ai" style="color:#F36B21;font-weight:600;text-decoration:none;">info@zenium.ai</a>.</p>`,
  );

  if (graph) {
    try {
      const token = await getGraphAccessToken(graph);
      await sendGraphMail({
        token,
        sender,
        from,
        to: internalTo,
        bcc: bccFor(internalTo, bcc),
        replyTo: data.email,
        subject: internalSubject,
        html: internalHtml,
      });
      await sendGraphMail({
        token,
        sender,
        from,
        to: data.email,
        bcc: bccFor(data.email, bcc),
        subject: thankYouSubject,
        html: thankYouHtml,
      });
    } catch (error) {
      throw wrapMailError(error);
    }
    return;
  }

  if (!host) {
    throw new ContactMailError({
      reason: "not_configured",
      message: "SMTP_HOST is not configured.",
    });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: false,
    requireTLS: true,
    family: 4,
    connectionTimeout: SMTP_TIMEOUT_MS,
    greetingTimeout: SMTP_TIMEOUT_MS,
    socketTimeout: SMTP_TIMEOUT_MS,
    tls: {
      minVersion: "TLSv1.2",
    },
  } as Parameters<typeof nodemailer.createTransport>[0]);

  try {
    await transporter.sendMail({
      from,
      to: internalTo,
      replyTo: data.email,
      subject: internalSubject,
      text: internalText,
      html: internalHtml,
    });

    await transporter.sendMail({
      from,
      to: data.email,
      subject: thankYouSubject,
      text: thankYouText,
      html: thankYouHtml,
    });
  } catch (error) {
    throw wrapMailError(error);
  } finally {
    transporter.close();
  }
}
