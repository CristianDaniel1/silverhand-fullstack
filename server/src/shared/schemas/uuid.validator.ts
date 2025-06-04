import { z } from 'zod';

export const UuidSchema = z.object({
  params: z.object({
    id: z.string().uuid('UUID inválido. Deve estar no formato padrão'),
  }),
});
