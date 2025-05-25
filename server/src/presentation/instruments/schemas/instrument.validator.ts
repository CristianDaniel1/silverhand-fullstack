import { z } from 'zod';

export const InstrumentSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Name must be a string',
      required_error: 'Name is required',
    }),
    price: z
      .number({
        invalid_type_error: 'Price must be a number',
        required_error: 'Price is required',
      })
      .positive(),
    stringNum: z
      .number({
        invalid_type_error: 'stringNum must be a number',
        required_error: 'stringNum is required',
      })
      .int()
      .positive(),
    quant: z.number().int().nonnegative(),
    image: z.string().optional(),
    category: z.enum(['guitarra', 'contrabaixo', 'violao'], {
      required_error: 'Category is required',
      invalid_type_error: 'Category must be of type enum category',
    }),
  }),
});
