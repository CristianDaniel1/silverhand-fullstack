import { UserRepository } from '../../../domain/repositories/user.repository';
import { UserResponseDto } from '../../../presentation/users/dtos/user-response.dto';

export interface GetUsersUseCase {
  execute(): Promise<UserResponseDto[]>;
}

export class GetUsers implements GetUsersUseCase {
  constructor(private readonly repository: UserRepository) {}

  async execute(): Promise<UserResponseDto[]> {
    const users = await this.repository.getAll();
    return users.map(user => UserResponseDto.fromEntity(user));
  }
}
