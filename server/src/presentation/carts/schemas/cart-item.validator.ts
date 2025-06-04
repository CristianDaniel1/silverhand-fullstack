import { z } from 'zod';

export const CartItemSchema = z.object({
  body: z.object({
    instrumentId: z
      .number({
        invalid_type_error: 'instrument Id must be a number',
        required_error: 'instrument Id is required',
      })
      .int()
      .nonnegative(),
    quantity: z
      .number({
        invalid_type_error: 'Quantity must be a integer number',
        required_error: 'Quantity is required',
      })
      .int()
      .nonnegative()
      .optional(),
  }),
});
