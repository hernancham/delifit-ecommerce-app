import { z } from "zod";

export const formSchema = z.object({
  cardId: z.string(),
  visibility: z.boolean(),
});

export type formType = z.infer<typeof formSchema>;
