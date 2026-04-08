'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

type HeroGradientBlobProps = {
  headline: string;
  subheadline: string;
  highlights?: string[];
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
};

const blobColors = ['#FFCC00', '#D40511'];

function AnimatedBlobs() {
  // Simple animated SVG blobs with brand colors
  return (
    <div
      aria-hidden
      className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
    >
      <svg
        className="absolute left-[-10%] top-[-15%] w-[540px] h-[540px] animate-[blob_16s_infinite_linear]"
        viewBox="0 0 600 600"
        fill="none"
      >
        <g filter="url(#blur1)">
          <ellipse cx="300" cy="300" rx="240" ry="210" fill={blobColors[0]} fillOpacity="0.7" />
        </g>
        <defs>
          <filter id="blur1" x="0" y="0" width="600" height="600">
            <feGaussianBlur stdDeviation="60" />
          </filter>
        </defs>
      </svg>
      <svg
        className="absolute right-[-15%] bottom-[-10%] w-[440px] h-[440px] animate-[blob_20s_infinite_alternate]"
        viewBox="0 0 520 520"
        fill="none"
      >
        <g filter="url(#blur2)">
          <ellipse cx="260" cy="260" rx="170" ry="150" fill={blobColors[1]} fillOpacity="0.5" />
        </g>
        <defs>
          <filter id="blur2" x="0" y="0" width="520" height="520">
            <feGaussianBlur stdDeviation="70" />
          </filter>
        </defs>
      </svg>
      <style>
        {`
        @keyframes blob {
          0% { transform: scale(1) translateY(0px);}
          33% { transform: scale(1.06, 0.97) translateY(15px);}
          66% { transform: scale(0.93,1.04) translateY(-10px);}
          100% { transform: scale(1) translateY(0px);}
        }
        `}
      </style>
    </div>
  );
}

export default function HeroGradientBlob({
  headline,
  subheadline,
  highlights,
  primaryCta,
  secondaryCta,
}: HeroGradientBlobProps) {
  return (
    <section
      className={cn(
        'relative py-24 md:py-32 flex items-center justify-center overflow-hidden bg-white',
      )}
    >
      <AnimatedBlobs />
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        <div
          className={cn(
            "backdrop-blur-xl bg-white/70 border border-[#FFCC00] rounded-[0.75rem] shadow-lg px-8 py-12 flex flex-col gap-8 items-center animate-fade-in-up"
          )}
        >
          <h1
            className={cn(
              "font-black tracking-tight",
              "text-5xl md:text-7xl text-[#333] font-['Arial_Black','Arial',sans-serif]"
            )}
          >
            {headline}
          </h1>
          <p className="max-w-2xl text-lg md:text-2xl text-[#333] font-['Arial',sans-serif]">
            {subheadline}
          </p>
          {highlights && (
            <ul className="flex flex-wrap gap-3 mt-2 justify-center">
              {highlights.map((h, i) => (
                <li
                  key={h}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFCC00]/60 text-[#333] font-medium text-sm border border-[#FFCC00]"
                >
                  <span className="font-semibold">{h}</span>
                </li>
              ))}
            </ul>
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
      </div>
      {/* Subtle animated sparkles */}
      <div className="pointer-events-none absolute inset-0 z-20">
        <div className="absolute left-1/3 top-[30%] w-2 h-2 rounded-full bg-[#D40511] animate-pulse opacity-70" />
        <div className="absolute left-[70%] top-[60%] w-1.5 h-1.5 rounded-full bg-[#FFCC00] animate-pulse opacity-80" />
        <div className="absolute left-[60%] top-[42%] w-1.5 h-1.5 rounded-full bg-[#D40511] animate-pulse opacity-60" />
        <div className="absolute left-[40%] top-[55%] w-1 h-1 rounded-full bg-[#D40511] animate-pulse opacity-60" />
      </div>
    </section>
  );
}
