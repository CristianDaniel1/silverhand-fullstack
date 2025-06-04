import { CreateOrderInputDto } from '../../application/orders/dtos/create-order-input.dto';
import { OrderDatasource } from '../../domain/datasources/order.datasource';
import { OrderEntity } from '../../domain/entities/order.entity';
import { OrderRepository } from '../../domain/repositories/order.repository';

export class OrderRepositoryImpl implements OrderRepository {
  constructor(private readonly datasource: OrderDatasource) {}

  create(data: CreateOrderInputDto): Promise<OrderEntity> {
    return this.datasource.create(data);
  }
  getOrdersByUserId(userId: string): Promise<OrderEntity[]> {
    return this.datasource.getOrdersByUserId(userId);
  }

  getAll(): Promise<OrderEntity[]> {
    return this.datasource.getAll();
  }
}
