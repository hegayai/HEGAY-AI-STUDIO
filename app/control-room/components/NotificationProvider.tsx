"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Notification = {
  id: number;
  message: string;
  type: "success" | "error" | "info";
};

type NotificationContextType = {
  notify: (message: string, type?: Notification["type"]) => void;
};

const NotificationContext = createContext<NotificationContextType | null>(null);

export function useNotify() {
  return useContext(NotificationContext)!;
}

export default function NotificationProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const notify = (message: string, type: Notification["type"] = "info") => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 4000);
  };

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}

      {/* TOAST CONTAINER */}
      <div className="fixed top-6 right-6 space-y-3 z-50">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`px-5 py-3 rounded-xl shadow-lg border border-white/10 text-white animate-fade-in
              ${
                n.type === "success"
                  ? "bg-green-600/80"
                  : n.type === "error"
                  ? "bg-red-600/80"
                  : "bg-blue-600/80"
              }
            `}
          >
            {n.message}
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
}
