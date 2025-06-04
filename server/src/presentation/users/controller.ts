import { Request, Response } from 'express';
import { ControllerHandleError } from '../../shared/errors/handle-custom.error';
import { UserRepository } from '../../domain/repositories/user.repository';
import { CreateUserDto } from '../../application/users/dtos/create-user.dto';
import { UpdateUserDto } from '../../application/users/dtos/update-user.dto';
import {
  CreateUser,
  GetUser,
  GetUsers,
  UpdateUser,
  DeleteUser,
} from '../../application/users/use-cases';

export class UserController extends ControllerHandleError {
  constructor(private readonly userRepository: UserRepository) {
    super();
  }

  public getUsers = async (req: Request, res: Response) => {
    try {
      const users = await new GetUsers(this.userRepository).execute();
      res.json(users);
    } catch (error: unknown) {
      this.handleError(res, error);
    }
  };

  public getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const user = await new GetUser(this.userRepository).execute(id);
      res.json(user);
    } catch (error: unknown) {
      this.handleError(res, error);
    }
  };

  public createUser = async (req: Request, res: Response) => {
    const instrumentDto = CreateUserDto.create(req.body);

    try {
      const instrument = await new CreateUser(this.userRepository).execute(
        instrumentDto
      );
      res.status(201).json(instrument);
    } catch (error: unknown) {
      this.handleError(res, error);
    }
  };

  public updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const loggedUser = req.user;

    const updatedUserDto = UpdateUserDto.create({
      ...req.body,
      id,
    });

    try {
      const user = await new UpdateUser(this.userRepository).execute(
        updatedUserDto,
        loggedUser
      );
      res.json(user);
    } catch (error: unknown) {
      this.handleError(res, error);
    }
  };

  public deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const loggedUser = req.user;

    try {
      const user = await new DeleteUser(this.userRepository).execute(
        id,
        loggedUser
      );
      res.json(user);
    } catch (error: unknown) {
      this.handleError(res, error);
    }
  };
}
