import { z } from "zod";

const getNewItemSchema = () =>
  z.object({
    name: z
      .string()
      .trim()
      .min(1, { error: "Name must be at least one character." })
      .max(50, { error: "Name cannot be longer than fifty characters." }),
    sku: z
      .string()
      .trim()
      .length(3, { error: "SKU must be exactly three characters." }),
    category: z
      .string()
      .trim()
      .min(1, { error: "Please choose at least one category." }),
    quantity: z
      .number()
      .nonnegative()
      .gte(1),
    unit: z
      .string()
      .trim()
      .min(1, { error: "Please choose at least one unit." }),
    unitCost: z
      .number()
      .nonnegative(),
    currency: z
      .string()
      .trim(),
    supplier: z
      .string()
      .trim()
      .min(1, { error: "Please choose at least one supplier." }),
  });

export type NewItemSchema = z.infer<ReturnType<typeof getNewItemSchema>>;

export { getNewItemSchema };
