"use client";

import { useEffect, useState } from "react";

type ToastProps = {
  message: string;
  type?: "info" | "success" | "error" | "warning";
  onClose: () => void;
};

export default function Toast({ message, type = "info", onClose }: ToastProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-20 right-6 px-4 py-2 rounded-lg shadow-lg text-white transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${
        type === "success"
          ? "bg-green-500"
          : type === "error"
          ? "bg-red-500"
          : type === "warning"
          ? "bg-yellow-500 text-black"
          : "bg-blue-500"
      }`}
    >
      {message}
    </div>
  );
}
