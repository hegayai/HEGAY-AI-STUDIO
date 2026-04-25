"use client";

import { useEffect, useState } from "react";

type PageTransitionProps = {
  children: React.ReactNode;
};

export default function PageTransition({ children }: PageTransitionProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      className={`transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
