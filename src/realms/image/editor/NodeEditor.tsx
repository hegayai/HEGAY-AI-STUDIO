import React, { useState } from "react";
import { nodeTypes } from "../registry/nodeTypes";
import { Node } from "../components/Node";
import { NodeWire } from "../components/NodeWire";

export const NodeEditor = () => {
  const [nodes, setNodes] = useState([
    {
      id: "1",
      type: "text",
      x: 100,
      y: 100,
      inputs: nodeTypes.text.inputs,
      outputs: nodeTypes.text.outputs,
    },
    {
      id: "2",
      type: "render",
      x: 400,
      y: 200,
      inputs: nodeTypes.render.inputs,
      outputs: nodeTypes.render.outputs,
    },
  ]);

  const wires = [
    { from: { x: 280, y: 150 }, to: { x: 400, y: 230 } },
  ];

  const moveNode = (id: string, dx: number, dy: number) => {
    setNodes((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, x: n.x + dx, y: n.y + dy } : n
      )
    );
  };

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      {wires.map((w, i) => (
        <NodeWire key={i} x1={w.from.x} y1={w.from.y} x2={w.to.x} y2={w.to.y} />
      ))}

      {nodes.map((node) => (
        <Node key={node.id} node={node} onDrag={moveNode} />
      ))}
    </div>
  );
};
