"use client";
export default function LogoCloud(props: any) {
  return <div {...props}>{props.children || props.headline || props.title || ""}</div>;
}
