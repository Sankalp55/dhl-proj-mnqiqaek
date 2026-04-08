import { HeroGradientBlob } from "@/components/blocks/HeroGradientBlob";
import { TeamGrid } from "@/components/blocks/TeamGrid";
import { FeaturesGrid } from "@/components/blocks/FeaturesGrid";
import { CTASparkles } from "@/components/blocks/CTASparkles";

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <HeroGradientBlob
        title="A logistics partner built on reliability"
        subtitle="DHL helps businesses move goods with speed, visibility, and operational discipline—across borders and across industries."
        ctaLabel="Meet the team"
        ctaHref="#team"
        secondaryCtaLabel="Contact us"
        secondaryCtaHref="/contact"
        gradientStart="#FFCC00"
        gradientEnd="#D40511"
      />

      {/* MISSION */}
      <section className="py-24 md:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Our mission</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Make shipping predictable—so your customers can count on you.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Operational excellence",
                description:
                  "Standardized processes and measurable performance across lanes.",
              },
              {
                title: "Customer-first visibility",
                description:
                  "Tracking and communications that reduce uncertainty and support load.",
              },
              {
                title: "Continuous improvement",
                description:
                  "Data-driven optimization for cost, speed, and delivery success.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-primary/30 bg-background/80 shadow-md p-8"
              >
                <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <FeaturesGrid
        headline="What we optimize for"
        subheadline="A modern logistics experience—clean, technical, and dependable."
        features={[
          {
            icon: "Timer",
            title: "On-time delivery",
            description: "Service levels that match your promise.",
          },
          {
            icon: "BellRing",
            title: "Exception prevention",
            description: "Alerts and workflows to resolve issues early.",
          },
          {
            icon: "BadgeDollarSign",
            title: "Cost control",
            description: "Insights to reduce waste and optimize lanes.",
          },
          {
            icon: "Lock",
            title: "Security",
            description: "Controls and auditability for sensitive shipments.",
          },
        ]}
      />

      {/* TEAM */}
      <TeamGrid
        headline="Team"
        subheadline="A cross-functional group focused on logistics operations, customer success, and platform reliability."
        members={[
          {
            name: "Avery Klein",
            title: "Head of Logistics Operations",
            bio: "Leads network performance and service quality across lanes.",
          },
          {
            name: "Jordan Patel",
            title: "Solutions Architect",
            bio: "Designs integrations and automation for shipping workflows.",
          },
          {
            name: "Morgan Reyes",
            title: "Customer Success Lead",
            bio: "Ensures onboarding, adoption, and measurable outcomes.",
          },
          {
            name: "Casey Nguyen",
            title: "Compliance & Risk",
            bio: "Supports secure handling and audit-ready processes.",
          },
        ]}
      />

      {/* CTA */}
      <section className="relative py-24 md:py-24 bg-primary/10">
        <CTASparkles
          headline="Let’s build a shipping workflow that scales"
          description="Share your lanes, volume, and requirements—our team will recommend the right service mix."
          ctaLabel="Request a quote"
          ctaHref="/contact"
          secondaryCtaLabel="View services"
          secondaryCtaHref="/services"
          sparkleColor="#D40511"
        />
      </section>
    </>
  );
}
