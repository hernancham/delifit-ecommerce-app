import { describe } from "node:test";
import { z } from "zod";

export const formSchema = z.object({
  nombre: z
    .string()
    .min(2, "Debe tener al menos 2 caracteres")
    .max(50, "Debe tener menos de 50 caracteres"),
  descripcion: z
    .string()
    .min(2, "Debe tener al menos 2 caracteres")
    .max(255, "Debe tener menos de 255 caracteres"),
  precio_base: z.coerce.number().min(1, "Debe ser mayor a 0"),
  id_cat_producto: z.string(),
  img_url: z.string(),
});

export type formType = z.infer<typeof formSchema>;
