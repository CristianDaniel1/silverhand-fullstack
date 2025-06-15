import { Response } from 'express';
import { NODE_ENV } from './envs';

export class CookieParserAdapter {
  static generateCookie(token: string, res: Response) {
    res.cookie('access_token', token, {
      httpOnly: true,
      sameSite: 'strict',
      secure: NODE_ENV === 'production',
    });
  }

  static generateCookieWithOptions(
    name: string,
    token: string,
    res: Response,
    options: {
      maxAge?: number;
    }
  ) {
    res.cookie(name, token, {
      httpOnly: true,
      sameSite: 'strict',
      secure: NODE_ENV === 'production',
      maxAge: options.maxAge,
    });
  }
}
