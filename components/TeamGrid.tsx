"use client";
export default function TeamGrid(props: any) {
  return <div {...props}>{props.children || props.headline || props.title || ""}</div>;
}
