import { CreateCartItemDto } from '../../application/cart-items/dtos/create-cart-item.dto';
import { UpdateCartItemDto } from '../../application/cart-items/dtos/update-cart-item.dtos';
import { prisma } from '../../data/postgres';
import { CartItemDatasource } from '../../domain/datasources/cart-item.datasource';
import { CartItemEntity } from '../../domain/entities/cart-item.entity';
import { CustomError } from '../../shared/errors/custom.error';

export class CartItemDatasourceImpl implements CartItemDatasource {
  async findById(id: number): Promise<CartItemEntity> {
    const cartItem = await prisma.cartItem.findFirst({
      where: { id },
    });

    if (!cartItem) throw CustomError.notFound('Não foi encontrado o item');

    return CartItemEntity.fromObject(cartItem);
  }

  async findByCartIdAndInstrumentId(
    cartId: number,
    instrumentId: number
  ): Promise<CartItemEntity | null> {
    const cartItem = await prisma.cartItem.findFirst({
      where: { cartId, instrumentId },
    });

    if (!cartItem) return null;

    return CartItemEntity.fromObject(cartItem);
  }

  async create(createCartItemDto: CreateCartItemDto): Promise<CartItemEntity> {
    console.log(createCartItemDto);
    const item = await prisma.cartItem.create({
      data: createCartItemDto,
    });

    return CartItemEntity.fromObject(item);
  }

  async updateById(
    updateCartItemDto: UpdateCartItemDto
  ): Promise<CartItemEntity> {
    const updatedItem = await prisma.cartItem.update({
      where: { id: updateCartItemDto.id },
      data: { quantity: updateCartItemDto.quantity },
    });

    return CartItemEntity.fromObject(updatedItem);
  }

  async deleteById(id: number): Promise<CartItemEntity> {
    const deletedItem = await prisma.cartItem.delete({
      where: { id },
    });

    return CartItemEntity.fromObject(deletedItem);
  }
}
