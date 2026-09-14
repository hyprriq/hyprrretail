import { NextResponse } from "next/server";

interface CatalogRequestPayload {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  businessType?: string;
  marketplace?: string;
  country?: string;
  brands?: string[];
  models?: string;
  orderSize?: string;
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD_LENGTH = 2000;

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim().slice(0, MAX_FIELD_LENGTH) : "";
}

export async function POST(request: Request) {
  let payload: CatalogRequestPayload;
  try {
    payload = (await request.json()) as CatalogRequestPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = clean(payload.name);
  const email = clean(payload.email);
  const businessType = clean(payload.businessType);

  if (!name || !email || !businessType) {
    return NextResponse.json(
      { ok: false, error: "Name, email and business type are required." },
      { status: 400 }
    );
  }
  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const brands = Array.isArray(payload.brands)
    ? payload.brands.map(clean).filter(Boolean).slice(0, 40)
    : [];

  const lines = [
    `Name: ${name}`,
    `Company: ${clean(payload.company) || "—"}`,
    `Email: ${email}`,
    `Phone: ${clean(payload.phone) || "—"}`,
    `Business type: ${businessType}`,
    `Marketplace: ${clean(payload.marketplace) || "—"}`,
    `Country: ${clean(payload.country) || "—"}`,
    `Brands: ${brands.length ? brands.join(", ") : "—"}`,
    `Models / products: ${clean(payload.models) || "—"}`,
    `Estimated order size: ${clean(payload.orderSize) || "—"}`,
    "",
    "Message:",
    clean(payload.message) || "—",
  ];

  // Email delivery integration point. Configure in the deployment environment:
  //   RESEND_API_KEY       — Resend API key
  //   CATALOG_TO_EMAIL     — inbox that receives catalog requests
  //   CATALOG_FROM_EMAIL   — verified sender address
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CATALOG_TO_EMAIL;
  const fromEmail = process.env.CATALOG_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    // Never fake a successful delivery: surface an honest, actionable error.
    console.warn(
      "[catalog-request] Email delivery is not configured; submission was not delivered.",
      { name, email, businessType }
    );
    return NextResponse.json(
      {
        ok: false,
        error:
          "Our enquiry system is temporarily unavailable. Please try again shortly, or reach us via the Contact page.",
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
        subject: `Catalog request — ${name}${
          payload.company ? ` (${clean(payload.company)})` : ""
        }`,
        text: lines.join("\n"),
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error("[catalog-request] Delivery failed:", response.status, body);
      return NextResponse.json(
        {
          ok: false,
          error:
            "Your request could not be delivered right now. Please try again shortly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[catalog-request] Delivery error:", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Your request could not be delivered right now. Please try again shortly.",
      },
      { status: 502 }
    );
  }
}
