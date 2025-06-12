import { CartItemEntity } from '../../../domain/entities/cart-item.entity';
import { CartItemRepository } from '../../../domain/repositories/cart-item.repository';
import { CustomError } from '../../../shared/errors/custom.error';

export interface DeleteCartItemUseCase {
  execute(id: number): Promise<CartItemEntity>;
}

export class DeleteCartItem implements DeleteCartItemUseCase {
  constructor(private readonly cartItemRepository: CartItemRepository) {}

  async execute(id: number): Promise<CartItemEntity> {
    const existingItem = await this.cartItemRepository.findById(id);
    if (!existingItem) throw CustomError.notFound('Item não encontrado');

    return this.cartItemRepository.deleteById(id);
  }
}
