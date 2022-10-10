import { AuthResponse } from "@supabase/supabase-js";
import { APP_ROUTES } from "constants/APP_ROUTES";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const useRegisterHandlers = () => {
  const navigate = useNavigate();

  const handleRedirectToVerify = (response: AuthResponse, email: string) => {
    if (response.error) {
      return console.log(response);
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
