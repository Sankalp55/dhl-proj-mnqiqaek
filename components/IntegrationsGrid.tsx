"use client";
export default function IntegrationsGrid(props: any) {
  return <div {...props}>{props.children || props.headline || props.title || ""}</div>;
}
