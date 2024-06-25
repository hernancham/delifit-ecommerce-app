import { z } from "zod";

import { TipoDocumento } from "@prisma/client";

export const TIPOS_DOCUMENTO = Object.values(TipoDocumento) as [
  string,
  ...string[]
];

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

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
      .email("Email inválido")
      .min(8, "Debe tener al menos 8 caracteres")
      .max(40, "Debe tener menos de 40 caracteres"),
    telefono: z
      .string()
      .min(8, "Debe tener al menos 8 caracteres")
      .max(20, "Debe tener menos de 16 caracteres"),
    documento: z
      .string()
      .min(4, "Debe tener al menos 4 caracteres")
      .max(20, "Debe tener menos de 20 caracteres"),
    tipo_doc: z.enum(TIPOS_DOCUMENTO),
    password: z
      .string()
      .min(8, "Debe tener al menos 8 caracteres")
      .max(40, "Debe tener menos de 40 caracteres"),
    confirmPassword: z
      .string()
      .min(8, "Debe tener al menos 8 caracteres")
      .max(40, "Debe tener menos de 40 caracteres"),
    image_file: z
      .instanceof(File)
      .nullable()
      .optional()
      .refine(
        (file) => !file || file?.size < MAX_FILE_SIZE,
        "La imagen debe pesar menos de 5MB."
      )
      .refine(
        (file) => !file || ACCEPTED_IMAGE_TYPES.includes(file?.type),
        "Solo se permiten formatos .jpg, .jpeg, .png y .webp."
      ),
    image_url: z.string().nullable().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export type registerType = z.infer<typeof registerSchema>;
