import { Request, Response } from 'express';
import { ControllerHandleError } from '../../shared/errors/handle-custom.error';
import { UserRepository } from '../../domain/repositories/user.repository';
import { RegisterUserDto } from '../../application/auth/dtos/register-user.dto';
import { RegisterUser } from '../../application/auth/use-cases/register-user';
import { LoginUserDto } from '../../application/auth/dtos/login-user.dto';
import { LoginUser } from '../../application/auth/use-cases/login-user';
import { CookieParserAdapter } from '../../config/cookie-parser.adapter';

export class AuthController extends ControllerHandleError {
  constructor(private readonly userRepository: UserRepository) {
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
      const { user } = req.body;
      const { id, email, name, role } = user;

      res.status(200).json({ id, email, name, role });
    } catch (error: unknown) {
      this.handleError(res, error);
    }
  };
}
