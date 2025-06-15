import { Request, Response } from 'express';
import { ControllerHandleError } from '../../shared/errors/handle-custom.error';
import { UserRepository } from '../../domain/repositories/user.repository';
import { RegisterUserDto } from '../../application/auth/dtos/register-user.dto';
import { RegisterUser } from '../../application/auth/use-cases/register-user';
import { LoginUserDto } from '../../application/auth/dtos/login-user.dto';
import { LoginUser } from '../../application/auth/use-cases/login-user';
import { CookieParserAdapter } from '../../config/cookie-parser.adapter';
import { UserResponseDto } from '../../application/users/dtos/user-response.dto';
import { RequestPasswordReset } from '../../application/auth/use-cases/send-request-password-reset';
import { ResetPassword } from '../../application/auth/use-cases/reset-password';
import { EmailService } from '../emails/email.service';

export class AuthController extends ControllerHandleError {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly emailService: EmailService
  ) {
    super();
  }

  public registerUser = async (req: Request, res: Response) => {
    const userDto = RegisterUserDto.create(req.body);
    try {
      const userRegister = await new RegisterUser(this.userRepository).execute(
        userDto
      );
      const { token, user } = userRegister;

      CookieParserAdapter.generateCookie(token, res);
      res.status(201).json(user);
    } catch (error: unknown) {
      this.handleError(res, error);
    }
  };

  public loginUser = async (req: Request, res: Response) => {
    const userDto = LoginUserDto.create(req.body);
    try {
      const userLogin = await new LoginUser(this.userRepository).execute(
        userDto
      );

      const { token, user } = userLogin;
      CookieParserAdapter.generateCookie(token, res);
      res.status(200).json(user);
    } catch (error: unknown) {
      this.handleError(res, error);
    }
  };

  public checkAuth = async (req: Request, res: Response) => {
    try {
      const user = UserResponseDto.fromEntity(req.user!);
      res.status(200).json(user);
    } catch (error: unknown) {
      this.handleError(res, error);
    }
  };

  public logout = async (req: Request, res: Response) => {
    try {
      res
        .clearCookie('access_token')
        .status(200)
        .json({ message: 'Deslogado com sucesso.' });
    } catch (error: unknown) {
      this.handleError(res, error);
    }
  };

  public requestPasswordReset = async (req: Request, res: Response) => {
    const { email } = req.body;

    try {
      await new RequestPasswordReset(
        this.userRepository,
        this.emailService
      ).execute(email, res);
      res
        .status(200)
        .json({ message: 'E-mail de recuperação enviado com sucesso' });
    } catch (error: unknown) {
      this.handleError(res, error);
    }
  };

  public resetPassword = async (req: Request, res: Response) => {
    const { email, newPassword } = req.body;
    const resetToken = req.cookies['reset_token'];

    try {
      await new ResetPassword(this.userRepository).execute(
        email,
        resetToken,
        newPassword
      );
      res.status(200).json({ message: 'Senha atualizada com sucesso' });
    } catch (error: unknown) {
      this.handleError(res, error);
    }
  };
}
