"use client";

import { useEffect, useState } from "react";

type RealmIntroProps = {
  title: string;
  description: string;
};

export default function RealmIntro({ title, description }: RealmIntroProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-white/70 text-lg">{description}</p>
    </div>
  );
}
