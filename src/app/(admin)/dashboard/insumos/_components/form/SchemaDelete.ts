import { z } from "zod";

export const formSchema = z.object({
  cardId: z.string(),
});

export type formType = z.infer<typeof formSchema>;
