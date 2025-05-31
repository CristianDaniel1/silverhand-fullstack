import { UserRepository } from '../../../domain/repositories/user.repository';
import { UserResponseDto } from '../../../presentation/users/dtos/user-response.dto';
import { CreateUserDto } from '../dtos/create-user.dto';

export interface CreateUserUseCase {
  execute(dto: CreateUserDto): Promise<UserResponseDto>;
}

export class CreateUser implements CreateUserUseCase {
  constructor(private readonly repository: UserRepository) {}

  execute(dto: CreateUserDto): Promise<UserResponseDto> {
    return this.repository.create(dto);
  }
}
