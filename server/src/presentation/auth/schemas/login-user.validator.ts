import { z } from 'zod';

export const LoginSchema = z.object({
  body: z.object({
    email: z
      .string({ required_error: 'Email is required' })
      .email('Invalid email address'),
    password: z
      .string({
        invalid_type_error: 'Password must be a string',
        required_error: 'Password is required',
      })
      .min(6, 'Password must have at least 6 characters'),
    role: z.enum(['ADMIN_ROLE', 'USER_ROLE']).optional(),
  }),
});
