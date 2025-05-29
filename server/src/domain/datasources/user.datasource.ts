import { UpdateUserDto } from '../../application/users/dtos/update-user.dto';
import { UserEntity } from '../entities/user.entity';

export abstract class UserDatasource {
  abstract getAll(): Promise<UserEntity[]>;
  abstract findById(id: string): Promise<UserEntity>;
  abstract findByEmail(email: string): Promise<UserEntity>;
  abstract findByCpf(cpf: number): Promise<UserEntity>;
  abstract updateById(updateUserDto: UpdateUserDto): Promise<UserEntity>;
  abstract deleteById(id: string): Promise<UserEntity>;
}
