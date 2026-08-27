"use client";

import { useState } from "react";
import { contact, contactPage } from "@/lib/content";

const FIELD =
  "w-full rounded-edge border border-on-base/[0.14] bg-base/50 px-4 py-3.5 text-[15px] text-on-base transition-colors duration-300 focus:border-accent focus:outline-none";
const LABEL = "label-sm text-on-base-4";

/**
 * Not a form in the usual sense: nothing is submitted anywhere. It composes
 * the fields into one WhatsApp message and opens the chat with that text
 * already written, so the visitor can read it, edit it and send it himself.
 *
 * That is deliberate. WhatsApp is the only channel on this site — a form
 * posting to an inbox would quietly create a second one, and the "one
 * number, one place to check it" promise would stop being true.
 */
export function ContactForm() {
  const [opened, setOpened] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const message = [
      `Hello — I found you through your website.`,
      "",
      `Name: ${data.get("name")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");

    window.open(
      `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setOpened(true);
  }

  return (
    <form onSubmit={handleSubmit} className="panel p-[clamp(24px,3vw,42px)] backdrop-blur-[8px]">
      <h2 className="m-0 text-[clamp(27px,2.7vw,34px)] leading-[1.1] tracking-[-0.012em] text-on-base">
        {contactPage.form.heading}
      </h2>
      <p className="mt-3 max-w-[42ch] text-[14.5px] leading-[1.7] text-on-base-3">
        {contactPage.form.lead}
      </p>

      {/* Two fields only. Anything more is a form pretending the
          conversation hasn't started yet. */}
      <label className="mt-8 flex flex-col gap-2.5">
        <span className={LABEL}>Your name</span>
        <input
          name="name"
          required
          autoComplete="name"
          placeholder="Your name"
          className={FIELD}
        />
      </label>

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

      {opened && (
        <div role="status" className="mt-4.5 border border-accent/40 bg-accent/[0.09] p-4">
          <div className="label-sm text-accent">WhatsApp opened</div>
          <p className="mt-2 text-sm leading-[1.65] text-on-base-2">
            Your message is written and waiting — read it over and press send. If nothing
            opened, message {contact.number} directly.
          </p>
        </div>
      )}

      <p className="mt-4.5 text-[12.5px] leading-[1.75] text-on-base-5">
        {contactPage.form.privacy}
      </p>
    </form>
  );
}
