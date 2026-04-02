"use client";

import { useState } from "react";
import { socialLinks } from "@/data/portfolio";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  message: ""
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const result = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to send your message right now.");
      }

      setStatus({
        type: "success",
        message: result.message ?? "Message sent successfully."
      });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error ? error.message : "Something went wrong. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <SectionShell id="contact">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="If you want an engineer who thinks beyond implementation, let's talk."
            description="This portfolio is designed to signal more than technical competence. It shows systems thinking, product sensitivity, and the ability to present engineering work in a way that stands out."
          />

          <div className="mt-8 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200 transition hover:bg-white/[0.08]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 shadow-glow"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, name: event.target.value }))
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-accent-cyan/50"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Email</span>
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, email: event.target.value }))
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-accent-cyan/50"
                />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-2 block text-sm text-slate-300">Message</span>
              <textarea
                rows={6}
                placeholder="Tell me about the opportunity, product, or problem space."
                value={form.message}
                onChange={(event) =>
                  setForm((current) => ({ ...current, message: event.target.value }))
                }
                className="w-full rounded-3xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-accent-cyan/50"
              />
            </label>

            <div className="mt-5 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center">
              <div className="max-w-md">
                <p className="text-sm leading-6 text-slate-400">
                  Messages are sent through a server route that is ready for Resend on Vercel.
                </p>
                {status.type !== "idle" ? (
                  <p
                    className={`mt-2 text-sm ${
                      status.type === "success" ? "text-accent-cyan" : "text-rose-300"
                    }`}
                  >
                    {status.message}
                  </p>
                ) : null}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Start the conversation"}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </SectionShell>
  );
}
