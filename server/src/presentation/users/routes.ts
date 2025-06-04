import { Router } from 'express';
import { UserController } from './controller';
import { validateData } from '../middlewares/validation-data.middleware';

import { UserDatasourceImpl } from '../../infrastructure/datasources/user.datasource.impl';
import { UserRepositoryImpl } from '../../infrastructure/repositories/user.repository.impl';
import { UuidSchema } from '../../shared/schemas/uuid.validator';
import { UpdateUserSchema } from './schemas/update-user.validator';
import { AuthMiddleWare } from '../middlewares/auth.middleware';
import { AuthRolesMiddleware } from '../middlewares/auth-roles.middleware';
import { Role } from '../../domain/entities/user.entity';
import { UserSchema } from './schemas/user.validator';

export class UserRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new UserDatasourceImpl();
    const userRepository = new UserRepositoryImpl(datasource);

    const controller = new UserController(userRepository);

    router.get('/:id', [validateData(UuidSchema)], controller.getUserById);

    router.get(
      '/',
      [AuthRolesMiddleware.authorizeRoles(Role.ADMIN)],
      controller.getUsers
    );

    router.post(
      '/',
      [
        AuthRolesMiddleware.authorizeRoles(Role.ADMIN),
        validateData(UserSchema),
      ],
      controller.createUser
    );

    router.put('/:id', [validateData(UpdateUserSchema)], controller.updateUser);

    router.delete('/:id', [validateData(UuidSchema)], controller.deleteUser);

    return router;
  }
}
