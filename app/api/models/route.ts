import { NextResponse } from "next/server";
import { modelRouter } from "@/ai/modelRouter";
import { systemPrompt } from "@/ai/prompts/systemPrompt";

export async function POST(req: Request) {
  try {
    const { provider, model, prompt } = await req.json();

    if (!provider || !model || !prompt) {
      return NextResponse.json(
        { error: "provider, model, and prompt are required." },
        { status: 400 }
      );
    }

    const response = await modelRouter(provider, model, systemPrompt, prompt);

    return NextResponse.json({
      output: response?.output ?? "No output returned.",
    });
  } catch (error) {
    console.error("Model router API error:", error);
    return NextResponse.json(
      { error: "Model routing failed." },
      { status: 500 }
    );
  }
}
