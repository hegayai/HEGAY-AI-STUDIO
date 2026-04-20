import { NextResponse } from "next/server";
import fs from "fs";

export async function GET() {
  try {
    const logPath = "C:\\HegayOS\\logs\\startup.log";
    let events: any[] = [];

    if (fs.existsSync(logPath)) {
      const lines = fs.readFileSync(logPath, "utf8").split("\n").slice(-20);

      events = lines
        .filter((l) => l.trim().length > 0)
        .map((line) => {
          let type = "system";

          if (line.includes("Backup")) type = "backup";
          if (line.includes("Restore")) type = "restore";
          if (line.includes("server")) type = "server";
          if (line.includes("PostgreSQL")) type = "database";

          return {
            type,
            message: line.trim(),
            timestamp: new Date().toISOString(),
          };
        });
    }

    return NextResponse.json({ events });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to load activity", details: error.message },
      { status: 500 }
    );
  }
}
