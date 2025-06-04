import { CreateCartItemDto } from '../../application/carts/dtos/create-cart-item.dto';
import { UpdateCartItemDto } from '../../application/carts/dtos/update-cart-item.dtos';
import { CartItemDatasource } from '../../domain/datasources/cart-item.datasource';
import { CartItemEntity } from '../../domain/entities/cart-item.entity';
import { CartItemRepository } from '../../domain/repositories/cart-item.repository';

export class CartItemRepositoryImpl implements CartItemRepository {
  constructor(private readonly datasource: CartItemDatasource) {}
  findById(id: number): Promise<CartItemEntity> {
    return this.datasource.findById(id);
  }
  findByCartIdAndInstrumentId(
    cartId: number,
    instrumentId: number
  ): Promise<CartItemEntity | null> {
    return this.datasource.findByCartIdAndInstrumentId(cartId, instrumentId);
  }
  create(
    createCartItemDto: CreateCartItemDto,
    cartId: number
  ): Promise<CartItemEntity> {
    return this.datasource.create(createCartItemDto, cartId);
  }
  updateById(updateCartItemDto: UpdateCartItemDto): Promise<CartItemEntity> {
    return this.datasource.updateById(updateCartItemDto);
  }
  deleteById(id: number): Promise<CartItemEntity> {
    return this.datasource.deleteById(id);
  }
}
