import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatTick = (value: number) => {
  if (value >= 1_000_000) {
    return `${value / 1_000_000}m`; // Convert to millions
  } else if (value >= 1_000) {
    return `${value / 1_000}k`; // Convert to thousands
  }
  return value; // Return as-is if below 1k
};
