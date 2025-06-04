import { Decimal } from '../../../../generated/prisma/runtime/library';
import { OrderEntity } from '../../../domain/entities/order.entity';
import { CartRepository } from '../../../domain/repositories/cart.repository';
import { OrderRepository } from '../../../domain/repositories/order.repository';
import { CustomError } from '../../../shared/errors/custom.error';

export interface CreateOrderUseCase {
  execute(userId: string): Promise<void>;
}

export class CreateOrder implements CreateOrderUseCase {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly cartRepository: CartRepository
  ) {}

  async execute(userId: string): Promise<void> {
    const cart = await this.cartRepository.getCartItems(userId);

    if (!cart || !cart.items?.length)
      throw CustomError.badRequest('Carrinho vazio ou não encontrado');

    const orderItems = cart.items.map(item => {
      const price = item.instrument?.price;
      if (!price)
        throw CustomError.internalServer('Instrumento não encontrado');

      return {
        instrumentId: item.instrumentId,
        quantity: item.quantity,
        priceAtOrder: price,
      };
    });

    const total = orderItems.reduce(
      (acc, item) => acc + item.priceAtOrder.toNumber() * item.quantity,
      0
    );

    await this.orderRepository.create({
      userId,
      cartId: cart.id,
      totalPrice: new Decimal(total),
      items: orderItems,
    });

    await this.cartRepository.deleteByUserId(userId, cart.id);
  }
}
