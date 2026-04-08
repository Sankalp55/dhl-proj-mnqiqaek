'use client';

import { useState } from "react";
import { HeroGradientBlob } from "@/components/blocks/HeroGradientBlob";
import { ContactForm } from "@/components/blocks/ContactForm";
import { FeaturesGrid } from "@/components/blocks/FeaturesGrid";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { CTASparkles } from "@/components/blocks/CTASparkles";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  // Contact form state
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    company: "",
    monthlyVolume: "",
    shippingRegions: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* HERO */}
      <HeroGradientBlob
        title="Contact DHL"
        subtitle="Get a quote, ask about integrations, or talk through your shipping requirements."
        ctaLabel="Send message"
        ctaHref="#contact-form"
        secondaryCtaLabel="View pricing"
        secondaryCtaHref="/pricing"
        gradientStart="#FFCC00"
        gradientEnd="#D40511"
      />

      {/* CONTACT FORM */}
      <section id="contact-form" className="py-24 md:py-24 bg-primary/10">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Request a quote or consultation
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Client-side form only. We’ll respond within 1 business day.
            </p>
          </div>
          <div className="mx-auto max-w-lg">
            <Card className="border-0 bg-background/80 shadow-lg rounded-xl backdrop-blur-md">
              <CardContent className="p-8">
                {!submitted ? (
                  <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
                    <div>
                      <Label htmlFor="fullName" className="text-primaryForeground font-semibold">
                        Full name<span className="text-secondary">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        className="mt-2"
                        value={form.fullName}
                        onChange={handleChange}
                        autoComplete="off"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-primaryForeground font-semibold">
                        Work email<span className="text-secondary">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-2"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="off"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-primaryForeground font-semibold">
                        Company<span className="text-secondary">*</span>
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        required
                        className="mt-2"
                        value={form.company}
                        onChange={handleChange}
                        autoComplete="off"
                      />
                    </div>
                    <div>
                      <Label htmlFor="monthlyVolume" className="text-primaryForeground font-semibold">
                        Monthly shipment volume<span className="text-secondary">*</span>
                      </Label>
                      <select
                        id="monthlyVolume"
                        name="monthlyVolume"
                        required
                        className="mt-2 w-full rounded-md border border-primary bg-background px-3 py-2 text-foreground focus:ring-2 focus:ring-secondary"
                        value={form.monthlyVolume}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select volume
                        </option>
                        <option value="0–100">0–100</option>
                        <option value="101–1,000">101–1,000</option>
                        <option value="1,001–10,000">1,001–10,000</option>
                        <option value="10,000+">10,000+</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="shippingRegions" className="text-primaryForeground font-semibold">
                        Shipping regions<span className="text-secondary">*</span>
                      </Label>
                      <select
                        id="shippingRegions"
                        name="shippingRegions"
                        required
                        className="mt-2 w-full rounded-md border border-primary bg-background px-3 py-2 text-foreground focus:ring-2 focus:ring-secondary"
                        value={form.shippingRegions}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select region
                        </option>
                        <option value="Domestic">Domestic</option>
                        <option value="International">International</option>
                        <option value="Both">Both</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-primaryForeground font-semibold">
                        What are you shipping and where?<span className="text-secondary">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        minLength={10}
                        className="mt-2"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        autoComplete="off"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-secondary text-secondaryForeground hover:bg-secondary/90 transition rounded-lg font-bold"
                    >
                      Submit
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-3xl font-extrabold text-primary mb-2">Thank you!</div>
                    <div className="text-muted-foreground mb-4">
                      Your request has been received. We’ll be in touch within 1 business day.
                    </div>
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={() => setSubmitted(false)}
                    >
                      Submit another request
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SUPPORT OPTIONS */}
      <FeaturesGrid
        headline="Support options"
        subheadline="Choose the fastest path to help."
        features={[
          {
            icon: "Handshake",
            title: "Sales",
            description: "Quotes, plans, and enterprise proposals.",
          },
          {
            icon: "Truck",
            title: "Operations",
            description: "Pickup scheduling and shipment exceptions.",
          },
          {
            icon: "PlugZap",
            title: "Integrations",
            description: "API/webhooks and platform connectors.",
          },
        ]}
      />

      {/* FAQ */}
      <FAQAccordion
        headline="Contact FAQs"
        subheadline="Before you send a message—quick answers."
        items={[
          {
            question: "How fast will you respond?",
            answer: "Typically within 1 business day.",
          },
          {
            question: "Do you support enterprise onboarding?",
            answer:
              "Yes. We can provide guided onboarding and integration assistance.",
          },
          {
            question: "Can you help estimate shipping rates?",
            answer:
              "Yes. Share lanes, weights, and service level requirements for a tailored estimate.",
          },
          {
            question: "Do you offer API access?",
            answer:
              "Yes. Integration options include connectors and API/webhooks depending on plan.",
          },
        ]}
      />

      {/* CTA */}
      <section className="relative py-24 md:py-24 bg-primary/10">
        <CTASparkles
          headline="Prefer to start with a plan?"
          description="Review pricing and features, then request a quote when you’re ready."
          ctaLabel="View pricing"
          ctaHref="/pricing"
          secondaryCtaLabel="Explore services"
          secondaryCtaHref="/services"
          sparkleColor="#D40511"
        />
      </section>
    </>
  );
}
