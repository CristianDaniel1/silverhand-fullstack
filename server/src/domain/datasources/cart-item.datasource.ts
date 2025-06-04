import { CreateCartItemDto } from '../../application/carts/dtos/create-cart-item.dto';
import { UpdateCartItemDto } from '../../application/carts/dtos/update-cart-item.dtos';
import { CartItemEntity } from '../entities/cart-item.entity';

export abstract class CartItemDatasource {
  abstract create(
    createCartItemDto: CreateCartItemDto,
    cartId: number
  ): Promise<CartItemEntity>;
  abstract findByCartIdAndInstrumentId(
    cartId: number,
    instrumentId: number
  ): Promise<CartItemEntity | null>;
  abstract findById(id: number): Promise<CartItemEntity>;
  abstract updateById(
    updateCartItemDto: UpdateCartItemDto
  ): Promise<CartItemEntity>;
  abstract deleteById(id: number): Promise<CartItemEntity>;
}
