import React from "react";

export type PricingToggleProps = {
  value: "monthly" | "yearly";
  onChange: (value: "monthly" | "yearly") => void;
  className?: string;
};

function PricingToggle({ value, onChange, className }: PricingToggleProps) {
  return (
    <div className={className} role="group" aria-label="Pricing period">
      <button
        type="button"
        onClick={() => onChange("monthly")}
        className={
          value === "monthly"
            ? "rounded-l-md bg-white px-3 py-2 text-sm font-medium text-black"
            : "rounded-l-md bg-white/10 px-3 py-2 text-sm font-medium text-white"
        }
      >
        Monthly
      </button>
      <button
        type="button"
        onClick={() => onChange("yearly")}
        className={
          value === "yearly"
            ? "rounded-r-md bg-white px-3 py-2 text-sm font-medium text-black"
            : "rounded-r-md bg-white/10 px-3 py-2 text-sm font-medium text-white"
        }
      >
        Yearly
      </button>
    </div>
  );
}

export default PricingToggle;
export { PricingToggle };
