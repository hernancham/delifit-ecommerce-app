// Este archivo contiene las rutas de la aplicación que requieren autenticación y autorización.

export const defaultRoute: string = "/";

export const apiAuthRoute: string = "/api/auth";
export const loginRoute: string = "/login";
export const registerRoute: string = "/register";

export const publicRoutes: string[] = [
  "/",
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
];

// solo los usuarios autenticados pueden acceder a las rutas y subrutas protegidas
export const protectedRoutes: string[] = ["/mi-cuenta"];

// solo los usuarios con el rol de ADMIN pueden acceder a las rutas y subrutas privadas
export const privateRoutes: string[] = ["/dashboard"];
