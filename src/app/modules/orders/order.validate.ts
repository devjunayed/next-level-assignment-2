import { z } from 'zod';

const ZOrderSchema = z.object({
  email: z.string().email(),
  productId: z.string(),
  price: z.number(),
  quantity: z.number(),
});

export default ZOrderSchema;
