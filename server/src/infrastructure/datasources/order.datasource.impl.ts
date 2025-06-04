import { CreateOrderInputDto } from '../../application/orders/dtos/create-order-input.dto';
import { prisma } from '../../data/postgres';
import { OrderDatasource } from '../../domain/datasources/order.datasource';
import { OrderEntity } from '../../domain/entities/order.entity';

export class OrderDatasourceImpl implements OrderDatasource {
  async create(data: CreateOrderInputDto): Promise<OrderEntity> {
    const { userId, cartId, items, totalPrice } = data;

    const order = await prisma.order.create({
      data: {
        userId,
        cartId,
        totalPrice,
        OrderItem: {
          createMany: {
            data: items.map(item => ({
              instrumentId: item.instrumentId,
              quantity: item.quantity,
              priceAtOrder: item.priceAtOrder,
            })),
          },
        },
      },
      include: {
        OrderItem: true,
      },
    });

    return OrderEntity.fromObject(order);
  }

  async getOrdersByUserId(userId: string): Promise<OrderEntity[]> {
    const orders = await prisma.order.findMany({
      where: { userId },
      include: {
        OrderItem: {
          include: {
            instrument: true,
          },
        },
      },
      orderBy: { orderedAt: 'desc' },
    });

    return orders.map(order =>
      OrderEntity.fromObject({
        ...order,
        items: order.OrderItem,
      })
    );
  }

  async getAll(): Promise<OrderEntity[]> {
    const orders = await prisma.order.findMany({
      include: {
        OrderItem: {
          include: {
            instrument: true,
          },
        },
      },
      orderBy: { orderedAt: 'desc' },
    });

    return orders.map(order =>
      OrderEntity.fromObject({
        ...order,
        items: order.OrderItem,
      })
    );
  }
}
