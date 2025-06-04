import jwt, { SignOptions } from 'jsonwebtoken';
import { JWT_SEED } from './envs';

const jwtSeed = JWT_SEED;

export class JwtAdapter {
  static async generateToken(payload: any, duration: string = '7d') {
    return new Promise(resolve => {
      jwt.sign(
        payload,
        jwtSeed,
        { expiresIn: duration } as SignOptions,
        (err, token) => {
          if (err) return resolve(null);

          return resolve(token);
        }
      );
    });
  }

  static validateToken<T>(token: string): Promise<T | null> {
    return new Promise(resolve => {
      jwt.verify(token, jwtSeed, (err, decoded) => {
        if (err) return resolve(null);

        resolve(decoded as T);
      });
    });
  }
}
