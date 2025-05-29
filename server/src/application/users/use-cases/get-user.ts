import { UserEntity } from '../../../domain/entities/user.entity';
import { UserRepository } from '../../../domain/repositories/user.repository';

export interface GetUserUseCase {
  execute(id: string): Promise<UserEntity>;
}

export class GetUser implements GetUserUseCase {
  constructor(private readonly repository: UserRepository) {}

  execute(id: string): Promise<UserEntity> {
    return this.repository.findById(id);
  }
}
