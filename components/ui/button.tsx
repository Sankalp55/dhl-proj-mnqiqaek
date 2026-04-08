"use client";
export default function Button(props: any) {
  return <div {...props}>{props.children || props.headline || props.title || ""}</div>;
}
