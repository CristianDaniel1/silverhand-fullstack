import { z } from 'zod';

export const UpdateUserSchema = z.object({
  params: z.object({}),
  body: z.object({
    name: z.string().min(2, 'Name must have at least 2 characters').optional(),
    email: z.string().email('Invalid email address').optional(),
    cpf: z
      .number()
      .int()
      .min(10000000000, 'CPF must have exactly 11 digits')
      .max(99999999999, 'CPF must have exactly 11 digits')
      .optional(),
    phoneNumber: z
      .number()
      .int()
      .min(1000000000, 'Phone number must have 10 or 11 digits')
      .max(99999999999, 'Phone number must have 10 or 11 digits')
      .optional(),
    password: z
      .string()
      .min(6, 'Password must have at least 6 characters')
      .max(100, 'Password too long')
      .optional(),
    zipCode: z
      .number()
      .int()
      .min(10000000, 'ZIP code must have exactly 8 digits')
      .max(99999999, 'ZIP code must have exactly 8 digits')
      .optional(),
    address: z.string().min(1, 'Address is required').max(255).optional(),
    profilePic: z
      .string()
      .url('Profile picture must be a valid URL')
      .optional(),
    role: z.enum(['USER_ROLE', 'ADMIN_ROLE']).optional(),
  }),
});
