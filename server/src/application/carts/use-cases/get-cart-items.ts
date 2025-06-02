import { CartEntity } from '../../../domain/entities/cart.entity';
import { CartRepository } from '../../../domain/repositories/cart.repository';

export interface GetCartitemsUseCase {
  execute(userId: string): Promise<CartEntity>;
}

export class GetCartitems implements GetCartitemsUseCase {
  constructor(private readonly cartRepository: CartRepository) {}

  async execute(userId: string): Promise<CartEntity> {
    return this.cartRepository.getCartItems(userId);
  }
}
