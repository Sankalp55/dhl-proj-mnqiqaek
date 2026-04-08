"use client";
export default function IntegrationsAlternating(props: any) {
  return <div {...props}>{props.children || props.headline || props.title || ""}</div>;
}
