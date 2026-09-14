"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import {
  BRANDS,
  BUSINESS_TYPES,
  CATEGORIES,
  COUNTRIES,
  MARKETPLACES,
  OTHER_BRAND_OPTION,
} from "@/lib/brands";
import { ArrowRightIcon, CheckCircleIcon } from "../icons";

const inputClasses =
  "w-full rounded-[5px] border border-line bg-white px-2.5 py-2 text-xs text-ink placeholder:text-faint focus:border-ink focus:outline-none";

const labelClasses = "mb-1 block text-xs font-semibold text-ink";

interface FormState {
  status: "idle" | "submitting" | "success" | "error";
  message?: string;
}

export default function RequestCatalogForm({
  onSuccessClose,
}: {
  onSuccessClose?: () => void;
}) {
  const [state, setState] = useState<FormState>({ status: "idle" });
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  function toggleBrand(name: string) {
    setSelectedBrands((prev) =>
      prev.includes(name) ? prev.filter((b) => b !== name) : [...prev, name]
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state.status === "submitting") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      businessType: String(data.get("businessType") ?? ""),
      marketplace: String(data.get("marketplace") ?? ""),
      country: String(data.get("country") ?? ""),
      brands: selectedBrands,
      models: String(data.get("models") ?? "").trim(),
      orderSize: String(data.get("orderSize") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    setState({ status: "submitting" });
    try {
      const res = await fetch("/api/catalog-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (res.ok && json.ok) {
        setState({ status: "success" });
        form.reset();
        setSelectedBrands([]);
      } else {
        setState({
          status: "error",
          message:
            json.error ??
            "Your request could not be sent. Please try again or email us directly.",
        });
      }
    } catch {
      setState({
        status: "error",
        message:
          "A network error stopped your request from sending. Check your connection and try again.",
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
        <h3 className="mt-3 text-lg font-bold text-[#146b2b]">
          Request received
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-body">
          Thanks — we&apos;ve received your catalog request. Our team will
          review it and reply to the email address you provided, usually within
          one business day.
        </p>
        {onSuccessClose && (
          <button
            type="button"
            onClick={onSuccessClose}
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-dark px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-black"
          >
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="text-xs">
      <div className="grid grid-cols-1 gap-x-6 gap-y-3.5 sm:grid-cols-2">
        {/* Left column — business details */}
        <div className="grid content-start gap-3.5">
          <div>
            <label htmlFor="rc-name" className={labelClasses}>
              Name <span className="text-brand-red">*</span>
            </label>
            <input
              id="rc-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your name"
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="rc-company" className={labelClasses}>
              Business / company
            </label>
            <input
              id="rc-company"
              name="company"
              type="text"
              autoComplete="organization"
              placeholder="Company name"
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="rc-email" className={labelClasses}>
              Email <span className="text-brand-red">*</span>
            </label>
            <input
              id="rc-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="rc-phone" className={labelClasses}>
              Phone <span className="font-medium text-muted">(optional)</span>
            </label>
            <input
              id="rc-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+1 555 000 0000"
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="rc-business-type" className={labelClasses}>
              Business type <span className="text-brand-red">*</span>
            </label>
            <select
              id="rc-business-type"
              name="businessType"
              required
              defaultValue=""
              className={inputClasses}
            >
              <option value="" disabled>
                Select your business type
              </option>
              {BUSINESS_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="rc-marketplace" className={labelClasses}>
              Marketplace{" "}
              <span className="font-medium text-muted">(if applicable)</span>
            </label>
            <select
              id="rc-marketplace"
              name="marketplace"
              defaultValue=""
              className={inputClasses}
            >
              <option value="">Select marketplace</option>
              {MARKETPLACES.map((mp) => (
                <option key={mp} value={mp}>
                  {mp}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="rc-country" className={labelClasses}>
              Country
            </label>
            <select
              id="rc-country"
              name="country"
              defaultValue=""
              className={inputClasses}
            >
              <option value="">Select country</option>
              {COUNTRIES.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="rc-models" className={labelClasses}>
              Specific model or product{" "}
              <span className="font-medium text-muted">(optional)</span>
            </label>
            <input
              id="rc-models"
              name="models"
              type="text"
              placeholder="e.g. Milwaukee M18, Makita 18V, etc."
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="rc-order-size" className={labelClasses}>
              Estimated order size{" "}
              <span className="font-medium text-muted">(optional)</span>
            </label>
            <input
              id="rc-order-size"
              name="orderSize"
              type="text"
              placeholder="e.g. 200 units / $15,000"
              className={inputClasses}
            />
          </div>
        </div>

        {/* Right column — brand multi-select */}
        <fieldset>
          <legend className="text-xs font-extrabold text-ink">
            Brands you&apos;re interested in
          </legend>
          <p className="mt-0.5 text-[0.7rem] font-medium text-body">
            (Select multiple)
          </p>
          <div className="mt-2.5 space-y-3.5">
            {CATEGORIES.map((category) => (
              <div key={category.slug}>
                <p className="mb-1.5 text-[0.62rem] font-bold uppercase tracking-wider text-faint">
                  {category.name}
                </p>
                <div className="grid gap-1.5">
                  {[
                    ...BRANDS.filter((b) => b.category === category.slug).map(
                      (b) => b.name
                    ),
                    `${OTHER_BRAND_OPTION} (${category.name})`,
                  ].map((name) => (
                    <label
                      key={name}
                      className="flex cursor-pointer items-center gap-2.5 font-medium text-body"
                    >
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(name)}
                        onChange={() => toggleBrand(name)}
                        className="h-[15px] w-[15px] shrink-0 accent-ink"
                      />
                      {name}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="mt-4">
        <label htmlFor="rc-message" className={labelClasses}>
          Additional information{" "}
          <span className="font-medium text-muted">(optional)</span>
        </label>
        <textarea
          id="rc-message"
          name="message"
          rows={3}
          placeholder="Tell us about your business or specific requirements."
          className={`${inputClasses} resize-y`}
        />
      </div>

      <label className="mt-3.5 flex cursor-pointer items-start gap-2.5 text-[0.7rem] leading-relaxed text-body">
        <input
          type="checkbox"
          required
          className="mt-0.5 h-[15px] w-[15px] shrink-0 accent-ink"
        />
        <span>
          I agree to be contacted by Hyprr Retail regarding my request. See our{" "}
          <Link
            href="/privacy"
            className="text-[#2b6cd9] underline hover:text-ink"
          >
            Privacy Policy
          </Link>{" "}
          for details.
        </span>
      </label>

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
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-amber px-6 py-3.5 text-[0.9rem] font-semibold text-ink transition-colors hover:bg-amber-hover disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state.status === "submitting" ? "Sending…" : "Send Request"}
        <ArrowRightIcon className="h-4 w-4" />
      </button>
    </form>
  );
}
