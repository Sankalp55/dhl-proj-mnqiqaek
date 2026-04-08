import React from "react";

export type SparklesCoreProps = {
  className?: string;
  children?: React.ReactNode;
};

function SparklesCore({ className, children }: SparklesCoreProps) {
  // Lightweight placeholder implementation to satisfy build/export.
  // If you have a canvas/WebGL implementation, you can swap it in later.
  return (
    <div className={className}>
      {children}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.35), transparent 35%), radial-gradient(circle at 80% 40%, rgba(255,255,255,0.25), transparent 40%), radial-gradient(circle at 50% 80%, rgba(255,255,255,0.2), transparent 45%)",
        }}
      />
    </div>
  );
}

export default SparklesCore;
export { SparklesCore };
