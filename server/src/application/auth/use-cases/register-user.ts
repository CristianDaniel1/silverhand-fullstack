import { BcryptAdapter } from '../../../config/bcrypt.adapter';
import { JwtAdapter } from '../../../config/jwt.adapter';
import { Role, UserEntity } from '../../../domain/entities/user.entity';
import { UserRepository } from '../../../domain/repositories/user.repository';
import { UserResponseDto } from '../../../presentation/users/dtos/user-response.dto';
import { CustomError } from '../../../shared/errors/custom.error';
import { RegisterUserDto } from '../dtos/register-user.dto';

export interface RegisterUserUseCase {
  execute(dto: RegisterUserDto, loggedUser?: UserEntity): Promise<any>;
}

export class RegisterUser implements RegisterUserUseCase {
  constructor(private readonly repository: UserRepository) {}

  async execute(dto: RegisterUserDto): Promise<any> {
    const userDto = { ...dto };

    userDto.password = await BcryptAdapter.hashAsync(dto.password);

    const user = await this.repository.create(userDto);

    const token = await JwtAdapter.generateToken({ id: user.id });
    if (!token) throw CustomError.internalServer('Erro ao criar JWT');

    const userResponse = UserResponseDto.fromEntity(user);

    return {
      user: userResponse,
      token,
    };
  }
}
