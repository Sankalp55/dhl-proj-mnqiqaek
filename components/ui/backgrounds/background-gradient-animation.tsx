import React from "react";

export type BackgroundGradientAnimationProps = {
  className?: string;
  children?: React.ReactNode;
};

function BackgroundGradientAnimation({
  className,
  children,
}: BackgroundGradientAnimationProps) {
  return (
    <div
      className={
        className ??
        "relative overflow-hidden bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-cyan-500"
      }
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(800px circle at 20% 20%, rgba(255,255,255,0.25), transparent 40%), radial-gradient(700px circle at 80% 30%, rgba(255,255,255,0.18), transparent 45%), radial-gradient(900px circle at 50% 90%, rgba(0,0,0,0.18), transparent 55%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

export default BackgroundGradientAnimation;
export { BackgroundGradientAnimation };
