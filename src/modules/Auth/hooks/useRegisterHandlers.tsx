import { AuthResponse } from "@supabase/supabase-js";
import { APP_ROUTES } from "constants/APP_ROUTES";
import { useToast } from "hooks/useToast";
import { useNavigate } from "react-router-dom";

const useRegisterHandlers = () => {
  const {
    handlers: { show },
  } = useToast();
  const navigate = useNavigate();

  const handleRedirectToVerify = (response: AuthResponse, email: string) => {
    if (response.error) {
      // EXAMPLE: HOW TO USE TOAST
      show({
        color: "error",
        message: response.error.message,
      });

      return;
    }

    navigate(
      `${APP_ROUTES.AUTH.INDEX}/${APP_ROUTES.AUTH.VERIFY_REGISTRATION}`,
      { state: { email } },
    );
  };

  const handleError = (error: unknown) => {
    console.log(error);
  };

  return {
    handleRedirectToVerify,
    handleError,
  };
};

export { useRegisterHandlers };
