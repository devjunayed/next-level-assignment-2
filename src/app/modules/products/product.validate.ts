import { z } from 'zod';

const ZVariantSchema = z.object({
  type: z.string(),
  value: z.string(),
});

const ZInventorySchema = z.object({
  quantity: z.number().positive().int(),
  inStock: z.boolean(),
});

export const ZProductSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number().positive(),
  category: z.string(),
  inventory: ZInventorySchema,
  tags: z.array(z.string()),
  variants: z.array(ZVariantSchema),
});
