import { OrderEntity } from '../../../domain/entities/order.entity';
import { OrderRepository } from '../../../domain/repositories/order.repository';

export interface GetOrdersByUserIdUseCase {
  execute(userId: string): Promise<OrderEntity[]>;
}

export class GetOrdersOfUser implements GetOrdersByUserIdUseCase {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(userId: string): Promise<OrderEntity[]> {
    return this.orderRepository.getOrdersByUserId(userId);
  }
}
