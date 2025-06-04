import { Role, UserEntity } from '../../../domain/entities/user.entity';
import { UserRepository } from '../../../domain/repositories/user.repository';
import { UserResponseDto } from '../dtos/user-response.dto';
import { CustomError } from '../../../shared/errors/custom.error';
import { UpdateUserDto } from '../dtos/update-user.dto';

export interface UpdateUserUseCase {
  execute(
    dto: UpdateUserDto,
    loggedUser?: UserEntity
  ): Promise<UserResponseDto>;
}

export class UpdateUser implements UpdateUserUseCase {
  constructor(private readonly repository: UserRepository) {}

  async execute(
    dto: UpdateUserDto,
    loggedUser?: UserEntity
  ): Promise<UserResponseDto> {
    if (loggedUser?.role !== Role.ADMIN && loggedUser?.id !== dto.id)
      throw CustomError.forbidden('Ação não permitida');

    const user = await this.repository.updateById(dto);
    return UserResponseDto.fromEntity(user);
  }
}
