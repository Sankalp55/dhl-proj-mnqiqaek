"use client";
export default function Navbar(props: any) {
  return <div {...props}>{props.children || props.headline || props.title || ""}</div>;
}
