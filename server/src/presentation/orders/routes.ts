import { Router } from 'express';
import { OrderDatasourceImpl } from '../../infrastructure/datasources/order.datasource.impl';
import { OrderRepositoryImpl } from '../../infrastructure/repositories/order.repository.impl';
import { OrderController } from './controller';
import { CartDatasourceImpl } from '../../infrastructure/datasources/cart.datasource.impl';
import { CartRepositoryImpl } from '../../infrastructure/repositories/cart.repository.impl';
import { AuthRolesMiddleware } from '../middlewares/auth-roles.middleware';
import { Role } from '../../domain/entities/user.entity';

export class OrderRoutes {
  static get routes(): Router {
    const router = Router();

    const cartDatasource = new CartDatasourceImpl();
    const cartRepository = new CartRepositoryImpl(cartDatasource);
    const datasource = new OrderDatasourceImpl();
    const orderRepository = new OrderRepositoryImpl(datasource);

    const controller = new OrderController(orderRepository, cartRepository);

    router.post('/user', controller.createOrder);
    router.get('/user', controller.getOrdersByUserId);
    router.get(
      '/',
      AuthRolesMiddleware.authorizeRoles(Role.ADMIN),
      controller.getAllOrders
    );

    return router;
  }
}
