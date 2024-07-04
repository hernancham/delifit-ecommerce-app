import { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";
import { UserRole } from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user: {
      userId?: string;
      userRole?: UserRole;
      userPhone?: string;
    } & DefaultSession["user"];
  }

  interface User extends Omit<DefaultUser, "id"> {
    userId?: string;
    userRole?: UserRole;
    userPhone?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    userId?: string;
    userRole?: UserRole;
    userPhone?: string;
  }
}
