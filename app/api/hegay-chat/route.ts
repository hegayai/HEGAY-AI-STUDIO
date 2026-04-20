import { NextResponse } from "next/server";
import { hegayRouter } from "@/lib/hegay-router";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { messages, mode, userId, threadId } = await req.json();

    if (!messages || !Array.isArray(messages) || !mode || !userId) {
      return NextResponse.json(
        { error: "Missing or invalid messages, mode, or userId" },
        { status: 400 }
      );
    }

    const aiResponse = await hegayRouter({
      messages,
      mode,
      userId,
    });

    if (threadId) {
      await prisma.message.create({
        data: {
          threadId,
          role: "assistant",
          content: aiResponse,
        },
      });
    }

    return NextResponse.json({ response: aiResponse });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Hegay chat error" },
      { status: 500 }
    );
  }
}
