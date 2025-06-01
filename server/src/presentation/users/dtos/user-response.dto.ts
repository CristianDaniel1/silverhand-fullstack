import { Role, UserEntity } from '../../../domain/entities/user.entity';

export class UserResponseDto {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string,
    public readonly cpf: string,
    public readonly zipCode: number,
    public readonly address: string,
    public readonly role: Role,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly phoneNumber?: string,
    public readonly profilePic?: string
  ) {}

  static fromEntity(user: UserEntity): UserResponseDto {
    return new UserResponseDto(
      user.id,
      user.name,
      user.email,
      user.cpf,
      user.zipCode,
      user.address,
      user.role,
      user.createdAt,
      user.updatedAt,
      user.phoneNumber,
      user.profilePic
    );
  }
}
