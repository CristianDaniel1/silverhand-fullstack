import { Router } from 'express';
import { CartDatasourceImpl } from '../../infrastructure/datasources/cart.datasource.impl';
import { CartRepositoryImpl } from '../../infrastructure/repositories/cart.repository.impl';
import { CartController } from './controller';
import { CartItemDatasourceImpl } from '../../infrastructure/datasources/cart-item.datasource';
import { CartItemRepositoryImpl } from '../../infrastructure/repositories/cart-item.repository';

export class CartRoutes {
  static get routes(): Router {
    const router = Router();

    const cartDatasource = new CartDatasourceImpl();
    const cartRepository = new CartRepositoryImpl(cartDatasource);

    const cartItemDatasource = new CartItemDatasourceImpl();
    const cartItemRepository = new CartItemRepositoryImpl(cartItemDatasource);

    const controller = new CartController(cartRepository, cartItemRepository);

    router.get('/', controller.getCartItems);
    router.post('/items', controller.createCartItem);
    router.put('/items/:id', controller.updateCartItem);
    router.delete('/items/:id', controller.deleteCartItem);
    router.delete('/', controller.deleteCart);

    return router;
  }
}
