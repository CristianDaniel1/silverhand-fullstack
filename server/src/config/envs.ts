import { z } from 'zod';

const envSchema = z.object({
  PORT: z.number({ coerce: true }).default(3000),
  PUBLIC_PATH: z.string().default('public'),
  ACCEPTED_ORIGINS: z
    .string()
    .default('["http://localhost:3000","http://localhost:5173"]'),
  POSTGRES_URL: z.string(),
  POSTGRES_USER: z.string().default('postgres'),
  POSTGRES_PORT: z.number({ coerce: true }).default(5432),
  POSTGRES_PASSWORD: z.string().min(1, 'postgres password is required'),
  POSTGRES_DB: z.string().min(1, 'database name is required'),
  MAILER_SERVICE: z.string(),
  MAILER_EMAIL: z.string().email(),
  MAILER_SECRET_KEY: z.string(),
  CLOUDINARY_API_KEY: z.string(),
  CLOUDINARY_API_SECRET: z.string(),
  CLOUDINARY_CLOUD_NAME: z.string(),
  JWT_SEED: z.string().min(1, 'JWT SEED is required'),
  NODE_ENV: z.string(),
});

process.loadEnvFile();

const { success, error, data } = envSchema.safeParse(process.env);

if (!success) {
  if (process.env.NODE_ENV !== 'test') {
    console.error('Error envs:', error.format());
    process.exit(1);
  } else {
    console.warn('Warning: invalid envs during test:', error.format());
  }
}

export const {
  PORT,
  PUBLIC_PATH,
  ACCEPTED_ORIGINS,
  POSTGRES_URL,
  POSTGRES_USER,
  POSTGRES_PORT,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  MAILER_SERVICE,
  MAILER_EMAIL,
  MAILER_SECRET_KEY,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
  JWT_SEED,
  NODE_ENV,
} = data!;
