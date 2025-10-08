import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { format } from 'date-fns'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatBlogDate = (date: string) => {
  return format(new Date(date), 'dd/MM/yyyy') // Always consistent
}
