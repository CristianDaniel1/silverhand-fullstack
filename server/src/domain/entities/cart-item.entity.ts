import { CustomError } from '../../shared/errors/custom.error';
import { InstrumentEntity } from './instrument.entity';

export class CartItemEntity {
  constructor(
    public id: number,
    public cartId: number,
    public instrumentId: number,
    public quantity: number,
    public instrument?: InstrumentEntity
  ) {
    if (quantity <= 0) {
      throw CustomError.unprocessableEntity('Quantidade deve ser maior que 0');
    }
  }

  static fromObject(object: { [key: string]: any }): CartItemEntity {
    const { id, cartId, quantity, instrumentId, instrument } = object;

    if (!instrumentId) {
      throw CustomError.unprocessableEntity('Instrumento é obrigatório');
    }

    return new CartItemEntity(
      id,
      cartId,
      instrumentId,
      quantity,
      instrument ? InstrumentEntity.fromObject(instrument) : undefined
    );
  }

  toJSON() {
    return {
      id: this.id,
      cartId: this.cartId,
      quantity: this.quantity,
      instrumentId: this.instrumentId,
      instrument: this.instrument?.toJSON(),
    };
  }
}
