"use client";
export default function TestimonialsFeatured(props: any) {
  return <div {...props}>{props.children || props.headline || props.title || ""}</div>;
}
