import { CreateOrderInputDto } from '../../application/orders/dtos/create-order-input.dto';
import { OrderEntity } from '../entities/order.entity';

export abstract class OrderRepository {
  abstract create(data: CreateOrderInputDto): Promise<OrderEntity>;
  abstract getOrdersByUserId(userId: string): Promise<OrderEntity[]>;
  abstract getAll(): Promise<OrderEntity[]>;
}
