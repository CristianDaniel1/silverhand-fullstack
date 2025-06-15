export class RequestResetPasswordDto {
  constructor(public readonly email: string) {}

  static create(email: string) {
    if (!email || typeof email !== 'string') throw new Error('Email inválido');

    return new RequestResetPasswordDto(email.trim().toLowerCase());
  }
}
