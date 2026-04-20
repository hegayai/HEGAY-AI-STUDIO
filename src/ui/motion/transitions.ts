export const transitions = {
  fadeIn: {
    opacity: 1,
    transform: "translateY(0px)",
    transition: "opacity 240ms ease-out, transform 240ms ease-out",
  },
  fadeOut: {
    opacity: 0,
    transform: "translateY(6px)",
    transition: "opacity 200ms ease-in, transform 200ms ease-in",
  },

  slideIn: {
    opacity: 1,
    transform: "translateX(0px)",
    transition: "opacity 260ms ease-out, transform 260ms ease-out",
  },
  slideOut: {
    opacity: 0,
    transform: "translateX(-12px)",
    transition: "opacity 200ms ease-in, transform 200ms ease-in",
  },

  scaleIn: {
    opacity: 1,
    transform: "scale(1)",
    transition: "opacity 260ms ease-out, transform 260ms ease-out",
  },
  scaleOut: {
    opacity: 0,
    transform: "scale(0.96)",
    transition: "opacity 200ms ease-in, transform 200ms ease-in",
  },
};
