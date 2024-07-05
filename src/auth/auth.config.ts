import type { NextAuthConfig } from "next-auth";
import bcrypt from "bcryptjs";
// metodos de autenticación
import Credentials from "next-auth/providers/credentials";
// import Google from "next-auth/providers/google"
// import GitHub from "next-auth/providers/github"

// esquema de validación
import { loginSchema } from "@/schemas/auth";
// actions
import { getUsuarioPorTelefono } from "@/actions/auth/get-user";
// errors
import { LoginAuthError } from "@/auth/error";

export const authConfig = {
  providers: [
    /* Google({
      clientId: env.AUTH_GOOGLE_ID,
      clientSecret: env.AUTH_GOOGLE_SECRET,
    }),
    GitHub({
      clientId: env.AUTH_GITHUB_ID,
      clientSecret: env.AUTH_GITHUB_SECRET,
    }), */
    Credentials({
      authorize: async (credentials) => {
        try {
          const { success, data } = loginSchema.safeParse(credentials);
          if (!success) throw new LoginAuthError("Credenciales inválidas");

          const user = await getUsuarioPorTelefono(data.telefono);
          if (!user) throw new LoginAuthError("Credenciales inválidas");

          const isMatch = await bcrypt.compare(data.password, user.password);
          if (!isMatch) throw new LoginAuthError("Credenciales inválidas");

          // revisar logicas de validacion
          if (user.validacion == true)
            throw new LoginAuthError("El usuario no ha sido validado aún");

          return {
            userId: user.id_usuario,
            userRole: user.rol,
            userPhone: user.telefono,
            userImage: user.image,
          };
        } catch (error) {
          if (error instanceof LoginAuthError) throw error;
          throw new Error("Ocurrió un error al intentar iniciar sesión");
        }
      },
    }),
  ],
} satisfies NextAuthConfig;
