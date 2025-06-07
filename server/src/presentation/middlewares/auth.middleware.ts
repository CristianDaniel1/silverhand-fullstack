import { NextFunction, Request, Response } from 'express';
import { JwtAdapter } from '../../config/jwt.adapter';
import { prisma } from '../../data/postgres';
import { UserEntity } from '../../domain/entities/user.entity';

export class AuthMiddleWare {
  static async validateJWT(req: Request, res: Response, next: NextFunction) {
    let token = req.cookies['access_token'];

    if (!token) {
      const authorization = req.header('Authorization');
      if (!authorization || !authorization.startsWith('Bearer ')) {
        return res
          .status(401)
          .json({ error: 'Unauthorized - No token provided' });
      }
      token = authorization.split(' ').at(1) || '';
    }

    try {
      const payload = await JwtAdapter.validateToken<{ id: string }>(token);
      if (!payload) {
        return res.status(401).json({ error: 'Unauthorized - Invalid token' });
      }

      const user = await prisma.user.findFirst({
        where: { id: payload.id },
      });

      if (!user) {
        return res.status(401).json({ error: 'Invalid token - user' });
      }

      req.user = UserEntity.fromObject(user);
      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
