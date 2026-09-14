import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD_LENGTH = 4000;

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim().slice(0, MAX_FIELD_LENGTH) : "";
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = clean(payload.name);
  const email = clean(payload.email);
  const subject = clean(payload.subject);
  const message = clean(payload.message);

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, email, subject and message are required." },
      { status: 400 }
    );
  }
  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${clean(payload.phone) || "—"}`,
    `Subject: ${subject}`,
    "",
    "Message:",
    message,
  ];

  // Shares the delivery configuration with the catalog-request route.
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CATALOG_TO_EMAIL;
  const fromEmail = process.env.CATALOG_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.warn(
      "[contact] Email delivery is not configured; submission was not delivered.",
      { name, email, subject }
    );
    return NextResponse.json(
      {
        ok: false,
        error:
          "Our enquiry system is temporarily unavailable. Please try again shortly.",
      },
      { status: 503 }
    );
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `Website enquiry — ${subject}`,
        text: lines.join("\n"),
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error("[contact] Delivery failed:", response.status, body);
      return NextResponse.json(
        {
          ok: false,
          error:
            "Your message could not be delivered right now. Please try again shortly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] Delivery error:", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Your message could not be delivered right now. Please try again shortly.",
      },
      { status: 502 }
    );
  }
}
