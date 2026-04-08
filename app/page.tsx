import HeroGradientBlob from '@/components/HeroGradientBlob'
import LogoCloud from '@/components/LogoCloud'
import FeaturesBento from '@/components/FeaturesBento'
import IntegrationsAlternating from '@/components/IntegrationsAlternating'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import CTASparkles from '@/components/CTASparkles'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroGradientBlob
        headline="Ship smarter. Deliver faster. Scale globally."
        subheadline="Corporate logistics built for speed, visibility, and reliability—domestic and international shipping with enterprise-grade tracking and support."
        highlights={[
          "End-to-end tracking",
          "Customs expertise",
          "SLA-backed delivery"
        ]}
        primaryCta={{ label: "Get a Quote", href: "/contact" }}
        secondaryCta={{ label: "View Services", href: "/services" }}
      />

      {/* Social Proof Logo Cloud */}
      <section className="max-w-5xl mx-auto w-full py-24 md:py-24 fade-in-up">
        <LogoCloud
          headline="Trusted by teams that ship at scale"
          subheadline="A logistics partner for retail, manufacturing, healthcare, and high-growth eCommerce."
          logos={[
            "Acme Retail",
            "Northwind Manufacturing",
            "Contoso Health",
            "Globex Commerce",
            "Initech",
            "Umbrella Supply"
          ]}
        />
      </section>

      {/* Features Bento */}
      <section className="max-w-5xl mx-auto w-full py-24 md:py-24 fade-in-up">
        <FeaturesBento
          headline="Everything you need to move goods with confidence"
          subheadline="Clean, modern tooling with operational depth—built for logistics teams and finance teams alike."
          items={[
            {
              title: "Real-time tracking & proactive alerts",
              description: "Milestone scans, exception detection, and automated notifications to keep stakeholders aligned.",
              icon: "Radar"
            },
            {
              title: "Multi-modal shipping options",
              description: "Air, ocean, road, and express—choose the right speed/cost balance per lane.",
              icon: "Plane"
            },
            {
              title: "Customs & compliance support",
              description: "Documentation guidance, duties/taxes visibility, and smoother cross-border clearance.",
              icon: "FileCheck"
            },
            {
              title: "Returns & reverse logistics",
              description: "Streamlined returns labels, pickup scheduling, and disposition workflows.",
              icon: "Undo2"
            },
            {
              title: "Analytics dashboard",
              description: "Lane performance, on-time rates, cost breakdowns, and carbon estimates.",
              icon: "BarChart3"
            },
            {
              title: "Dedicated account support",
              description: "SLA-backed support and escalation paths for mission-critical shipments.",
              icon: "Headphones"
            }
          ]}
        />
      </section>

      {/* Integrations */}
      <section className="max-w-5xl mx-auto w-full py-24 md:py-24 fade-in-up">
        <IntegrationsAlternating
          headline="Integrations that fit your workflow"
          subheadline="Connect shipping to the tools you already use—reduce manual work and improve accuracy."
          integrations={[
            {
              name: "Shopify",
              value: "Auto-create labels and sync fulfillment status.",
              category: "Commerce"
            },
            {
              name: "SAP",
              value: "Sync orders, invoices, and shipment milestones.",
              category: "ERP"
            },
            {
              name: "NetSuite",
              value: "Unify inventory, shipping costs, and tracking.",
              category: "ERP"
            },
            {
              name: "Salesforce",
              value: "Expose delivery status to customer success teams.",
              category: "CRM"
            },
            {
              name: "Slack / Teams",
              value: "Exception alerts and daily shipping summaries.",
              category: "Collaboration"
            }
          ]}
          primaryCta={{
            label: "See Integration Options",
            href: "/services#integrations"
          }}
        />
      </section>

      {/* Testimonials Carousel */}
      <section className="max-w-5xl mx-auto w-full py-24 md:py-24 fade-in-up">
        <TestimonialsCarousel
          headline="Operational teams love the visibility"
          subheadline="Fewer surprises, faster resolutions, and happier customers."
          items={[
            {
              quote: "We reduced late-delivery escalations by 32% after switching to proactive exception alerts.",
              name: "Operations Director",
              company: "Northwind Manufacturing"
            },
            {
              quote: "Cross-border shipments became predictable—customs guidance and documentation checks saved us hours weekly.",
              name: "Logistics Manager",
              company: "Contoso Health"
            },
            {
              quote: "The analytics dashboard made it easy to justify lane changes and negotiate better rates.",
              name: "Head of Supply Chain",
              company: "Acme Retail"
            }
          ]}
        />
      </section>

      {/* CTA Sparkles */}
      <section className="max-w-5xl mx-auto w-full py-24 md:py-24 fade-in-up">
        <CTASparkles
          headline="Ready to streamline your shipping?"
          subheadline="Get a tailored quote and a lane review from our logistics specialists."
          primaryCta={{ label: "Request a Quote", href: "/contact" }}
          secondaryCta={{ label: "Explore Pricing", href: "/pricing" }}
        />
      </section>
    </>
  )
}
