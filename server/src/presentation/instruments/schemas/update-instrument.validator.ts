import { z } from 'zod';

export const UpdateInstrumentSchema = z.object({
  body: z.object({
    name: z.string({ invalid_type_error: 'Name must be a string' }).optional(),
    price: z
      .number({ invalid_type_error: 'Price must be a number' })
      .positive()
      .optional(),
    stringNum: z
      .number({ invalid_type_error: 'stringNum must be a number' })
      .int()
      .positive()
      .optional(),
    quant: z.number().int().nonnegative().optional(),
    image: z.string().optional(),
    category: z
      .enum(['guitarra', 'contrabaixo', 'violao'], {
        invalid_type_error: 'Category must be of type enum category',
      })
      .optional(),
  }),
  params: z.object({
    id: z
      .number({
        coerce: true,
        invalid_type_error: 'Id must be a number',
        required_error: 'Id is required',
      })
      .int()
      .nonnegative(),
  }),
});
