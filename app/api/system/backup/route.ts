import { NextResponse } from "next/server";
import { exec } from "child_process";

export async function POST() {
  return new Promise((resolve) => {
    // Path to your backup script
    const backupScript = `C:\\HegayOS\\backupOS.bat`;

    exec(`"${backupScript}"`, (error, stdout, stderr) => {
      if (error) {
        resolve(
          NextResponse.json(
            {
              success: false,
              message: "Backup failed",
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
          message: "Backup completed successfully",
          output: stdout,
        })
      );
    });
  });
}
