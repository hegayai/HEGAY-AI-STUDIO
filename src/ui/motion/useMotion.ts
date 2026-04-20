import { useState } from "react";

export const useMotion = (duration = 200) => {
  const [isActive, setIsActive] = useState(false);

  const trigger = () => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), duration);
  };

  return { isActive, trigger };
};
