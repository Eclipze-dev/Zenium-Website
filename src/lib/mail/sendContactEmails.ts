import nodemailer from "nodemailer";
import type { ContactFormPayload } from "./contactValidation";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function fieldRow(label: string, value: string): string {
  const display = value || "—";
  return `<tr>
    <td style="padding:10px 0;border-bottom:1px solid #E6EDF3;color:#5A6B7C;font-size:14px;width:160px;vertical-align:top;">${escapeHtml(label)}</td>
    <td style="padding:10px 0;border-bottom:1px solid #E6EDF3;color:#152D48;font-size:14px;white-space:pre-wrap;">${escapeHtml(display)}</td>
  </tr>`;
}

function wrapEmail(title: string, body: string): string {
  return `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:24px;background:#F4F7FA;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:12px;padding:32px;">
      <tr>
        <td>
          <p style="margin:0 0 8px;color:#F36B21;font-size:12px;letter-spacing:1.4px;font-weight:700;">ZENIUM</p>
          <h1 style="margin:0 0 20px;color:#152D48;font-size:22px;line-height:1.3;">${title}</h1>
          ${body}
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function getMailConfig() {
  const host = process.env.SMTP_HOST?.trim();
  const port = Number(process.env.SMTP_PORT ?? 25);
  const from = process.env.MAIL_FROM?.trim() || "noreply@zenium.ai";
  const internalTo = process.env.MAIL_INTERNAL_TO?.trim() || "info@zenium.ai";

  if (!host) {
    throw new Error("SMTP_HOST is not configured.");
  }

  if (!Number.isFinite(port) || port <= 0) {
    throw new Error("SMTP_PORT is invalid.");
  }

  return { host, port, from, internalTo };
}

export async function sendContactEmails(data: ContactFormPayload): Promise<void> {
  const { host, port, from, internalTo } = getMailConfig();

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: false,
    requireTLS: true,
    tls: {
      minVersion: "TLSv1.2",
    },
  });

  const visitorName = `${data.firstName} ${data.lastName}`.trim();
  const internalHtml = wrapEmail(
    "New website enquiry",
    `<p style="margin:0 0 20px;color:#5A6B7C;font-size:15px;line-height:1.6;">A visitor submitted the contact form on zenium.ai.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${fieldRow("First name", data.firstName)}
      ${fieldRow("Last name", data.lastName)}
      ${fieldRow("Business email", data.email)}
      ${fieldRow("Company", data.company)}
      ${fieldRow("Phone", data.phone)}
      ${fieldRow("Interested in", data.interest)}
      ${fieldRow("Message", data.message)}
    </table>`,
  );

  const thankYouHtml = wrapEmail(
    "Thank you for contacting Zenium",
    `<p style="margin:0 0 16px;color:#152D48;font-size:16px;line-height:1.6;">Hi ${escapeHtml(data.firstName)},</p>
    <p style="margin:0 0 16px;color:#5A6B7C;font-size:15px;line-height:1.6;">Thank you for getting in touch. We have received your message and a member of the Zenium team will follow up shortly.</p>
    <p style="margin:0;color:#5A6B7C;font-size:15px;line-height:1.6;">If you need to add anything, reply to this email or write to <a href="mailto:info@zenium.ai" style="color:#F36B21;">info@zenium.ai</a>.</p>`,
  );

  await transporter.sendMail({
    from,
    to: internalTo,
    replyTo: data.email,
    subject: `New website enquiry from ${visitorName}`,
    text: [
      `New website enquiry from ${visitorName}`,
      `Business email: ${data.email}`,
      `Company: ${data.company}`,
      `Phone: ${data.phone || "—"}`,
      `Interested in: ${data.interest}`,
      "",
      data.message,
    ].join("\n"),
    html: internalHtml,
  });

  await transporter.sendMail({
    from,
    to: data.email,
    subject: "Thank you for contacting Zenium",
    text: `Hi ${data.firstName},\n\nThank you for getting in touch. We have received your message and a member of the Zenium team will follow up shortly.\n\nIf you need to add anything, write to info@zenium.ai.`,
    html: thankYouHtml,
  });
}
