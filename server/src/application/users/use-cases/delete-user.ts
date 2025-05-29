import { UserEntity } from '../../../domain/entities/user.entity';
import { UserRepository } from '../../../domain/repositories/user.repository';

export interface DeleteUserUseCase {
  execute(id: string): Promise<UserEntity>;
}

export class DeleteUser implements DeleteUserUseCase {
  constructor(private readonly repository: UserRepository) {}

  execute(id: string): Promise<UserEntity> {
    return this.repository.deleteById(id);
  }
}
