import { CreateCartItemDto } from '../../application/cart-items/dtos/create-cart-item.dto';
import { UpdateCartItemDto } from '../../application/cart-items/dtos/update-cart-item.dtos';
import { CartItemEntity } from '../entities/cart-item.entity';

export abstract class CartItemRepository {
  abstract create(
    createCartItemDto: CreateCartItemDto
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
