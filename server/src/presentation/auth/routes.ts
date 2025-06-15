import { Router } from 'express';
import { AuthController } from './auth.controller';
import { validateData } from '../middlewares/validation-data.middleware';
import { UserRepositoryImpl } from '../../infrastructure/repositories/user.repository.impl';
import { UserDatasourceImpl } from '../../infrastructure/datasources/user.datasource.impl';
import { LoginSchema } from './schemas/login-user.validator';
import { RegisterUserSchema } from './schemas/register-user.validator';
import { AuthMiddleWare } from '../middlewares/auth.middleware';
import { EmailService } from '../emails/email.service';
import { RequestPasswordResetSchema } from './schemas/request-password-reset.validator';
import { ResetPasswordSchema } from './schemas/reset-password.validator';

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new UserDatasourceImpl();
    const userRepository = new UserRepositoryImpl(datasource);
    const emailService = new EmailService();

    const controller = new AuthController(userRepository, emailService);

    router.post('/login', [validateData(LoginSchema)], controller.loginUser);
    router.post('/logout', [AuthMiddleWare.validateJWT], controller.logout);

    router.post(
      '/register',
      [validateData(RegisterUserSchema)],
      controller.registerUser
    );

    router.get('/check', [AuthMiddleWare.validateJWT], controller.checkAuth);

    router.post(
      '/request-password-reset',
      [validateData(RequestPasswordResetSchema)],
      controller.requestPasswordReset
    );

    router.post(
      '/reset-password',
      [AuthMiddleWare.validateResetToken, validateData(ResetPasswordSchema)],
      controller.resetPassword
    );

    return router;
  }
}
