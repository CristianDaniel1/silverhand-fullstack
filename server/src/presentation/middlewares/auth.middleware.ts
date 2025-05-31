import { NextFunction, Request, Response } from 'express';
import { JwtAdapter } from '../../config/jwt.adapter';
import { prisma } from '../../data/postgres';
import { UserEntity } from '../../domain/entities/user.entity';

declare global {
  namespace Express {
    interface Request {
      user?: UserEntity;
    }
  }
}

export class AuthMiddleWare {
  static async validateJWT(req: Request, res: Response, next: NextFunction) {
    const authorization = req.header('Authorization');

    if (!authorization)
      return res
        .status(401)
        .json({ error: 'Unauthorized - No token provided' });

    if (!authorization.startsWith('Bearer '))
      return res.status(401).json({ error: 'Unauthorized - Invalid token' });

    const token = authorization.split(' ').at(1) || '';

    try {
      const payload = await JwtAdapter.validateToken<{ id: string }>(token);

      if (!payload)
        return res.status(401).json({ error: 'Unauthorized - Invalid token' });

      const user = await prisma.user.findFirst({
        where: { id: payload.id },
      });

      if (!user) return res.status(401).json({ error: 'Invalid token - user' });
      req.user = UserEntity.fromObject(user);

      next();
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
