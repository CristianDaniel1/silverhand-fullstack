import { UpdateUserDto } from '../../application/users/dtos/update-user.dto';
import { UserDatasource } from '../../domain/datasources/user.datasource';
import { UserEntity } from '../../domain/entities/user.entity';
import { UserRepository } from '../../domain/repositories/user.repository';

export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly datasource: UserDatasource) {}

  getAll(): Promise<UserEntity[]> {
    return this.datasource.getAll();
  }
  findById(id: string): Promise<UserEntity> {
    return this.datasource.findById(id);
  }
  findByEmail(email: string): Promise<UserEntity> {
    return this.datasource.findByEmail(email);
  }
  findByCpf(cpf: number): Promise<UserEntity> {
    return this.datasource.findByCpf(cpf);
  }
  updateById(updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return this.datasource.updateById(updateUserDto);
  }
  deleteById(id: string): Promise<UserEntity> {
    return this.datasource.deleteById(id);
  }
}
