import { OrderEntity } from '../../../domain/entities/order.entity';
import { OrderRepository } from '../../../domain/repositories/order.repository';

export interface GetOrdersUseCase {
  execute(): Promise<OrderEntity[]>;
}

export class GetOrders implements GetOrdersUseCase {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(): Promise<OrderEntity[]> {
    return this.orderRepository.getAll();
  }
}
