import prisma from "./prisma";
import { WorkflowDefinition } from "./workflowTypes";

/**
 * Hybrid: keeps DB-backed workflow loading.
 * Assumes a Workflow model with a JSON definition field.
 *
 * model Workflow {
 *   id          String   @id @default(cuid())
 *   name        String
 *   definition  Json
 *   createdAt   DateTime @default(now())
 *   updatedAt   DateTime @updatedAt
 * }
 */
export async function loadWorkflow(
  id: string
): Promise<WorkflowDefinition | null> {
  const wf = await prisma.workflow.findUnique({
    where: { id },
  });

  if (!wf) return null;

  // If definition is stored as Json, it should already be an object
  return wf.definition as unknown as WorkflowDefinition;
}
