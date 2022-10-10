import { createContext } from "react";

type ToastColors = "success" | "error" | "warning";

interface ToastConfigInterface {
  message: string;
  color: ToastColors;
  icon?: JSX.Element;
  canClose?: boolean;
  delay?: number;
}

interface ToastHandlersInterface {
  show: (config?: ToastConfigInterface) => void;
  hide: () => void;
}

interface ToastContextStateInterface {
  config: ToastConfigInterface;
  handlers: ToastHandlersInterface;
  isActive: boolean;
}

const ToastContext = createContext<ToastContextStateInterface | undefined>(
  undefined,
);

export type { ToastConfigInterface, ToastColors };
export { ToastContext };
