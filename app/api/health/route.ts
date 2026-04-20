import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const start = Date.now();

  try {
    await prisma.$queryRaw`SELECT 1`;
    const latency = Date.now() - start;

    return NextResponse.json({
      status: "ONLINE",
      server: "RUNNING",
      database: "CONNECTED",
      prisma: "CONNECTED",
      latency: `${latency}ms`,
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "ERROR",
        server: "RUNNING",
        database: "DISCONNECTED",
        prisma: "FAILED",
        error: String(error),
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
