import { CreateCartDto } from '../../application/carts/dtos/create-cart.dto';
import { CartDatasource } from '../../domain/datasources/cart.datasource';
import { CartEntity } from '../../domain/entities/cart.entity';
import { CartRepository } from '../../domain/repositories/cart.repository';

export class CartRepositoryImpl implements CartRepository {
  constructor(private readonly datasource: CartDatasource) {}
  getCartItems(userId: string): Promise<CartEntity> {
    return this.datasource.getCartItems(userId);
  }
  create(createCartDto: CreateCartDto): Promise<CartEntity> {
    return this.datasource.create(createCartDto);
  }
  findByUserId(userId: string): Promise<CartEntity | null> {
    return this.datasource.findByUserId(userId);
  }
  deleteByUserId(userId: string, cartId: number): Promise<CartEntity> {
    return this.datasource.deleteByUserId(userId, cartId);
  }
}
