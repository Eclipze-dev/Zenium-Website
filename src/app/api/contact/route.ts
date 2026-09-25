import { NextResponse } from "next/server";
import { execute } from "@/lib/cms/db";
import {
  classifyMailError,
  sendContactEmails,
} from "@/lib/mail/sendContactEmails";
import {
  validateContactForm,
  type ContactFormPayload,
} from "@/lib/mail/contactValidation";

export const maxDuration = 20;

export async function POST(request: Request) {
  let body: Partial<ContactFormPayload>;

  try {
    body = (await request.json()) as Partial<ContactFormPayload>;
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  const { errors, data } = validateContactForm({
    firstName: body.firstName ?? "",
    lastName: body.lastName ?? "",
    email: body.email ?? "",
    company: body.company ?? "",
    phone: body.phone ?? "",
    interest: body.interest ?? "",
    message: body.message ?? "",
  });

  if (!data) {
    return NextResponse.json(
      { message: "Please correct the highlighted fields.", errors },
      { status: 400 },
    );
  }

  try {
    await execute(
      `INSERT INTO enquiries (first_name, last_name, email, company, phone, interest, message)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        data.firstName,
        data.lastName,
        data.email,
        data.company,
        data.phone,
        data.interest,
        data.message,
      ],
    );
  } catch (error) {
    console.error("Contact form save failed:", error);
    return NextResponse.json(
      { message: "We could not send your message. Please try again." },
      { status: 500 },
    );
  }

  try {
    await sendContactEmails(data);
  } catch (error) {
    const details = classifyMailError(error);
    console.error("Contact form email failed:", {
      reason: details.reason,
      code: details.code,
      command: details.command,
      response: details.response,
      syscall: details.syscall,
      message: details.message,
    });
    return NextResponse.json(
      {
        message: "We could not send your message. Please try again.",
        reason: details.reason,
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
