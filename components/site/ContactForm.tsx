"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL } from "@/lib/site";

const TOPICS = [
  "General question",
  "Enterprise quote",
  "Walkthrough / demo",
  "Something else",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("submit failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full border border-border bg-card px-4 py-3 text-twilight placeholder:text-twilight/40 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <form onSubmit={onSubmit} className="border border-border bg-card p-8 sm:p-10">
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-twilight">
            Full name
          </label>
          <input id="name" name="name" type="text" required className={inputClass} placeholder="Jane Doe" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-twilight">
            Email
          </label>
          <input id="email" name="email" type="email" required className={inputClass} placeholder="you@agency.com" />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="agency" className="mb-2 block text-sm font-semibold text-twilight">
          Agency name
        </label>
        <input id="agency" name="agency" type="text" className={inputClass} placeholder="Everest Trekking Co." />
      </div>

      <div className="mt-5">
        <label htmlFor="topic" className="mb-2 block text-sm font-semibold text-twilight">
          What&apos;s this about?
        </label>
        <select id="topic" name="topic" className={inputClass} defaultValue={TOPICS[0]}>
          {TOPICS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-twilight">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={inputClass}
          placeholder="Tell us about your agency and what you're looking for…"
        />
      </div>

      <Button type="submit" variant="hero" size="xl" className="mt-8 w-full" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : status === "sent" ? "Sent!" : "Send message"}
      </Button>

      {status === "sent" && (
        <p className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-emerald-600">
          <CheckCircle className="size-4" />
          Thanks — your message is on its way. We&apos;ll reply within one business day.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-center text-sm font-medium text-red-600">
          Something went wrong. Please email {CONTACT_EMAIL} directly.
        </p>
      )}
    </form>
  );
}
