import { z } from 'zod';

export const ResetPasswordSchema = z.object({
  body: z.object({
    newPassword: z
      .string({
        invalid_type_error: 'Password must be a string',
        required_error: 'Password is required',
      })
      .min(6, 'Password must have at least 6 characters'),
  }),
});
