import NextAuth from "next-auth";
import { authConfig } from "@/auth/auth.config";
// auth adapters
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
// routes
import { apiAuthRoute, registerRoute, loginRoute } from "@/config/authRoutes";

export const { handlers, signIn, signOut, auth } = NextAuth({
  // secret: process.env.AUTH_SECRET,
  // basePath: apiAuthRoute,
  // adapter: PrismaAdapter(prisma),
  pages: {
    newUser: registerRoute,
    signIn: loginRoute,
  },
  session: {
    strategy: "jwt",
    // maxAge: 30 * 24 * 60 * 60, //30 days
    // updateAge: 24 * 60 * 60, //24 hours
  },
  callbacks: {
    // jwt() se ejecuta cada vez que se crea o actualiza un token JWT.
    // Aquí es donde puedes agregar información adicional al token.
    async jwt({ token, user }) {
      if (user) {
        token.userId = user.userId;
        token.userRole = user.userRole;
        token.userPhone = user.userPhone;
      }
      return token;
    },
    // session() se utiliza para agregar la información del token a la sesión del usuario,
    // lo que hace que esté disponible en el cliente.
    async session({ session, token }) {
      if (session.user) {
        session.user.userId = token.userId;
        session.user.userRole = token.userRole;
        session.user.userPhone = token.userPhone;
      }
      return session;
    },
  },
  events: {
    // El evento linkAccount se dispara cuando una cuenta (proveedor OAuth: GitHub, Google, Facebook, etc.)  se vincula a un usuario existente en tu base de datos.
    async linkAccount({ user }) {
      /* await prisma.usuario.update({
        where: { id: user.id },
        data: {
          emailVerified: new Date(),
        },
      }); */
    },
  },
  ...authConfig,
});
