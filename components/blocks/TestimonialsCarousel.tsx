import React from "react";

export type Testimonial = {
  quote: string;
  name: string;
  title?: string;
};

export type TestimonialsCarouselProps = {
  testimonials?: Testimonial[];
  className?: string;
};

function TestimonialsCarousel({ testimonials, className }: TestimonialsCarouselProps) {
  const items: Testimonial[] =
    testimonials && testimonials.length
      ? testimonials
      : [
          {
            quote: "This product saved us weeks of work.",
            name: "Alex",
            title: "Founder",
          },
        ];

  return (
    <div className={className}>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((t, idx) => (
          <figure
            key={idx}
            className="rounded-xl border border-white/10 bg-white/5 p-6 text-white"
          >
            <blockquote className="text-sm leading-relaxed text-white/80">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-4 text-sm font-medium">
              {t.name}
              {t.title ? (
                <span className="font-normal text-white/60"> · {t.title}</span>
              ) : null}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default TestimonialsCarousel;
export { TestimonialsCarousel };
