"use server";

import { signIn } from "@/auth";
// config routes
import { defaultRoute } from "@/config/authRoutes";
// errors
import { AuthError } from "next-auth";
// types
import { loginType } from "@/schemas/auth";

export const login = async (values: loginType) => {
  try {
    await signIn("credentials", {
      telefono: values.telefono,
      password: values.password,
      redirect: false,
    });
    return { success: "Te has logueado correctamente" };
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: error.cause?.err?.message };
    }
    return { error: "Error 500" };
  }
};

export const loginProvider = async (provider: string) => {
  await signIn(provider, { redirectTo: defaultRoute });
};
