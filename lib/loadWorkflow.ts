// lib/loadWorkflow.ts

export async function loadWorkflow(workflowId: string, spaceId?: string) {
  const url = new URL(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/workflows/${workflowId}`
  );
  if (spaceId) url.searchParams.set("spaceId", spaceId);

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error("Workflow not found");
  const data = await res.json();
  return data.workflow;
}
