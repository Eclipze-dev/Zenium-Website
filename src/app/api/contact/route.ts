import { NextResponse } from "next/server";
import { sendContactEmails } from "@/lib/mail/sendContactEmails";
import {
  validateContactForm,
  type ContactFormPayload,
} from "@/lib/mail/contactValidation";

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
    await sendContactEmails(data);
  } catch (error) {
    console.error("Contact form email failed:", error);
    return NextResponse.json(
      { message: "We could not send your message. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
