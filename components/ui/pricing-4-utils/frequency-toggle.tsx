"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export type FREQUENCY = "monthly" | "yearly";

type FrequencyToggleProps = {
  frequency: FREQUENCY;
  setFrequency: (frequency: FREQUENCY) => void;
};

export function FrequencyToggle({ frequency, setFrequency }: FrequencyToggleProps) {
  return (
    <div className="inline-flex items-center rounded-full border border-border bg-card p-1 text-sm font-medium text-muted-foreground">
      {(["monthly", "yearly"] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setFrequency(option)}
          className={cn(
            "relative rounded-full px-5 py-2 transition-colors",
            frequency === option ? "text-primary-foreground" : "hover:text-foreground",
          )}
        >
          {frequency === option && (
            <motion.span
              layoutId="frequency-pill"
              className="absolute inset-0 rounded-full bg-primary"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10 capitalize">
            {option}
            {option === "yearly" && (
              <span className="ml-2 text-xs font-semibold text-teal-blue">2 months free</span>
            )}
          </span>
        </button>
      ))}
    </div>
  );
}
