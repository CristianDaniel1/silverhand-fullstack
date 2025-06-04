import { z } from 'zod';

export const IdSchema = z.object({
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
