import { HeroGradientBlob } from "@/components/blocks/HeroGradientBlob";
import { FeaturesGrid } from "@/components/blocks/FeaturesGrid";

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <HeroGradientBlob
        title="Logistics services for every shipment type"
        subtitle="Choose the right service level for speed, cost, and reliability—supported by DHL’s global network."
        ctaLabel="Get a quote"
        ctaHref="/contact"
        secondaryCtaLabel="See pricing"
        secondaryCtaHref="/pricing"
        gradientStart="#FFCC00"
        gradientEnd="#D40511"
      />

      {/* PROCESS TIMELINE */}
      <section className="py-24 md:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              A consistent process from pickup to proof of delivery
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Operational clarity with predictable checkpoints and proactive exception handling.
            </p>
          </div>
          <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8">
            {[
              {
                title: "Pickup",
                description: "Schedule, scan, and confirm collection windows.",
              },
              {
                title: "Linehaul",
                description: "Optimized routing across hubs and lanes.",
              },
              {
                title: "Customs",
                description: "Documentation support and clearance visibility.",
              },
              {
                title: "Last mile",
                description: "Delivery options and recipient notifications.",
              },
              {
                title: "Proof of delivery",
                description: "Digital confirmation and audit-ready records.",
              },
            ].map((item, idx) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center flex-1"
              >
                <div
                  className={`mb-4 flex items-center justify-center h-14 w-14 rounded-full bg-primary/80 text-secondary-foreground text-2xl font-bold border-2 border-secondary ring-2 ring-primary`}
                >
                  {idx + 1}
                </div>
                <h3 className="font-bold text-lg text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTOMATION INTEGRATIONS */}
      <section id="integrations" className="py-24 md:py-24 bg-muted/50">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Automation-ready shipping
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Reduce manual work with integrations and API-friendly workflows.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "FileText",
                title: "Label & document generation",
                description: "Create labels, invoices, and customs docs in one flow.",
              },
              {
                icon: "Webhook",
                title: "Webhook events",
                description: "Push tracking milestones into your systems in real time.",
              },
              {
                icon: "Layers",
                title: "Batch operations",
                description: "Process hundreds of shipments with bulk imports and rules.",
              },
              {
                icon: "KeyRound",
                title: "Role-based access",
                description: "Control who can create, void, and manage shipments.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-primary/30 bg-background/80 shadow-md hover:shadow-lg transition-shadow p-8 flex flex-col items-start"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-2xl">
                  <span className="font-extrabold text-primary">{item.icon}</span>
                </div>
                <h3 className="font-bold text-lg text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL + STATS */}
      <section className="py-24 md:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Built for operational teams
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              What shippers value most: visibility, predictability, and support.
            </p>
          </div>
          <div className="bg-primary/10 rounded-xl p-10 mx-auto max-w-2xl shadow-md border border-primary/30">
            <blockquote className="text-xl italic font-semibold text-foreground">
              “We reduced exceptions and improved on-time delivery by standardizing our lanes with DHL.”
            </blockquote>
            <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="text-base font-bold text-secondary">Operations Lead</div>
              <div className="text-sm text-muted-foreground">Mid-market eCommerce</div>
            </div>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                label: "Faster issue resolution",
                value: "Proactive alerts",
              },
              {
                label: "Fewer manual touches",
                value: "Automation workflows",
              },
              {
                label: "Better visibility",
                value: "End-to-end tracking",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center bg-background rounded-lg border border-primary/20 py-6 px-4"
              >
                <div className="font-bold text-lg text-secondary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FeaturesGrid
        headline="Service FAQs"
        subheadline="Quick answers to common shipping and logistics questions."
        features={[
          {
            icon: "Globe",
            title: "Do you support international shipping and customs?",
            description:
              "Yes. We provide documentation guidance and visibility through key clearance milestones.",
          },
          {
            icon: "CalendarClock",
            title: "Can I schedule recurring pickups?",
            description:
              "Yes. Set recurring pickup windows and manage changes from your dashboard.",
          },
          {
            icon: "RotateCcw",
            title: "Do you offer returns?",
            description:
              "Yes. Reverse logistics workflows include return labels and tracking.",
          },
          {
            icon: "PlugZap",
            title: "Can I integrate with my store or ERP?",
            description:
              "Yes. Use prebuilt connectors or API/webhooks to sync orders and tracking.",
          },
        ]}
      />
    </>
  );
}
