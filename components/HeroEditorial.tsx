"use client";
export default function HeroEditorial(props: any) {
  return <div {...props}>{props.children || props.headline || props.title || ""}</div>;
}
