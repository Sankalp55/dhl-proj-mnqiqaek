import HeroEditorial from '@/components/HeroEditorial'
import FeaturesTimeline from '@/components/FeaturesTimeline'
import FeaturesCards3D from '@/components/FeaturesCards3D'
import IntegrationsGrid from '@/components/IntegrationsGrid'
import FAQAccordion from '@/components/FAQAccordion'

export default function ServicesPage() {
  return (
    <>
      {/* Hero Editorial */}
      <HeroEditorial
        headline="Logistics services built for reliability and scale"
        subheadline="From express parcels to freight and fulfillment—choose the services that match your lanes, SLAs, and budget."
        primaryCta={{ label: "Talk to Sales", href: "/contact" }}
        secondaryCta={{ label: "View Pricing", href: "/pricing" }}
      />

      {/* Service Categories Timeline */}
      <section className="max-w-5xl mx-auto w-full py-24 md:py-24 fade-in-up">
        <FeaturesTimeline
          headline="A complete shipping toolkit"
          subheadline="Pick one service or combine multiple for end-to-end coverage."
          items={[
            {
              title: "Express Parcel",
              description: "Time-definite delivery with end-to-end tracking and signature options."
            },
            {
              title: "Air Freight",
              description: "Fast international freight with consolidation and priority handling."
            },
            {
              title: "Ocean Freight",
              description: "Cost-efficient global shipping with container and LCL options."
            },
            {
              title: "Road & Ground",
              description: "Regional distribution with flexible pickup and delivery windows."
            },
            {
              title: "Warehousing & Fulfillment",
              description: "Storage, pick/pack, and outbound shipping workflows for growing brands."
            }
          ]}
        />
      </section>

      {/* Operational Features Cards 3D */}
      <section className="max-w-5xl mx-auto w-full py-24 md:py-24 fade-in-up">
        <FeaturesCards3D
          headline="Operational features that reduce friction"
          subheadline="Designed for logistics coordinators, finance teams, and customer support."
          items={[
            {
              title: "Pickup scheduling",
              description: "Book pickups, manage recurring routes, and handle ad-hoc requests.",
              icon: "CalendarClock"
            },
            {
              title: "Label & document generation",
              description: "Generate labels, commercial invoices, and customs forms in minutes.",
              icon: "Printer"
            },
            {
              title: "Exception management",
              description: "Resolve delays faster with clear ownership and escalation paths.",
              icon: "AlertTriangle"
            },
            {
              title: "Claims support",
              description: "Guided claims submission and status tracking for damaged/lost shipments.",
              icon: "ShieldCheck"
            }
          ]}
        />
      </section>

      {/* Integrations Grid */}
      <section id="integrations" className="max-w-5xl mx-auto w-full py-24 md:py-24 fade-in-up">
        <IntegrationsGrid
          headline="Integrations"
          subheadline="Connect commerce, ERP, and collaboration tools to keep data consistent."
          integrations={[
            {
              name: "Shopify",
              value: "Sync orders and fulfillment updates."
            },
            {
              name: "SAP",
              value: "Align shipping milestones with finance and procurement."
            },
            {
              name: "NetSuite",
              value: "Unify inventory and shipping cost allocation."
            },
            {
              name: "Slack / Teams",
              value: "Automate alerts for exceptions and deliveries."
            }
          ]}
          primaryCta={{
            label: "Request Integration Help",
            href: "/contact"
          }}
        />
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-5xl mx-auto w-full py-24 md:py-24 fade-in-up">
        <FAQAccordion
          headline="Service FAQs"
          subheadline="Quick answers for common logistics questions."
          items={[
            {
              q: "Do you support international shipping and customs?",
              a: "Yes. We provide documentation guidance and visibility into duties/taxes where applicable."
            },
            {
              q: "Can we set delivery SLAs?",
              a: "Yes. Plans include SLA options; enterprise customers can define lane-specific SLAs."
            },
            {
              q: "Do you offer pickup services?",
              a: "Yes. Pickup scheduling is available for eligible services and locations."
            },
            {
              q: "Can we integrate with our ERP or storefront?",
              a: "Yes. We support common integrations and can advise on workflows for your stack."
            }
          ]}
        />
      </section>
    </>
  )
}
