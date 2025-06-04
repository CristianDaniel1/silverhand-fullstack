export class UpdateCartItemDto {
  private constructor(
    public readonly id: number,
    public readonly quantity?: number
  ) {}

  static create(props: { [key: string]: any }): UpdateCartItemDto {
    return new UpdateCartItemDto(props.id, props.quantity);
  }
}
