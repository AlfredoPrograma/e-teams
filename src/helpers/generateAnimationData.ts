import { Variants } from "framer-motion";

const generateAnimationData = (animations: Variants) => {
  return {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants: animations,
  };
};

export { generateAnimationData };
