import { auth } from "./auth";
// types
import { UserRole } from "@prisma/client";
// config routes
import {
  loginRoute,
  protectedRoutes,
  privateRoutes,
} from "@/config/authRoutes";

export default auth((request) => {
  // obtener la session del usuario
  const session = request.auth;

  // verificar si la ruta actual se encuentra entre las rutas protegida
  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );
  // verificar si la ruta actual se encuentra entre las rutas privadas
  const isPrivate = privateRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  const loginURL = new URL(loginRoute, request.nextUrl.origin);

  if (isPrivate) {
    if (!session || session.user.userRole !== UserRole.ADMIN)
      return Response.redirect(loginURL);
  }
  if (isProtected && !session) return Response.redirect(loginURL);
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
