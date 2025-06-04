import { CustomError } from '../../shared/errors/custom.error';

export enum Role {
  ADMIN = 'ADMIN_ROLE',
  USER = 'USER_ROLE',
}

export class UserEntity {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public cpf: string,
    public password: string,
    public zipCode: number,
    public address: string,
    public role: Role = Role.USER,
    public createdAt: Date,
    public updatedAt: Date,
    public phoneNumber?: string,
    public profilePic?: string
  ) {}

  public static fromObject(object: { [key: string]: any }): UserEntity {
    const {
      id,
      name,
      email,
      cpf,
      password,
      zipCode,
      address,
      role,
      createdAt,
      updatedAt,
      phoneNumber,
      profilePic,
    } = object;

    if (!id || !name || !email || !cpf || !password || !zipCode || !address) {
      throw CustomError.unprocessableEntity('Campos obrigatórios faltando');
    }

    return new UserEntity(
      id,
      name,
      email,
      cpf,
      password,
      zipCode,
      address,
      role,
      createdAt,
      updatedAt,
      phoneNumber,
      profilePic
    );
  }
}
