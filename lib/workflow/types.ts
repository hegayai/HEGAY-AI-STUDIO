export type WorkflowStepType = "model" | "delay" | "log";

export interface WorkflowStep {
  type: WorkflowStepType;
  name?: string;

  // model step
  provider?: string;
  model?: string;
  systemPrompt?: string;
  prompt?: string;

  // delay step
  ms?: number;

  // log step
  message?: string;
}

export interface WorkflowDefinition {
  name: string;
  description?: string;
  steps: WorkflowStep[];
}

export interface WorkflowResult {
  success: boolean;
  logs: string[];
  outputs: Record<string, unknown>;
}

export type InlineWorkflowRequest = {
  workflow?: string;
  definition?: WorkflowDefinition;
};
