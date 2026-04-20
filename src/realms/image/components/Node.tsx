import React from "react";
import { NodePort } from "./NodePort";

export const Node = ({
  node,
  onDrag,
}: {
  node: any;
  onDrag: (id: string, x: number, y: number) => void;
}) => {
  const handleDrag = (e: React.MouseEvent) => {
    onDrag(node.id, e.movementX, e.movementY);
  };

  return (
    <div
      onMouseDown={handleDrag}
      style={{
        position: "absolute",
        left: node.x,
        top: node.y,
        width: "180px",
        padding: "12px",
        background: "#111",
        border: "1px solid #333",
        borderRadius: "10px",
        cursor: "grab",
      }}
    >
      <h4 style={{ color: "#FFF", marginBottom: "8px" }}>{node.type}</h4>

      <div>
        {node.inputs?.map((input: string) => (
          <NodePort key={input} side="input" label={input} />
        ))}
      </div>

      <div style={{ marginTop: "8px" }}>
        {node.outputs?.map((output: string) => (
          <NodePort key={output} side="output" label={output} />
        ))}
      </div>
    </div>
  );
};
