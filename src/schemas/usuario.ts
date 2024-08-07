import { z } from "zod";
import { TipoDocumento, UserRole } from "@prisma/client";
import { ROLES, TIPOS_DOCUMENTO } from "@/constants/prisma";

const regexNumeroPeru = /^(9\d{8})$/;

export const createUsuarioSchema = z
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
    image: z.string().url("El campo imagen debe ser una URL válida"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export type createUsuarioType = z.infer<typeof createUsuarioSchema>;

export const updateUsuarioSchema = z.object({
  nombre: z
    .string()
    .min(2, "Debe tener al menos 2 caracteres")
    .max(40, "Debe tener menos de 40 caracteres")
    .optional(),
  apellido: z
    .string()
    .min(2, "Debe tener al menos 2 caracteres")
    .max(40, "Debe tener menos de 40 caracteres")
    .optional(),
  email: z
    .string()
    .email("El campo email debe ser un email válido")
    .min(8, "Debe tener al menos 8 caracteres")
    .max(40, "Debe tener menos de 40 caracteres")
    .optional(),
  telefono: z
    .string()
    .length(9, "Debe tener 9 caracteres")
    .refine(
      (data) => regexNumeroPeru.test(data),
      "El campo teléfono debe ser un número válido"
    )
    .optional(),
  documento: z
    .string()
    .min(4, "Debe tener al menos 4 caracteres")
    .max(20, "Debe tener menos de 20 caracteres")
    .optional(),
  tipo_doc: z
    .custom<TipoDocumento>((value) => {
      return TIPOS_DOCUMENTO.includes(value);
    })
    .optional(),
  image: z.string().url("El campo imagen debe ser una URL válida").optional(),
});

export type updateUsuarioType = z.infer<typeof updateUsuarioSchema>;

export const updateRolUsuarioSchema = z.object({
  rol: z.custom<UserRole>((value: string) => {
    return ROLES.includes(value);
  }),
});

export type updateRolUsuarioType = z.infer<typeof updateRolUsuarioSchema>;

export const updateEstadoUsuarioSchema = z.object({
  activo: z.boolean(),
});

export type updateEstadoUsuarioType = z.infer<typeof updateEstadoUsuarioSchema>;

export const updatePuntosUsuarioSchema = z.object({
  puntos: z
    .number()
    .int()
    .min(-2147483648, "Mínimo valor -2147483648")
    .max(2147483647, "Máximo valor 2147483647"),
});

export type updatePuntosUsuarioType = z.infer<typeof updatePuntosUsuarioSchema>;
