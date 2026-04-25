"use client";

import React, { createContext, useContext, useState } from "react";

export type NotificationType = "success" | "error" | "info";

export type NotificationContextType = {
  notify: (message: string, type?: NotificationType) => void;
};

const NotificationContext = createContext<NotificationContextType>({
  notify: () => {},
});

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);
  const [type, setType] = useState<NotificationType>("info");

  const notify = (msg: string, t: NotificationType = "info") => {
    setMessage(msg);
    setType(t);

    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}

      {message && (
        <div
          className={`
            fixed bottom-6 right-6 px-4 py-2 rounded-lg text-white shadow-lg
            ${type === "success" ? "bg-green-600" : ""}
            ${type === "error" ? "bg-red-600" : ""}
            ${type === "info" ? "bg-blue-600" : ""}
          `}
        >
          {message}
        </div>
      )}
    </NotificationContext.Provider>
  );
}

export const useNotification = () => useContext(NotificationContext);
