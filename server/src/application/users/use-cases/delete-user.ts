import { Role, UserEntity } from '../../../domain/entities/user.entity';
import { UserRepository } from '../../../domain/repositories/user.repository';
import { UserResponseDto } from '../../../presentation/users/dtos/user-response.dto';
import { CustomError } from '../../../shared/errors/custom.error';

export interface DeleteUserUseCase {
  execute(id: string, loggedUser?: UserEntity): Promise<UserResponseDto>;
}

export class DeleteUser implements DeleteUserUseCase {
  constructor(private readonly repository: UserRepository) {}

  async execute(id: string, loggedUser?: UserEntity): Promise<UserResponseDto> {
    if (loggedUser?.role !== Role.ADMIN && loggedUser?.id !== id)
      throw CustomError.forbidden('Ação não permitida');

    const user = await this.repository.deleteById(id);
    return UserResponseDto.fromEntity(user);
  }
}
