import { UserRepository } from '../../../domain/repositories/user.repository';
import { UserResponseDto } from '../dtos/user-response.dto';

export interface GetUserUseCase {
  execute(id: string): Promise<UserResponseDto>;
}

export class GetUser implements GetUserUseCase {
  constructor(private readonly repository: UserRepository) {}

  async execute(id: string): Promise<UserResponseDto> {
    const user = await this.repository.findById(id);
    return UserResponseDto.fromEntity(user);
  }
}
