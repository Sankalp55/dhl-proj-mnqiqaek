'use client'

import { useState } from 'react'
import HeroCentered from '@/components/HeroCentered'
import FeaturesBento from '@/components/FeaturesBento'
import ContactForm from '@/components/ContactForm'
import FAQAccordion from '@/components/FAQAccordion'
import CTASplit from '@/components/CTASplit'

export default function ContactPage() {
  // For showing toast on form submit
  const [toast, setToast] = useState<string | null>(null)

  return (
    <>
      {/* Hero */}
      <HeroCentered
        headline="Get in touch"
        subheadline="Request a quote, ask about services, or get help choosing the right plan. We respond within 1 business day."
        primaryCta={{ label: "Send a Message", href: "/contact#form" }}
        secondaryCta={{ label: "View Pricing", href: "/pricing" }}
      />

      {/* Contact Options */}
      <section className="max-w-5xl mx-auto w-full py-24 md:py-24 fade-in-up">
        <FeaturesBento
          headline="Contact options"
          subheadline="Choose the fastest route to the right team."
          items={[
            {
              title: "Sales & Quotes",
              description: "Lane review, volume pricing, and plan selection.",
              icon: "BadgeDollarSign"
            },
            {
              title: "Support",
              description: "Shipment questions, exceptions, and claims guidance.",
              icon: "HelpCircle"
            },
            {
              title: "Integrations",
              description: "ERP/storefront connections and workflow advice.",
              icon: "Plug"
            },
            {
              title: "Partnerships",
              description: "Carrier partnerships and strategic opportunities.",
              icon: "Handshake"
            }
          ]}
        />
      </section>

      {/* Contact Form */}
      <section id="form" className="max-w-5xl mx-auto w-full py-24 md:py-24 fade-in-up">
        <ContactForm
          onSuccess={(msg: string) => setToast(msg)}
        />
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-5xl mx-auto w-full py-24 md:py-24 fade-in-up">
        <FAQAccordion
          headline="Contact FAQs"
          subheadline="What to expect after you reach out."
          items={[
            {
              q: "How fast will you respond?",
              a: "We aim to respond within 1 business day."
            },
            {
              q: "What information helps with a quote?",
              a: "Origin/destination lanes, monthly volume, package dimensions/weights, and required delivery SLAs."
            },
            {
              q: "Can you help us choose a plan?",
              a: "Yes—share your workflows and integration needs and we’ll recommend the best fit."
            }
          ]}
        />
      </section>

      {/* CTA Split */}
      <section className="max-w-5xl mx-auto w-full py-24 md:py-24 fade-in-up">
        <CTASplit
          headline="Prefer to start with pricing?"
          subheadline="Compare plans and then request a quote tailored to your lanes."
          primaryCta={{ label: "See Pricing", href: "/pricing" }}
          secondaryCta={{ label: "Explore Services", href: "/services" }}
        />
      </section>

      {/* Success Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
          <div className="bg-primary text-primaryForeground px-6 py-4 rounded-xl shadow-lg animate-fade-in-up">
            {toast}
          </div>
        </div>
      )}
    </>
  )
}
