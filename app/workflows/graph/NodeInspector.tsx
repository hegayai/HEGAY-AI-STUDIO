// app/studio/workflows/graph/NodeInspector.tsx

import React, { useState } from "react";
import { AnyWorkflowNode } from "./nodeDefaults";
import { FieldLabel } from "./FieldLabel";

export function NodeInspector({
  node,
  updateNode,
}: {
  node: AnyWorkflowNode;
  updateNode: (id: string, data: Partial<AnyWorkflowNode>) => void;
}) {
  const [loading, setLoading] = useState(false);

  async function generatePreview(api: string, payload: any) {
    setLoading(true);

    const res = await fetch(api, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (data?.url || data?.image?.url || data?.output?.url) {
      updateNode(node.id, {
        previewUrl:
          data.url ||
          data.image?.url ||
          data.output?.url ||
          null,
      });
    }

    setLoading(false);
  }

  const renderInput = (label: string, value: any, key: string) => (
    <div className="mb-3">
      <FieldLabel>{label}</FieldLabel>
      <input
        type="text"
        value={value}
        onChange={(e) =>
          updateNode(node.id, { [key]: e.target.value } as any)
        }
        className="w-full rounded-md border border-slate-700 bg-slate-900/80 px-2 py-1.5 text-[11px]"
      />
    </div>
  );

  const renderNumber = (
    label: string,
    value: number,
    key: string,
    step = 0.1
  ) => (
    <div className="mb-3">
      <FieldLabel>{label}</FieldLabel>
      <input
        type="number"
        step={step}
        value={value}
        onChange={(e) =>
          updateNode(node.id, { [key]: Number(e.target.value) } as any)
        }
        className="w-full rounded-md border border-slate-700 bg-slate-900/80 px-2 py-1.5 text-[11px]"
      />
    </div>
  );

  const renderPreview = () => (
    <div className="w-full h-40 rounded-md border border-slate-700 overflow-hidden flex items-center justify-center mt-4">
      {loading && (
        <p className="text-[10px] text-slate-500">Processing…</p>
      )}
      {!loading && node.previewUrl && (
        <img
          src={node.previewUrl}
          className="w-full h-full object-cover"
        />
      )}
      {!loading && !node.previewUrl && (
        <p className="text-[10px] text-slate-500">No preview yet</p>
      )}
    </div>
  );

  // -------------------------
  // NODE‑SPECIFIC INSPECTORS
  // -------------------------

  switch (node.type) {
    case "image":
      return (
        <div>
          {renderInput("Output Key", node.outputKey, "outputKey")}
          {renderPreview()}
        </div>
      );

    case "image-upload":
      return (
        <div>
          {renderInput("Output Key", node.outputKey, "outputKey")}
          {renderPreview()}
        </div>
      );

    case "image-transform":
      return (
        <div>
          {renderInput("Image Key", node.imageKey, "imageKey")}
          {renderNumber("Width", node.width ?? 0, "width")}
          {renderNumber("Height", node.height ?? 0, "height")}
          {renderInput("Fit", node.fit, "fit")}
          {renderInput("Output Key", node.outputKey, "outputKey")}

          <button
            onClick={() =>
              generatePreview("/api/image/transform", {
                imageKey: node.imageKey,
                width: node.width,
                height: node.height,
                fit: node.fit,
              })
            }
            className="w-full rounded-md border border-cyan-400/80 bg-slate-900 px-3 py-1.5 text-[11px] text-cyan-300"
          >
            Generate Preview
          </button>

          {renderPreview()}
        </div>
      );

    case "image-style-transfer":
      return (
        <div>
          {renderInput("Content Image", node.contentImageKey, "contentImageKey")}
          {renderInput("Style Image", node.styleImageKey, "styleImageKey")}
          {renderNumber("Strength", node.strength, "strength")}
          {renderInput("Output Key", node.outputKey, "outputKey")}

          <button
            onClick={() =>
              generatePreview("/api/image/style-transfer", {
                content: node.contentImageKey,
                style: node.styleImageKey,
                strength: node.strength,
              })
            }
            className="w-full rounded-md border border-cyan-400/80 bg-slate-900 px-3 py-1.5 text-[11px] text-cyan-300"
          >
            Generate Preview
          </button>

          {renderPreview()}
        </div>
      );

    case "image-mask":
      return (
        <div>
          {renderInput("Image Key", node.imageKey, "imageKey")}
          {renderInput("Mask Key", node.maskKey, "maskKey")}
          {renderInput("Output Key", node.outputKey, "outputKey")}

          <button
            onClick={() =>
              generatePreview("/api/image/mask", {
                image: node.imageKey,
                mask: node.maskKey,
              })
            }
            className="w-full rounded-md border border-cyan-400/80 bg-slate-900 px-3 py-1.5 text-[11px] text-cyan-300"
          >
            Generate Preview
          </button>

          {renderPreview()}
        </div>
      );

    case "image-inpaint":
      return (
        <div>
          {renderInput("Image Key", node.imageKey, "imageKey")}
          {renderInput("Mask Key", node.maskKey, "maskKey")}
          {renderInput("Prompt", node.prompt, "prompt")}
          {renderNumber("Strength", node.strength, "strength")}
          {renderInput("Output Key", node.outputKey, "outputKey")}

          <button
            onClick={() =>
              generatePreview("/api/image/inpaint", {
                image: node.imageKey,
                mask: node.maskKey,
                prompt: node.prompt,
                strength: node.strength,
              })
            }
            className="w-full rounded-md border border-cyan-400/80 bg-slate-900 px-3 py-1.5 text-[11px] text-cyan-300"
          >
            Generate Preview
          </button>

          {renderPreview()}
        </div>
      );

    case "image-composite":
      return (
        <div>
          {renderInput("Base Image", node.baseImageKey, "baseImageKey")}
          {renderInput("Overlay Image", node.overlayImageKey, "overlayImageKey")}
          {renderInput("Blend Mode", node.blendMode, "blendMode")}
          {renderNumber("Opacity", node.opacity, "opacity")}
          {renderInput("Output Key", node.outputKey, "outputKey")}

          <button
            onClick={() =>
              generatePreview("/api/image/composite", {
                base: node.baseImageKey,
                overlay: node.overlayImageKey,
                blendMode: node.blendMode,
                opacity: node.opacity,
              })
            }
            className="w-full rounded-md border border-cyan-400/80 bg-slate-900 px-3 py-1.5 text-[11px] text-cyan-300"
          >
            Generate Preview
          </button>

          {renderPreview()}
        </div>
      );

    case "image-layer":
      return (
        <div>
          {renderInput("Image Key", node.imageKey, "imageKey")}
          {renderNumber("Z Index", node.zIndex, "zIndex")}
          {renderInput("Output Key", node.outputKey, "outputKey")}
          {renderPreview()}
        </div>
      );

    case "image-merge":
      return (
        <div>
          {renderInput("Image Keys (comma separated)", node.imageKeys.join(","), "imageKeys")}
          {renderInput("Layout", node.layout, "layout")}
          {renderInput("Output Key", node.outputKey, "outputKey")}
          {renderPreview()}
        </div>
      );

    case "image-depth":
      return (
        <div>
          {renderInput("Image Key", node.imageKey, "imageKey")}
          {renderInput("Output Key", node.outputKey, "outputKey")}

          <button
            onClick={() =>
              generatePreview("/api/image/depth", {
                image: node.imageKey,
              })
            }
            className="w-full rounded-md border border-cyan-400/80 bg-slate-900 px-3 py-1.5 text-[11px] text-cyan-300"
          >
            Generate Depth
          </button>

          {renderPreview()}
        </div>
      );

    case "image-relight":
      return (
        <div>
          {renderInput("Image Key", node.imageKey, "imageKey")}
          {renderInput("Depth Key", node.depthKey, "depthKey")}
          {renderInput("Light Direction", node.lightDirection, "lightDirection")}
          {renderNumber("Intensity", node.intensity, "intensity")}
          {renderInput("Color", node.color, "color")}
          {renderInput("Output Key", node.outputKey, "outputKey")}

          <button
            onClick={() =>
              generatePreview("/api/image/relight", {
                image: node.imageKey,
                depth: node.depthKey,
                direction: node.lightDirection,
                intensity: node.intensity,
                color: node.color,
              })
            }
            className="w-full rounded-md border border-cyan-400/80 bg-slate-900 px-3 py-1.5 text-[11px] text-cyan-300"
          >
            Generate Relight
          </button>

          {renderPreview()}
        </div>
      );

    case "image-effects":
      return (
        <div>
          {renderInput("Image Key", node.imageKey, "imageKey")}
          {renderInput("Output Key", node.outputKey, "outputKey")}

          <button
            onClick={() =>
              generatePreview("/api/image/effects", {
                image: node.imageKey,
                effects: node.effects,
                lut: node.lut,
              })
            }
            className="w-full rounded-md border border-cyan-400/80 bg-slate-900 px-3 py-1.5 text-[11px] text-cyan-300"
          >
            Apply Effects
          </button>

          {renderPreview()}
        </div>
      );

    case "image-normal-map":
      return (
        <div>
          {renderInput("Image Key", node.imageKey, "imageKey")}
          {renderInput("Method", node.method, "method")}
          {renderNumber("Intensity", node.intensity, "intensity")}
          {renderInput("Output Key", node.outputKey, "outputKey")}

          <button
            onClick={() =>
              generatePreview("/api/image/normal-map", {
                image: node.imageKey,
                method: node.method,
                intensity: node.intensity,
              })
            }
            className="w-full rounded-md border border-cyan-400/80 bg-slate-900 px-3 py-1.5 text-[11px] text-cyan-300"
          >
            Generate Normal Map
          </button>

          {renderPreview()}
        </div>
      );

    case "image-disparity":
      return (
        <div>
          {renderInput("Mode", node.mode, "mode")}
          {renderInput("Left Image", node.leftImageKey, "leftImageKey")}
          {renderInput("Right Image", node.rightImageKey, "rightImageKey")}
          {renderInput("Mono Image", node.imageKey, "imageKey")}
          {renderInput("Output Key", node.outputKey, "outputKey")}

          <button
            onClick={() =>
              generatePreview("/api/image/disparity", {
                mode: node.mode,
                left: node.leftImageKey,
                right: node.rightImageKey,
                image: node.imageKey,
              })
            }
            className="w-full rounded-md border border-cyan-400/80 bg-slate-900 px-3 py-1.5 text-[11px] text-cyan-300"
          >
            Generate Disparity
          </button>

          {renderPreview()}
        </div>
      );

    case "image-camera":
      return (
        <div>
          {renderInput("Image Key", node.imageKey, "imageKey")}
          {renderInput("Depth Key", node.depthKey ?? "", "depthKey")}
          {renderNumber("Focal Length", node.focalLength, "focalLength")}
          {renderNumber("Aperture", node.aperture, "aperture")}
          {renderNumber("Focus Distance", node.focusDistance, "focusDistance")}
          {renderNumber("Tilt", node.tilt, "tilt")}
          {renderNumber("Shift", node.shift, "shift")}
          {renderNumber("Roll", node.roll, "roll")}
          {renderNumber("Distortion", node.distortion, "distortion")}
          {renderNumber("Chromatic Aberration", node.chromaticAberration, "chromaticAberration")}
          {renderNumber("Motion Blur", node.motionBlur, "motionBlur")}
          {renderInput("Output Key", node.outputKey, "outputKey")}

          <button
            onClick={() =>
              generatePreview("/api/image/camera", {
                image: node.imageKey,
                depth: node.depthKey,
                focalLength: node.focalLength,
                aperture: node.aperture,
                focusDistance: node.focusDistance,
                tilt: node.tilt,
                shift: node.shift,
                roll: node.roll,
                distortion: node.distortion,
                chromaticAberration: node.chromaticAberration,
                motionBlur: node.motionBlur,
              })
            }
            className="w-full rounded-md border border-cyan-400/80 bg-slate-900 px-3 py-1.5 text-[11px] text-cyan-300"
          >
            Generate Camera Preview
          </button>

          {renderPreview()}
        </div>
      );

    case "image-motion":
      return (
        <div>
          {renderInput("Image Key", node.imageKey, "imageKey")}
          {renderInput("Depth Key", node.depthKey ?? "", "depthKey")}
          {renderInput("Motion Type", node.motionType, "motionType")}
          {renderInput("Direction", node.direction, "direction")}
          {renderNumber("Intensity", node.intensity, "intensity")}
          {renderNumber("Duration (sec)", node.duration, "duration")}
          {renderInput("Output Key", node.outputKey, "outputKey")}

          <button
            onClick={() =>
              generatePreview("/api/image/motion", {
                image: node.imageKey,
                depth: node.depthKey,
                motionType: node.motionType,
                direction: node.direction,
                intensity: node.intensity,
                duration: node.duration,
              })
            }
            className="w-full rounded-md border border-cyan-400/80 bg-slate-900 px-3 py-1.5 text-[11px] text-cyan-300"
          >
            Generate Motion
          </button>

          {renderPreview()}
        </div>
      );

    default:
      return <p className="text-[11px] text-slate-400">Unknown node</p>;
  }
}
