// components/ui/Button.tsx
"use client";

import clsx from "clsx";

export function Button({ className, children, ...props }) {
  return (
    <button
      className={clsx(
        "px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 active:bg-sky-700",
        "text-white font-medium text-sm shadow-md hover:shadow-lg",
        "transition-all duration-200",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
