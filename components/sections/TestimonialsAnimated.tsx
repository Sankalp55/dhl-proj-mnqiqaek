'use client';

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

type Testimonial = {
  quote: string;
  name: string;
  company: string;
};

type TestimonialsAnimatedProps = {
  headline?: string;
  subheadline?: string;
  items: Testimonial[];
  animation?: string;
};

const AUTO_ADVANCE_MS = 6500;

export default function TestimonialsAnimated({
  headline,
  subheadline,
  items,
  animation,
}: TestimonialsAnimatedProps) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setIdx((i) => (i + 1) % items.length);
    }, AUTO_ADVANCE_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, items.length]);

  const go = (dir: number) => {
    setIdx((i) => (i + dir + items.length) % items.length);
  };

  return (
    <section className="py-24 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        {headline && (
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#333] font-['Arial_Black','Arial',sans-serif]">
            {headline}
          </h2>
        )}
        {subheadline && (
          <p className="mt-2 text-lg text-[#333] font-['Arial',sans-serif]">{subheadline}</p>
        )}
        <div
          className="mt-12 relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => go(-1)}
              className="p-2 rounded-full bg-[#FFCC00]/80 hover:bg-[#FFCC00] text-[#333] shadow transition"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex-1 min-w-0">
              <blockquote
                key={items[idx].quote}
                className={cn(
                  "relative bg-white/80 backdrop-blur-lg border border-[#FFCC00] rounded-xl shadow-md px-8 py-10 transition-all duration-500 animate-fade-in-up",
                  "mx-auto text-left"
                )}
                style={{
                  minHeight: 180,
                }}
              >
                <Quote className="absolute top-5 left-5 w-8 h-8 text-[#D40511] opacity-30" />
                <p className="text-xl font-semibold text-[#333] font-['Arial',sans-serif] mb-6">
                  “{items[idx].quote}”
                </p>
                <footer className="flex flex-col md:flex-row md:items-center gap-1">
                  <span className="font-bold font-['Arial_Black','Arial',sans-serif] text-[#D40511]">
                    {items[idx].name}
                  </span>
                  <span className="text-[#333] opacity-60 font-medium ml-1">
                    {items[idx].company}
                  </span>
                </footer>
              </blockquote>
            </div>
            <button
              onClick={() => go(1)}
              className="p-2 rounded-full bg-[#FFCC00]/80 hover:bg-[#FFCC00] text-[#333] shadow transition"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {items.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                className={cn(
                  'w-2.5 h-2.5 rounded-full transition-all',
                  i === idx ? 'bg-[#D40511]' : 'bg-[#FFCC00]/60'
                )}
                onClick={() => setIdx(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
