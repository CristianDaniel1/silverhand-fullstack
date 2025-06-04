import { CartItemRepository } from '../../../domain/repositories/cart-item.repository';

export interface DeleteCartItemUseCase {
  execute(id: number): Promise<void>;
}

export class DeleteCartItem implements DeleteCartItemUseCase {
  constructor(private readonly cartItemRepository: CartItemRepository) {}

  async execute(id: number): Promise<void> {
    const existingItem = await this.cartItemRepository.findById(id);

    if (existingItem) {
      await this.cartItemRepository.deleteById(id);
    }
  }
}
