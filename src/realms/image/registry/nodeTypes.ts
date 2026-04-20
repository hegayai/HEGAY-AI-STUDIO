export const nodeTypes = {
  text: {
    label: "Text",
    inputs: ["content", "size", "color"],
    outputs: ["image"],
  },

  image: {
    label: "Image Input",
    inputs: ["file"],
    outputs: ["image"],
  },

  style: {
    label: "Style",
    inputs: ["image", "strength"],
    outputs: ["styledImage"],
  },

  render: {
    label: "Render",
    inputs: ["image"],
    outputs: ["final"],
  },
};
