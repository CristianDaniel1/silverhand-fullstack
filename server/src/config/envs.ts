import { z } from 'zod';

const envSchema = z.object({
  PORT: z.number({ coerce: true }).default(3000),
  PUBLIC_PATH: z.string().default('public'),

  POSTGRES_URL: z.string(),
  POSTGRES_USER: z.string().default('postgres'),
  POSTGRES_PORT: z.number({ coerce: true }).default(5432),
  POSTGRES_PASSWORD: z.string().min(1, 'postgres password is required'),
  POSTGRES_DB: z.string().min(1, 'database name is required'),
});

process.loadEnvFile();

const { success, error, data } = envSchema.safeParse(process.env);

if (!success) {
  console.error('Error envs:', error.format());
  process.exit(1);
}

export const {
  PORT,
  PUBLIC_PATH,
  POSTGRES_URL,
  POSTGRES_USER,
  POSTGRES_PORT,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
} = data;
