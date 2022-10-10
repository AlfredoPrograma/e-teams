import { useEffect, useMemo, useState } from "react";
import { Children } from "types/Children";
import { ToastConfigInterface, ToastContext } from "./context";

// TODO: export types into another file
interface ToastContextProviderProps {
  children: Children;
}

const DEFAULT_TOAST_CONFIG: ToastConfigInterface = {
  message: "Customize this toast!",
  color: "success",
  delay: 3000,
};

const ToastContextProvider = ({ children }: ToastContextProviderProps) => {
  const [isActive, setIsActive] = useState(false);
  const [config, setConfig] =
    useState<ToastConfigInterface>(DEFAULT_TOAST_CONFIG);

  const handlers = useMemo(
    () => ({
      show: (toastConfig?: ToastConfigInterface) => {
        setConfig({ ...DEFAULT_TOAST_CONFIG, ...toastConfig });
        setIsActive(true);
      },

      hide: () => {
        setIsActive(false);
      },
    }),
    [],
  );

  useEffect(() => {
    if (isActive) {
      const interval = setTimeout(() => {
        setIsActive(false);
      }, config.delay);

      return () => {
        clearTimeout(interval);
      };
    }
  }, [isActive, config.delay]);

  return (
    <ToastContext.Provider value={{ config, handlers, isActive }}>
      {children}
    </ToastContext.Provider>
  );
};

export { ToastContextProvider };
