import { z } from 'zod';

export const RegisterSchema = z
  .object({
    name: z.string().min(4, 'Nome precisa ter pelo menos 4 caracteres'),
    email: z.string().email('E-mail inválido'),
    cpf: z
      .string({ coerce: true })
      .min(11, 'CPF tem que ter exatamente 11 digitos')
      .max(11, 'CPF tem que ter exatamente 11 digitos'),
    phoneNumber: z
      .string({ coerce: true })
      .min(8, 'Telefone/celular tem que ter pelo menos 8 digitos')
      .or(z.literal(''))
      .optional(),
    password: z
      .string()
      .min(6, 'Senha precisa ter pelo menos 6 dígitos')
      .max(40, 'Senha muito longa'),
    confirmPassword: z
      .string()
      .min(6, 'Senha precisa ter pelo menos 6 dígitos')
      .max(40, 'Senha muito longa'),
    zipCode: z
      .string({ coerce: true })
      .min(8, 'CEP tem que ter exatamente 8 digitos')
      .max(8, 'CEP tem que ter exatamente 8 digitos'),
    address: z.string().min(1, 'Endereço é obrigatório').max(255),
    profilePic: z.string().url('A foto precisa ser uma URL válida').optional(),
    role: z.enum(['USER_ROLE', 'ADMIN_ROLE']).optional(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  });

export type RegisterType = z.infer<typeof RegisterSchema>;
