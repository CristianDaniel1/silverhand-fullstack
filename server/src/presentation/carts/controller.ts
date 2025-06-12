import { Request, Response } from 'express';
import { CartItemRepository } from '../../domain/repositories/cart-item.repository';
import { CartRepository } from '../../domain/repositories/cart.repository';
import { ControllerHandleError } from '../../shared/errors/handle-custom.error';
import { AddToCart } from '../../application/carts/use-cases/add-to-cart';
import { CreateCartItemDto } from '../../application/carts/dtos/create-cart-item.dto';
import { GetCartitems } from '../../application/carts/use-cases/get-cart-items';
import { UpdateCartItem } from '../../application/carts/use-cases/update-item';
import { UpdateCartItemDto } from '../../application/carts/dtos/update-cart-item.dtos';
import { DeleteCartItem } from '../../application/carts/use-cases/delete-item';
import { DeleteCart } from '../../application/carts/use-cases/delete-cart';

export class CartController extends ControllerHandleError {
  constructor(
    private readonly cartRepository: CartRepository,
    private readonly cartItemRepository: CartItemRepository
  ) {
    super();
  }

  public createCartItem = async (req: Request, res: Response) => {
    const loggedUser = req.user;
    const dto = CreateCartItemDto.create(req.body);

    try {
      const cartItem = await new AddToCart(
        this.cartRepository,
        this.cartItemRepository
      ).execute(dto, loggedUser!.id);
      res.status(201).json(cartItem);
    } catch (error: unknown) {
      this.handleError(res, error);
    }
  };

  public getCartItems = async (req: Request, res: Response) => {
    const loggedUser = req.user;

    try {
      const items = await new GetCartitems(this.cartRepository).execute(
        loggedUser!.id
      );
      res.json(items);
    } catch (error: unknown) {
      this.handleError(res, error);
    }
  };

  public updateCartItem = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const dto = UpdateCartItemDto.create({ ...req.body, id });

    try {
      const updatedItem = await new UpdateCartItem(
        this.cartItemRepository
      ).execute(dto);
      res.json(updatedItem);
    } catch (error: unknown) {
      this.handleError(res, error);
    }
  };

  public deleteCartItem = async (req: Request, res: Response) => {
    const id = +req.params.id;

    try {
      const deletedItem = await new DeleteCartItem(
        this.cartItemRepository
      ).execute(id);
      res.json(deletedItem);
    } catch (error: unknown) {
      this.handleError(res, error);
    }
  };

  public deleteCart = async (req: Request, res: Response) => {
    const loggedUser = req.user;

    try {
      await new DeleteCart(this.cartRepository).execute(loggedUser!.id);
      res.json({ message: 'Carrinho deletado com sucesso' });
    } catch (error: unknown) {
      this.handleError(res, error);
    }
  };
}
