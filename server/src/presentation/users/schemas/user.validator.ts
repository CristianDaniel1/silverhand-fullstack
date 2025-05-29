import { z } from 'zod';

export const UserSchema = z.object({
  body: z
    .object({
      name: z.string().min(4, 'Name must have at least 4 characters'),
      email: z.string().email('Invalid email address'),
      cpf: z
        .number()
        .int()
        .min(10000000000, 'CPF must have exactly 11 digits')
        .max(99999999999, 'CPF must have exactly 11 digits'),
      phoneNumber: z
        .number()
        .int()
        .min(1000000000, 'Phone number must have 10 or 11 digits')
        .max(99999999999, 'Phone number must have 10 or 11 digits'),
      password: z.string().min(6, 'Password must have at least 6 characters'),
      confirmPassword: z.string(),
      zipCode: z
        .number()
        .int()
        .min(10000000, 'ZIP code must have exactly 8 digits')
        .max(99999999, 'ZIP code must have exactly 8 digits'),
      address: z.string().min(1, 'Address is required').max(255),
      profilePic: z.string().optional(),
      role: z.enum(['ADMIN_ROLE', 'USER_ROLE']).optional(),
    })
    .refine(data => data.password === data.confirmPassword, {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    }),
  params: z.object({
    id: z.string().uuid('UUID inválido. Deve estar no formato padrão'),
  }),
});
