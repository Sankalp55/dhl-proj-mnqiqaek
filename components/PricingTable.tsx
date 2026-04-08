"use client";
export default function PricingTable(props: any) {
  return <div {...props}>{props.children || props.headline || props.title || ""}</div>;
}
