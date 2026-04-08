import { HeroGradientBlob } from "@/components/blocks/HeroGradientBlob";
import { LogoCloud } from "@/components/blocks/LogoCloud";
import { FeaturesCards3D } from "@/components/blocks/FeaturesCards3D";
import { FeaturesGrid } from "@/components/blocks/FeaturesGrid";
import { PricingToggle } from "@/components/blocks/PricingToggle";
import { PricingTable } from "@/components/blocks/PricingTable";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { CTASparkles } from "@/components/blocks/CTASparkles";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <HeroGradientBlob
        title="Ship smarter with DHL logistics built for speed."
        subtitle="From express parcels to freight and fulfillment—get predictable delivery, real-time tracking, and enterprise-grade reliability."
        ctaLabel="Get a quote"
        ctaHref="/contact"
        secondaryCtaLabel="Explore services"
        secondaryCtaHref="/services"
        gradientStart="#FFCC00"
        gradientEnd="#D40511"
      />

      {/* SOCIAL PROOF */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-center text-xl font-bold tracking-tight text-foreground mb-3">
            Trusted by teams that ship at scale
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            Global brands and fast-growing businesses rely on DHL for consistent delivery performance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {/* Text-only logo chips */}
            {[
              { label: "Retail & eCommerce", meta: "Peak-season ready" },
              { label: "Manufacturing", meta: "Time-critical parts" },
              { label: "Healthcare", meta: "Controlled handling" },
              { label: "Technology", meta: "Worldwide distribution" },
              { label: "Automotive", meta: "Just-in-time logistics" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center px-6 py-3 rounded-lg bg-primary/10 border border-primary min-w-[170px] shadow-sm"
              >
                <span className="text-base font-semibold tracking-tight text-primaryForeground">{item.label}</span>
                <span className="text-xs text-muted-foreground mt-1">{item.meta}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <FeaturesCards3D
        headline="End-to-end logistics, simplified"
        subheadline="A clean, technical experience with the tools you need to ship, track, and optimize—without complexity."
        features={[
          {
            icon: "Radar",
            title: "Real-time tracking",
            description: "Live shipment visibility with milestone updates and exception alerts.",
          },
          {
            icon: "Globe",
            title: "Global coverage",
            description: "Ship across regions with consistent service levels and customs support.",
          },
          {
            icon: "CalendarClock",
            title: "Pickup scheduling",
            description: "Book pickups in minutes and manage recurring collections.",
          },
          {
            icon: "LineChart",
            title: "Delivery performance analytics",
            description: "Dashboards for on-time rate, transit time, and cost per shipment.",
          },
          {
            icon: "ShieldCheck",
            title: "Secure handling",
            description: "Chain-of-custody options and proactive risk monitoring.",
          },
          {
            icon: "RotateCcw",
            title: "Returns & reverse logistics",
            description: "Streamlined returns workflows and label generation.",
          },
        ]}
      />

      {/* INTEGRATIONS */}
      <section className="py-24 md:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Integrations that fit your workflow
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Connect DHL shipping to your store, ERP, or warehouse tools—no heavy setup required.
            </p>
          </div>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[
              {
                title: "eCommerce platforms",
                description:
                  "Connect orders and print labels from your storefront.",
                bullets: ["Shopify", "WooCommerce", "Magento"],
              },
              {
                title: "ERP & OMS",
                description:
                  "Sync fulfillment and tracking events into your operations stack.",
                bullets: ["SAP", "Oracle", "Microsoft Dynamics"],
              },
              {
                title: "Warehouse & shipping tools",
                description:
                  "Automate packing, scanning, and dispatch workflows.",
                bullets: [
                  "WMS connectors",
                  "Barcode scanning",
                  "Batch label printing",
                ],
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-primary/30 bg-background/80 shadow-md hover:shadow-lg transition-shadow p-8 flex flex-col items-start"
              >
                <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <ul className="space-y-1 pl-4 list-disc text-sm text-foreground">
                  {item.bullets.map((b) => (
                    <li key={b} className="font-medium">{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 md:py-24 bg-muted/50" id="pricing">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Pricing that scales with your shipping volume
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start with transparent plans. Upgrade as your lanes, weight, and SLAs grow.
            </p>
          </div>
          <div className="mt-10">
            <PricingToggle
              labels={["Monthly", "Annual"]}
              annualDiscountNote="Save up to 15% with annual billing"
              plans={[
                {
                  name: "Starter",
                  priceMonthly: "$49",
                  priceAnnual: "$499",
                  description: "For small teams shipping domestically.",
                  features: [
                    "Label creation & pickup requests",
                    "Standard tracking updates",
                    "Email support",
                    "Basic analytics",
                  ],
                  cta: {
                    label: "Start Starter",
                    href: "/contact",
                  },
                },
                {
                  name: "Business",
                  priceMonthly: "$199",
                  priceAnnual: "$1999",
                  description: "For growing operations with international lanes.",
                  features: [
                    "International shipping tools",
                    "Exception alerts & notifications",
                    "Advanced analytics dashboards",
                    "Priority support",
                  ],
                  highlighted: true,
                  cta: {
                    label: "Choose Business",
                    href: "/contact",
                  },
                },
                {
                  name: "Enterprise",
                  priceMonthly: "Custom",
                  priceAnnual: "Custom",
                  description: "For high-volume shipping with SLAs and integrations.",
                  features: [
                    "Custom rates & SLAs",
                    "Dedicated account management",
                    "Integration support",
                    "Security & compliance options",
                  ],
                  cta: {
                    label: "Talk to sales",
                    href: "/contact",
                  },
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-24 bg-primary/10">
        <CTASparkles
          headline="Ready to ship with confidence?"
          description="Tell us your lanes and volume—get a tailored quote and recommended service level."
          ctaLabel="Request a quote"
          ctaHref="/contact"
          secondaryCtaLabel="View pricing"
          secondaryCtaHref="/pricing"
          sparkleColor="#D40511"
        />
      </section>

      {/* FAQ */}
      <FAQAccordion
        headline="FAQs"
        subheadline="Still have questions? Here are quick answers to the most common topics."
        items={[
          {
            question: "Do you support international shipping and customs?",
            answer:
              "Yes. We provide documentation guidance and visibility through key clearance milestones.",
          },
          {
            question: "Can I schedule recurring pickups?",
            answer:
              "Yes. Set recurring pickup windows and manage changes from your dashboard.",
          },
          {
            question: "Do you offer returns?",
            answer:
              "Yes. Reverse logistics workflows include return labels and tracking.",
          },
          {
            question: "Can I integrate with my store or ERP?",
            answer:
              "Yes. Use prebuilt connectors or API/webhooks to sync orders and tracking.",
          },
        ]}
      />
    </>
  );
}
