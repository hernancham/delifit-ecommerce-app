import type { NextAuthConfig } from "next-auth";

import { prisma } from "@/lib/prisma";

import { getUsuarioPorTelefono } from "@/actions/auth/get-user";

import { UserRole } from "@prisma/client";

export const authConfig = {
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout",
    error: "/auth/error",
    newUser: "/auth/register",
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
        if (userExists && userExists.activo === false) return false;
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
            /* token.userName = userExists.nombre;
            token.userLastName = userExists.apellido; */
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
