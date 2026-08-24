"use client";

import { useState } from "react";
import { contact, contactMethods, serviceOptions } from "@/lib/content";

const FIELD =
  "w-full border border-ink-text/25 bg-transparent px-4 py-3 text-[16px] text-ink-text transition-colors duration-200 focus:border-accent focus:outline-none";
const LABEL = "block text-[10.5px] uppercase tracking-[0.24em] text-ink-text/60";

/**
 * No backend is wired up. On submit this composes a pre-filled email to the
 * address in `contact.email` and hands off to the visitor's mail client, so
 * the form is functional from day one. Replace `handleSubmit` with a POST to
 * a real endpoint (or a server action) when one exists — the markup and
 * validation stay as they are.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Preferred contact method: ${data.get("method")}`,
      `Service of interest: ${data.get("service")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");

    const subject = `Enquiry — ${data.get("service")}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <label className={LABEL} htmlFor="cf-name">
          Name
        </label>
        <input id="cf-name" name="name" required autoComplete="name" className={`${FIELD} mt-2`} />
      </div>

      <div>
        <label className={LABEL} htmlFor="cf-email">
          Email
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={`${FIELD} mt-2`}
        />
      </div>

      <div
        className="grid gap-6"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
      >
        <div>
          <label className={LABEL} htmlFor="cf-method">
            Preferred contact method
          </label>
          <select id="cf-method" name="method" className={`${FIELD} mt-2`} defaultValue="Email">
            {contactMethods.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={LABEL} htmlFor="cf-service">
            Service interested in
          </label>
          <select
            id="cf-service"
            name="service"
            className={`${FIELD} mt-2`}
            defaultValue={serviceOptions[0]}
          >
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={LABEL} htmlFor="cf-message">
          Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          required
          className={`${FIELD} mt-2 resize-y`}
        />
      </div>

      <div className="flex flex-wrap items-center gap-5">
        <button
          type="submit"
          className="bg-accent px-8 py-4 text-[14px] uppercase tracking-[0.12em] text-paper transition-[background-color,transform] duration-[220ms] hover:-translate-y-0.5 hover:bg-ink-text"
        >
          Send Message
        </button>
        <p aria-live="polite" className="m-0 text-[13.5px] text-ink-text/66">
          {sent
            ? "Your mail app should have opened with the message ready to send."
            : "Prefer not to use the form? Every channel below reaches us directly."}
        </p>
      </div>
    </form>
  );
}
