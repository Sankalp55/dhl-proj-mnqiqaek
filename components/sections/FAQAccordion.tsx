'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

type FAQItem = {
  q: string;
  a: string;
};

type FAQAccordionProps = {
  headline?: string;
  subheadline?: string;
  items: FAQItem[];
};

export default function FAQAccordion({ headline, subheadline, items }: FAQAccordionProps) {
  const [openIdx, setOpenIdx] = useState<null | number>(null);

  return (
    <section className="py-24 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto">
        {headline && (
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#333] font-['Arial_Black','Arial',sans-serif] text-center">
            {headline}
          </h2>
        )}
        {subheadline && (
          <p className="mt-2 text-lg text-[#333] text-center font-['Arial',sans-serif]">{subheadline}</p>
        )}
        <div className="mt-12 flex flex-col gap-4">
          {items.map((item, i) => (
            <div
              key={item.q}
              className={cn(
                "bg-white/80 backdrop-blur-lg rounded-xl border border-[#FFCC00] shadow-md transition-all",
                openIdx === i && "shadow-lg"
              )}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none font-black font-['Arial_Black','Arial',sans-serif] text-[#333] text-lg"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                aria-expanded={openIdx === i}
                aria-controls={`faq-panel-${i}`}
              >
                {item.q}
                <ChevronDown
                  className={cn(
                    "ml-2 w-6 h-6 transition-transform",
                    openIdx === i ? "rotate-180 text-[#D40511]" : "text-[#D40511]/70"
                  )}
                />
              </button>
              <div
                id={`faq-panel-${i}`}
                className={cn(
                  "px-6 pb-5 text-[#333] text-base font-['Arial',sans-serif] transition-all",
                  openIdx === i ? "block" : "hidden"
                )}
              >
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
