import { z } from "zod";

const getNewUoMSchema = () =>
  z.object({
    unit: z
      .string()
      .trim()
      .min(1, { error: "Unit must be at least one character." })
      .max(3, { error: "Unit cannot be longer than three characters." }),
    name: z
      .string()
      .trim()
      .min(1, { error: "Name must be at least one character." })
      .max(20, { error: "Name cannot be longer than twenty characters." }),
  });

export type NewUoMSchema = z.infer<ReturnType<typeof getNewUoMSchema>>;

export { getNewUoMSchema };
