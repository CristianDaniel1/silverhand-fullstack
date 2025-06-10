import { z } from 'zod';

export const LoginSchema = z.object({
  email: z
    .string({ required_error: 'E-mail é obrigatório' })
    .email('E-mail inválido'),
  password: z
    .string({ required_error: 'Senha é obrigatória' })
    .min(6, 'Senha precisa ter pelo menos 6 dígitos')
    .max(40, 'Também não exagera né'),
});

export type LoginType = z.infer<typeof LoginSchema>;
