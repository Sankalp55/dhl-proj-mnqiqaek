"use client";
export default function TestimonialsCarousel(props: any) {
  return <div {...props}>{props.children || props.headline || props.title || ""}</div>;
}
