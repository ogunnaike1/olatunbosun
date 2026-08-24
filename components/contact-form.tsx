"use client";

import { useState } from "react";
import { contact, contactMethods, serviceOptions } from "@/lib/content";

const FIELD =
  "w-full rounded-btn border border-deep/15 bg-stone px-4 py-3.5 text-[15px] text-deep transition-colors duration-300 focus:border-deep focus:bg-cream focus:outline-none";
const LABEL = "block text-[11px] font-bold text-deep";

/**
 * No backend is wired up. On submit this composes a pre-filled email to
 * `contact.email` and hands off to the visitor's mail client, so the form
 * works from day one. Replace `handleSubmit` with a POST to a real endpoint
 * (or a server action) when one exists — markup and validation stay as-is.
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

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      `Enquiry — ${data.get("service")}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <label className={LABEL} htmlFor="cf-name">
          Name
        </label>
        <input
          id="cf-name"
          name="name"
          required
          autoComplete="name"
          className={`${FIELD} mt-2`}
        />
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
          className={`${FIELD} mt-2.5 resize-y`}
        />
      </div>

      <div className="mt-1 flex flex-wrap items-center gap-6">
        <button
          type="submit"
          className="rounded-btn bg-deep px-8 py-4 text-[14px] font-bold text-white transition-colors duration-300 hover:bg-deep-2"
        >
          Send Message
        </button>
        <p aria-live="polite" className="m-0 max-w-[30ch] text-[13.5px] text-deep">
          {sent
            ? "Your mail app should have opened with the message ready to send."
            : "Or use any channel listed — they all reach the same person."}
        </p>
      </div>
    </form>
  );
}
