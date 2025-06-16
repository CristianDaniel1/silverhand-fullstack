import { string, z } from 'zod';

export const UpdateUserSchema = z.object({
  body: z.object({
    name: z.string().min(2, 'Name must have at least 4 characters').optional(),
    email: z.string().email('Invalid email address').optional(),
    cpf: z.string().optional(),
    phoneNumber: z.string().optional(),
    password: z
      .string()
      .min(6, 'Password must have at least 6 characters')
      .max(100, 'Password too long')
      .optional(),
    zipCode: z
      .string()
      .min(8, 'ZIP code must have exactly 8 digits')
      .max(8, 'ZIP code must have exactly 8 digits')
      .optional(),
    address: z.string().min(1, 'Address is required').max(255).optional(),
    profilePic: z
      .string()
      .url('Profile picture must be a valid URL')
      .optional(),
    role: z.enum(['USER_ROLE', 'ADMIN_ROLE']).optional(),
  }),
  params: z.object({
    id: z
      .string({ required_error: 'id of user is required' })
      .uuid('UUID inválido. Deve estar no formato padrão'),
  }),
});
