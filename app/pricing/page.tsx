import { HeroGradientBlob } from "@/components/blocks/HeroGradientBlob";
import { PricingToggle } from "@/components/blocks/PricingToggle";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { TestimonialsCarousel } from "@/components/blocks/TestimonialsCarousel";

export default function PricingPage() {
  return (
    <>
      {/* HERO */}
      <HeroGradientBlob
        title="Transparent plans for shipping teams"
        subtitle="Pick a plan that matches your volume and complexity. Upgrade anytime as your network grows."
        ctaLabel="Talk to sales"
        ctaHref="/contact"
        secondaryCtaLabel="Compare plans"
        secondaryCtaHref="#comparison"
        gradientStart="#FFCC00"
        gradientEnd="#D40511"
      />

      {/* PRICING TOGGLE */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Choose your plan
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Monthly for flexibility, annual for savings.
            </p>
            <div className="text-xs mt-2 text-secondary font-bold">
              Annual includes priority onboarding
            </div>
          </div>
          <PricingToggle
            labels={["Monthly", "Annual"]}
            annualDiscountNote="Annual includes priority onboarding"
            plans={[
              {
                name: "Starter",
                priceMonthly: "$49",
                priceAnnual: "$499",
                description: "Essentials for domestic shipping.",
                features: [
                  "Shipment creation & labels",
                  "Pickup requests",
                  "Standard tracking",
                  "Basic reporting",
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
                description: "International lanes + advanced visibility.",
                features: [
                  "International tools",
                  "Exception alerts",
                  "Advanced reporting",
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
                description: "Custom SLAs, integrations, and security.",
                features: [
                  "Custom rates & SLAs",
                  "Dedicated manager",
                  "Integration assistance",
                  "Compliance options",
                ],
                cta: {
                  label: "Request proposal",
                  href: "/contact",
                },
              },
            ]}
          />
        </div>
      </section>

      {/* PLAN COMPARISON */}
      <section id="comparison" className="py-24 md:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-center">
            Compare plan features
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-center">
            See what’s included at each tier.
          </p>
          <div className="overflow-x-auto mt-12">
            <table className="min-w-full border-collapse rounded-xl overflow-hidden bg-background shadow-md">
              <thead>
                <tr className="bg-primary text-primaryForeground">
                  <th className="py-3 px-4 text-left text-sm font-bold sticky left-0 bg-primary z-10">Feature</th>
                  <th className="py-3 px-4 text-center text-sm font-bold">Starter</th>
                  <th className="py-3 px-4 text-center text-sm font-bold">Business</th>
                  <th className="py-3 px-4 text-center text-sm font-bold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Domestic shipping tools",
                    starter: true,
                    business: true,
                    enterprise: true,
                  },
                  {
                    feature: "International shipping tools",
                    starter: false,
                    business: true,
                    enterprise: true,
                  },
                  {
                    feature: "Exception alerts",
                    starter: false,
                    business: true,
                    enterprise: true,
                  },
                  {
                    feature: "Advanced analytics",
                    starter: false,
                    business: true,
                    enterprise: true,
                  },
                  {
                    feature: "Integrations support",
                    starter: false,
                    business: "Limited",
                    enterprise: "Full",
                  },
                  {
                    feature: "Dedicated account manager",
                    starter: false,
                    business: false,
                    enterprise: true,
                  },
                ].map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b ${
                      i % 2 === 0 ? "bg-muted/40" : "bg-background"
                    }`}
                  >
                    <td className="py-3 px-4 font-medium min-w-[180px] sticky left-0 bg-background z-10 border-r border-primary/20">
                      {row.feature}
                    </td>
                    {[row.starter, row.business, row.enterprise].map((cell, idx) => (
                      <td
                        key={idx}
                        className="py-3 px-4 text-center"
                      >
                        {cell === true && (
                          <span className="inline-block px-2 py-1 rounded-full bg-secondary text-secondaryForeground text-xs font-semibold">
                            ✓
                          </span>
                        )}
                        {cell === false && (
                          <span className="inline-block px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs font-semibold">
                            —
                          </span>
                        )}
                        {typeof cell === "string" && (
                          <span className="inline-block px-2 py-1 rounded-full border border-secondary text-secondary text-xs font-semibold bg-background/70">
                            {cell}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-24 bg-muted/50">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Teams shipping at scale choose DHL
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Operational reliability that shows up in customer experience.
            </p>
          </div>
          <TestimonialsCarousel
            items={[
              {
                quote:
                  "The tracking visibility and exception alerts helped us cut support tickets significantly.",
                name: "Customer Experience Manager",
                company: "Online Retailer",
              },
              {
                quote:
                  "International shipments became predictable once we standardized our documentation workflow.",
                name: "Logistics Coordinator",
                company: "Electronics Distributor",
              },
              {
                quote:
                  "Pickup scheduling and batch processing saved hours every week for our warehouse team.",
                name: "Warehouse Supervisor",
                company: "3PL Partner",
              },
            ]}
          />
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion
        headline="Pricing FAQs"
        subheadline="Everything you need to know before choosing a plan."
        items={[
          {
            question: "Do prices include shipping costs?",
            answer:
              "Plans cover platform features and support. Shipping rates depend on lanes, weight, and service level.",
          },
          {
            question: "Can I switch plans later?",
            answer:
              "Yes. Upgrade or change plans anytime based on your shipping volume and needs.",
          },
          {
            question: "Do you offer enterprise SLAs?",
            answer:
              "Yes. Enterprise plans can include custom SLAs and dedicated support.",
          },
          {
            question: "Is there onboarding support?",
            answer:
              "Business and Enterprise include guided onboarding; Starter includes self-serve setup resources.",
          },
        ]}
      />
    </>
  );
}
