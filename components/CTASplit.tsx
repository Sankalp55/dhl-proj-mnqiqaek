import React from "react";

export type CTASplitProps = {
  title?: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export default function CTASplit({
  title = "Ready to get started?",
  subtitle = "Send a message and we’ll follow up with next steps.",
  primaryCta = { label: "Contact", href: "/contact" },
  secondaryCta,
}: CTASplitProps) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <div className="flex flex-col gap-6 rounded-lg border border-border p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          {subtitle ? <p className="mt-2 text-muted-foreground">{subtitle}</p> : null}
        </div>
        <div className="flex gap-3">
          {primaryCta ? (
            <a
              href={primaryCta.href}
              className="inline-flex h-10 items-center justify-center rounded-md bg-foreground px-4 text-sm font-medium text-background"
            >
              {primaryCta.label}
            </a>
          ) : null}
          {secondaryCta ? (
            <a
              href={secondaryCta.href}
              className="inline-flex h-10 items-center justify-center rounded-md border border-border px-4 text-sm font-medium"
            >
              {secondaryCta.label}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
