import { ToastContext } from "context/ToastContext";
import { useContext } from "react";

const useToast = () => {
  const toastData = useContext(ToastContext);

  if (!toastData) {
    throw new Error("useToast must be used within a ToastContextProvider");
  }

  return toastData;
};

export { useToast };
