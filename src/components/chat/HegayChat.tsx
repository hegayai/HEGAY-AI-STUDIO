await fetch("/api/thread/message", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    threadId,
    role: "user",
    content: input,
  }),
});

await fetch("/api/thread/message", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    threadId,
    role: "assistant",
    content: data.reply,
  }),
});
