import { Role } from '../../../domain/entities/user.entity';

export class UpdateUserDto {
  private constructor(
    public id: string,
    public name?: string,
    public email?: string,
    public cpf?: number,
    public password?: string,
    public zipCode?: number,
    public address?: string,
    public role?: Role,
    public phoneNumber?: number,
    public profilePic?: string
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
