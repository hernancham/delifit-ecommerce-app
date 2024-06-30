import { z } from "zod";

export const formSchema = z.object({
  nombre: z
    .string()
    .min(2, "Debe tener al menos 2 caracteres")
    .max(50, "Debe tener menos de 50 caracteres"),
});

export type formType = z.infer<typeof formSchema>;
