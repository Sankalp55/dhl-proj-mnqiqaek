"use client";
export default function CTASparkles(props: any) {
  return <div {...props}>{props.children || props.headline || props.title || ""}</div>;
}
