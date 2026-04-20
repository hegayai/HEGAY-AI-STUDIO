import { WorkflowDefinition, WorkflowResult, WorkflowStep } from "./types";
import { modelRouter } from "@/app/api/modelRouter";
import { systemPrompt as defaultSystemPrompt } from "@/app/ai/prompts/systemPrompt";

export async function runWorkflow(
  workflow: WorkflowDefinition,
  input: string
): Promise<WorkflowResult> {
  const steps: WorkflowStep[] = [];
  let currentInput = input;

  for (const step of workflow.steps) {
    const prompt = step.prompt.replace("{input}", currentInput);

    const result = await modelRouter({
      prompt,
      model: step.model,
      systemPrompt: step.systemPrompt || defaultSystemPrompt,
    });

    steps.push({
      name: step.name,
      output: result,
    });

    currentInput = result;
  }

  return {
    workflowName: workflow.name,
    steps,
    finalOutput: currentInput,
  };
}
