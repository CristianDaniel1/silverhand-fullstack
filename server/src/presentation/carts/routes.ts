import { Router } from 'express';
import { CartDatasourceImpl } from '../../infrastructure/datasources/cart.datasource.impl';
import { CartRepositoryImpl } from '../../infrastructure/repositories/cart.repository.impl';
import { CartController } from './controller';
import { CartItemDatasourceImpl } from '../../infrastructure/datasources/cart-item.datasource.impl';
import { CartItemRepositoryImpl } from '../../infrastructure/repositories/cart-item.repository.impl';
import { validateData } from '../middlewares/validation-data.middleware';
import { CartItemSchema } from './schemas/cart-item.validator';
import { IdSchema } from '../../shared/schemas/id-number.validator';
import { UpdateItemSchema } from './schemas/update-item.validator';

export class CartRoutes {
  static get routes(): Router {
    const router = Router();

    const cartDatasource = new CartDatasourceImpl();
    const cartRepository = new CartRepositoryImpl(cartDatasource);

    const cartItemDatasource = new CartItemDatasourceImpl();
    const cartItemRepository = new CartItemRepositoryImpl(cartItemDatasource);

    const controller = new CartController(cartRepository, cartItemRepository);

    router.get('/', controller.getCartItems);
    router.post(
      '/items',
      [validateData(CartItemSchema)],
      controller.createCartItem
    );
    router.put(
      '/items/:id',
      [validateData(IdSchema), validateData(UpdateItemSchema)],
      controller.updateCartItem
    );
    router.delete('/items/:id', controller.deleteCartItem);
    router.delete('/', controller.deleteCart);

    return router;
  }
}
