import { Decimal } from '../../../../generated/prisma/runtime/library';

export class CreateOrderInputDto {
  constructor(
    public readonly userId: string,
    public readonly cartId: number,
    public readonly totalPrice: Decimal,
    public readonly items: {
      instrumentId: number;
      quantity: number;
      priceAtOrder: Decimal;
    }[]
  ) {}

  static create(props: {
    userId: string;
    cartId: number;
    totalPrice: Decimal;
    items: {
      instrumentId: number;
      quantity: number;
      priceAtOrder: Decimal;
    }[];
  }): CreateOrderInputDto {
    return new CreateOrderInputDto(
      props.userId,
      props.cartId,
      props.totalPrice,
      props.items
    );
  }
}
