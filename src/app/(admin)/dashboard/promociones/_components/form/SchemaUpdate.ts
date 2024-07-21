import { z } from "zod";

export const formSchema = z.object({
  nombre: z
    .string()
    .min(2, "Debe tener al menos 2 caracteres")
    .max(40, "Debe tener menos de 40 caracteres"),
  descripcion: z
    .string()
    .min(2, "Debe tener al menos 2 caracteres")
    .max(40, "Debe tener menos de 40 caracteres"),
  precio_base: z.number().positive(),
  precio_oferta: z.number().positive(),
  id_cat_promocion: z.string(),
  img_url: z.string(),
  fecha_inicio: z.date(),
  fecha_fin: z.date(),
  dia_promocion: z.array(z.string()),
});

export type formType = z.infer<typeof formSchema>;
