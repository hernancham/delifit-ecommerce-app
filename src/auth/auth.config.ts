import type { NextAuthConfig } from "next-auth";

import { getUsuarioPorTelefono } from "@/actions/auth/get-user";
// type
import { UserRole } from "@prisma/client";
// config routes
import { apiAuthRoute, registerRoute, loginRoute } from "@/config/authRoutes";

export const authConfig = {
  secret: process.env.AUTH_SECRET,
  basePath: apiAuthRoute,
  pages: {
    newUser: registerRoute,
    signIn: loginRoute,
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, //30 days
    updateAge: 24 * 60 * 60, //24 hours
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.type === "credentials") {
        const userExists = await getUsuarioPorTelefono(user?.userPhone);
        /* if (userExists && userExists.validacion === false)
          throw Error("Usuario no ha sido Validado"); */
        if (!userExists) {
          return false;
        } else if (userExists.activo === false) {
          return false;
        }
      }
      /* if (account?.provider === "google" || account?.provider === "github") {
        const userExists = await getUserByEmail(profile?.email as string);

        if (userExists && userExists.confirmedEmail === false) {
          throw Error("ConfirmEmail");
        }

        if (userExists && userExists.active === false) return false;

        if (!userExists) {
          let username: string = (profile?.name as string).replace(" ", ".");


          await prisma.user.create({
            data: {
              username,
              email: profile?.email as string,
              active: true,
              confirmedEmail: true,
            },
          });
        }
      } */
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        if (user?.userPhone) {
          const userExists = await getUsuarioPorTelefono(user.userPhone);

          if (userExists) {
            token.userId = userExists.id_usuario;
            token.userRole = userExists.rol as UserRole;
            token.userPhone = userExists.telefono;
          }
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.userId = token.userId;
        session.user.userRole = token.userRole;
        session.user.userPhone = token.userPhone;
      }
      return session;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
