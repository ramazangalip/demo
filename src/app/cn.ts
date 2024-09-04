import type { ClassValue } from "clsx";

import clsx from "clsx";
import { extendTailwindMerge, type Config } from "tailwind-merge";

const COMMON_UNITS = ["small", "medium", "large"];

const config: Partial<Config> = {
  theme: {
    opacity: ["disabled"],
    spacing: ["divider"],
    borderWidth: COMMON_UNITS,
    borderRadius: COMMON_UNITS,
  },
  classGroups: {
    shadow: [{ shadow: COMMON_UNITS }],
    "font-size": [{ text: ["tiny", ...COMMON_UNITS] }],
    "bg-image": ["bg-stripe-gradient"],
  },
};

const twMerge = extendTailwindMerge(config);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
