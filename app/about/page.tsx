import HeroSplit from '@/components/HeroSplit'
import ContentAlternating from '@/components/ContentAlternating'
import FeaturesBento from '@/components/FeaturesBento'
import TeamGrid from '@/components/TeamGrid'
import CTASparkles from '@/components/CTASparkles'

export default function AboutPage() {
  return (
    <>
      {/* Hero Split */}
      <HeroSplit
        headline="A logistics partner built on speed and accountability"
        subheadline="We help businesses move goods reliably with modern tracking, operational rigor, and customer-first support."
        primaryCta={{ label: "Meet the Team", href: "/about#team" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />

      {/* Our Mission Alternating */}
      <section className="max-w-5xl mx-auto w-full py-24 md:py-24 fade-in-up">
        <ContentAlternating
          headline="Our mission"
          subheadline="Make shipping predictable—so businesses can grow without operational drag."
          points={[
            {
              title: "Reliability",
              description: "Clear SLAs, proactive exception handling, and consistent performance."
            },
            {
              title: "Visibility",
              description: "Real-time milestones and analytics for better decisions."
            },
            {
              title: "Partnership",
              description: "Dedicated support and continuous improvement on key lanes."
            }
          ]}
        />
      </section>

      {/* Values Features Bento */}
      <section className="max-w-5xl mx-auto w-full py-24 md:py-24 fade-in-up">
        <FeaturesBento
          headline="How we work"
          subheadline="Principles that guide our operations and customer relationships."
          items={[
            {
              title: "Operational excellence",
              description: "Process discipline with continuous improvement.",
              icon: "Gauge"
            },
            {
              title: "Customer-first support",
              description: "Fast responses and clear ownership on issues.",
              icon: "LifeBuoy"
            },
            {
              title: "Security & compliance",
              description: "Responsible handling of shipment and customer data.",
              icon: "Lock"
            },
            {
              title: "Sustainability mindset",
              description: "Route optimization and reporting to reduce impact.",
              icon: "Leaf"
            }
          ]}
        />
      </section>

      {/* Team Grid */}
      <section id="team" className="max-w-5xl mx-auto w-full py-24 md:py-24 fade-in-up">
        <TeamGrid
          headline="Leadership team"
          subheadline="Experienced operators focused on performance, customer outcomes, and scalable systems."
          members={[
            {
              name: "Jordan Keller",
              role: "Head of Operations",
              bio: "Leads network performance, SLAs, and exception management across lanes."
            },
            {
              name: "Priya Nair",
              role: "Director, Global Freight",
              bio: "Specializes in cross-border logistics, compliance, and carrier strategy."
            },
            {
              name: "Mateo Alvarez",
              role: "Customer Success Lead",
              bio: "Owns onboarding, support workflows, and continuous improvement programs."
            },
            {
              name: "Hannah Chen",
              role: "Product & Integrations",
              bio: "Builds integrations and automation to reduce manual shipping operations."
            }
          ]}
        />
      </section>

      {/* CTA Sparkles */}
      <section className="max-w-5xl mx-auto w-full py-24 md:py-24 fade-in-up">
        <CTASparkles
          headline="Let’s improve your delivery performance"
          subheadline="Share your lanes and volumes—our team will recommend the right services and plan."
          primaryCta={{ label: "Request a Consultation", href: "/contact" }}
          secondaryCta={{ label: "View Pricing", href: "/pricing" }}
        />
      </section>
    </>
  )
}
