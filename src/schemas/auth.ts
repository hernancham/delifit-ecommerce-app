import { z } from "zod";
import { TipoDocumento, UserRole } from "@prisma/client";
import { ROLES, TIPOS_DOCUMENTO } from "@/constants/prisma";

const regexNumeroPeru = /^(9\d{8})$/;

// register usuario Schema

export const registerSchema = z
  .object({
    nombre: z
      .string()
      .min(2, "Debe tener al menos 2 caracteres")
      .max(40, "Debe tener menos de 40 caracteres"),
    apellido: z
      .string()
      .min(2, "Debe tener al menos 2 caracteres")
      .max(40, "Debe tener menos de 40 caracteres"),
    email: z
      .string()
      .email("El campo email debe ser un email válido")
      .min(8, "Debe tener al menos 8 caracteres")
      .max(40, "Debe tener menos de 40 caracteres"),
    telefono: z
      .string()
      .length(9, "Debe tener 9 caracteres")
      .refine(
        (data) => regexNumeroPeru.test(data),
        "El campo teléfono debe ser un número válido"
      ),
    documento: z
      .string()
      .min(4, "Debe tener al menos 4 caracteres")
      .max(20, "Debe tener menos de 20 caracteres"),
    tipo_doc: z.custom<TipoDocumento>((value) => {
      return TIPOS_DOCUMENTO.includes(value);
    }),
    password: z
      .string()
      .min(8, "Debe tener al menos 8 caracteres")
      .max(40, "Debe tener menos de 40 caracteres"),
    confirmPassword: z
      .string()
      .min(8, "Debe tener al menos 8 caracteres")
      .max(40, "Debe tener menos de 40 caracteres"),
    image: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export type registerType = z.infer<typeof registerSchema>;

// login usuario Schema

export const loginSchema = z.object({
  telefono: z
    .string()
    .min(8, "Debe tener al menos 8 caracteres")
    .max(20, "Debe tener menos de 16 caracteres"),
  password: z
    .string()
    .min(8, "Debe tener al menos 8 caracteres")
    .max(40, "Debe tener menos de 40 caracteres"),
});

export type loginType = z.infer<typeof loginSchema>;

// resetPassword usuario Schema

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Debe tener al menos 8 caracteres")
      .max(40, "Debe tener menos de 40 caracteres"),
    confirmPassword: z
      .string()
      .min(8, "Debe tener al menos 8 caracteres")
      .max(40, "Debe tener menos de 40 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export type resetPasswordType = z.infer<typeof resetPasswordSchema>;
