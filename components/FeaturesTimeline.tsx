"use client";
export default function FeaturesTimeline(props: any) {
  return <div {...props}>{props.children || props.headline || props.title || ""}</div>;
}
