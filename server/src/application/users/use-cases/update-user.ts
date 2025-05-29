import { UserEntity } from '../../../domain/entities/user.entity';
import { UserRepository } from '../../../domain/repositories/user.repository';
import { UpdateUserDto } from '../dtos/update-user.dto';

export interface UpdateUserUseCase {
  execute(dto: UpdateUserDto): Promise<UserEntity>;
}

export class UpdateUser implements UpdateUserUseCase {
  constructor(private readonly repository: UserRepository) {}

  execute(dto: UpdateUserDto): Promise<UserEntity> {
    return this.repository.updateById(dto);
  }
}
