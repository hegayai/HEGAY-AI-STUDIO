import { createImageNode } from "./nodeDefaults";

<button
  onClick={() => addNode(createImageNode(300, 300))}
  className="rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-[11px] text-slate-100 hover:border-cyan-400/80"
>
  + Image Node
</button>
