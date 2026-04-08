'use client'

import { useState } from 'react'
import HeroCentered from '@/components/HeroCentered'
import PricingTable from '@/components/PricingTable'
import PricingComparison from '@/components/PricingComparison'
import TestimonialsFeatured from '@/components/TestimonialsFeatured'
import FAQAccordion from '@/components/FAQAccordion'

export default function PricingPage() {
  // Toggle for monthly/annual pricing
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly')

  return (
    <>
      {/* Hero */}
      <HeroCentered
        headline="Pricing that scales with your shipping volume"
        subheadline="Choose a plan for visibility, automation, and support—then tailor lanes and services to your business."
        primaryCta={{ label: "Start a Quote", href: "/contact" }}
        secondaryCta={{ label: "Compare Plans", href: "/pricing#plans" }}
      />

      {/* Pricing Table */}
      <section id="plans" className="max-w-5xl mx-auto w-full py-24 md:py-24 fade-in-up">
        <PricingTable
          headline="Plans for every stage"
          subheadline="Toggle monthly vs annual for operational budgeting."
          billing={billing}
          setBilling={setBilling}
          toggle={{
            optionA: "Monthly",
            optionB: "Annual (save 10%)"
          }}
          plans={[
            {
              name: "Starter",
              priceMonthly: "$199",
              priceAnnual: "$179",
              description: "For small teams shipping consistently.",
              features: [
                "Basic tracking dashboard",
                "Label generation",
                "Email delivery notifications",
                "Standard support"
              ],
              cta: {
                label: "Choose Starter",
                href: "/contact?plan=starter"
              }
            },
            {
              name: "Growth",
              priceMonthly: "$499",
              priceAnnual: "$449",
              description: "For growing operations needing automation.",
              features: [
                "Advanced tracking + exception alerts",
                "Returns workflows",
                "Integrations (Shopify, Slack/Teams)",
                "Priority support"
              ],
              cta: {
                label: "Choose Growth",
                href: "/contact?plan=growth"
              },
              featured: true
            },
            {
              name: "Enterprise",
              priceMonthly: "Custom",
              priceAnnual: "Custom",
              description: "For global shipping with SLAs and dedicated support.",
              features: [
                "Lane-specific SLAs",
                "Customs/compliance advisory",
                "ERP integrations (SAP/NetSuite)",
                "Dedicated account manager"
              ],
              cta: {
                label: "Contact Sales",
                href: "/contact?plan=enterprise"
              }
            }
          ]}
        />
      </section>

      {/* Pricing Comparison */}
      <section className="max-w-5xl mx-auto w-full py-24 md:py-24 fade-in-up">
        <PricingComparison
          headline="Compare plan features"
          subheadline="A clear view of what’s included—no surprises."
          rows={[
            {
              feature: "Real-time tracking",
              starter: true,
              growth: true,
              enterprise: true
            },
            {
              feature: "Exception alerts",
              starter: false,
              growth: true,
              enterprise: true
            },
            {
              feature: "Returns & reverse logistics",
              starter: false,
              growth: true,
              enterprise: true
            },
            {
              feature: "Integrations",
              starter: "Limited",
              growth: "Standard",
              enterprise: "Custom"
            },
            {
              feature: "SLA options",
              starter: false,
              growth: "Standard",
              enterprise: "Lane-specific"
            },
            {
              feature: "Dedicated account manager",
              starter: false,
              growth: false,
              enterprise: true
            }
          ]}
        />
      </section>

      {/* Testimonials Featured */}
      <section className="max-w-5xl mx-auto w-full py-24 md:py-24 fade-in-up">
        <TestimonialsFeatured
          headline="ROI you can measure"
          subheadline="Teams use visibility and automation to reduce cost and improve delivery performance."
          featured={{
            quote: "With exception alerts and lane analytics, we cut expedite spend and improved on-time delivery within one quarter.",
            name: "VP Supply Chain",
            company: "Globex Commerce"
          }}
          supporting={[
            {
              quote: "Pricing was transparent and the plan comparison made it easy to choose.",
              name: "Finance Lead",
              company: "Initech"
            },
            {
              quote: "Integrations removed manual updates and reduced customer inquiries.",
              name: "Customer Ops Manager",
              company: "Acme Retail"
            }
          ]}
        />
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="max-w-5xl mx-auto w-full py-24 md:py-24 fade-in-up">
        <FAQAccordion
          headline="Pricing FAQs"
          subheadline="Common questions about plans, billing, and SLAs."
          items={[
            {
              q: "Do prices include shipping rates?",
              a: "Plans cover platform features and support. Shipping rates depend on lanes, service levels, and volume."
            },
            {
              q: "Can we change plans later?",
              a: "Yes. You can upgrade at any time; downgrades take effect at the next billing cycle."
            },
            {
              q: "Do you offer volume discounts?",
              a: "Yes. Enterprise plans include negotiated rates based on volume and lanes."
            },
            {
              q: "Is there a setup fee?",
              a: "Starter and Growth have no setup fee. Enterprise may include onboarding depending on integration needs."
            }
          ]}
        />
      </section>
    </>
  )
}
