export class ResetPasswordDto {
  constructor(
    public readonly token: string,
    public readonly newPassword: string
  ) {}

  static create(token: string, newPassword: string) {
    if (!token || typeof token !== 'string') {
      throw new Error('Token inválido.');
    }

    if (!newPassword || newPassword.length < 6) {
      throw new Error('A nova senha deve ter pelo menos 6 caracteres.');
    }

    return new ResetPasswordDto(token, newPassword);
  }
}
