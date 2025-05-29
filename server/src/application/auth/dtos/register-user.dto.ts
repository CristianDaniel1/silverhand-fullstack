import { Category } from '../../../domain/entities/instrument.entity';
import { Role } from '../../../domain/entities/user.entity';

export class RegisterUserDto {
  private constructor(
    public name: string,
    public email: string,
    public cpf: number,
    public password: string,
    public zipCode: number,
    public address: string,
    public role: Role,
    public phoneNumber?: number,
    public profilePic?: string
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
