import { CreateCartItemDto } from '../../application/carts/dtos/create-cart-item.dto';
import { UpdateCartItemDto } from '../../application/carts/dtos/update-cart-item.dtos';
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

  async create(
    createCartItemDto: CreateCartItemDto,
    cartId: number
  ): Promise<CartItemEntity> {
    const item = await prisma.cartItem.create({
      data: { cartId, ...createCartItemDto },
      include: {
        instrument: true,
      },
    });

    return CartItemEntity.fromObject(item);
  }

  async updateById(
    updateCartItemDto: UpdateCartItemDto
  ): Promise<CartItemEntity> {
    const updatedItem = await prisma.cartItem.update({
      where: { id: updateCartItemDto.id },
      data: { quantity: updateCartItemDto.quantity },
      include: {
        instrument: true,
      },
    });

    return CartItemEntity.fromObject(updatedItem);
  }

  async deleteById(id: number): Promise<CartItemEntity> {
    const deletedItem = await prisma.cartItem.delete({
      where: { id },
      include: {
        instrument: true,
      },
    });

    return CartItemEntity.fromObject(deletedItem);
  }
}
