"use server";

import { signOut } from "@/auth";
import { defaultRoute } from "@/config/authRoutes";

export const logout = async (redirectTo?: string) => {
  await signOut({ redirectTo: redirectTo || defaultRoute });
};
