import { useMutation } from "@tanstack/react-query";
import { Button } from "components/Button";
import { Textfield } from "components/Textfield";
import { APP_ROUTES } from "constants/APP_ROUTES";
import { FormCard } from "modules/Auth/components/FormCard";
import { useLogInHandlers } from "modules/Auth/hooks/useLogInHandlers";
import { CredentialsInterface } from "modules/Auth/types/Credentials";
import { useState, FormEvent } from "react";
import { logInWithCredentials } from "services/supabase/auth";

interface LoginFormInterface extends CredentialsInterface {}

const INITIAL_FORM_DATA: LoginFormInterface = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const { handleError, handleLogIn } = useLogInHandlers();

  const { mutate: loginMutation, isLoading } = useMutation(
    logInWithCredentials,
    {
      onSuccess: handleLogIn,
      onError: handleError,
    },
  );

  const [formData, setFormData] =
    useState<LoginFormInterface>(INITIAL_FORM_DATA);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    loginMutation(formData);
  };
  return (
    <FormCard
      title="Welcome to E-Teams"
      footerText="Don't have an account yet?"
      footerLinkText="Create one!"
      footerLinkTo={APP_ROUTES.AUTH.REGISTER}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Textfield
          label="E-mail"
          type="text"
          placeholder="E-mail"
          id="login-page-email"
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, email: event.target.value }))
          }
          name="email"
          value={formData.email}
          leftAddon={<i className="fas fa-envelope" />}
        />

        <Textfield
          label="Password"
          id="login-page-password"
          type="password"
          placeholder="******"
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, password: event.target.value }))
          }
          name="password"
          value={formData.password}
          leftAddon={<i className="fas fa-lock" />}
        />

        <Button
          variant="contained"
          disabled={isLoading}
          isLoading={isLoading}
          includeSpinner
        >
          Sign in
        </Button>
      </form>
    </FormCard>
  );
};

export default LoginPage;
