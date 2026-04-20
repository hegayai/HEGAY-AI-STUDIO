import prisma from "./prisma";

export async function enqueueJob(workflowId: string, payload: any = {}) {
  return prisma.job.create({
    data: {
      workflowId,
      payload,
      status: "pending",
    },
  });
}

export async function claimNextJob() {
  const job = await prisma.job.findFirst({
    where: { status: "pending" },
    orderBy: { createdAt: "asc" },
  });

  if (!job) return null;

  return prisma.job.update({
    where: { id: job.id },
    data: { status: "processing" },
  });
}

export async function completeJob(jobId: string, result: any) {
  return prisma.job.update({
    where: { id: jobId },
    data: {
      status: "completed",
      result,
    },
  });
}

export async function failJob(jobId: string, error: string) {
  return prisma.job.update({
    where: { id: jobId },
    data: {
      status: "failed",
      error,
    },
  });
}

export async function getJob(jobId: string) {
  return prisma.job.findUnique({
    where: { id: jobId },
  });
}

export async function listJobs(limit = 50) {
  return prisma.job.findMany({
    orderBy: { createdAt: "desc" },
    take: limit,
  });
}
