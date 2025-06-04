export class CreateCartItemDto {
  private constructor(
    public readonly instrumentId: number,
    public readonly quantity?: number
  ) {}

  static create(props: { [key: string]: any }): CreateCartItemDto {
    return new CreateCartItemDto(props.instrumentId, props.quantity);
  }
}
