import { useState, useEffect } from "react";
import { transitions } from "./transitions";

export const useTransition = (visible: boolean, type: keyof typeof transitions) => {
  const [style, setStyle] = useState(
    visible ? transitions[type] : transitions.fadeOut
  );

  useEffect(() => {
    setStyle(visible ? transitions[type] : transitions.fadeOut);
  }, [visible, type]);

  return style;
};
