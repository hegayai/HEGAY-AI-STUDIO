"use client";

import { useState } from "react";

export default function HegayChat() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!message.trim()) return;

    setLoading(true);

    await fetch("/api/thread/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: message,
      }),
    });

    setMessage("");
    setLoading(false);
  }

  return (
    <div className="w-full flex flex-col gap-3">
      <textarea
        className="w-full p-3 rounded bg-neutral-900 text-white border border-neutral-700"
        placeholder="Send a message to Hegay AI..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={sendMessage}
        disabled={loading}
        className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </div>
  );
}
