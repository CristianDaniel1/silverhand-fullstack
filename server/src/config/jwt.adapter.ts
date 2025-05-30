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

  static validateToken(token: string) {
    throw new Error('Not implemented');
  }
}
