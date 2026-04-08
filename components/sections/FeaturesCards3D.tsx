'use client';

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { BarChart3, CalendarClock, FileCheck, Gauge, Headphones, HelpCircle, Leaf, LifeBuoy, Lock, Plane, Plug, Printer, Radar, ShieldCheck, Undo2, AlertTriangle, BadgeDollarSign, Handshake } from 'lucide-react';

type Feature = {
  title: string;
  description: string;
  icon?: string;
};

type FeaturesCards3DProps = {
  headline?: string;
  subheadline?: string;
  items: Feature[];
  styleNotes?: string;
};

const iconMap: Record<string, ReactNode> = {
  Radar: <Radar className="w-7 h-7 text-[#D40511]" />,
  Plane: <Plane className="w-7 h-7 text-[#D40511]" />,
  FileCheck: <FileCheck className="w-7 h-7 text-[#D40511]" />,
  Undo2: <Undo2 className="w-7 h-7 text-[#D40511]" />,
  BarChart3: <BarChart3 className="w-7 h-7 text-[#D40511]" />,
  Headphones: <Headphones className="w-7 h-7 text-[#D40511]" />,
  CalendarClock: <CalendarClock className="w-7 h-7 text-[#D40511]" />,
  Printer: <Printer className="w-7 h-7 text-[#D40511]" />,
  AlertTriangle: <AlertTriangle className="w-7 h-7 text-[#D40511]" />,
  ShieldCheck: <ShieldCheck className="w-7 h-7 text-[#D40511]" />,
  Gauge: <Gauge className="w-7 h-7 text-[#D40511]" />,
  LifeBuoy: <LifeBuoy className="w-7 h-7 text-[#D40511]" />,
  Lock: <Lock className="w-7 h-7 text-[#D40511]" />,
  Leaf: <Leaf className="w-7 h-7 text-[#D40511]" />,
  HelpCircle: <HelpCircle className="w-7 h-7 text-[#D40511]" />,
  Plug: <Plug className="w-7 h-7 text-[#D40511]" />,
  BadgeDollarSign: <BadgeDollarSign className="w-7 h-7 text-[#D40511]" />,
  Handshake: <Handshake className="w-7 h-7 text-[#D40511]" />,
};

export default function FeaturesCards3D({
  headline,
  subheadline,
  items,
  styleNotes,
}: FeaturesCards3DProps) {
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
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={cn(
                "relative bg-white/75 backdrop-blur-lg border border-[#FFCC00] rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-all duration-200 cursor-pointer group",
                "hover:shadow-lg hover:-translate-y-2 hover:scale-[1.03]",
                "before:absolute before:inset-0 before:rounded-xl before:shadow-[0_0_32px_4px_#D4051140] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity",
                "overflow-hidden"
              )}
              style={{
                boxShadow: "0 4px 32px 0 #FFCC0020",
                willChange: "transform",
              }}
            >
              <div className="mb-4 flex items-center justify-center">
                {item.icon && iconMap[item.icon]}
              </div>
              <h3 className="font-black text-lg md:text-xl text-[#333] mb-2 font-['Arial_Black','Arial',sans-serif]">
                {item.title}
              </h3>
              <p className="text-[#333] text-sm font-['Arial',sans-serif]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
