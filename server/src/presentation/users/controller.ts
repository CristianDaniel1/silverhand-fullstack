import { Request, Response } from 'express';
import { ControllerHandleError } from '../../shared/errors/handle-custom.error';
import { UserRepository } from '../../domain/repositories/user.repository';
import { GetUsers } from '../../application/users/use-cases/get-users';
import { GetUser } from '../../application/users/use-cases/get-user';
import { UpdateUserDto } from '../../application/users/dtos/update-user.dto';
import { UpdateUser } from '../../application/users/use-cases/update-user';
import { DeleteUser } from '../../application/users/use-cases/delete-user';

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

  public updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    const updatedUserDto = UpdateUserDto.create({
      ...req.body,
      id,
    });

    try {
      const user = await new UpdateUser(this.userRepository).execute(
        updatedUserDto
      );
      res.json(user);
    } catch (error: unknown) {
      this.handleError(res, error);
    }
  };

  public deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const user = await new DeleteUser(this.userRepository).execute(id);
      res.json(user);
    } catch (error: unknown) {
      this.handleError(res, error);
    }
  };
}
