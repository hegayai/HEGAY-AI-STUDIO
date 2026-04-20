import fs from "fs";
import path from "path";

const sentinelFile = "C:\\HegayOS\\security\\alerts.json";
const shieldFile = "C:\\HegayOS\\intrusion\\shield.json";
const workflowFile = "C:\\HegayOS\\workflows\\workflows.json";

function load(file: string) {
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function save(file: string, data: any) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

function runSafeWorkflow(workflowId: number) {
  const workflows = load(workflowFile);
  if (!workflows) return;

  const wf = workflows.find((w: any) => w.id === workflowId);
  if (!wf) return;

  // SAFE ACTIONS ONLY — no OS commands
  fs.appendFileSync(
    "C:\\HegayOS\\logs\\intrusion-safe.log",
    `[${new Date().toISOString()}] Safe workflow triggered: ${wf.name}\n`
  );
}

export function startIntrusionShield() {
  setInterval(() => {
    const alerts = load(sentinelFile);
    const shield = load(shieldFile);

    if (!alerts || !shield) return;

    const latest = alerts[0];
    if (!latest) return;

    // Only react to critical alerts
    if (latest.level === "critical") {
      shield.mode = "containment";

      shield.escalations.unshift({
        id: Date.now(),
        message: `Critical alert escalated: ${latest.message}`,
        createdAt: new Date().toISOString(),
      });

      // Trigger safe workflow if configured
      if (shield.safeWorkflowId) {
        runSafeWorkflow(shield.safeWorkflowId);
      }

      save(shieldFile, shield);
    }
  }, 15000);
}
