import { NextResponse } from "next/server";
import { prisma } from "@/core/db/client";
import { getCurrentUser } from "@/lib/auth";

export async function GET() {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const memory = await prisma.memory.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      success: true,
      memory,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Failed to load memory" },
      { status: 500 }
    );
  }
}
