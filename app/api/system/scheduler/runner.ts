import fs from "fs";
import path from "path";
import { exec } from "child_process";

const schedulerDir = "C:\\HegayOS\\scheduler";
const schedulerFile = path.join(schedulerDir, "schedules.json");

const workflowDir = "C:\\HegayOS\\workflows";
const workflowFile = path.join(workflowDir, "workflows.json");

function loadJSON(file: string) {
  if (!fs.existsSync(file)) return [];
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function saveJSON(file: string, data: any) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

function runWorkflow(steps: string[]) {
  steps.forEach((step) => {
    switch (step) {
      case "backup":
        exec(`C:\\HegayOS\\backupOS.bat`);
        break;
      case "restore":
        exec(`C:\\HegayOS\\restore-database.bat`);
        break;
      case "server-restart":
        exec(`taskkill /F /IM node.exe`);
        exec(`cmd /c "cd /d C:\\Users\\HEGAY COMMUNICATIONS\\hegay-ai-studio && npm run dev"`);
        break;
      case "server-stop":
        exec(`taskkill /F /IM node.exe`);
        break;
      case "server-start":
        exec(`cmd /c "cd /d C:\\Users\\HEGAY COMMUNICATIONS\\hegay-ai-studio && npm run dev"`);
        break;
      case "log-dump":
        exec(`type C:\\HegayOS\\logs\\startup.log > C:\\HegayOS\\logs\\dump.txt`);
        break;
      case "ai-ping":
        exec(`echo AI Ping >> C:\\HegayOS\\logs\\ai-ping.log`);
        break;
    }
  });
}

export function startScheduler() {
  setInterval(() => {
    const schedules = loadJSON(schedulerFile);
    const workflows = loadJSON(workflowFile);

    const now = Date.now();

    schedules.forEach((schedule: any) => {
      const workflow = workflows.find((w: any) => w.id === schedule.workflowId);
      if (!workflow) return;

      const lastRun = schedule.lastRun ? new Date(schedule.lastRun).getTime() : 0;

      if (now - lastRun >= schedule.interval * 1000) {
        runWorkflow(workflow.steps);
        schedule.lastRun = new Date().toISOString();
      }
    });

    saveJSON(schedulerFile, schedules);
  }, 30000);
}
