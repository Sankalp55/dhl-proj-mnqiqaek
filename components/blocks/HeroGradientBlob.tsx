import React from "react";

// Ensure these are imported as defaults if the underlying modules export default.
import BackgroundGradientAnimation from "@/components/ui/backgrounds/background-gradient-animation";
import TypewriterEffect from "@/components/ui/text/typewriter-effect";

export type HeroGradientBlobProps = {
  title?: string;
  subtitle?: string;
  words?: Array<{ text: string; className?: string }>;
  className?: string;
};

function HeroGradientBlob({
  title = "Build faster",
  subtitle = "Beautiful UI blocks for your Next.js app.",
  words,
  className,
}: HeroGradientBlobProps) {
  return (
    <section className={className}>
      <BackgroundGradientAnimation>
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-6 py-20 text-center">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl">
            {title}
          </h1>
          <div className="mt-6">
            {words && words.length > 0 ? (
              <TypewriterEffect words={words} />
            ) : (
              <p className="text-pretty text-base text-white/80 md:text-lg">{subtitle}</p>
            )}
          </div>
        </div>
      </BackgroundGradientAnimation>
    </section>
  );
}

export default HeroGradientBlob;
export { HeroGradientBlob };
