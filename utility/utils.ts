import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateTimeOptions() {
  const options = [];
  for (let hour = 0; hour < 24; hour++) {
    const formattedHour = `${hour % 12 === 0 ? 12 : hour % 12}:00 ${hour < 12 ? 'AM' : 'PM'}`;
    options.push({ label: formattedHour, value: formattedHour }); // Assuming it returns objects
  }
  return options;
}
