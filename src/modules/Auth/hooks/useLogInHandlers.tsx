import { AuthResponse } from "@supabase/supabase-js";
import { APP_ROUTES } from "constants/APP_ROUTES";
import { useToast } from "hooks/useToast";
import { useNavigate } from "react-router-dom";

const useLogInHandlers = () => {
  const navigate = useNavigate();
  const {
    handlers: { show },
  } = useToast();

  const handleLogIn = (response: AuthResponse) => {
    if (response.error) {
      show({
        color: "error",
        message: response.error.message,
        icon: <i className="fas fa-exclamation-triangle" />,
      });

      return;
    }

    navigate(APP_ROUTES.DASHBOARD.INDEX);
  };

  const handleError = () =>
    show({
      color: "error",
      message: "Oops! Something went wrong. Please try again later.",
      icon: <i className="fas fa-exclamation-triangle" />,
    });

  return { handleError, handleLogIn };
};

export { useLogInHandlers };
