// components/ai/AIConsole.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function AIConsole() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendPrompt() {
    if (!prompt.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          provider: "local",
          model: "dev-model",
          prompt,
        }),
      });

      const data = await res.json();

      if (data.error) {
        setResponse("Error: " + data.error);
      } else {
        setResponse(data.output);
      }
    } catch (err) {
      setResponse("Request failed.");
    }

    setLoading(false);
  }

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <Card>
        <h2 className="text-xl font-semibold mb-4">AI Console</h2>

        <textarea
          className="w-full h-32 p-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
          placeholder="Type your prompt..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <Button
          className="mt-4 w-full"
          onClick={sendPrompt}
          disabled={loading}
        >
          {loading ? "Thinking..." : "Send to AI"}
        </Button>
      </Card>

      {response && (
        <Card className="whitespace-pre-wrap">
          <h3 className="text-lg font-semibold mb-2">Response</h3>
          <p>{response}</p>
        </Card>
      )}
    </div>
  );
}
