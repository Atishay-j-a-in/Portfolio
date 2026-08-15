import { twMerge } from "tailwind-merge";

type ClassValue = string | false | null | undefined | ClassValue[];

function flattenClasses(classes: ClassValue[]): string[] {
  return classes.flatMap((value) => {
    if (!value) return [];
    if (Array.isArray(value)) return flattenClasses(value);
    return [value];
  });
}

export function cn(...classes: ClassValue[]) {
  return twMerge(flattenClasses(classes).join(" "));
}

export function rotateStyle(deg: number) {
  return { transform: `rotate(${deg}deg)` };
}
