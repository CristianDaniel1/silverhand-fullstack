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
      const user = await new RegisterUser(this.userRepository).execute(userDto);
      const { token, ...userRes } = user;

      CookieParserAdapter.generateCookie(token, res);
      res.status(201).json(userRes);
    } catch (error: unknown) {
      this.handleError(res, error);
    }
  };

  public loginUser = async (req: Request, res: Response) => {
    const userDto = LoginUserDto.create(req.body);
    try {
      const user = await new LoginUser(this.userRepository).execute(userDto);

      const { token, ...userRes } = user;
      CookieParserAdapter.generateCookie(token, res);
      res.status(200).json(userRes);
    } catch (error: unknown) {
      this.handleError(res, error);
    }
  };
}
