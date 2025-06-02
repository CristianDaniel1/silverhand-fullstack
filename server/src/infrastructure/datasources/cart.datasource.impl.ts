import { CreateCartDto } from '../../application/carts/dtos/create-cart.dto';
import { prisma } from '../../data/postgres';
import { CartDatasource } from '../../domain/datasources/cart.datasource';
import { CartEntity } from '../../domain/entities/cart.entity';
import { CustomError } from '../../shared/errors/custom.error';

export class CartDatasourceImpl implements CartDatasource {
  async getCartItems(id: string): Promise<CartEntity> {
    const cart = await prisma.cart.findUnique({
      where: { userId: id },
      include: {
        items: {
          include: {
            instrument: true,
          },
        },
      },
    });

    if (!cart) throw CustomError.notFound('Carrinho não encontrado');

    return CartEntity.fromObject(cart);
  }

  async create(createCartDto: CreateCartDto): Promise<CartEntity> {
    const { userId, items } = createCartDto;

    const cart = await prisma.cart.create({
      data: {
        userId,
        items: {
          create: items.map(item => ({
            instrumentId: item.instrumentId,
            quantity: item.quantity,
          })),
        },
      },
      include: { items: true },
    });

    return CartEntity.fromObject({
      id: cart.id,
      userId: cart.userId,
      items: cart.items,
    });
  }

  async findByUserId(userId: string): Promise<CartEntity | null> {
    const cartUser = await prisma.cart.findFirst({ where: { userId } });

    if (!cartUser) return null;

    return CartEntity.fromObject(cartUser);
  }

  async deleteByUserId(userId: string, cartId: number): Promise<CartEntity> {
    await prisma.cartItem.deleteMany({
      where: { cartId },
    });

    const cartDeleted = await prisma.cart.delete({
      where: { userId },
    });

    return CartEntity.fromObject(cartDeleted);
  }
}
