import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string, options?: Intl.DateTimeFormatOptions) {
  const newDate = new Date(date);
  return new Intl.DateTimeFormat(undefined, options).format(newDate);
}

export function timeAgo(date: Date | string) {
  const seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);
  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return `${interval} year${interval === 1 ? '' : 's'} ago`;
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return `${interval} month${interval === 1 ? '' : 's'} ago`;
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return `${interval} day${interval === 1 ? '' : 's'} ago`;
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return `${interval} hour${interval === 1 ? '' : 's'} ago`;
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return `${interval} minute${interval === 1 ? '' : 's'} ago`;
  }
  return `${Math.floor(seconds)} second${seconds === 1 ? '' : 's'} ago`;
}

export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')     // Replace spaces with -
    .replace(/[^\w-]+/g, '')   // Remove all non-word chars
    .replace(/--+/g, '-')     // Replace multiple - with single -
    .replace(/^-+/, '')       // Trim - from start of text
    .replace(/-+$/, '');      // Trim - from end of text
}

export function truncate(text: string, length: number) {
  if (text.length <= length) {
    return text;
  }
  return `${text.substring(0, length)}...`;
}

export function capitalize(text: string) {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Example of a type guard (if you have a specific data structure)
// interface User {
//   id: string;
//   name: string;
// }
//
// export function isUser(data: any): data is User {
//   return (
//     typeof data === 'object' &&
//     data !== null &&
//     typeof (data as User).id === 'string' &&
//     typeof (data as User).name === 'string'
//   );
// }

// Add more utility functions as needed for your project