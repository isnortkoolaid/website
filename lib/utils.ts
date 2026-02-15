import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// cn (classNames) utility: combines clsx for conditional class merging with
// tailwind-merge for deduplicating and resolving conflicting Tailwind classes.
// Used throughout the project for className composition, especially in
// shadcn/ui components.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
