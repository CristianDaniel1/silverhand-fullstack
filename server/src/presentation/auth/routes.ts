import { Router } from 'express';
import { AuthController } from './auth.controller';
import { validateData } from '../middlewares/validation-data.middleware';
import { UserRepositoryImpl } from '../../infrastructure/repositories/user.repository.impl';
import { UserDatasourceImpl } from '../../infrastructure/datasources/user.datasource.impl';
import { LoginSchema } from './schemas/login-user.validator';
import { RegisterUserSchema } from './schemas/register-user.validator';
import { AuthMiddleWare } from '../middlewares/auth.middleware';

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new UserDatasourceImpl();
    const userRepository = new UserRepositoryImpl(datasource);
    const controller = new AuthController(userRepository);

    router.post('/login', [validateData(LoginSchema)], controller.loginUser);
    router.post(
      '/register',
      [validateData(RegisterUserSchema)],
      controller.registerUser
    );

    router.get('/check', [AuthMiddleWare.validateJWT], controller.checkAuth);

    return router;
  }
}
