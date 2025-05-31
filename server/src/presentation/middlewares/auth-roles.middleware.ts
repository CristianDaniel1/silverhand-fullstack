import { NextFunction, Request, Response } from 'express';
import { Role } from '../../domain/entities/user.entity';

export class AuthRolesMiddleware {
  static authorizeRoles(...allowedRoles: Role[]) {
    return (req: Request, res: Response, next: NextFunction) => {
      const user = req.user;
      if (user && !allowedRoles.includes(user.role)) {
        return res.status(403).json({ error: 'Acesso negado' });
      }
      next();
    };
  }
}
