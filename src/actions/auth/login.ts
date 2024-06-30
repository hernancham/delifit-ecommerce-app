"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";

// config routes
import { defaultRoute } from "@/config/authRoutes";

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
      redirectTo: values.callbackUrl ?? defaultRoute,
    });
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
  revalidatePath(values.callbackUrl ?? defaultRoute);
};

export const loginProvider = async (provider: string) => {
  await signIn(provider, { redirectTo: "/" });
  revalidatePath("/");
};
