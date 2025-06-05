import { z } from 'zod';

export const PaginationSchema = z.object({
  query: z.object({
    page: z.number({ coerce: true }).int().nonnegative().optional(),
    limit: z.number({ coerce: true }).int().nonnegative().optional(),
    category: z.enum(['GUITARRA', 'CONTRABAIXO', 'VIOLAO']).optional(),
    stringNum: z.number({ coerce: true }).nonnegative().optional(),
    search: z.string().optional(),
  }),
});
