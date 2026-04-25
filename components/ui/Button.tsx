"use client";

import React, { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children: ReactNode;
};

export function Button({ className = "", children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "rounded-md bg-cyan-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
