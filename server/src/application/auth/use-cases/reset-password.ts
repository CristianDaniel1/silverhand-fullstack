import { UserRepository } from '../../../domain/repositories/user.repository';
import { CustomError } from '../../../shared/errors/custom.error';
import { BcryptAdapter } from '../../../config/bcrypt.adapter';

export interface ResetPasswordUseCase {
  execute(email: string, newPassword: string, token: string): Promise<void>;
}

export class ResetPassword implements ResetPasswordUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async execute(
    email: string,
    newPassword: string,
    token: string
  ): Promise<void> {
    const user = await this.userRepository.findByEmail(email);

    if (!user || !user.resetToken || !user.resetTokenExpiresAt) {
      throw CustomError.unauthorized(
        'Token de recuperação inválido ou expirado'
      );
    }

    const now = new Date();
    if (user.resetToken !== token || now > user.resetTokenExpiresAt) {
      throw CustomError.unauthorized('Token inválido ou expirado');
    }

    const hashedPassword = await BcryptAdapter.hashAsync(newPassword);
    await Promise.all([
      this.userRepository.updatePassword(email, hashedPassword),
      this.userRepository.clearResetToken(email),
    ]);
  }
}
