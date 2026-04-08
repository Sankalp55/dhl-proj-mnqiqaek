'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Check, Minus } from 'lucide-react';

type Plan = {
  name: string;
  priceMonthly: string;
  priceAnnual: string;
  description: string;
  features: string[];
  cta: {
    label: string;
    href: string;
  };
  featured?: boolean;
};

type PricingTableProps = {
  headline?: string;
  subheadline?: string;
  toggle?: {
    optionA: string;
    optionB: string;
  };
  plans: Plan[];
  styleNotes?: string;
  comparisonRows?: {
    feature: string;
    starter: boolean | string;
    growth: boolean | string;
    enterprise: boolean | string;
  }[];
};

const featuredBorder = 'border-2 border-[#D40511] shadow-[0_4px_32px_0_#D4051140]';

export default function PricingTable({
  headline,
  subheadline,
  toggle,
  plans,
  styleNotes,
  comparisonRows,
}: PricingTableProps) {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section className="py-24 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto">
        {headline && (
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#333] font-['Arial_Black','Arial',sans-serif] text-center">
            {headline}
          </h2>
        )}
        {subheadline && (
          <p className="mt-2 text-lg text-[#333] text-center font-['Arial',sans-serif]">{subheadline}</p>
        )}
        {toggle && (
          <div className="flex justify-center mt-8">
            <div className="inline-flex bg-[#FFCC00]/30 rounded-full border border-[#FFCC00] p-1">
              <button
                className={cn(
                  'px-5 py-1 rounded-full font-bold text-sm transition-all',
                  billing === 'monthly'
                    ? 'bg-[#FFCC00] text-[#333]'
                    : 'text-[#333] opacity-70 hover:bg-[#FFCC00]/60'
                )}
                onClick={() => setBilling('monthly')}
              >
                {toggle.optionA}
              </button>
              <button
                className={cn(
                  'px-5 py-1 rounded-full font-bold text-sm transition-all',
                  billing === 'annual'
                    ? 'bg-[#FFCC00] text-[#333]'
                    : 'text-[#333] opacity-70 hover:bg-[#FFCC00]/60'
                )}
                onClick={() => setBilling('annual')}
              >
                {toggle.optionB}
              </button>
            </div>
          </div>
        )}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={cn(
                "relative bg-white/80 backdrop-blur-lg rounded-xl p-8 flex flex-col items-center shadow-md transition-all duration-200",
                plan.featured
                  ? featuredBorder + " z-10"
                  : "border border-[#FFCC00] z-0"
              )}
              style={{
                boxShadow: plan.featured ? "0 4px 32px 0 #D4051140" : "0 2px 12px 0 #FFCC0020",
              }}
            >
              <div className="mb-4 w-full flex flex-col items-center">
                <span className="text-xl font-black font-['Arial_Black','Arial',sans-serif] tracking-tight text-[#333]">
                  {plan.name}
                </span>
                <span className="mt-2 text-4xl font-black font-['Arial_Black','Arial',sans-serif] text-[#D40511]">
                  {billing === 'monthly' ? plan.priceMonthly : plan.priceAnnual}
                </span>
                <span className="text-sm text-[#333] opacity-70">
                  {plan.description}
                </span>
              </div>
              <ul className="mt-4 mb-8 w-full space-y-3">
                {plan.features.map((f, idx) => (
                  <li key={f} className="flex items-center gap-2 text-[#333] text-sm font-medium">
                    <Check className="w-4 h-4 text-[#D40511]" /> {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={cn(
                  "w-full font-bold px-7 py-3 rounded-full transition-all",
                  plan.featured
                    ? "bg-[#D40511] hover:bg-[#B5000D] text-white shadow"
                    : "bg-[#FFCC00] hover:bg-[#FFD633] text-[#333] border border-[#FFCC00]"
                )}
                size="lg"
              >
                <a href={plan.cta.href}>{plan.cta.label}</a>
              </Button>
              {plan.featured && (
                <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-[#D40511] text-white text-xs font-bold shadow">
                  Most Popular
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Comparison Table */}
        {comparisonRows && (
          <div className="mt-16 overflow-x-auto">
            <table className="w-full border-separate border-spacing-y-2 text-sm">
              <thead>
                <tr>
                  <th className="text-left text-[#333] font-black font-['Arial_Black','Arial',sans-serif]">Feature</th>
                  <th className="text-center text-[#333] font-black">Starter</th>
                  <th className="text-center text-[#333] font-black">Growth</th>
                  <th className="text-center text-[#333] font-black">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className="bg-white/80 backdrop-blur-lg border-b border-[#FFCC00] rounded-xl">
                    <td className="py-3 px-2 font-['Arial',sans-serif] text-[#333]">{row.feature}</td>
                    <td className="text-center">
                      {row.starter === true
                        ? <Check className="inline w-4 h-4 text-[#D40511]" />
                        : row.starter === false
                          ? <Minus className="inline w-4 h-4 text-[#D40511]/50" />
                          : <span className="text-[#D40511] font-bold">{row.starter}</span>
                      }
                    </td>
                    <td className="text-center">
                      {row.growth === true
                        ? <Check className="inline w-4 h-4 text-[#D40511]" />
                        : row.growth === false
                          ? <Minus className="inline w-4 h-4 text-[#D40511]/50" />
                          : <span className="text-[#D40511] font-bold">{row.growth}</span>
                      }
                    </td>
                    <td className="text-center">
                      {row.enterprise === true
                        ? <Check className="inline w-4 h-4 text-[#D40511]" />
                        : row.enterprise === false
                          ? <Minus className="inline w-4 h-4 text-[#D40511]/50" />
                          : <span className="text-[#D40511] font-bold">{row.enterprise}</span>
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
