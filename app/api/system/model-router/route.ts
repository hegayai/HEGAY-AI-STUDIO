import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Simulated model router state (replace with real router later)
    const models = [
      {
        id: "openai/gpt-4.1",
        status: "online",
        latency: `${(Math.random() * 200 + 50).toFixed(0)}ms`,
        load: `${(Math.random() * 40 + 10).toFixed(1)}%`,
        priority: "primary",
      },
      {
        id: "anthropic/claude-3-sonnet",
        status: "online",
        latency: `${(Math.random() * 250 + 80).toFixed(0)}ms`,
        load: `${(Math.random() * 30 + 5).toFixed(1)}%`,
        priority: "fallback",
      },
      {
        id: "google/gemma-2-9b-it",
        status: "online",
        latency: `${(Math.random() * 300 + 100).toFixed(0)}ms`,
        load: `${(Math.random() * 20 + 5).toFixed(1)}%`,
        priority: "free-tier",
      },
      {
        id: "deepseek/deepseek-r1",
        status: "online",
        latency: `${(Math.random() * 180 + 40).toFixed(0)}ms`,
        load: `${(Math.random() * 50 + 20).toFixed(1)}%`,
        priority: "worker-mode",
      },
    ];

    const routingMode = "dynamic-load-balancing";

    return NextResponse.json({
      routingMode,
      models,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Model Router fetch failed", details: error.message },
      { status: 500 }
    );
  }
}
