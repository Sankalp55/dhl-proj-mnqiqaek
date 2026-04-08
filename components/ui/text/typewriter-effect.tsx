import React from "react";

export type TypewriterWord = {
  text: string;
  className?: string;
};

export type TypewriterEffectProps = {
  words: TypewriterWord[];
  className?: string;
};

function TypewriterEffect({ words, className }: TypewriterEffectProps) {
  // Simple, non-animated fallback that preserves API.
  return (
    <p className={className ?? "text-base text-white/80 md:text-lg"}>
      {words.map((w, idx) => (
        <span key={idx} className={w.className}>
          {w.text}
          {idx < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}

export default TypewriterEffect;
export { TypewriterEffect };
