import { CartItemEntity } from './cart-item.entity';
import { CustomError } from '../../shared/errors/custom.error';

export class CartEntity {
  constructor(
    public id: number,
    public userId: string,
    public items: CartItemEntity[]
  ) {}

  static fromObject(object: { [key: string]: any }): CartEntity {
    const { id, userId, items } = object;
    if (!userId) {
      throw CustomError.unprocessableEntity('Usuário é obrigatório');
    }

    return new CartEntity(
      id,
      userId,
      (items || []).map((item: any) => CartItemEntity.fromObject(item))
    );
  }

  toJSON() {
    return {
      id: this.id,
      userId: this.userId,
      items: this.items.map(item => item.toJSON()),
    };
  }
}
