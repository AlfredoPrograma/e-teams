import { useMutation } from "@tanstack/react-query";
import { Button } from "components/Button";
import { Textfield } from "components/Textfield";
import { APP_ROUTES } from "constants/APP_ROUTES";
import { FormCard } from "modules/Auth/components/FormCard";
import { useRegisterHandlers } from "modules/Auth/hooks/useRegisterHandlers";
import { FormEvent, useState } from "react";
import { registerWithCredentials } from "services/supabase/auth";

interface RegisterFormInterface {
  email: string;
  password: string;
  repeatedPassword: string;
}

const INITIAL_FORM_DATA: RegisterFormInterface = {
  email: "",
  password: "",
  repeatedPassword: "",
};
const RegisterPage = () => {
  const [formData, setFormData] =
    useState<RegisterFormInterface>(INITIAL_FORM_DATA);

  const { handleRedirectToVerify, handleError } = useRegisterHandlers();
  const { mutate: registerMutation, isLoading } = useMutation(
    registerWithCredentials,
    {
      onSuccess: (response) => handleRedirectToVerify(response, formData.email),
      onError: (error) => handleError(error),
    },
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { repeatedPassword, email, password } = formData;

    if (repeatedPassword !== password) {
      return;
    }

    registerMutation({ email, password });
  };

  return (
    <FormCard
      title="Create account"
      footerText="Already has an account?"
      footerLinkText="Sign in"
      footerLinkTo={APP_ROUTES.AUTH.INDEX}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Textfield
          label="E-mail"
          type="email"
          placeholder="E-mail"
          id="register-page-email"
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, email: event.target.value }))
          }
          name="email"
          value={formData.email}
          leftAddon={<i className="fas fa-envelope" />}
        />

        <Textfield
          label="Password"
          id="register-page-password"
          type="password"
          placeholder="******"
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, password: event.target.value }))
          }
          name="password"
          value={formData.password}
          leftAddon={<i className="fas fa-lock" />}
        />

        <Textfield
          label="Repeat password"
          id="register-page-repeat-password"
          type="password"
          placeholder="******"
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              repeatedPassword: e.target.value,
            }))
          }
          name="repeatedPassword"
          value={formData.repeatedPassword}
          leftAddon={<i className="fas fa-lock" />}
        />

        <Button disabled={isLoading} isLoading={isLoading} includeSpinner>
          Create
        </Button>
      </form>
    </FormCard>
  );
};

export default RegisterPage;
