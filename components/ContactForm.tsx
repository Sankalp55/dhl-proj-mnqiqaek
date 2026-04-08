import React from "react";

export type ContactFormProps = {
  action?: string;
};

export default function ContactForm({ action = "#" }: ContactFormProps) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <form action={action} method="post" className="space-y-4 rounded-lg border border-border p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-1">
            <span className="text-sm font-medium">First name</span>
            <input
              name="firstName"
              autoComplete="given-name"
              className="h-10 rounded-md border border-border bg-background px-3"
            />
          </label>
          <label className="grid gap-1">
            <span className="text-sm font-medium">Last name</span>
            <input
              name="lastName"
              autoComplete="family-name"
              className="h-10 rounded-md border border-border bg-background px-3"
            />
          </label>
        </div>

        <label className="grid gap-1">
          <span className="text-sm font-medium">Email</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            className="h-10 rounded-md border border-border bg-background px-3"
          />
        </label>

        <label className="grid gap-1">
          <span className="text-sm font-medium">Message</span>
          <textarea
            name="message"
            required
            rows={5}
            className="rounded-md border border-border bg-background px-3 py-2"
          />
        </label>

        <button
          type="submit"
          className="inline-flex h-10 items-center justify-center rounded-md bg-foreground px-4 text-sm font-medium text-background"
        >
          Send
        </button>
      </form>
    </section>
  );
}
