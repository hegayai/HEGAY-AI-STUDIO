export type WorkflowNodeType =
  | "ai"
  | "transform"
  | "condition"
  | "http"
  | "branch"
  | "end";

export interface WorkflowNode {
  id: string;
  type: WorkflowNodeType;
  name?: string;
  next?: string | null;
  config?: Record<string, any>;
}

export interface WorkflowDefinition {
  id: string;
  name: string;
  description?: string;
  nodes: WorkflowNode[];
  start: string;
}

export interface WorkflowExecutionStep {
  nodeId: string;
  input: any;
  output: any;
  success: boolean;
  error?: string;
}

export interface WorkflowExecutionResult {
  workflowId: string;
  success: boolean;
  steps: WorkflowExecutionStep[];
  finalOutput: any;
}
