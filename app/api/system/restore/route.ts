import { NextResponse } from "next/server";
import { exec } from "child_process";
import fs from "fs";
import path from "path";

export async function GET() {
  // Return list of available backups
  const backupDir = path.join(
    process.env.USERPROFILE || "",
    "OneDrive",
    "HegayOS",
    "backups"
  );

  if (!fs.existsSync(backupDir)) {
    return NextResponse.json({ backups: [] });
  }

  const files = fs
    .readdirSync(backupDir)
    .filter((f) => f.endsWith(".dump"))
    .sort()
    .reverse();

  return NextResponse.json({ backups: files });
}

export async function POST(request: Request) {
  const { filename } = await request.json();

  if (!filename) {
    return NextResponse.json(
      { success: false, message: "No filename provided" },
      { status: 400 }
    );
  }

  const restoreScript = `C:\\HegayOS\\restore-database.bat`;

  return new Promise((resolve) => {
    exec(`"${restoreScript}"`, (error, stdout, stderr) => {
      if (error) {
        resolve(
          NextResponse.json(
            {
              success: false,
              message: "Restore failed",
              error: stderr || error.message,
            },
            { status: 500 }
          )
        );
        return;
      }

      resolve(
        NextResponse.json({
          success: true,
          message: "Restore completed successfully",
          output: stdout,
        })
      );
    });
  });
}
