import { Request, Response } from 'express';
import { ControllerHandleError } from '../../shared/errors/handle-custom.error';
import { CreateOrder } from '../../application/orders/use-cases/create-order';
import { CartRepository } from '../../domain/repositories/cart.repository';
import { OrderRepository } from '../../domain/repositories/order.repository';
import { GetOrdersOfUser } from '../../application/orders/use-cases/get-orders-of-user';
import { GetOrders } from '../../application/orders/use-cases/get-orders';

export class OrderController extends ControllerHandleError {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly cartRepository: CartRepository
  ) {
    super();
  }

  public getOrdersByUserId = async (req: Request, res: Response) => {
    const loggedUser = req.user;

    try {
      const userOrders = await new GetOrdersOfUser(
        this.orderRepository
      ).execute(loggedUser?.id!);
      res.json(userOrders);
    } catch (error: unknown) {
      this.handleError(res, error);
    }
  };

  public createOrder = async (req: Request, res: Response) => {
    const loggedUser = req.user;

    try {
      await new CreateOrder(this.orderRepository, this.cartRepository).execute(
        loggedUser?.id!
      );
      res.status(201).json({ message: 'Pedido criado com sucesso.' });
    } catch (error: unknown) {
      this.handleError(res, error);
    }
  };

  public getAllOrders = async (req: Request, res: Response) => {
    try {
      const orders = await new GetOrders(this.orderRepository).execute();
      res.json(orders);
    } catch (error: unknown) {
      this.handleError(res, error);
    }
  };
}
