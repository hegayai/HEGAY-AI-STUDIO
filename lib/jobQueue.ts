// lib/jobQueue.ts
import { prisma } from "@/lib/prisma";

/**
 * Enqueue a new job for a workflow.
 */
export async function enqueueJob(workflowId: string, payload: any = {}) {
  return prisma.job.create({
    data: {
      workflowId,
      payload,
      status: "queued",
    },
  });
}

/**
 * Mark a job as running.
 */
export async function startJob(id: string) {
  return prisma.job.update({
    where: { id },
    data: {
      status: "running",
      runAt: new Date(),
    },
  });
}

/**
 * Mark a job as completed and store the result.
 */
export async function completeJob(id: string, result: any) {
  return prisma.job.update({
    where: { id },
    data: {
      status: "completed",
      result, // Prisma 7 + updated schema supports this now
      completedAt: new Date(),
    },
  });
}

/**
 * Mark a job as failed and store the error message.
 */
export async function failJob(id: string, error: string) {
  return prisma.job.update({
    where: { id },
    data: {
      status: "failed",
      error,
      completedAt: new Date(),
    },
  });
}

/**
 * Fetch a single job by ID.
 */
export async function getJob(id: string) {
  return prisma.job.findUnique({
    where: { id },
  });
}

/**
 * List jobs, optionally filtered by workflowId or status.
 */
export async function listJobs(filters?: {
  workflowId?: string;
  status?: string;
}) {
  return prisma.job.findMany({
    where: {
      workflowId: filters?.workflowId,
      status: filters?.status,
    },
    orderBy: { createdAt: "desc" },
  });
}
