import { BcryptAdapter } from '../../../config/bcrypt.adapter';
import { UserRepository } from '../../../domain/repositories/user.repository';
import { RegisterUserDto } from '../dtos/register-user.dto';

export interface RegisterUserUseCase {
  execute(dto: RegisterUserDto): Promise<any>;
}

export class RegisterUser implements RegisterUserUseCase {
  constructor(private readonly repository: UserRepository) {}

  async execute(dto: RegisterUserDto): Promise<any> {
    const userDto = { ...dto };
    userDto.password = await BcryptAdapter.hashAsync(dto.password);

    const { password, ...userEntity } = await this.repository.create(userDto);

    return userEntity;
  }
}
