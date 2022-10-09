import { useMutation } from "@tanstack/react-query";
import {
  logInWithCredentials,
  registerWithCredentials,
} from "services/supabase/auth";
import { CredentialsInterface } from "../types/Credentials";

const useAuthMutations = () => {
  const logInMutation = useMutation(
    async (credentials: CredentialsInterface) =>
      await logInWithCredentials(credentials),
    {
      useErrorBoundary: true,
    },
  );

  const { mutate: registerMutation } = useMutation(
    async (credentials: CredentialsInterface) =>
      await registerWithCredentials(credentials),
  );

  return {
    logInMutation,
    registerMutation,
  };
};

export { useAuthMutations };
