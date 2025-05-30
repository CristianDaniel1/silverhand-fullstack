export class LoginUserDto {
  private constructor(
    public readonly email: string,
    public readonly password: string
  ) {}

  static create(props: { [key: string]: any }): LoginUserDto {
    return new LoginUserDto(props.email, props.password);
  }
}
