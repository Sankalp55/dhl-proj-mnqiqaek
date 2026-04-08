import React from "react";

export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQAccordionProps = {
  title?: string;
  items?: FAQItem[];
};

export default function FAQAccordion({
  title = "FAQ",
  items = [
    {
      question: "How soon will you respond?",
      answer: "Usually within 1–2 business days.",
    },
    {
      question: "Do you offer calls?",
      answer: "Yes—share your availability and we’ll schedule a quick intro call.",
    },
    {
      question: "What information should I include?",
      answer: "A short description, timeline, budget range (if any), and relevant links.",
    },
  ],
}: FAQAccordionProps) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <details key={item.question} className="rounded-lg border border-border p-4">
            <summary className="cursor-pointer font-medium">{item.question}</summary>
            <p className="mt-2 text-sm text-muted-foreground">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
