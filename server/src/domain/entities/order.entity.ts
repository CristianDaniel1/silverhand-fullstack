import { OrderItemEntity } from './order-item.entity';

export enum OrderStatus {
  COMPLETED = 'COMPLETED',
  PENDING = 'PENDING',
  CANCELED = 'CANCELED',
  RETURNED = 'RETURNED',
}

export class OrderEntity {
  constructor(
    public id: string,
    public userId: string,
    public cartId: number,
    public totalPrice: number,
    public orderedAt: Date,
    public status: OrderStatus,
    public items: OrderItemEntity[]
  ) {}

  static fromObject(obj: any): OrderEntity {
    const items =
      obj.items?.map((item: any) => OrderItemEntity.fromObject(item)) || [];

    return new OrderEntity(
      obj.id,
      obj.userId,
      obj.cartId,
      parseFloat(obj.totalPrice),
      new Date(obj.orderedAt),
      obj.status,
      items
    );
  }

  toJSON() {
    return {
      id: this.id,
      userId: this.userId,
      cartId: this.cartId,
      totalPrice: this.totalPrice,
      orderedAt: this.orderedAt,
      status: this.status,
      items: this.items.map(item => item.toJSON()),
    };
  }
}
