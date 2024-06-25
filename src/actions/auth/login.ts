"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/auth/auth.routes";

interface loginType {
  telefono: string;
  password: string;
  callbackUrl?: string | null;
}

export const login = async (values: loginType) => {
  try {
    await signIn("credentials", {
      telefono: values.telefono,
      password: values.password,
      redirectTo: values.callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
    return "Todo salio bien";
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Credenciales invalidas.";
        default:
          return "Ocurrio un error inesperado.";
      }
    }
    throw error;
  }
};
