"use client";

import { useState, type FormEvent } from "react";
import { ArrowRightIcon, CheckCircleIcon } from "./icons";

const inputClasses =
  "w-full rounded-[5px] border border-line bg-white px-3 py-2.5 text-sm text-ink placeholder:text-faint focus:border-ink focus:outline-none";

const labelClasses = "mb-1.5 block text-xs font-semibold text-ink";

const SUBJECTS = [
  "Brand / model availability",
  "Wholesale enquiry",
  "Shipping question",
  "Seller support",
  "Distribution enquiry",
  "Other",
] as const;

interface FormState {
  status: "idle" | "submitting" | "success" | "error";
  message?: string;
}

/** Short general-enquiry form — the full wholesale form lives in the
 *  Request Catalog modal. */
export default function ContactForm() {
  const [state, setState] = useState<FormState>({ status: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state.status === "submitting") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      subject: String(data.get("subject") ?? ""),
      message: String(data.get("message") ?? "").trim(),
    };

    setState({ status: "submitting" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (res.ok && json.ok) {
        setState({ status: "success" });
        form.reset();
      } else {
        setState({
          status: "error",
          message:
            json.error ??
            "Your message could not be sent. Please try again shortly.",
        });
      }
    } catch {
      setState({
        status: "error",
        message:
          "A network error stopped your message from sending. Check your connection and try again.",
      });
    }
  }

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="rounded-md border border-[#bfe6cb] bg-[#eefaf1] p-6 text-center"
      >
        <CheckCircleIcon className="mx-auto h-10 w-10 text-[#146b2b]" />
        <h3 className="mt-3 text-lg font-bold text-[#146b2b]">Message sent</h3>
        <p className="mt-2 text-sm leading-relaxed text-body">
          Thanks — we&apos;ve received your message and will reply to the email
          address you provided, usually within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelClasses}>
            Name <span className="text-brand-red">*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className={labelClasses}>
            Email <span className="text-brand-red">*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="cf-phone" className={labelClasses}>
            Phone <span className="font-medium text-muted">(optional)</span>
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+1 555 000 0000"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="cf-subject" className={labelClasses}>
            Subject <span className="text-brand-red">*</span>
          </label>
          <select
            id="cf-subject"
            name="subject"
            required
            defaultValue=""
            className={inputClasses}
          >
            <option value="" disabled>
              Select a subject
            </option>
            {SUBJECTS.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="cf-message" className={labelClasses}>
          Message <span className="text-brand-red">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          required
          placeholder="How can we help?"
          className={`${inputClasses} resize-y`}
        />
      </div>

      {state.status === "error" && (
        <p
          role="alert"
          className="mt-4 rounded-md border border-brand-red/30 bg-brand-red/5 px-4 py-3 text-sm text-brand-red"
        >
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={state.status === "submitting"}
        className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-amber px-7 py-3 text-sm font-semibold text-ink transition-colors hover:bg-amber-hover disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state.status === "submitting" ? "Sending…" : "Send Message"}
        <ArrowRightIcon className="h-4 w-4" />
      </button>
    </form>
  );
}
