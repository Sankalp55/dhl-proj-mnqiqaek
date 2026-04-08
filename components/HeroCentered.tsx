import React from "react";

export type HeroCenteredProps = {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export default function HeroCentered({
  title = "Contact us",
  subtitle = "Tell us about your project and we’ll get back to you shortly.",
  eyebrow,
  primaryCta,
  secondaryCta,
}: HeroCenteredProps) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="text-center">
        {eyebrow ? (
          <p className="text-sm font-medium text-muted-foreground">{eyebrow}</p>
        ) : null}
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">{subtitle}</p>

        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex items-center justify-center gap-3">
            {primaryCta ? (
              <a
                href={primaryCta.href}
                className="inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background"
              >
                {primaryCta.label}
              </a>
            ) : null}
            {secondaryCta ? (
              <a
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium"
              >
                {secondaryCta.label}
              </a>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
