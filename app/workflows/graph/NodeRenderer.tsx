// app/studio/workflows/graph/NodeRenderer.tsx

import React from "react";
import { AnyWorkflowNode } from "./nodeDefaults";
import { NodeContainer } from "./NodeContainer";

export function NodeRenderer({
  node,
  selected,
}: {
  node: AnyWorkflowNode;
  selected: boolean;
}) {
  const type = node.type;

  switch (type) {
    case "image":
      return (
        <NodeContainer selected={selected}>
          <p className="text-[11px] font-semibold">Image</p>
          {node.imageUrl && (
            <img
              src={node.imageUrl}
              className="mt-2 w-full h-24 object-cover rounded-md border border-slate-700"
            />
          )}
        </NodeContainer>
      );

    case "image-upload":
      return (
        <NodeContainer selected={selected}>
          <p className="text-[11px] font-semibold">Upload</p>
          {node.previewUrl && (
            <img
              src={node.previewUrl}
              className="mt-2 w-full h-24 object-cover rounded-md border border-slate-700"
            />
          )}
        </NodeContainer>
      );

    case "image-transform":
      return (
        <NodeContainer selected={selected}>
          <p className="text-[11px] font-semibold">Transform</p>
          <p className="text-[10px] text-slate-400">Image: {node.imageKey}</p>
          {node.previewUrl && (
            <img
              src={node.previewUrl}
              className="mt-2 w-full h-24 object-cover rounded-md border border-slate-700"
            />
          )}
        </NodeContainer>
      );

    case "image-style-transfer":
      return (
        <NodeContainer selected={selected}>
          <p className="text-[11px] font-semibold">Style Transfer</p>
          <p className="text-[10px] text-slate-400">
            Content: {node.contentImageKey}
          </p>
          <p className="text-[10px] text-slate-400">
            Style: {node.styleImageKey}
          </p>
          {node.previewUrl && (
            <img
              src={node.previewUrl}
              className="mt-2 w-full h-24 object-cover rounded-md border border-slate-700"
            />
          )}
        </NodeContainer>
      );

    case "image-mask":
      return (
        <NodeContainer selected={selected}>
          <p className="text-[11px] font-semibold">Mask</p>
          <p className="text-[10px] text-slate-400">Image: {node.imageKey}</p>
          <p className="text-[10px] text-slate-400">Mask: {node.maskKey}</p>
          {node.previewUrl && (
            <img
              src={node.previewUrl}
              className="mt-2 w-full h-24 object-cover rounded-md border border-slate-700"
            />
          )}
        </NodeContainer>
      );

    case "image-inpaint":
      return (
        <NodeContainer selected={selected}>
          <p className="text-[11px] font-semibold">Inpaint</p>
          <p className="text-[10px] text-slate-400">Image: {node.imageKey}</p>
          <p className="text-[10px] text-slate-400">Mask: {node.maskKey}</p>
          {node.previewUrl && (
            <img
              src={node.previewUrl}
              className="mt-2 w-full h-24 object-cover rounded-md border border-slate-700"
            />
          )}
        </NodeContainer>
      );

    case "image-composite":
      return (
        <NodeContainer selected={selected}>
          <p className="text-[11px] font-semibold">Composite</p>
          <p className="text-[10px] text-slate-400">
            Base: {node.baseImageKey}
          </p>
          <p className="text-[10px] text-slate-400">
            Overlay: {node.overlayImageKey}
          </p>
          {node.previewUrl && (
            <img
              src={node.previewUrl}
              className="mt-2 w-full h-24 object-cover rounded-md border border-slate-700"
            />
          )}
        </NodeContainer>
      );

    case "image-layer":
      return (
        <NodeContainer selected={selected}>
          <p className="text-[11px] font-semibold">Layer</p>
          <p className="text-[10px] text-slate-400">Image: {node.imageKey}</p>
          <p className="text-[10px] text-slate-400">Z: {node.zIndex}</p>
          {node.previewUrl && (
            <img
              src={node.previewUrl}
              className="mt-2 w-full h-24 object-cover rounded-md border border-slate-700"
            />
          )}
        </NodeContainer>
      );

    case "image-merge":
      return (
        <NodeContainer selected={selected}>
          <p className="text-[11px] font-semibold">Merge</p>
          <p className="text-[10px] text-slate-400">
            Images: {node.imageKeys.join(", ")}
          </p>
          <p className="text-[10px] text-slate-400">Layout: {node.layout}</p>
          {node.previewUrl && (
            <img
              src={node.previewUrl}
              className="mt-2 w-full h-24 object-cover rounded-md border border-slate-700"
            />
          )}
        </NodeContainer>
      );

    case "image-depth":
      return (
        <NodeContainer selected={selected}>
          <p className="text-[11px] font-semibold">Depth</p>
          <p className="text-[10px] text-slate-400">Image: {node.imageKey}</p>
          {node.previewUrl && (
            <img
              src={node.previewUrl}
              className="mt-2 w-full h-24 object-cover rounded-md border border-slate-700"
            />
          )}
        </NodeContainer>
      );

    case "image-relight":
      return (
        <NodeContainer selected={selected}>
          <p className="text-[11px] font-semibold">Relight</p>
          <p className="text-[10px] text-slate-400">Image: {node.imageKey}</p>
          <p className="text-[10px] text-slate-400">Depth: {node.depthKey}</p>
          {node.previewUrl && (
            <img
              src={node.previewUrl}
              className="mt-2 w-full h-24 object-cover rounded-md border border-slate-700"
            />
          )}
        </NodeContainer>
      );

    case "image-effects":
      return (
        <NodeContainer selected={selected}>
          <p className="text-[11px] font-semibold">Effects</p>
          <p className="text-[10px] text-slate-400">
            Image: {node.imageKey}
          </p>
          {node.previewUrl && (
            <img
              src={node.previewUrl}
              className="mt-2 w-full h-24 object-cover rounded-md border border-slate-700"
            />
          )}
        </NodeContainer>
      );

    case "image-normal-map":
      return (
        <NodeContainer selected={selected}>
          <p className="text-[11px] font-semibold">Normal Map</p>
          <p className="text-[10px] text-slate-400">
            Method: {node.method}
          </p>
          {node.previewUrl && (
            <img
              src={node.previewUrl}
              className="mt-2 w-full h-24 object-cover rounded-md border border-slate-700"
            />
          )}
        </NodeContainer>
      );

    case "image-disparity":
      return (
        <NodeContainer selected={selected}>
          <p className="text-[11px] font-semibold">Disparity</p>
          <p className="text-[10px] text-slate-400">Mode: {node.mode}</p>
          {node.previewUrl && (
            <img
              src={node.previewUrl}
              className="mt-2 w-full h-24 object-cover rounded-md border border-slate-700"
            />
          )}
        </NodeContainer>
      );

    case "image-camera":
      return (
        <NodeContainer selected={selected}>
          <p className="text-[11px] font-semibold">Camera</p>
          <p className="text-[10px] text-slate-400">
            {node.focalLength}mm
          </p>
          {node.previewUrl && (
            <img
              src={node.previewUrl}
              className="mt-2 w-full h-24 object-cover rounded-md border border-slate-700"
            />
          )}
        </NodeContainer>
      );

    case "image-motion":
      return (
        <NodeContainer selected={selected}>
          <p className="text-[11px] font-semibold">Motion</p>
          <p className="text-[10px] text-slate-400">
            {node.motionType} / {node.direction}
          </p>
          {node.previewUrl && (
            <img
              src={node.previewUrl}
              className="mt-2 w-full h-24 object-cover rounded-md border border-slate-700"
            />
          )}
        </NodeContainer>
      );

    default:
      return (
        <NodeContainer selected={selected}>
          <p className="text-[11px] font-semibold">Unknown Node</p>
        </NodeContainer>
      );
  }
}
