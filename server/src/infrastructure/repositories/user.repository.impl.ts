import { RegisterUserDto } from '../../application/auth/dtos/register-user.dto';
import { UpdateUserDto } from '../../application/users/dtos/update-user.dto';
import { UserDatasource } from '../../domain/datasources/user.datasource';
import { UserEntity } from '../../domain/entities/user.entity';
import { UserRepository } from '../../domain/repositories/user.repository';

export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly datasource: UserDatasource) {}
  create(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    return this.datasource.create(registerUserDto);
  }
  getAll(): Promise<UserEntity[]> {
    return this.datasource.getAll();
  }
  findById(id: string): Promise<UserEntity> {
    return this.datasource.findById(id);
  }
  findByEmail(email: string): Promise<UserEntity> {
    return this.datasource.findByEmail(email);
  }
  findByCpf(cpf: string): Promise<UserEntity> {
    return this.datasource.findByCpf(cpf);
  }
  updateById(updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return this.datasource.updateById(updateUserDto);
  }
  deleteById(id: string): Promise<UserEntity> {
    return this.datasource.deleteById(id);
  }
  updateResetTokenByEmail(
    email: string,
    token: string,
    expiresAt: Date
  ): Promise<void> {
    return this.datasource.updateResetTokenByEmail(email, token, expiresAt);
  }
  updatePassword(email: string, hashedPassword: string): Promise<void> {
    return this.datasource.updatePassword(email, hashedPassword);
  }
  clearResetToken(email: string): Promise<void> {
    return this.datasource.clearResetToken(email);
  }
}
