import { WorkflowNode } from "./workflowTypes";

export async function runNode(node: WorkflowNode, input: any): Promise<any> {
  switch (node.type) {
    case "ai":
      return await runAiNode(node, input);

    case "transform":
      return await runTransformNode(node, input);

    case "condition":
      return await runConditionNode(node, input);

    case "http":
      return await runHttpNode(node, input);

    case "branch":
      return await runBranchNode(node, input);

    case "end":
      return input;

    default:
      throw new Error(`Unknown workflow node type: ${node.type}`);
  }
}

async function runAiNode(node: WorkflowNode, input: any) {
  const prompt = node.config?.prompt || "";
  return {
    type: "ai",
    prompt,
    input,
    output: `AI response for: ${prompt}`,
  };
}

async function runTransformNode(node: WorkflowNode, input: any) {
  const fn = node.config?.fn;
  if (typeof fn === "function") {
    return fn(input);
  }
  return input;
}

async function runConditionNode(node: WorkflowNode, input: any) {
  const condition = node.config?.condition;
  if (typeof condition !== "function") {
    throw new Error("Condition node missing condition function");
  }
  return condition(input);
}

async function runHttpNode(node: WorkflowNode, input: any) {
  const url = node.config?.url;
  const method = node.config?.method || "GET";

  if (!url) throw new Error("HTTP node missing URL");

  const res = await fetch(url, {
    method,
    body: method !== "GET" ? JSON.stringify(input) : undefined,
    headers: { "Content-Type": "application/json" },
  });

  return await res.json();
}

async function runBranchNode(node: WorkflowNode, input: any) {
  const branches = node.config?.branches || {};
  const key = input?.branchKey;

  return branches[key] ?? null;
}
