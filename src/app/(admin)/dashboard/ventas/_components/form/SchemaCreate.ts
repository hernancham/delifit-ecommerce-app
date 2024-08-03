import { z } from "zod";

import { TIPOS_DOCUMENTO } from "@/constants/prisma";

export const formSchema = z
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
    image: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export type formType = z.infer<typeof formSchema>;
