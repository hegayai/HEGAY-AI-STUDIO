"use client";

import { useState, useRef, useEffect } from "react";

type StepType = "model" | "delay" | "log" | "if" | "switch" | "parallel";

interface GraphStep {
  id: string;
  type: StepType;
  name: string;
  x: number;
  y: number;
  provider?: string;
  model?: string;
  prompt?: string;
  ms?: number;
  message?: string;
  cases?: string[];
  inputKey?: string;
  outputKey?: string;
}

interface Edge {
  id: string;
  fromId: string;
  toId: string;
  fromPort: string;
  toPort: string;
  label?: string;
}

interface ConnectingFrom {
  stepId: string;
  portKey: string;
}

interface ExecutionContext {
  context: Record<string, any>;
  memory: Record<string, any>;
  logs: string[];
}

interface ExecutionTraceEntry {
  stepId: string;
  stepName: string;
  type: StepType;
  branch?: string;
  info?: string;
  contextSnapshot?: Record<string, any>;
}

interface SavedWorkflowSummary {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export default function WorkflowGraphPage() {
  const [workflowId, setWorkflowId] = useState<string | null>(null);
  const [name, setName] = useState("graph.workflow");
  const [description, setDescription] = useState<string>("");

  const [steps, setSteps] = useState<GraphStep[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [selectedEdge, setSelectedEdge] = useState<string | null>(null);
  const [connectingFrom, setConnectingFrom] = useState<ConnectingFrom | null>(null);
  const [connectingMouse, setConnectingMouse] = useState<{ x: number; y: number } | null>(null);

  const [running, setRunning] = useState(false);
  const [result, setResult] = useState<any>(null);

  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const canvasRef = useRef<HTMLDivElement>(null);
  const dragNodeRef = useRef<{ id: string; offsetX: number; offsetY: number } | null>(null);
  const panRef = useRef<{ startX: number; startY: number; originX: number; originY: number } | null>(null);

  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const selectedNode = steps.find((s) => s.id === selectedNodeId) || null;

  const [savedWorkflows, setSavedWorkflows] = useState<SavedWorkflowSummary[]>([]);
  const [saving, setSaving] = useState(false);
  const [loadingList, setLoadingList] = useState(false);
  const [loadingWorkflowId, setLoadingWorkflowId] = useState<string | null>(null);

  // ---------- Node creation ----------

  function addStep(type: StepType) {
    const id = `${type}-${Date.now()}`;
    const base: GraphStep = {
      id,
      type,
      name: `${type}_${steps.length + 1}`,
      x: 100 + steps.length * 160,
      y: 120,
      inputKey: "",
      outputKey: "",
    };

    if (type === "model") {
      base.provider = "openai";
      base.model = "gpt-4o-mini";
      base.prompt =
        "You are a node in a workflow. Given the current JSON context, return a JSON object with any updates.";
      base.outputKey = "last_model_output";
    }

    if (type === "delay") {
      base.ms = 1000;
    }

    if (type === "log") {
      base.message = "Log from node graph.";
    }

    if (type === "if") {
      base.provider = "openai";
      base.model = "gpt-4o-mini";
      base.prompt =
        "Given the current JSON context, respond with exactly TRUE or FALSE (uppercase).";
    }

    if (type === "switch") {
      base.provider = "openai";
      base.model = "gpt-4o-mini";
      base.prompt =
        "Given the current JSON context, respond with exactly one of the case labels.";
      base.cases = ["case_1", "case_2", "case_3"];
    }

    if (type === "parallel") {
      base.cases = ["branch_1", "branch_2", "branch_3"];
      base.outputKey = "parallel";
    }

    setSteps((prev) => [...prev, base]);
  }

  // ---------- Drag / pan / zoom ----------

  function startNodeDrag(e: React.MouseEvent, id: string) {
    e.stopPropagation();
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    dragNodeRef.current = {
      id,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
    };
  }

  function startPan(e: React.MouseEvent) {
    if (dragNodeRef.current || connectingFrom) return;
    panRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      originX: offset.x,
      originY: offset.y,
    };
    setSelectedEdge(null);
  }

  function onMouseMove(e: React.MouseEvent) {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (dragNodeRef.current) {
      const { id, offsetX, offsetY } = dragNodeRef.current;
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left - offsetX - offset.x) / scale;
      const y = (e.clientY - rect.top - offsetY - offset.y) / scale;
      setSteps((prev) => prev.map((s) => (s.id === id ? { ...s, x, y } : s)));
      return;
    }

    if (panRef.current) {
      const dx = e.clientX - panRef.current.startX;
      const dy = e.clientY - panRef.current.startY;
      setOffset({
        x: panRef.current.originX + dx,
        y: panRef.current.originY + dy,
      });
    }

    if (connectingFrom) {
      const rect = canvas.getBoundingClientRect();
      const gx = (e.clientX - rect.left - offset.x) / scale;
      const gy = (e.clientY - rect.top - offset.y) / scale;
      setConnectingMouse({ x: gx, y: gy });
    }
  }

  function endDrag() {
    dragNodeRef.current = null;
    panRef.current = null;
  }

  function onWheel(e: React.WheelEvent) {
    e.preventDefault();
    const zoomIntensity = 0.1;
    const newScale = Math.min(2.5, Math.max(0.4, scale - e.deltaY * zoomIntensity * 0.01));
    setScale(newScale);
  }

  // ---------- Ports / positions ----------

  function getPortPosition(step: GraphStep, portKey: string): { x: number; y: number } {
    const baseX = step.x;
    const baseY = step.y;

    if (portKey === "in") return { x: baseX, y: baseY + 32 };
    if (portKey === "out") return { x: baseX + 160, y: baseY + 32 };
    if (portKey === "true") return { x: baseX + 160, y: baseY + 24 };
    if (portKey === "false") return { x: baseX + 160, y: baseY + 48 };

    if (portKey.startsWith("case:")) {
      const name = portKey.slice("case:".length);
      const idx = (step.cases || []).indexOf(name);
      const top = 18 + idx * 14;
      return { x: baseX + 160, y: baseY + top };
    }

    if (portKey.startsWith("branch:")) {
      const name = portKey.slice("branch:".length);
      const idx = (step.cases || []).indexOf(name);
      const top = 18 + idx * 14;
      return { x: baseX + 160, y: baseY + top };
    }

    return { x: baseX + 160, y: baseY + 32 };
  }

  function portLabelFromKey(portKey: string): string {
    if (portKey === "out") return "flow";
    if (portKey === "true") return "true";
    if (portKey === "false") return "false";
    if (portKey.startsWith("case:")) return portKey.slice("case:".length);
    if (portKey.startsWith("branch:")) return portKey.slice("branch:".length);
    return portKey;
  }

  // ---------- Edge creation ----------

  function startConnectFrom(stepId: string, portKey: string, e: React.MouseEvent) {
    e.stopPropagation();
    setSelectedEdge(null);
    setConnectingFrom({ stepId, portKey });

    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const gx = (e.clientX - rect.left - offset.x) / scale;
    const gy = (e.clientY - rect.top - offset.y) / scale;
    setConnectingMouse({ x: gx, y: gy });
  }

  function completeConnect(toStepId: string, toPortKey: string, e?: React.MouseEvent) {
    if (e) e.stopPropagation();
    if (!connectingFrom) return;

    const { stepId: fromId, portKey: fromPort } = connectingFrom;
    if (fromId === toStepId && fromPort === toPortKey) {
      setConnectingFrom(null);
      setConnectingMouse(null);
      return;
    }

    const id = `edge-${fromId}-${fromPort}-${toStepId}-${toPortKey}-${Date.now()}`;
    const label = portLabelFromKey(fromPort);

    setEdges((prev) => [
      ...prev,
      {
        id,
        fromId,
        toId: toStepId,
        fromPort,
        toPort: toPortKey,
        label,
      },
    ]);

    setConnectingFrom(null);
    setConnectingMouse(null);
  }

  function cancelConnect() {
    setConnectingFrom(null);
    setConnectingMouse(null);
  }

  // ---------- Edge selection / deletion ----------

  function selectEdge(edgeId: string, e: React.MouseEvent) {
    e.stopPropagation();
    setSelectedEdge(edgeId);
    setSelectedNodeId(null);
    cancelConnect();
  }

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        cancelConnect();
        setSelectedEdge(null);
        setSelectedNodeId(null);
      }

      if (!selectedEdge) return;
      if (e.key === "Delete" || e.key === "Backspace") {
        setEdges((prev) => prev.filter((edge) => edge.id !== selectedEdge));
        setSelectedEdge(null);
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedEdge]);

  // ---------- Curved paths ----------

  function buildCurvePath(x1: number, y1: number, x2: number, y2: number): string {
    const dx = x2 - x1;
    const controlOffset = Math.max(Math.abs(dx) * 0.5, 60);
    const cx1 = x1 + controlOffset;
    const cy1 = y1;
    const cx2 = x2 - controlOffset;
    const cy2 = y2;
    return `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x2} ${y2}`;
  }

  // ---------- Model call helper ----------

  async function callModel(prompt: string, provider?: string, model?: string): Promise<string> {
    try {
      const res = await fetch("/api/model", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          provider: provider || "openai",
          model: model || "gpt-4o-mini",
          prompt,
        }),
      });

      if (!res.ok) {
        console.error("Model call failed", await res.text());
        return "";
      }

      const data = await res.json();
      return (data.output || data.text || "").toString().trim();
    } catch (err) {
      console.error("Model call error", err);
      return "";
    }
  }

  // ---------- Engine helpers ----------

  function buildEdgeMaps() {
    const outgoing = new Map<string, Edge[]>();
    const incoming = new Map<string, Edge[]>();

    edges.forEach((e) => {
      if (!outgoing.has(e.fromId)) outgoing.set(e.fromId, []);
      outgoing.get(e.fromId)!.push(e);

      if (!incoming.has(e.toId)) incoming.set(e.toId, []);
      incoming.get(e.toId)!.push(e);
    });

    return { outgoing, incoming };
  }

  function getOutgoingEdgesForPort(
    outgoing: Map<string, Edge[]>,
    stepId: string,
    portKey: string
  ): Edge[] {
    const list = outgoing.get(stepId) || [];
    return list.filter((e) => e.fromPort === portKey);
  }

  function findStartNodes(incoming: Map<string, Edge[]>): GraphStep[] {
    return steps.filter((s) => !incoming.has(s.id));
  }

  function cloneContext(ctx: ExecutionContext): ExecutionContext {
    return {
      context: JSON.parse(JSON.stringify(ctx.context)),
      memory: JSON.parse(JSON.stringify(ctx.memory)),
      logs: [...ctx.logs],
    };
  }

  function safeParseJSON(text: string): any {
    try {
      return JSON.parse(text);
    } catch {
      return null;
    }
  }

  function setContextKey(ctx: ExecutionContext, key: string | undefined, value: any) {
    if (!key) return;
    if (!key.trim()) return;
    ctx.context[key] = value;
  }

  function getContextKey(ctx: ExecutionContext, key: string | undefined): any {
    if (!key) return undefined;
    if (!key.trim()) return undefined;
    return ctx.context[key];
  }

  // ---------- Model-powered branching with context ----------

  async function evaluateIfNode(step: GraphStep, ctx: ExecutionContext): Promise<"true" | "false"> {
    const basePrompt =
      step.prompt ||
      "Given the following JSON context, respond with exactly TRUE or FALSE (uppercase).";
    const prompt = `${basePrompt}\n\nCONTEXT:\n${JSON.stringify(ctx.context, null, 2)}`;
    const raw = (await callModel(prompt, step.provider, step.model)).toUpperCase();

    if (raw.includes("FALSE")) return "false";
    if (raw.includes("TRUE")) return "true";

    const hasTrue = edges.some(
      (e) => e.fromId === step.id && e.fromPort === "true"
    );
    return hasTrue ? "true" : "false";
  }

  async function evaluateSwitchNode(step: GraphStep, ctx: ExecutionContext): Promise<string | null> {
    const cases = step.cases || [];
    if (!cases.length) return null;

    const basePrompt =
      step.prompt ||
      `Given the following JSON context, respond with exactly one of: ${cases.join(
        ", "
      )}. Respond with only the label.`;
    const prompt = `${basePrompt}\n\nCONTEXT:\n${JSON.stringify(ctx.context, null, 2)}`;
    const raw = (await callModel(prompt, step.provider, step.model)).toLowerCase();

    for (const c of cases) {
      if (raw.includes(c.toLowerCase())) {
        return `case:${c}`;
      }
    }

    for (const c of cases) {
      const key = `case:${c}`;
      const hasEdge = edges.some(
        (e) => e.fromId === step.id && e.fromPort === key
      );
      if (hasEdge) return key;
    }

    return null;
  }

  // ---------- Async execution engine with context ----------

  async function runStepAsync(
    step: GraphStep,
    outgoing: Map<string, Edge[]>,
    trace: ExecutionTraceEntry[],
    ctx: ExecutionContext,
    branchLabel?: string
  ): Promise<void> {
    if (step.type === "model") {
      const input = getContextKey(ctx, step.inputKey);
      const basePrompt =
        step.prompt ||
        "You are a node in a workflow. Given the current JSON context and optional input, return a JSON object with updates.";
      const prompt = `${basePrompt}\n\nCONTEXT:\n${JSON.stringify(
        ctx.context,
        null,
        2
      )}\n\nINPUT:\n${JSON.stringify(input, null, 2)}`;

      const raw = await callModel(prompt, step.provider, step.model);
      const parsed = safeParseJSON(raw);

      if (parsed && typeof parsed === "object") {
        setContextKey(ctx, step.outputKey, parsed);
        ctx.logs.push(`[MODEL:${step.name}] Parsed JSON into context.${step.outputKey || "?"}`);
      } else {
        setContextKey(ctx, step.outputKey, raw);
        ctx.logs.push(`[MODEL:${step.name}] Stored raw text into context.${step.outputKey || "?"}`);
      }

      trace.push({
        stepId: step.id,
        stepName: step.name,
        type: step.type,
        branch: branchLabel,
        info: `MODEL OUTPUT: ${raw}`,
        contextSnapshot: { ...ctx.context },
      });

      const outs = getOutgoingEdgesForPort(outgoing, step.id, "out");
      for (const edge of outs) {
        const next = steps.find((s) => s.id === edge.toId);
        if (next) {
          await runStepAsync(next, outgoing, trace, ctx, edge.label);
        }
      }
      return;
    }

    if (step.type === "delay") {
      const ms = step.ms ?? 0;
      ctx.logs.push(`[DELAY:${step.name}] ${ms}ms`);
      trace.push({
        stepId: step.id,
        stepName: step.name,
        type: step.type,
        branch: branchLabel,
        info: `${ms}ms delay`,
        contextSnapshot: { ...ctx.context },
      });
      if (ms > 0) {
        await new Promise((resolve) => setTimeout(resolve, Math.min(ms, 5000)));
      }
      const outs = getOutgoingEdgesForPort(outgoing, step.id, "out");
      for (const edge of outs) {
        const next = steps.find((s) => s.id === edge.toId);
        if (next) {
          await runStepAsync(next, outgoing, trace, ctx, edge.label);
        }
      }
      return;
    }

    if (step.type === "log") {
      const msg = step.message || "log";
      ctx.logs.push(`[LOG:${step.name}] ${msg}`);
      trace.push({
        stepId: step.id,
        stepName: step.name,
        type: step.type,
        branch: branchLabel,
        info: msg,
        contextSnapshot: { ...ctx.context },
      });
      const outs = getOutgoingEdgesForPort(outgoing, step.id, "out");
      for (const edge of outs) {
        const next = steps.find((s) => s.id === edge.toId);
        if (next) {
          await runStepAsync(next, outgoing, trace, ctx, edge.label);
        }
      }
      return;
    }

    if (step.type === "if") {
      const decision = await evaluateIfNode(step, ctx);
      ctx.logs.push(`[IF:${step.name}] decision=${decision.toUpperCase()}`);
      trace.push({
        stepId: step.id,
        stepName: step.name,
        type: step.type,
        branch: branchLabel,
        info: `IF decision (model+context): ${decision.toUpperCase()}`,
        contextSnapshot: { ...ctx.context },
      });
      const outs = getOutgoingEdgesForPort(outgoing, step.id, decision);
      for (const edge of outs) {
        const next = steps.find((s) => s.id === edge.toId);
        if (next) {
          await runStepAsync(next, outgoing, trace, ctx, edge.label ?? decision);
        }
      }
      return;
    }

    if (step.type === "switch") {
      const chosenPort = await evaluateSwitchNode(step, ctx);
      ctx.logs.push(`[SWITCH:${step.name}] decision=${chosenPort || "none"}`);
      trace.push({
        stepId: step.id,
        stepName: step.name,
        type: step.type,
        branch: branchLabel,
        info: `SWITCH decision (model+context): ${chosenPort ?? "none"}`,
        contextSnapshot: { ...ctx.context },
      });
      if (chosenPort) {
        const outs = getOutgoingEdgesForPort(outgoing, step.id, chosenPort);
        for (const edge of outs) {
          const next = steps.find((s) => s.id === edge.toId);
          if (next) {
            await runStepAsync(next, outgoing, trace, ctx, edge.label ?? chosenPort);
          }
        }
      }
      return;
    }

    if (step.type === "parallel") {
      ctx.logs.push(`[PARALLEL:${step.name}] spawning branches`);
      trace.push({
        stepId: step.id,
        stepName: step.name,
        type: step.type,
        branch: branchLabel,
        info: "PARALLEL: spawning all branches",
        contextSnapshot: { ...ctx.context },
      });

      const branches = (step.cases || []).map((c) => `branch:${c}`);
      const branchResults: Record<string, any> = {};
      const tasks: Promise<void>[] = [];

      for (const portKey of branches) {
        const outs = getOutgoingEdgesForPort(outgoing, step.id, portKey);
        for (const edge of outs) {
          const next = steps.find((s) => s.id === edge.toId);
          if (next) {
            const branchName = edge.label ?? portKey;
            const branchCtx = cloneContext(ctx);
            tasks.push(
              (async () => {
                await runStepAsync(next, outgoing, trace, branchCtx, branchName);
                branchResults[branchName] = {
                  context: branchCtx.context,
                  logs: branchCtx.logs,
                };
              })()
            );
          }
        }
      }

      await Promise.all(tasks);

      if (step.outputKey) {
        ctx.context[step.outputKey] = branchResults;
      } else {
        ctx.context["parallel"] = branchResults;
      }

      ctx.logs.push(
        `[PARALLEL:${step.name}] merged branches into context.${step.outputKey || "parallel"}`
      );
      return;
    }

    trace.push({
      stepId: step.id,
      stepName: step.name,
      type: step.type,
      branch: branchLabel,
      info: "Unknown step type",
      contextSnapshot: { ...ctx.context },
    });
  }

  async function runWorkflow() {
    if (!steps.length) return;

    setRunning(true);
    setResult(null);

    const { outgoing, incoming } = buildEdgeMaps();
    const startNodes = findStartNodes(incoming);
    const trace: ExecutionTraceEntry[] = [];

    if (!startNodes.length) {
      setResult({
        error: "No start nodes found (every node has an incoming edge).",
      });
      setRunning(false);
      return;
    }

    const initialContext: ExecutionContext = {
      context: {},
      memory: {},
      logs: [],
    };

    for (const start of startNodes) {
      await runStepAsync(start, outgoing, trace, initialContext, "start");
    }

    const workflowDef = {
      id: workflowId,
      name,
      description,
      steps: steps.map((s) => ({
        id: s.id,
        type: s.type,
        name: s.name,
        provider: s.provider,
        model: s.model,
        prompt: s.prompt,
        ms: s.ms,
        message: s.message,
        cases: s.cases,
        inputKey: s.inputKey,
        outputKey: s.outputKey,
        x: s.x,
        y: s.y,
      })),
      edges: edges.map((e) => ({
        fromId: e.fromId,
        toId: e.toId,
        fromPort: e.fromPort,
        toPort: e.toPort,
        label: e.label,
      })),
      finalContext: initialContext.context,
      memory: initialContext.memory,
      logs: initialContext.logs,
      executionTrace: trace,
    };

    setResult(workflowDef);
    setRunning(false);
  }

  const canRun = steps.length > 0 && !running;

  // ---------- Persistence: Save / Load ----------

  async function loadWorkflows() {
    try {
      setLoadingList(true);
      const res = await fetch("/api/workflows");
      if (!res.ok) {
        console.error("Failed to load workflows", await res.text());
        return;
      }
      const data = await res.json();
      setSavedWorkflows(data.workflows || []);
    } catch (err) {
      console.error("Error loading workflows", err);
    } finally {
      setLoadingList(false);
    }
  }

  async function loadWorkflow(id: string) {
    try {
      setLoadingWorkflowId(id);
      const res = await fetch(`/api/workflows/${id}`);
      if (!res.ok) {
        console.error("Failed to load workflow", await res.text());
        return;
      }
      const data = await res.json();
      const wf = data.workflow;
      if (!wf) return;

      setWorkflowId(wf.id);
      setName(wf.name || "graph.workflow");
      setDescription(wf.description || "");
      setSteps(wf.steps || []);
      setEdges(wf.edges || []);
      setSelectedNodeId(null);
      setSelectedEdge(null);
    } catch (err) {
      console.error("Error loading workflow", err);
    } finally {
      setLoadingWorkflowId(null);
    }
  }

  async function saveWorkflow(asNew?: boolean) {
    try {
      setSaving(true);
      const payload = {
        id: asNew ? undefined : workflowId || undefined,
        name,
        description,
        steps,
        edges,
      };
      const res = await fetch("/api/workflows", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        console.error("Failed to save workflow", await res.text());
        return;
      }
      const data = await res.json();
      const wf = data.workflow;
      setWorkflowId(wf.id);
      await loadWorkflows();
    } catch (err) {
      console.error("Error saving workflow", err);
    } finally {
      setSaving(false);
    }
  }

  useEffect(() => {
    loadWorkflows();
  }, []);

  // ---------- Inspector helpers ----------

  function updateSelectedNode<K extends keyof GraphStep>(key: K, value: GraphStep[K]) {
    if (!selectedNodeId) return;
    setSteps((prev) =>
      prev.map((s) => (s.id === selectedNodeId ? { ...s, [key]: value } : s))
    );
  }

  function addCaseToSelectedNode() {
    if (!selectedNode) return;
    const base = selectedNode.type === "parallel" ? "branch" : "case";
    const existing = selectedNode.cases || [];
    const nextIndex = existing.length + 1;
    const name = `${base}_${nextIndex}`;
    updateSelectedNode("cases", [...existing, name]);
  }

  function removeCaseFromSelectedNode(name: string) {
    if (!selectedNode || !selectedNode.cases) return;
    const filtered = selectedNode.cases.filter((c) => c !== name);
    updateSelectedNode("cases", filtered);
    setEdges((prev) =>
      prev.filter((e) => {
        if (e.fromId !== selectedNode.id) return true;
        if (e.fromPort === `case:${name}` || e.fromPort === `branch:${name}`) return false;
        return true;
      })
    );
  }

  function renameCaseOnSelectedNode(oldName: string, newName: string) {
    if (!selectedNode || !selectedNode.cases) return;
    if (!newName.trim()) return;
    const updatedCases = selectedNode.cases.map((c) => (c === oldName ? newName : c));
    updateSelectedNode("cases", updatedCases);

    setEdges((prev) =>
      prev.map((e) => {
        if (e.fromId !== selectedNode.id) return e;
        if (e.fromPort === `case:${oldName}`) {
          return { ...e, fromPort: `case:${newName}`, label: newName };
        }
        if (e.fromPort === `branch:${oldName}`) {
          return { ...e, fromPort: `branch:${newName}`, label: newName };
        }
        return e;
      })
    );
  }

  // ---------- Render ----------

  return (
    <div
      className="min-h-screen bg-slate-950 text-slate-50"
      onMouseMove={onMouseMove}
      onMouseUp={endDrag}
      onWheel={onWheel}
      onClick={() => {
        setSelectedEdge(null);
        if (!connectingFrom) return;
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 lg:px-6 lg:py-8">
        {/* Header */}
        <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
              Hegay AI Studio
            </p>
            <h1 className="mt-1 text-xl font-semibold text-slate-50">
              Workflow Node Graph — Layer 7 + Persistence
            </h1>
            <p className="mt-1 text-xs text-slate-300 sm:text-sm">
              Build, run, and now save/load graph workflows as reusable definitions.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => saveWorkflow(false)}
              disabled={saving}
              className="inline-flex items-center justify-center rounded-full border border-emerald-400/70 bg-slate-950/80 px-3 py-1.5 text-[11px] font-semibold text-emerald-100 hover:border-emerald-300 disabled:opacity-40"
            >
              {saving ? "Saving..." : workflowId ? "Save Workflow" : "Save First Version"}
            </button>
            <button
              onClick={() => saveWorkflow(true)}
              disabled={saving}
              className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/80 px-3 py-1.5 text-[11px] font-semibold text-slate-100 hover:border-cyan-300 disabled:opacity-40"
            >
              Save as New
            </button>
            <button
              onClick={runWorkflow}
              disabled={!canRun}
              className="inline-flex items-center justify-center rounded-full border border-cyan-400/70 bg-slate-950/80 px-4 py-1.5 text-[11px] font-semibold text-cyan-100 hover:border-cyan-300 disabled:opacity-40"
            >
              {running ? "Running..." : "Run Graph Workflow"}
            </button>
          </div>
        </header>

        {/* Name / Description */}
        <section className="space-y-2">
          <div className="grid gap-3 sm:grid-cols-[2fr,3fr]">
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                Workflow Name
              </label>
              <input
                className="w-full rounded-md border border-slate-700 bg-slate-900/80 px-2 py-1.5 text-[11px] text-slate-100 outline-none focus:border-cyan-400/80"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                Description
              </label>
              <input
                className="w-full rounded-md border border-slate-700 bg-slate-900/80 px-2 py-1.5 text-[11px] text-slate-100 outline-none focus:border-cyan-400/80"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* Add Node + Layout */}
        <section className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Add Node
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => addStep("model")}
              className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-[11px] text-slate-100 hover:border-cyan-400/70"
            >
              + Model Node
            </button>
            <button
              onClick={() => addStep("delay")}
              className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-[11px] text-slate-100 hover:border-cyan-400/70"
            >
              + Delay Node
            </button>
            <button
              onClick={() => addStep("log")}
              className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-[11px] text-slate-100 hover:border-cyan-400/70"
            >
              + Log Node
            </button>
            <button
              onClick={() => addStep("if")}
              className="rounded-full border border-emerald-500/70 bg-emerald-900/40 px-3 py-1.5 text-[11px] text-emerald-100 hover:border-emerald-400/80"
            >
              + IF Node
            </button>
            <button
              onClick={() => addStep("switch")}
              className="rounded-full border border-indigo-500/70 bg-indigo-900/40 px-3 py-1.5 text-[11px] text-indigo-100 hover:border-indigo-400/80"
            >
              + SWITCH Node
            </button>
            <button
              onClick={() => addStep("parallel")}
              className="rounded-full border border-fuchsia-500/70 bg-fuchsia-900/40 px-3 py-1.5 text-[11px] text-fuchsia-100 hover:border-fuchsia-400/80"
            >
              + PARALLEL Node
            </button>
          </div>
        </section>

        <div className="flex gap-4">
          {/* Saved Workflows List */}
          <aside className="w-60 shrink-0 rounded-2xl border border-slate-800 bg-slate-950/90 p-3">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Workflows
              </p>
              <button
                onClick={loadWorkflows}
                disabled={loadingList}
                className="text-[10px] text-slate-400 hover:text-cyan-300"
              >
                {loadingList ? "…" : "Refresh"}
              </button>
            </div>
            <div className="mt-2 max-h-64 space-y-1 overflow-auto">
              {savedWorkflows.length === 0 && (
                <p className="text-[11px] text-slate-500">No saved workflows yet.</p>
              )}
              {savedWorkflows.map((wf) => {
                const isActive = wf.id === workflowId;
                return (
                  <button
                    key={wf.id}
                    onClick={() => loadWorkflow(wf.id)}
                    className={`w-full rounded-md px-2 py-1 text-left text-[11px] ${
                      isActive
                        ? "bg-cyan-900/40 text-cyan-100 border border-cyan-500/70"
                        : "bg-slate-900/60 text-slate-100 border border-slate-800 hover:border-cyan-400/70"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1">
                      <span className="truncate">{wf.name}</span>
                      {loadingWorkflowId === wf.id && (
                        <span className="text-[9px] text-slate-400">…</span>
                      )}
                    </div>
                    {wf.description && (
                      <p className="mt-0.5 line-clamp-2 text-[10px] text-slate-400">
                        {wf.description}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Canvas */}
          <div
            ref={canvasRef}
            onMouseDown={startPan}
            className="relative h-[500px] flex-1 rounded-2xl border border-slate-800 bg-slate-950/80 overflow-hidden"
          >
            <div
              className="absolute inset-0"
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
                transformOrigin: "0 0",
              }}
            >
              {/* Edges */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {edges.map((edge) => {
                  const from = steps.find((s) => s.id === edge.fromId);
                  const to = steps.find((s) => s.id === edge.toId);
                  if (!from || !to) return null;

                  const fromPos = getPortPosition(from, edge.fromPort);
                  const toPos = getPortPosition(to, edge.toPort);

                  const d = buildCurvePath(fromPos.x, fromPos.y, toPos.x, toPos.y);
                  const isSelected = selectedEdge === edge.id;

                  const midX = (fromPos.x + toPos.x) / 2;
                  const midY = (fromPos.y + toPos.y) / 2;

                  return (
                    <g key={edge.id} className="pointer-events-auto cursor-pointer">
                      <path
                        d={d}
                        fill="none"
                        stroke={isSelected ? "rgba(255,255,255,0.95)" : "rgba(34,211,238,0.75)"}
                        strokeWidth={isSelected ? 3 : 2}
                        className="transition-all"
                        onClick={(e) => selectEdge(edge.id, e)}
                        onMouseEnter={(e) => {
                          if (!isSelected) {
                            (e.target as SVGPathElement).style.stroke = "rgba(34,211,238,1)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isSelected) {
                            (e.target as SVGPathElement).style.stroke = "rgba(34,211,238,0.75)";
                          }
                        }}
                      />
                      {edge.label && (
                        <g transform={`translate(${midX}, ${midY - 6})`}>
                          <rect
                            x={-20}
                            y={-7}
                            width={40}
                            height={14}
                            rx={7}
                            fill="rgba(15,23,42,0.9)"
                            stroke="rgba(34,211,238,0.7)"
                            strokeWidth={0.5}
                          />
                          <text
                            x={0}
                            y={0}
                            textAnchor="middle"
                            alignmentBaseline="middle"
                            fontSize={8}
                            fill="rgba(226,232,240,0.9)"
                          >
                            {edge.label}
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })}

                {/* Edge preview */}
                {connectingFrom && connectingMouse && (() => {
                  const fromStep = steps.find((s) => s.id === connectingFrom.stepId);
                  if (!fromStep) return null;
                  const fromPos = getPortPosition(fromStep, connectingFrom.portKey);
                  const d = buildCurvePath(fromPos.x, fromPos.y, connectingMouse.x, connectingMouse.y);
                  return (
                    <path
                      d={d}
                      fill="none"
                      stroke="rgba(56,189,248,0.8)"
                      strokeWidth={2}
                      strokeDasharray="4 4"
                    />
                  );
                })()}
              </svg>

              {/* Nodes */}
              {steps.map((step) => {
                const isIf = step.type === "if";
                const isSwitch = step.type === "switch";
                const isParallel = step.type === "parallel";

                const borderColor = isIf
                  ? "border-emerald-500/70"
                  : isSwitch
                  ? "border-indigo-500/70"
                  : isParallel
                  ? "border-fuchsia-500/70"
                  : "border-slate-700";

                const glow =
                  isIf || isSwitch || isParallel
                    ? "shadow-[0_0_25px_rgba(129,230,217,0.25)]"
                    : "shadow-[0_0_25px_rgba(34,211,238,0.15)]";

                const isSelectedNode = selectedNodeId === step.id;

                return (
                  <div
                    key={step.id}
                    onMouseDown={(e) => {
                      startNodeDrag(e, step.id);
                      setSelectedNodeId(step.id);
                      setSelectedEdge(null);
                    }}
                    className={`absolute cursor-grab active:cursor-grabbing rounded-xl bg-slate-900/80 px-4 py-3 ${borderColor} ${glow} ${
                      isSelectedNode ? "ring-2 ring-cyan-400/80" : ""
                    }`}
                    style={{
                      left: step.x,
                      top: step.y,
                      width: 160,
                    }}
                  >
                    {/* Input port */}
                    <div
                      className="absolute left-[-6px] top-[32px] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                      onMouseUp={(e) => completeConnect(step.id, "in", e)}
                      onClick={(e) => {
                        if (connectingFrom) completeConnect(step.id, "in", e);
                      }}
                    />

                    {/* Default output */}
                    {!isIf && !isSwitch && !isParallel && (
                      <div
                        className="absolute right-[-6px] top-[32px] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                        onMouseDown={(e) => startConnectFrom(step.id, "out", e)}
                        onClick={(e) => startConnectFrom(step.id, "out", e)}
                      />
                    )}

                    {/* IF outputs */}
                    {isIf && (
                      <>
                        <div
                          className="absolute right-[-6px] top-[20px] h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(16,185,129,0.9)]"
                          onMouseDown={(e) => startConnectFrom(step.id, "true", e)}
                          onClick={(e) => startConnectFrom(step.id, "true", e)}
                        />
                        <div
                          className="absolute right-[-6px] top-[44px] h-3 w-3 rounded-full bg-rose-300 shadow-[0_0_8px_rgba(244,63,94,0.9)]"
                          onMouseDown={(e) => startConnectFrom(step.id, "false", e)}
                          onClick={(e) => startConnectFrom(step.id, "false", e)}
                        />
                      </>
                    )}

                    {/* SWITCH outputs */}
                    {isSwitch &&
                      (step.cases || []).map((c, idx) => (
                        <div
                          key={c}
                          className="absolute right-[-6px] h-3 w-3 rounded-full bg-indigo-300 shadow-[0_0_8px_rgba(129,140,248,0.9)]"
                          style={{ top: 18 + idx * 14 }}
                          onMouseDown={(e) => startConnectFrom(step.id, `case:${c}`, e)}
                          onClick={(e) => startConnectFrom(step.id, `case:${c}`, e)}
                        />
                      ))}

                    {/* PARALLEL outputs */}
                    {isParallel &&
                      (step.cases || []).map((c, idx) => (
                        <div
                          key={c}
                          className="absolute right-[-6px] h-3 w-3 rounded-full bg-fuchsia-300 shadow-[0_0_8px_rgba(232,121,249,0.9)]"
                          style={{ top: 18 + idx * 14 }}
                          onMouseDown={(e) => startConnectFrom(step.id, `branch:${c}`, e)}
                          onClick={(e) => startConnectFrom(step.id, `branch:${c}`, e)}
                        />
                      ))}

                    {/* Title */}
                    <p className="text-[11px] font-semibold text-slate-50">
                      {step.type.toUpperCase()}
                    </p>
                    <p className="mt-1 text-[10px] text-slate-300">{step.name}</p>

                    {/* Dataflow hints */}
                    {(step.inputKey || step.outputKey) && (
                      <p className="mt-1 text-[9px] text-slate-400">
                        {step.inputKey && <>in: <span className="text-slate-200">{step.inputKey}</span> </>}
                        {step.outputKey && <>out: <span className="text-slate-200">{step.outputKey}</span></>}
                      </p>
                    )}

                    {/* Type hints */}
                    {isIf && (
                      <p className="mt-2 text-[10px] text-emerald-200">
                        IF → TRUE / FALSE (model + context)
                      </p>
                    )}

                    {isSwitch && (
                      <div className="mt-2 space-y-1">
                        <p className="text-[10px] text-indigo-200">
                          SWITCH cases (model + context):
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {(step.cases || []).map((c) => (
                            <span
                              key={c}
                              className="rounded-full bg-indigo-900/60 px-2 py-0.5 text-[9px] text-indigo-100"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {isParallel && (
                      <div className="mt-2 space-y-1">
                        <p className="text-[10px] text-fuchsia-200">
                          PARALLEL branches (all run, merged):
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {(step.cases || []).map((c) => (
                            <span
                              key={c}
                              className="rounded-full bg-fuchsia-900/60 px-2 py-0.5 text-[9px] text-fuchsia-100"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Inspector */}
          <div
            className={`w-72 shrink-0 rounded-2xl border border-slate-800 bg-slate-950/90 p-3 transition-all duration-200 ${
              selectedNode ? "opacity-100 translate-x-0" : "opacity-60 translate-x-1"
            }`}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Node Inspector
            </p>

            {!selectedNode && (
              <p className="mt-3 text-[11px] text-slate-500">
                Select a node on the canvas to edit its properties.
              </p>
            )}

            {selectedNode && (
              <div className="mt-3 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[11px] font-semibold text-slate-100">
                    {selectedNode.type.toUpperCase()}
                  </p>
                  <button
                    onClick={() => setSelectedNodeId(null)}
                    className="text-[10px] text-slate-400 hover:text-slate-200"
                  >
                    Close
                  </button>
                </div>

                {/* Name */}
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                    Name
                  </label>
                  <input
                    className="w-full rounded-md border border-slate-700 bg-slate-900/80 px-2 py-1 text-[11px] text-slate-100 outline-none focus:border-cyan-400/80"
                    value={selectedNode.name}
                    onChange={(e) => updateSelectedNode("name", e.target.value)}
                  />
                </div>

                {/* Dataflow fields */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                      Input Key
                    </label>
                    <input
                      className="w-full rounded-md border border-slate-700 bg-slate-900/80 px-2 py-1 text-[11px] text-slate-100 outline-none focus:border-cyan-400/80"
                      value={selectedNode.inputKey ?? ""}
                      onChange={(e) => updateSelectedNode("inputKey", e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                      Output Key
                    </label>
                    <input
                      className="w-full rounded-md border border-slate-700 bg-slate-900/80 px-2 py-1 text-[11px] text-slate-100 outline-none focus:border-cyan-400/80"
                      value={selectedNode.outputKey ?? ""}
                      onChange={(e) => updateSelectedNode("outputKey", e.target.value)}
                    />
                  </div>
                </div>

                {(selectedNode.type === "model" ||
                  selectedNode.type === "if" ||
                  selectedNode.type === "switch") && (
                  <>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                        Provider
                      </label>
                      <input
                        className="w-full rounded-md border border-slate-700 bg-slate-900/80 px-2 py-1 text-[11px] text-slate-100 outline-none focus:border-cyan-400/80"
                        value={selectedNode.provider ?? ""}
                        onChange={(e) => updateSelectedNode("provider", e.target.value)}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                        Model
                      </label>
                      <input
                        className="w-full rounded-md border border-slate-700 bg-slate-900/80 px-2 py-1 text-[11px] text-slate-100 outline-none focus:border-cyan-400/80"
                        value={selectedNode.model ?? ""}
                        onChange={(e) => updateSelectedNode("model", e.target.value)}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                        Prompt
                      </label>
                      <textarea
                        className="w-full rounded-md border border-slate-700 bg-slate-900/80 px-2 py-1 text-[11px] text-slate-100 outline-none focus:border-cyan-400/80"
                        rows={selectedNode.type === "model" ? 4 : 3}
                        value={selectedNode.prompt ?? ""}
                        onChange={(e) => updateSelectedNode("prompt", e.target.value)}
                      />
                      {selectedNode.type === "if" && (
                        <p className="text-[10px] text-slate-500">
                          Uses JSON context; must answer TRUE or FALSE.
                        </p>
                      )}
                      {selectedNode.type === "switch" && (
                        <p className="text-[10px] text-slate-500">
                          Uses JSON context; must answer exactly one case label.
                        </p>
                      )}
                    </div>
                  </>
                )}

                {selectedNode.type === "delay" && (
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                      Delay (ms)
                    </label>
                    <input
                      type="number"
                      className="w-full rounded-md border border-slate-700 bg-slate-900/80 px-2 py-1 text-[11px] text-slate-100 outline-none focus:border-cyan-400/80"
                      value={selectedNode.ms ?? 0}
                      onChange={(e) => updateSelectedNode("ms", Number(e.target.value))}
                    />
                  </div>
                )}

                {selectedNode.type === "log" && (
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                      Log Message
                    </label>
                    <textarea
                      className="w-full rounded-md border border-slate-700 bg-slate-900/80 px-2 py-1 text-[11px] text-slate-100 outline-none focus:border-cyan-400/80"
                      rows={3}
                      value={selectedNode.message ?? ""}
                      onChange={(e) => updateSelectedNode("message", e.target.value)}
                    />
                  </div>
                )}

                {(selectedNode.type === "switch" || selectedNode.type === "parallel") && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                        {selectedNode.type === "switch" ? "Cases" : "Branches"}
                      </label>
                      <button
                        onClick={addCaseToSelectedNode}
                        className="rounded-full border border-slate-700 bg-slate-900/80 px-2 py-0.5 text-[10px] text-slate-100 hover:border-cyan-400/80"
                      >
                        + Add
                      </button>
                    </div>
                    <div className="space-y-1">
                      {(selectedNode.cases || []).map((c) => (
                        <div
                          key={c}
                          className="flex items-center gap-1 rounded-md border border-slate-800 bg-slate-900/80 px-2 py-1"
                        >
                          <input
                            className="flex-1 bg-transparent text-[11px] text-slate-100 outline-none"
                            defaultValue={c}
                            onBlur={(e) => {
                              const newName = e.target.value.trim();
                              if (newName && newName !== c) {
                                renameCaseOnSelectedNode(c, newName);
                              } else {
                                e.target.value = c;
                              }
                            }}
                          />
                          <button
                            onClick={() => removeCaseFromSelectedNode(c)}
                            className="text-[10px] text-slate-500 hover:text-rose-400"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                      {(!selectedNode.cases || selectedNode.cases.length === 0) && (
                        <p className="text-[10px] text-slate-500">
                          No {selectedNode.type === "switch" ? "cases" : "branches"} yet.
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Result */}
        <section className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Run Result (Context + Execution Trace)
          </p>
          <pre className="max-h-72 overflow-auto rounded-xl border border-slate-800 bg-slate-950/80 p-3 text-[11px] text-slate-200">
            {result ? JSON.stringify(result, null, 2) : "No run yet."}
          </pre>
        </section>
      </div>
    </div>
  );
}
