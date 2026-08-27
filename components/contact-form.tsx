"use client";

import { useState } from "react";
import { contact, contactPage } from "@/lib/content";

const FIELD =
  "w-full rounded-edge border border-on-base/[0.14] bg-base/50 px-4 py-3.5 text-[15px] text-on-base transition-colors duration-300 focus:border-accent focus:outline-none";
const LABEL = "label-sm text-on-base-4";

/**
 * No inbox is wired up. On submit this composes a pre-filled email to
 * `contact.email` and hands off to the visitor's mail client, so the form
 * is useful from day one — and the note underneath says plainly that phone
 * or WhatsApp is faster. Replace `handleSubmit` with a POST to a real
 * endpoint when one exists; the markup and validation stay as they are.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone / WhatsApp: ${data.get("phone") || "—"}`,
      `Preferred reply: ${data.get("channel")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      "Enquiry from olatunbosunbtc.com",
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="panel p-[clamp(24px,3vw,42px)] backdrop-blur-[8px]"
    >
      <h2 className="m-0 text-[clamp(27px,2.7vw,34px)] leading-[1.1] tracking-[-0.012em] text-on-base">
        {contactPage.form.heading}
      </h2>
      <p className="mt-3 max-w-[42ch] text-[14.5px] leading-[1.7] text-on-base-3">
        {contactPage.form.lead}
      </p>

      <div className="mt-8 grid gap-4.5 tab:grid-cols-2">
        <label className="flex flex-col gap-2.5">
          <span className={LABEL}>Name</span>
          <input
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className={FIELD}
          />
        </label>

        <label className="flex flex-col gap-2.5">
          <span className={LABEL}>Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={FIELD}
          />
        </label>

        <label className="flex flex-col gap-2.5">
          <span className={LABEL}>
            Phone / WhatsApp <span className="tracking-[0.04em] normal-case">(optional)</span>
          </span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Include country code"
            className={FIELD}
          />
        </label>

        <label className="flex flex-col gap-2.5">
          <span className={LABEL}>Preferred reply</span>
          <select name="channel" className={`${FIELD} appearance-none`}>
            {contactPage.form.replyOptions.map((option) => (
              <option key={option} value={option} className="bg-char text-on-base">
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-4.5 flex flex-col gap-2.5">
        <span className={LABEL}>What would you like to discuss?</span>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="A sentence or two is fine."
          className={`${FIELD} resize-y leading-[1.62]`}
        />
      </label>

      <button
        type="submit"
        className="btn-gold mt-7 w-full cursor-pointer justify-center border-0 px-5.5 py-4.5 text-[15px] hover:btn-gold-hover"
      >
        {contactPage.form.submit}
        <span aria-hidden="true" className="font-mono text-xs">
          →
        </span>
      </button>

      {sent && (
        <div
          role="status"
          className="mt-4.5 border border-accent/40 bg-accent/[0.09] p-4"
        >
          <div className="label-sm text-accent">Handed to your mail app</div>
          <p className="mt-2 text-sm leading-[1.65] text-on-base-2">
            Your email client should have opened with the enquiry ready to send. If it
            didn&apos;t, phone or WhatsApp reaches me fastest.
          </p>
        </div>
      )}

      <p className="mt-4.5 text-[12.5px] leading-[1.75] text-on-base-5">
        {contactPage.form.privacy}
      </p>
    </form>
  );
}
