"use client";

import { useEffect, useState } from "react";

export default function RealmIntro({ title, description }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <h1 className="text-5xl font-bold mb-4">{title}</h1>
      <p className="text-lg opacity-80 max-w-xl">{description}</p>
    </div>
  );
}
