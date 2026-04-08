'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

type CTASparklesProps = {
  headline: string;
  subheadline?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
};

const gradient = 'linear-gradient(90deg, #FFCC00 0%, #D40511 100%)';

export default function CTASparkles({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
}: CTASparklesProps) {
  return (
    <section className="relative py-24 md:py-24 flex items-center justify-center bg-white">
      {/* Gradient + sparkles */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: gradient,
          opacity: 0.18,
        }}
      />
      {/* Sparkles */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <span className="absolute left-1/3 top-1/2 w-2 h-2 rounded-full bg-[#D40511] animate-ping opacity-40" />
        <span className="absolute left-[65%] top-[46%] w-1.5 h-1.5 rounded-full bg-[#FFCC00] animate-pulse opacity-70" />
        <span className="absolute left-[60%] top-[60%] w-1.5 h-1.5 rounded-full bg-[#D40511] animate-pulse opacity-60" />
        <span className="absolute left-[40%] top-[54%] w-1 h-1 rounded-full bg-[#D40511] animate-pulse opacity-60" />
      </div>
      <div className="relative z-20 max-w-3xl mx-auto bg-white/75 backdrop-blur-lg rounded-xl border border-[#FFCC00] shadow-lg px-8 py-12 flex flex-col gap-6 items-center text-center animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#333] font-['Arial_Black','Arial',sans-serif]">
          {headline}
        </h2>
        {subheadline && (
          <p className="text-lg text-[#333] font-['Arial',sans-serif]">{subheadline}</p>
        )}
        <div className="mt-6 flex gap-4 flex-wrap justify-center">
          {primaryCta && (
            <Button
              asChild
              className="bg-[#D40511] hover:bg-[#B5000D] text-white font-bold px-7 py-3 rounded-full shadow-md transition-all"
              size="lg"
            >
              <a href={primaryCta.href}>
                {primaryCta.label} <ArrowRight className="inline ml-2 w-4 h-4" />
              </a>
            </Button>
          )}
          {secondaryCta && (
            <Button
              asChild
              variant="outline"
              className="border border-[#D40511] text-[#D40511] hover:bg-[#FFCC00]/20 font-bold px-7 py-3 rounded-full transition-all"
              size="lg"
            >
              <a href={secondaryCta.href}>
                {secondaryCta.label} <ArrowUpRight className="inline ml-2 w-4 h-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
