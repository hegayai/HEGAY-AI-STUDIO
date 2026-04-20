import { WorkflowDefinition, WorkflowResult, WorkflowStep } from "./types";
import { modelRouter } from "@/ai/modelRouter";
import { systemPrompt as defaultSystemPrompt } from "@/ai/prompts/systemPrompt";

export async function runWorkflow(
  workflow: WorkflowDefinition
): Promise<WorkflowResult> {
  const logs: string[] = [];
  const outputs: Record<string, unknown> = {};

  const log = (msg: string) => {
    const line = `[${workflow.name}] ${msg}`;
    logs.push(line);
    console.log(line);
  };

  log(`Starting workflow with ${workflow.steps.length} step(s).`);

  for (let i = 0; i < workflow.steps.length; i++) {
    const step = workflow.steps[i];
    log(`Step ${i + 1}: type=${step.type}${step.name ? ` name=${step.name}` : ""}`);

    try {
      await runStep(step, outputs, log);
    } catch (err: any) {
      log(`Error in step ${i + 1}: ${err?.message ?? String(err)}`);
      return {
        success: false,
        logs,
        outputs,
      };
    }
  }

  log("Workflow completed successfully.");

  return {
    success: true,
    logs,
    outputs,
  };
}

async function runStep(
  step: WorkflowStep,
  outputs: Record<string, unknown>,
  log: (msg: string) => void
) {
  if (step.type === "delay") {
    const ms = step.ms ?? 1000;
    log(`Delaying for ${ms}ms...`);
    await new Promise((resolve) => setTimeout(resolve, ms));
    return;
  }

  if (step.type === "log") {
    log(step.message ?? "Log step with no message.");
    return;
  }

  if (step.type === "model") {
    const provider = step.provider ?? "openai";
    const model = step.model ?? "gpt-4o-mini";
    const sysPrompt = step.systemPrompt ?? defaultSystemPrompt;
    const userPrompt = step.prompt ?? "";

    log(
      `Calling model: provider=${provider}, model=${model}, prompt="${userPrompt.slice(
        0,
        80
      )}..."`
    );

    const response = await modelRouter(provider, model, sysPrompt, userPrompt);

    const key = step.name ?? `step_${Date.now()}`;
    outputs[key] = response;
    log(`Model step stored output under key="${key}".`);

    return;
  }

  throw new Error(`Unknown step type: ${step.type}`);
}
