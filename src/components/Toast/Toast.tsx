import classNames from "classnames";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { AlertColors } from "types";
import { useToast } from "hooks/useToast";
import { generateAnimationData } from "helpers/generateAnimationData";

const TOAST_ANIMATIONS: Variants = {
  initial: {
    y: 25,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,
  },

  exit: {
    y: 25,
    opacity: 0,
  },
};

const ANIMATION_DATA = generateAnimationData(TOAST_ANIMATIONS);

const TOAST_COLORS_CLASSNAMES: Record<AlertColors, string> = {
  error: "bg-danger-500",
  success: "bg-success-500",
  warning: "bg-warning-500",
};

const Toast = () => {
  const {
    handlers: { hide },
    config: { color, message, icon, canClose },
    isActive,
  } = useToast();

  return (
    <AnimatePresence>
      {isActive ? (
        <motion.div
          key="toast"
          className={classNames(
            "absolute bottom-12 right-12 w-max px-8 py-4 rounded-lg text-white text-lg flex justify-between gap-4 items-center",
            TOAST_COLORS_CLASSNAMES[color],
          )}
          {...ANIMATION_DATA}
        >
          {icon}

          <strong>{message}</strong>
          {canClose && (
            <button onClick={hide}>
              <i className="fas fa-times" />
            </button>
          )}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
export default Toast;
