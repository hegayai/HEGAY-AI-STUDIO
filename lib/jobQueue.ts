// lib/jobQueue.ts

export type JobStatus = "queued" | "running" | "completed" | "failed";

export interface WorkflowJob {
  id: string;
  workflowId: string;
  spaceId: string;
  ownerId?: string;
  initialContext: Record<string, any>;
  status: JobStatus;
  createdAt: string;
  updatedAt: string;
  startedAt?: string;
  finishedAt?: string;
  error?: string;

  result?: {
    finalContext: Record<string, any>;
    logs: string[];
    trace: any[];
    images?: {
      url: string;
      meta?: Record<string, any>;
    }[];
  };
}

const JOBS =
  ((globalThis as any).__HEGAY_JOB_QUEUE__ as Map<string, WorkflowJob> | undefined) ||
  new Map<string, WorkflowJob>();

(globalThis as any).__HEGAY_JOB_QUEUE__ = JOBS;

function nowISO() {
  return new Date().toISOString();
}

export function listJobs(spaceId?: string, limit = 50): WorkflowJob[] {
  let all = Array.from(JOBS.values());
  if (spaceId) all = all.filter((j) => j.spaceId === spaceId);
  return all.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)).slice(0, limit);
}

export function getJob(id: string): WorkflowJob | undefined {
  return JOBS.get(id);
}

export function enqueueJob(
  workflowId: string,
  initialContext: Record<string, any>,
  spaceId: string,
  ownerId?: string
): WorkflowJob {
  const id = `job_${Date.now()}_${Math.random().toString(16).slice(2)}`;
  const job: WorkflowJob = {
    id,
    workflowId,
    spaceId,
    ownerId,
    initialContext,
    status: "queued",
    createdAt: nowISO(),
    updatedAt: nowISO(),
  };
  JOBS.set(id, job);
  return job;
}

export function claimNextJob(spaceId?: string): WorkflowJob | null {
  const queued = Array.from(JOBS.values()).find(
    (j) => j.status === "queued" && (!spaceId || j.spaceId === spaceId)
  );
  if (!queued) return null;
  queued.status = "running";
  queued.startedAt = nowISO();
  queued.updatedAt = nowISO();
  JOBS.set(queued.id, queued);
  return queued;
}

export function completeJob(id: string, result: any) {
  const job = JOBS.get(id);
  if (!job) return;
  job.status = "completed";
  job.result = result;
  job.finishedAt = nowISO();
  job.updatedAt = nowISO();
  JOBS.set(id, job);
}

export function failJob(id: string, error: string) {
  const job = JOBS.get(id);
  if (!job) return;
  job.status = "failed";
  job.error = error;
  job.finishedAt = nowISO();
  job.updatedAt = nowISO();
  JOBS.set(id, job);
}
