"use client";

import { useEffect, useState } from "react";

export default function GalleryPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/media/list")
      .then((res) => res.json())
      .then((data) => setItems(data.items || []));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Gallery</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="glass-panel p-4 rounded-xl border border-white/10"
          >
            {item.type === "image" ? (
              <img src={item.url} className="rounded-xl mb-3" />
            ) : (
              <video src={item.url} controls className="rounded-xl mb-3" />
            )}

            <p className="text-white/60 text-sm">{item.prompt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
