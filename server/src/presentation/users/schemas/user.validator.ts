import { z } from 'zod';

export const UserSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Name must be a string',
        required_error: 'Name is required',
      })
      .min(4, 'Name must have at least 4 characters'),
    email: z
      .string({ required_error: 'Email is required' })
      .email('Invalid email address'),
    cpf: z.string({ required_error: 'CPF is required' }),
    phoneNumber: z.string().optional(),
    password: z
      .string({
        invalid_type_error: 'Password must be a string',
        required_error: 'Password is required',
      })
      .min(6, 'Password must have at least 6 characters'),
    zipCode: z
      .string({ required_error: 'zipCode is required' })
      .min(8, 'ZIP code must have exactly 8 digits')
      .max(8, 'ZIP code must have exactly 8 digits'),
    address: z
      .string({
        invalid_type_error: 'Address must be a string',
        required_error: 'Address is required',
      })
      .min(1)
      .max(255),
    profilePic: z
      .string()
      .url('Profile picture must be a valid URL')
      .optional(),
    role: z.enum(['ADMIN_ROLE', 'USER_ROLE']).optional(),
  }),
});
