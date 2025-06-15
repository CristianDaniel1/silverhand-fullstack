import { Response } from 'express';
import { CookieParserAdapter } from '../../../config/cookie-parser.adapter';
import { UserRepository } from '../../../domain/repositories/user.repository';
import { EmailService } from '../../../presentation/emails/email.service';
import { CustomError } from '../../../shared/errors/custom.error';
import { resetPasswordEmail } from '../../../shared/templates/request-password';

export interface RequestPasswordResetUseCase {
  execute(email: string, res: Response): Promise<void>;
}

export class RequestPasswordReset implements RequestPasswordResetUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly emailService: EmailService
  ) {}

  public async execute(email: string, res: Response): Promise<void> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) throw CustomError.notFound('Usuário não encontrado');

    const resetToken = crypto.randomUUID();
    const expiresAt = new Date(Date.now() + 1000 * 60 * 30);

    await this.userRepository.updateResetTokenByEmail(
      email,
      resetToken,
      expiresAt
    );

    CookieParserAdapter.generateCookieWithOptions(
      'reset_token',
      resetToken,
      res,
      { maxAge: 1000 * 60 * 30 }
    );

    const resetLink = `http://localhost:5173/reset-senha`;

    const emailSended = await this.emailService.sendEmail({
      to: user.email,
      subject: 'Recuperação de senha',
      htmlBody: resetPasswordEmail(user.name, resetLink),
    });

    if (!emailSended)
      throw CustomError.internalServer('Erro ao enviar o e-mail');
  }
}
