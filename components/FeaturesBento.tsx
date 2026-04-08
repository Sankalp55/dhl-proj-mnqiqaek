import React from "react";

export type FeatureItem = {
  title: string;
  description?: string;
};

export type FeaturesBentoProps = {
  title?: string;
  subtitle?: string;
  features?: FeatureItem[];
};

export default function FeaturesBento({
  title = "What you get",
  subtitle = "A few things we can help with.",
  features = [
    { title: "Fast response", description: "We typically reply within 1–2 business days." },
    { title: "Clear scope", description: "We’ll confirm requirements before starting." },
    { title: "Transparent pricing", description: "No surprises—estimates are shared up front." },
    { title: "Quality delivery", description: "We focus on maintainable, production-ready work." },
  ],
}: FeaturesBentoProps) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {subtitle ? <p className="mt-2 text-muted-foreground">{subtitle}</p> : null}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {features.map((f) => (
          <div key={f.title} className="rounded-lg border border-border p-5">
            <h3 className="font-medium">{f.title}</h3>
            {f.description ? <p className="mt-2 text-sm text-muted-foreground">{f.description}</p> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
