"use client";
export default function HeroGradientBlob(props: any) {
  return <div {...props}>{props.children || props.headline || props.title || ""}</div>;
}
