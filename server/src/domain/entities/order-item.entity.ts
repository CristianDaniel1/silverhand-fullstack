import { Decimal } from '../../../generated/prisma/runtime/library';
import { CustomError } from '../../shared/errors/custom.error';

export class OrderItemEntity {
  constructor(
    public id: number,
    public orderId: string,
    public instrumentId: number,
    public quantity: number,
    public priceAtOrder: Decimal,
    public instrumentName?: string,
    public instrumentImage?: string
  ) {}

  static fromObject(object: { [key: string]: any }): OrderItemEntity {
    const { id, orderId, instrumentId, quantity, priceAtOrder, instrument } =
      object;
    if (quantity <= 0) {
      throw CustomError.unprocessableEntity(
        'Quantidade deve ser maior que zero.'
      );
    }
    if (priceAtOrder < 0) {
      throw CustomError.unprocessableEntity('Preço inválido.');
    }

    return new OrderItemEntity(
      id,
      orderId,
      instrumentId,
      quantity,
      new Decimal(priceAtOrder),
      instrument?.name,
      instrument?.image
    );
  }

  toJSON() {
    return {
      id: this.id,
      orderId: this.orderId,
      instrumentId: this.instrumentId,
      quantity: this.quantity,
      priceAtOrder: this.priceAtOrder.toNumber(),
      instrumentName: this.instrumentName,
      instrumentImage: this.instrumentImage,
    };
  }
}
