import { z } from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const formSchema = z.object({
  nombre: z
    .string()
    .min(2, "Debe tener al menos 2 caracteres")
    .max(50, "Debe tener menos de 50 caracteres"),
  id_categoria: z.coerce.number().positive(),
  cantidad: z.coerce.number().positive(),
  medida: z.string(),
  file_image: z
    .any()
    .optional()
    .refine(
      (file) => !file || file?.size < MAX_FILE_SIZE,
      "La imagen debe pesar menos de 7MB"
    )
    .refine(
      (file) => !file || ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Solo se permiten formatos .jpg, .jpeg, .png y .webp."
    ),
});

export type formType = z.infer<typeof formSchema>;
