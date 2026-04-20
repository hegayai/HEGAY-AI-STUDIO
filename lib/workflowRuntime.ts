// lib/workflowRuntime.ts

import { AnyWorkflowNode } from "@/app/studio/workflows/graph/nodeDefaults";

export interface WorkflowContext {
  context: Record<string, any>;
}

export interface WorkflowStep {
  id: string;
  type: string;
  name: string;
  [key: string]: any;
}

export interface WorkflowEdge {
  fromId: string;
  toId: string;
  fromPort: string;
  toPort: string;
  label?: string;
}

export async function runWorkflow(
  steps: WorkflowStep[],
  edges: WorkflowEdge[],
  startStepId: string
) {
  const ctx: WorkflowContext = { context: {} };
  const trace: any[] = [];

  const stepMap = new Map(steps.map((s) => [s.id, s]));
  const outgoing = new Map<string, WorkflowEdge[]>();

  edges.forEach((e) => {
    if (!outgoing.has(e.fromId)) outgoing.set(e.fromId, []);
    outgoing.get(e.fromId)!.push(e);
  });

  async function runStep(step: WorkflowStep) {
    const type = step.type;

    // Helper to read/write context
    const get = (key: string) => ctx.context[key];
    const set = (key: string, value: any) => (ctx.context[key] = value);

    // Helper to call API routes
    async function callApi(route: string, payload: any) {
      const res = await fetch(route, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      return res.json();
    }

    let output: any = null;

    // -----------------------------
    // NODE EXECUTION LOGIC
    // -----------------------------

    if (type === "image") {
      output = step.imageUrl || null;
      set(step.outputKey, output);
    }

    if (type === "image-upload") {
      output = step.previewUrl || null;
      set(step.outputKey, output);
    }

    if (type === "image-transform") {
      const data = await callApi("/api/image/transform", {
        image: get(step.imageKey),
        width: step.width,
        height: step.height,
        fit: step.fit,
      });
      output = data?.url || null;
      set(step.outputKey, output);
    }

    if (type === "image-style-transfer") {
      const data = await callApi("/api/image/style-transfer", {
        content: get(step.contentImageKey),
        style: get(step.styleImageKey),
        strength: step.strength,
      });
      output = data?.url || null;
      set(step.outputKey, output);
    }

    if (type === "image-mask") {
      const data = await callApi("/api/image/mask", {
        image: get(step.imageKey),
        mask: get(step.maskKey),
      });
      output = data?.url || null;
      set(step.outputKey, output);
    }

    if (type === "image-inpaint") {
      const data = await callApi("/api/image/inpaint", {
        image: get(step.imageKey),
        mask: get(step.maskKey),
        prompt: step.prompt,
        strength: step.strength,
      });
      output = data?.url || null;
      set(step.outputKey, output);
    }

    if (type === "image-composite") {
      const data = await callApi("/api/image/composite", {
        base: get(step.baseImageKey),
        overlay: get(step.overlayImageKey),
        blendMode: step.blendMode,
        opacity: step.opacity,
      });
      output = data?.url || null;
      set(step.outputKey, output);
    }

    if (type === "image-layer") {
      output = get(step.imageKey);
      set(step.outputKey, output);
    }

    if (type === "image-merge") {
      const images = step.imageKeys.map((k: string) => get(k));
      const data = await callApi("/api/image/merge", {
        images,
        layout: step.layout,
      });
      output = data?.url || null;
      set(step.outputKey, output);
    }

    if (type === "image-depth") {
      const data = await callApi("/api/image/depth", {
        image: get(step.imageKey),
      });
      output = data?.url || null;
      set(step.outputKey, output);
    }

    if (type === "image-relight") {
      const data = await callApi("/api/image/relight", {
        image: get(step.imageKey),
        depth: get(step.depthKey),
        direction: step.lightDirection,
        intensity: step.intensity,
        color: step.color,
      });
      output = data?.url || null;
      set(step.outputKey, output);
    }

    if (type === "image-effects") {
      const data = await callApi("/api/image/effects", {
        image: get(step.imageKey),
        effects: step.effects,
        lut: step.lut,
      });
      output = data?.url || null;
      set(step.outputKey, output);
    }

    if (type === "image-normal-map") {
      const data = await callApi("/api/image/normal-map", {
        image: get(step.imageKey),
        method: step.method,
        intensity: step.intensity,
      });
      output = data?.url || null;
      set(step.outputKey, output);
    }

    if (type === "image-disparity") {
      const data = await callApi("/api/image/disparity", {
        mode: step.mode,
        left: get(step.leftImageKey),
        right: get(step.rightImageKey),
        image: get(step.imageKey),
      });
      output = data?.url || null;
      set(step.outputKey, output);
    }

    if (type === "image-camera") {
      const data = await callApi("/api/image/camera", {
        image: get(step.imageKey),
        depth: get(step.depthKey),
        focalLength: step.focalLength,
        aperture: step.aperture,
        focusDistance: step.focusDistance,
        tilt: step.tilt,
        shift: step.shift,
        roll: step.roll,
        distortion: step.distortion,
        chromaticAberration: step.chromaticAberration,
        motionBlur: step.motionBlur,
      });
      output = data?.url || null;
      set(step.outputKey, output);
    }

    if (type === "image-motion") {
      const data = await callApi("/api/image/motion", {
        image: get(step.imageKey),
        depth: get(step.depthKey),
        motionType: step.motionType,
        direction: step.direction,
        intensity: step.intensity,
        duration: step.duration,
      });
      output = data?.url || null;
      set(step.outputKey, output);
    }

    // -----------------------------
    // TRACE LOGGING
    // -----------------------------
    trace.push({
      stepId: step.id,
      stepName: step.name,
      type: step.type,
      output,
      contextSnapshot: { ...ctx.context },
    });

    // -----------------------------
    // CONTINUE TO NEXT STEPS
    // -----------------------------
    const outs = outgoing.get(step.id) || [];
    for (const edge of outs.filter((e) => e.fromPort === "out")) {
      const next = stepMap.get(edge.toId);
      if (next) await runStep(next);
    }
  }

  const start = stepMap.get(startStepId);
  if (start) await runStep(start);

  return { context: ctx.context, trace };
}
