import { NextResponse } from "next/server";
import { prisma } from "@/core/db/client";
import { getCurrentUser } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { threadId, message } = await req.json();

    if (!threadId || !message) {
      return NextResponse.json(
        { error: "Missing threadId or message" },
        { status: 400 }
      );
    }

    const saved = await prisma.message.create({
      data: {
        threadId,
        userId: user.id,
        content: message,
      },
    });

    return NextResponse.json({
      success: true,
      message: saved,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Failed to send message" },
      { status: 500 }
    );
  }
}
