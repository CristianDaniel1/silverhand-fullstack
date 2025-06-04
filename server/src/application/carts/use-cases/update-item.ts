import { CartItemRepository } from '../../../domain/repositories/cart-item.repository';
import { UpdateCartItemDto } from '../dtos/update-cart-item.dtos';

export interface UpdateCartItemUseCase {
  execute(dto: UpdateCartItemDto): Promise<void>;
}

export class UpdateCartItem implements UpdateCartItemUseCase {
  constructor(private readonly cartItemRepository: CartItemRepository) {}

  async execute(dto: UpdateCartItemDto): Promise<void> {
    const existingItem = await this.cartItemRepository.findById(dto.id);
    if (!existingItem) return;

    const { quantity: quantityDto } = dto;

    if (quantityDto && quantityDto < 0 && existingItem.quantity <= 1)
      await this.cartItemRepository.deleteById(existingItem.id);
    else
      await this.cartItemRepository.updateById({
        id: existingItem.id,
        quantity: existingItem.quantity + (dto.quantity || 1),
      });
  }
}
