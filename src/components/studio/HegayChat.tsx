"use client";

import { useState, useRef, useEffect } from "react";

type MessageRole = "user" | "assistant" | "system";

interface Message {
  id: string;
  role: MessageRole;
  content: string;
  mode: ChatMode;
}

type ChatMode = "personal" | "creative" | "office" | "worker";

const MODE_LABELS: Record<ChatMode, string> = {
  personal: "Personal",
  creative: "Creative",
  office: "Office",
  worker: "Worker Agent",
};

export default function HegayChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<ChatMode>("personal");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setError(null);

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: input,
      mode,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/hegay-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
            mode: m.mode,
          })),
          mode,
        }),
      });

      if (!res.ok) {
        setError("Hegay Chat encountered an issue.");
        setLoading(false);
        return;
      }

      const data = await res.json();

      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: data.reply,
        mode,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setLoading(false);
    } catch {
      setError("Unexpected error. Please try again.");
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!loading) sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[70vh] md:h-[75vh]">

      {/* Top bar: modes */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/40">
        <div className="flex gap-2">
          {(["personal", "creative", "office", "worker"] as ChatMode[]).map((m) => {
            const active = m === mode;
            return (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`
                  text-xs px-3 py-1.5 rounded-full border
                  ${active
                    ? "bg-cosmic-gold text-black border-cosmic-gold"
                    : "border-white/20 text-white/60 hover:text-white hover:border-cosmic-gold/60"}
                `}
              >
                {MODE_LABELS[m]}
              </button>
            );
          })}
        </div>

        <div className="text-[11px] text-white/40">
          Mode:
          <span className="ml-1 text-cosmic-gold">{MODE_LABELS[mode]}</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-black/30">
        {messages.length === 0 && (
          <div className="text-center text-xs text-white/40 mt-10">
            Start a conversation with Hegay Chat.  
            <br />
            Use <span className="text-cosmic-gold">Worker Agent</span> mode for office & professional tasks.
          </div>
        )}

        {messages.map((m) => (
          <div
            key={m.id}
            className={`
              max-w-[80%] md:max-w-[70%] rounded-2xl px-4 py-3 text-sm
              ${m.role === "user"
                ? "ml-auto bg-cosmic-gold text-black"
                : "mr-auto bg-white/5 text-white border border-white/10"}
            `}
          >
            <div className="text-[10px] uppercase tracking-[0.2em] mb-1 text-white/40">
              {m.role === "user" ? "You" : "Hegay"}
              {m.mode && m.role === "assistant" && (
                <span className="ml-2 text-cosmic-gold/80">
                  · {MODE_LABELS[m.mode]}
                </span>
              )}
            </div>
            <div className="whitespace-pre-wrap">{m.content}</div>
          </div>
        ))}

        {loading && (
          <div className="mr-auto bg-white/5 text-white border border-white/10 rounded-2xl px-4 py-3 text-sm">
            <div className="text-[10px] uppercase tracking-[0.2em] mb-1 text-white/40">
              Hegay
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <span className="w-2 h-2 rounded-full bg-cosmic-gold animate-pulse" />
              Thinking...
            </div>
          </div>
        )}

        {error && (
          <div className="text-xs text-red-400 bg-red-900/20 border border-red-500/40 p-3 rounded-lg">
            {error}
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="border-t border-white/10 bg-black/40 p-3">
        <div className="flex gap-2 items-end">
          <textarea
            className="flex-1 max-h-32 min-h-[48px] text-sm p-3 rounded-xl bg-black/60 border border-white/15 text-white focus:ring-2 focus:ring-cosmic-gold/70"
            placeholder="Ask Hegay Chat anything. In Worker mode, give it office tasks, emails, reports, or workflows to handle."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            className="px-4 py-3 rounded-xl bg-cosmic-gold text-black text-sm font-semibold disabled:opacity-60"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
