"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type ToastVariant = "default" | "success" | "error";

type Toast = {
  id: string;
  message: string;
  variant: ToastVariant;
};

type ToastContextType = {
  showToast: (message: string, variant?: ToastVariant) => void;
};

const ToastContext = createContext<ToastContextType>({
  showToast: () => {},
});

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, variant: ToastVariant = "default") => {
    const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    setToasts((prev) => [...prev, { id, message, variant }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastViewport toasts={toasts} />
    </ToastContext.Provider>
  );
}

function ToastViewport({ toasts }: { toasts: Toast[] }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="
        fixed bottom-6 right-6 z-[9999]
        flex flex-col gap-2
        max-w-sm
      "
    >
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </div>
  );
}

function ToastItem({ toast }: { toast: Toast }) {
  const base =
    "glass-panel rounded-2xl px-4 py-3 text-sm shadow-[0_20px_80px_rgba(0,0,0,0.9)] text-[var(--platinum)]";

  const variantClass =
    toast.variant === "success"
      ? "border border-emerald-400/40 bg-emerald-500/10"
      : toast.variant === "error"
      ? "border border-red-400/40 bg-red-500/10"
      : "border border-white/10 bg-black/70";

  return (
    <div className={`${base} ${variantClass}`}>
      <div className="text-[12px] leading-snug">{toast.message}</div>
    </div>
  );
}
