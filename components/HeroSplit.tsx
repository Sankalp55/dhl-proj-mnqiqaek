"use client";
export default function HeroSplit(props: any) {
  return <div {...props}>{props.children || props.headline || props.title || ""}</div>;
}
