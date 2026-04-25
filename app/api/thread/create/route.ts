import { NextResponse } from "next/server";
import { prisma } from "@/src/core/db/client";
import { getCurrentUser } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser(req);

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { title, content } = await req.json();

    if (!title || !content) {
      return NextResponse.json(
        { error: "Missing thread title or content" },
        { status: 400 }
      );
    }

    const thread = await prisma.thread.create({
      data: {
        userId: user.id,
        title,
        content,
      },
    });

    return NextResponse.json({
      success: true,
      thread,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Failed to create thread" },
      { status: 500 }
    );
  }
}
