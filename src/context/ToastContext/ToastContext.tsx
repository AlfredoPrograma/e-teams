import { createContext } from "react";
import { AlertColors } from "types";

interface ToastConfigInterface {
  message: string;
  color: AlertColors;
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

export type { ToastConfigInterface };
export { ToastContext };
