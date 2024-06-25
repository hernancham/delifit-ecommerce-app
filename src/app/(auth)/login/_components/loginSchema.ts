import { z } from "zod";

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
