import { z } from 'zod';

export const UpdateItemSchema = z.object({
  body: z.object({
    quantity: z
      .number({
        invalid_type_error: 'Quantity must be a integer number',
        required_error: 'Quantity is required',
      })
      .int()
      .optional(),
  }),
});
