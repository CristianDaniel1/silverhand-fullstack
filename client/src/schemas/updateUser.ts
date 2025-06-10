import { z } from 'zod';

export const UpdateUserSchema = z.object({
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
    .max(40, 'Senha muito longa')
    .optional(),
  zipCode: z
    .number({ coerce: true })
    .int()
    .min(10000000, 'CEP tem que ter exatamente 8 digitos')
    .max(99999999, 'CEP tem que ter exatamente 8 digitos'),
  address: z.string().min(1, 'Endereço é obrigatório').max(255),
  profilePic: z.string().url('A foto precisa ser uma URL válida').optional(),
  role: z.enum(['USER_ROLE', 'ADMIN_ROLE']).optional(),
});

export type UpdateUserType = z.infer<typeof UpdateUserSchema>;
