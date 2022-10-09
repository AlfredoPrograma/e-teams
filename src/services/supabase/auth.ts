import { CredentialsInterface } from "modules/Auth/types/Credentials";
import { supabaseClient } from "./client";

const { auth: supabaseAuth } = supabaseClient;

const logInWithCredentials = async (credentials: CredentialsInterface) =>
  await supabaseAuth.signInWithPassword(credentials);

const registerWithCredentials = async (credentials: CredentialsInterface) => {
  await supabaseAuth.signUp(credentials);
};

export { logInWithCredentials, registerWithCredentials };
