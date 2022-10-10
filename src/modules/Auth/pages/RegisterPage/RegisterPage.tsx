import { Button } from "components/Button";
import { Textfield } from "components/Textfield";
import { APP_ROUTES } from "constants/APP_ROUTES";
import { FormCard } from "modules/Auth/components/FormCard";
import { useAuthMutations } from "modules/Auth/hooks/useAuthMutations";
import { FormEvent, useState } from "react";
import { redirect } from "react-router-dom";

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
  const { registerMutation } = useAuthMutations();
  const [formData, setFormData] =
    useState<RegisterFormInterface>(INITIAL_FORM_DATA);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { repeatedPassword, email, password } = formData;

    if (repeatedPassword !== password) {
      return;
    }

    try {
      await registerMutation({ email, password });
      redirect(APP_ROUTES.AUTH.INDEX);
    } catch (error) {
      console.log(error);
    }

    console.log(formData);
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

        <Button>Create</Button>
      </form>
    </FormCard>
  );
};
export default RegisterPage;
