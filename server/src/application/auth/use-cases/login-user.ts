import { BcryptAdapter } from '../../../config/bcrypt.adapter';
import { JwtAdapter } from '../../../config/jwt.adapter';
import { UserRepository } from '../../../domain/repositories/user.repository';
import { UserResponseDto } from '../../users/dtos/user-response.dto';
import { CustomError } from '../../../shared/errors/custom.error';
import { LoginUserDto } from '../dtos/login-user.dto';

export interface LoginUserUseCase {
  execute(dto: LoginUserDto): Promise<any>;
}

export class LoginUser implements LoginUserUseCase {
  constructor(private readonly repository: UserRepository) {}

  async execute(dto: LoginUserDto): Promise<any> {
    const user = await this.repository.findByEmail(dto.email);

    if (!user)
      throw CustomError.badRequest(
        'Dado(s) fornecido(s) esta(ão) incorreto(s)'
      );

    const isMatching = await BcryptAdapter.compareAsync(
      dto.password,
      user.password
    );
    if (!isMatching)
      throw CustomError.badRequest('Usuário ou senha incorretos');

    const token = await JwtAdapter.generateToken({ id: user.id });
    if (!token) throw CustomError.internalServer('Error while creating JWT');

    const userDto = UserResponseDto.fromEntity(user);

    return {
      user: userDto,
      token,
    };
  }
}
