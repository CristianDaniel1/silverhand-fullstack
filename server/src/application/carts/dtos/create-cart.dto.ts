import { CustomError } from '../../../shared/errors/custom.error';

export class CreateCartDto {
  private constructor(
    public readonly userId: string,
    public readonly items: {
      instrumentId: number;
      quantity: number;
    }[]
  ) {}

  static create(props: { [key: string]: any }): CreateCartDto {
    if (!props.userId || !Array.isArray(props.items)) {
      throw CustomError.unprocessableEntity('Parâmetros inválidos');
    }
    return new CreateCartDto(props.userId, props.items);
  }
}
