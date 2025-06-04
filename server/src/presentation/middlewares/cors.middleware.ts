import cors from 'cors';
import { ACCEPTED_ORIGINS } from '../../config/envs';

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      const acceptedOriginsFormatted = JSON.parse(acceptedOrigins);

      if (acceptedOriginsFormatted.includes(origin))
        return callback(null, true);

      return callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
  });
