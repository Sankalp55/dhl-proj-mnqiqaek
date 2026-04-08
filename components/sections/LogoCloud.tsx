import { cn } from '@/lib/utils';

type LogoCloudProps = {
  headline?: string;
  subheadline?: string;
  logos: string[];
  note?: string;
};

export default function LogoCloud({ headline, subheadline, logos, note }: LogoCloudProps) {
  return (
    <section className="py-24 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        {headline && (
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-[#333] font-['Arial_Black','Arial',sans-serif]">
            {headline}
          </h2>
        )}
        {subheadline && (
          <p className="mt-2 text-lg text-[#333] font-['Arial',sans-serif]">{subheadline}</p>
        )}
        <div className="mt-8 flex flex-wrap justify-center gap-6 md:gap-10">
          {logos.map((logo, i) => (
            <span
              key={logo}
              className={cn(
                'px-5 py-2 text-lg md:text-xl font-semibold tracking-wide uppercase font-["Arial_Black","Arial",sans-serif] text-[#333] bg-white/80 rounded-md border border-[#FFCC00]/30 transition-colors duration-200 hover:bg-[#FFCC00]/20 hover:text-[#D40511]',
                i !== 0 && 'border-l border-[#FFCC00]/40'
              )}
              style={{
                letterSpacing: '0.04em',
                minWidth: 120,
              }}
            >
              {logo}
            </span>
          ))}
        </div>
        {note && <p className="mt-6 text-sm text-[#333] opacity-60">{note}</p>}
      </div>
    </section>
  );
}
