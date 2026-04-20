import {
  WorkflowDefinition,
  WorkflowExecutionResult,
  WorkflowExecutionStep,
} from "./workflowTypes";
import { runNode } from "./workflowNodes";

export async function executeWorkflow(
  workflow: WorkflowDefinition,
  input: any = {}
): Promise<WorkflowExecutionResult> {
  const steps: WorkflowExecutionStep[] = [];
  let currentNodeId = workflow.start;
  let currentInput = input;

  while (currentNodeId) {
    const node = workflow.nodes.find((n) => n.id === currentNodeId);
    if (!node) throw new Error(`Node not found: ${currentNodeId}`);

    try {
      const output = await runNode(node, currentInput);

      steps.push({
        nodeId: node.id,
        input: currentInput,
        output,
        success: true,
      });

      currentInput = output;
      currentNodeId = node.next ?? null;
    } catch (err: any) {
      steps.push({
        nodeId: node.id,
        input: currentInput,
        output: null,
        success: false,
        error: err.message,
      });

      return {
        workflowId: workflow.id,
        success: false,
        steps,
        finalOutput: null,
      };
    }
  }

  return {
    workflowId: workflow.id,
    success: true,
    steps,
    finalOutput: currentInput,
  };
}
