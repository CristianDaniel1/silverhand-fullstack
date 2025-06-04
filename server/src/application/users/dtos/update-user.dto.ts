import { Role } from '../../../domain/entities/user.entity';

export class UpdateUserDto {
  private constructor(
    public readonly id: string,
    public readonly name?: string,
    public readonly email?: string,
    public readonly cpf?: string,
    public readonly password?: string,
    public readonly zipCode?: number,
    public readonly address?: string,
    public readonly role?: Role,
    public readonly phoneNumber?: string,
    public readonly profilePic?: string
  ) {}

  get values() {
    const obj = {
      id: this.id,
      name: this.name,
      email: this.email,
      cpf: this.cpf,
      password: this.password,
      zipCode: this.zipCode,
      address: this.address,
      role: this.role,
      phoneNumber: this.phoneNumber,
      profilePic: this.profilePic,
    };

    return Object.fromEntries(
      Object.entries(obj).filter(([_, v]) => v !== undefined && v !== null)
    );
  }

  static create(props: { [key: string]: any }): UpdateUserDto {
    return new UpdateUserDto(
      props.id,
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
