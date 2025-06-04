import { CreateCartDto } from '../../application/carts/dtos/create-cart.dto';
import { CartEntity } from '../entities/cart.entity';

export abstract class CartDatasource {
  abstract create(createCartDto: CreateCartDto): Promise<CartEntity>;
  abstract getCartItems(userId: string): Promise<CartEntity>;
  abstract findByUserId(userId: string): Promise<CartEntity | null>;
  abstract deleteByUserId(userId: string, cartId: number): Promise<CartEntity>;
}
