// components/ui/Card.tsx
import clsx from "clsx";

export function Card({ className, children, ...props }) {
  return (
    <div
      className={clsx(
        "rounded-2xl p-6 bg-slate-900/60 backdrop-blur-md border border-slate-800",
        "shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(0,0,0,0.45)]",
        "transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
