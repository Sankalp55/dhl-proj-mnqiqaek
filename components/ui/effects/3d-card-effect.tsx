import React from "react";

export type CardContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export function CardContainer({ className, children }: CardContainerProps) {
  return (
    <div className={className} style={{ perspective: "1000px" }}>
      {children}
    </div>
  );
}

export type CardBodyProps = {
  className?: string;
  children: React.ReactNode;
};

export function CardBody({ className, children }: CardBodyProps) {
  return (
    <div
      className={className}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
}

export type CardItemProps<T extends React.ElementType = "div"> = {
  as?: T;
  className?: string;
  children?: React.ReactNode;
  translateZ?: number | string;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function CardItem<T extends React.ElementType = "div">({
  as,
  className,
  children,
  translateZ,
  style,
  ...rest
}: CardItemProps<T>) {
  const Comp = (as ?? "div") as React.ElementType;
  const z =
    typeof translateZ === "number"
      ? `${translateZ}px`
      : translateZ ?? undefined;

  return (
    <Comp
      className={className}
      style={{
        transform: z ? `translateZ(${z})` : undefined,
        transformStyle: "preserve-3d",
        ...(style as React.CSSProperties),
      }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
