// app/studio/workflows/graph/nodeDefaults.ts

export type ImageEffectType =
  | "exposure"
  | "contrast"
  | "saturation"
  | "vibrance"
  | "temperature"
  | "tint"
  | "grain"
  | "vignette"
  | "bloom"
  | "sharpen"
  | "lut";

export type MotionType =
  | "pan"
  | "zoom"
  | "parallax"
  | "shake"
  | "orbit";

export interface WorkflowNodeBase {
  id: string;
  type: string;
  name: string;
  x: number;
  y: number;
}

export interface ImageNode extends WorkflowNodeBase {
  type: "image";
  imageUrl: string | null;
  outputKey: string;
}

export interface ImageUploadNode extends WorkflowNodeBase {
  type: "image-upload";
  outputKey: string;
  previewUrl: string | null;
}

export interface ImageTransformNode extends WorkflowNodeBase {
  type: "image-transform";
  imageKey: string;
  width: number | null;
  height: number | null;
  fit: "cover" | "contain" | "fill";
  outputKey: string;
  previewUrl: string | null;
}

export interface ImageStyleTransferNode extends WorkflowNodeBase {
  type: "image-style-transfer";
  contentImageKey: string;
  styleImageKey: string;
  strength: number;
  outputKey: string;
  previewUrl: string | null;
}

export interface ImageMaskNode extends WorkflowNodeBase {
  type: "image-mask";
  imageKey: string;
  maskKey: string;
  outputKey: string;
  previewUrl: string | null;
}

export interface ImageInpaintNode extends WorkflowNodeBase {
  type: "image-inpaint";
  imageKey: string;
  maskKey: string;
  prompt: string;
  strength: number;
  outputKey: string;
  previewUrl: string | null;
}

export interface ImageCompositeNode extends WorkflowNodeBase {
  type: "image-composite";
  baseImageKey: string;
  overlayImageKey: string;
  blendMode:
    | "normal"
    | "multiply"
    | "screen"
    | "overlay"
    | "soft-light"
    | "hard-light";
  opacity: number;
  outputKey: string;
  previewUrl: string | null;
}

export interface ImageLayerNode extends WorkflowNodeBase {
  type: "image-layer";
  imageKey: string;
  zIndex: number;
  outputKey: string;
  previewUrl: string | null;
}

export interface ImageMergeNode extends WorkflowNodeBase {
  type: "image-merge";
  imageKeys: string[];
  layout: "horizontal" | "vertical" | "grid";
  outputKey: string;
  previewUrl: string | null;
}

export interface ImageDepthNode extends WorkflowNodeBase {
  type: "image-depth";
  imageKey: string;
  outputKey: string;
  previewUrl: string | null;
}

export interface ImageRelightNode extends WorkflowNodeBase {
  type: "image-relight";
  imageKey: string;
  depthKey: string;
  lightDirection: "front" | "back" | "left" | "right" | "top" | "bottom";
  intensity: number;
  color: string;
  outputKey: string;
  previewUrl: string | null;
}

export interface ImageEffectsNode extends WorkflowNodeBase {
  type: "image-effects";
  imageKey: string;
  effects: {
    id: string;
    type: ImageEffectType;
    amount: number;
  }[];
  lut: string | null;
  outputKey: string;
  previewUrl: string | null;
}

export interface ImageNormalMapNode extends WorkflowNodeBase {
  type: "image-normal-map";
  imageKey: string;
  method: "sobel" | "ai" | "hybrid";
  intensity: number;
  outputKey: string;
  previewUrl: string | null;
}

export interface ImageDisparityNode extends WorkflowNodeBase {
  type: "image-disparity";
  mode: "stereo" | "mono";
  leftImageKey: string;
  rightImageKey: string;
  imageKey: string;
  outputKey: string;
  previewUrl: string | null;
}

export interface ImageCameraNode extends WorkflowNodeBase {
  type: "image-camera";
  imageKey: string;
  depthKey: string | null;
  focalLength: number;
  aperture: number;
  focusDistance: number;
  tilt: number;
  shift: number;
  roll: number;
  distortion: number;
  chromaticAberration: number;
  motionBlur: number;
  outputKey: string;
  previewUrl: string | null;
}

export interface ImageMotionNode extends WorkflowNodeBase {
  type: "image-motion";
  imageKey: string;
  depthKey: string | null;
  motionType: MotionType;
  direction: "left" | "right" | "up" | "down" | "in" | "out";
  intensity: number; // 0–1
  duration: number; // seconds
  outputKey: string;
  previewUrl: string | null;
}

export type AnyWorkflowNode =
  | ImageNode
  | ImageUploadNode
  | ImageTransformNode
  | ImageStyleTransferNode
  | ImageMaskNode
  | ImageInpaintNode
  | ImageCompositeNode
  | ImageLayerNode
  | ImageMergeNode
  | ImageDepthNode
  | ImageRelightNode
  | ImageEffectsNode
  | ImageNormalMapNode
  | ImageDisparityNode
  | ImageCameraNode
  | ImageMotionNode;

export function createImageNode(x = 200, y = 200): ImageNode {
  return {
    id: crypto.randomUUID(),
    type: "image",
    name: "Image",
    imageUrl: null,
    outputKey: "image",
    x,
    y,
  };
}

export function createImageUploadNode(
  x = 200,
  y = 200
): ImageUploadNode {
  return {
    id: crypto.randomUUID(),
    type: "image-upload",
    name: "Image Upload",
    outputKey: "uploadedImage",
    previewUrl: null,
    x,
    y,
  };
}

export function createImageTransformNode(
  x = 200,
  y = 200
): ImageTransformNode {
  return {
    id: crypto.randomUUID(),
    type: "image-transform",
    name: "Transform",
    imageKey: "image",
    width: null,
    height: null,
    fit: "cover",
    outputKey: "transformedImage",
    previewUrl: null,
    x,
    y,
  };
}

export function createImageStyleTransferNode(
  x = 200,
  y = 200
): ImageStyleTransferNode {
  return {
    id: crypto.randomUUID(),
    type: "image-style-transfer",
    name: "Style Transfer",
    contentImageKey: "contentImage",
    styleImageKey: "styleImage",
    strength: 0.8,
    outputKey: "styledImage",
    previewUrl: null,
    x,
    y,
  };
}

export function createImageMaskNode(
  x = 200,
  y = 200
): ImageMaskNode {
  return {
    id: crypto.randomUUID(),
    type: "image-mask",
    name: "Mask",
    imageKey: "image",
    maskKey: "mask",
    outputKey: "maskedImage",
    previewUrl: null,
    x,
    y,
  };
}

export function createImageInpaintNode(
  x = 200,
  y = 200
): ImageInpaintNode {
  return {
    id: crypto.randomUUID(),
    type: "image-inpaint",
    name: "Inpaint",
    imageKey: "image",
    maskKey: "mask",
    prompt: "",
    strength: 0.8,
    outputKey: "inpaintedImage",
    previewUrl: null,
    x,
    y,
  };
}

export function createImageCompositeNode(
  x = 200,
  y = 200
): ImageCompositeNode {
  return {
    id: crypto.randomUUID(),
    type: "image-composite",
    name: "Composite",
    baseImageKey: "baseImage",
    overlayImageKey: "overlayImage",
    blendMode: "normal",
    opacity: 1,
    outputKey: "compositedImage",
    previewUrl: null,
    x,
    y,
  };
}

export function createImageLayerNode(
  x = 200,
  y = 200
): ImageLayerNode {
  return {
    id: crypto.randomUUID(),
    type: "image-layer",
    name: "Layer",
    imageKey: "image",
    zIndex: 0,
    outputKey: "layerImage",
    previewUrl: null,
    x,
    y,
  };
}

export function createImageMergeNode(
  x = 200,
  y = 200
): ImageMergeNode {
  return {
    id: crypto.randomUUID(),
    type: "image-merge",
    name: "Merge",
    imageKeys: ["imageA", "imageB"],
    layout: "horizontal",
    outputKey: "mergedImage",
    previewUrl: null,
    x,
    y,
  };
}

export function createImageDepthNode(
  x = 200,
  y = 200
): ImageDepthNode {
  return {
    id: crypto.randomUUID(),
    type: "image-depth",
    name: "Depth",
    imageKey: "image",
    outputKey: "depthMap",
    previewUrl: null,
    x,
    y,
  };
}

export function createImageRelightNode(
  x = 200,
  y = 200
): ImageRelightNode {
  return {
    id: crypto.randomUUID(),
    type: "image-relight",
    name: "Relight",
    imageKey: "image",
    depthKey: "depthMap",
    lightDirection: "front",
    intensity: 0.8,
    color: "#ffffff",
    outputKey: "relitImage",
    previewUrl: null,
    x,
    y,
  };
}

export function createImageEffectsNode(
  x = 200,
  y = 200
): ImageEffectsNode {
  return {
    id: crypto.randomUUID(),
    type: "image-effects",
    name: "Image Effects",
    imageKey: "image",
    effects: [
      {
        id: crypto.randomUUID(),
        type: "exposure",
        amount: 0.1,
      },
    ],
    lut: null,
    outputKey: "effectsImage",
    previewUrl: null,
    x,
    y,
  };
}

export function createImageNormalMapNode(
  x = 200,
  y = 200
): ImageNormalMapNode {
  return {
    id: crypto.randomUUID(),
    type: "image-normal-map",
    name: "Normal Map",
    imageKey: "image",
    method: "sobel",
    intensity: 1.0,
    outputKey: "normalMap",
    previewUrl: null,
    x,
    y,
  };
}

export function createImageDisparityNode(
  x = 200,
  y = 200
): ImageDisparityNode {
  return {
    id: crypto.randomUUID(),
    type: "image-disparity",
    name: "Disparity Map",
    mode: "stereo",
    leftImageKey: "leftImage",
    rightImageKey: "rightImage",
    imageKey: "image",
    outputKey: "disparityMap",
    previewUrl: null,
    x,
    y,
  };
}

export function createImageCameraNode(
  x = 200,
  y = 200
): ImageCameraNode {
  return {
    id: crypto.randomUUID(),
    type: "image-camera",
    name: "Camera",
    imageKey: "image",
    depthKey: "depthMap",
    focalLength: 35,
    aperture: 2.8,
    focusDistance: 2.0,
    tilt: 0,
    shift: 0,
    roll: 0,
    distortion: 0,
    chromaticAberration: 0,
    motionBlur: 0,
    outputKey: "cameraImage",
    previewUrl: null,
    x,
    y,
  };
}

export function createImageMotionNode(
  x = 200,
  y = 200
): ImageMotionNode {
  return {
    id: crypto.randomUUID(),
    type: "image-motion",
    name: "Motion",
    imageKey: "image",
    depthKey: "depthMap",
    motionType: "parallax",
    direction: "right",
    intensity: 0.6,
    duration: 2.0,
    outputKey: "motionImage",
    previewUrl: null,
    x,
    y,
  };
}

export const NODE_DEFAULTS: Record<string, () => AnyWorkflowNode> = {
  image: createImageNode,
  "image-upload": createImageUploadNode,
  "image-transform": createImageTransformNode,
  "image-style-transfer": createImageStyleTransferNode,
  "image-mask": createImageMaskNode,
  "image-inpaint": createImageInpaintNode,
  "image-composite": createImageCompositeNode,
  "image-layer": createImageLayerNode,
  "image-merge": createImageMergeNode,
  "image-depth": createImageDepthNode,
  "image-relight": createImageRelightNode,
  "image-effects": createImageEffectsNode,
  "image-normal-map": createImageNormalMapNode,
  "image-disparity": createImageDisparityNode,
  "image-camera": createImageCameraNode,
  "image-motion": createImageMotionNode,
};
