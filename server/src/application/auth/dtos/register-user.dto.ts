import { Role } from '../../../domain/entities/user.entity';

export class RegisterUserDto {
  private constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly cpf: string,
    public readonly password: string,
    public readonly zipCode: number,
    public readonly address: string,
    public readonly role: Role,
    public readonly phoneNumber?: string,
    public readonly profilePic?: string
  ) {}

  static create(props: { [key: string]: any }): RegisterUserDto {
    return new RegisterUserDto(
      props.name,
      props.email,
      props.cpf,
      props.password,
      props.zipCode,
      props.address,
      props.role,
      props.phoneNumber,
      props.profilePic
    );
  }
}
