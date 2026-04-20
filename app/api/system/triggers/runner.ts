import fs from "fs";
import os from "os";
import path from "path";
import { exec } from "child_process";

const triggerDir = "C:\\HegayOS\\triggers";
const triggerFile = path.join(triggerDir, "triggers.json");

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

export function startTriggerEngine() {
  setInterval(() => {
    const triggers = loadJSON(triggerFile);
    const workflows = loadJSON(workflowFile);

    const cpuLoad = os.loadavg()[0] * 25; // convert loadavg to %
    const memUsage = ((os.totalmem() - os.freemem()) / os.totalmem()) * 100;

    triggers.forEach((trigger: any) => {
      const workflow = workflows.find((w: any) => w.id === trigger.workflowId);
      if (!workflow) return;

      let shouldRun = false;

      switch (trigger.eventType) {
        case "cpu-spike":
          if (cpuLoad >= trigger.threshold) shouldRun = true;
          break;

        case "memory-high":
          if (memUsage >= trigger.threshold) shouldRun = true;
          break;

        case "disk-high":
          // disk check omitted for brevity
          break;

        case "ai-overload":
          // simulated AI load
          const aiLoad = Math.random() * 100;
          if (aiLoad >= trigger.threshold) shouldRun = true;
          break;

        case "model-failover":
          const failover = Math.random() < 0.1;
          if (failover) shouldRun = true;
          break;
      }

      if (shouldRun) {
        runWorkflow(workflow.steps);
      }
    });
  }, 20000);
}
