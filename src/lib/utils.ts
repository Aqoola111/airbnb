import {clsx, type ClassValue} from "clsx"
import {twMerge} from "tailwind-merge"
import type {inferRouterOutputs} from '@trpc/server';
import type {AppRouter} from '@/trpc/routers/_app';

export type RouterOutput = inferRouterOutputs<AppRouter>;


export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}
