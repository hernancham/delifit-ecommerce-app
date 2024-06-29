import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
// import GitHub from "next-auth/providers/github"
// import Google from "next-auth/providers/google"

import { CredentialsSchema } from "./SchemaAuth";
import { getUsuarioPorTelefono } from "@/actions/auth/get-user";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  // adapter: PrismaAdapter(prisma),
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
      name: "Credentials",
      credentials: {
        telefono: { label: "Telefono", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const parsedCredentials = CredentialsSchema.safeParse(credentials);
          if (parsedCredentials.success) {
            const { telefono, password } = parsedCredentials.data;
            const user = await getUsuarioPorTelefono(telefono);
            if (!user || !user?.password) return null;
            const passwordsMatch = await bcrypt.compare(
              password,
              user.password
            );
            if (passwordsMatch)
              return {
                userId: user.id_usuario,
                userRole: user.rol,
                userPhone: user.telefono,
              };
          }
          console.log("Invalid credentials");
          return null;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
});
