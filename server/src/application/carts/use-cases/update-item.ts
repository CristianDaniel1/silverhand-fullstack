import { CartItemEntity } from '../../../domain/entities/cart-item.entity';
import { CartItemRepository } from '../../../domain/repositories/cart-item.repository';
import { CustomError } from '../../../shared/errors/custom.error';
import { UpdateCartItemDto } from '../dtos/update-cart-item.dtos';

export interface UpdateCartItemUseCase {
  execute(dto: UpdateCartItemDto): Promise<CartItemEntity>;
}

export class UpdateCartItem implements UpdateCartItemUseCase {
  constructor(private readonly cartItemRepository: CartItemRepository) {}

  async execute(dto: UpdateCartItemDto): Promise<CartItemEntity> {
    const existingItem = await this.cartItemRepository.findById(dto.id);
    if (!existingItem) throw CustomError.notFound('Item não encontrado');

    const { quantity: quantityDto } = dto;

    if (quantityDto && quantityDto < 0 && existingItem.quantity - 1 < 1) {
      const deletedItem = await this.cartItemRepository.deleteById(
        existingItem.id
      );

      const updateDeleted = deletedItem;
      updateDeleted.quantity = updateDeleted.quantity - 1;
      return updateDeleted;
    } else
      return this.cartItemRepository.updateById({
        id: existingItem.id,
        quantity: existingItem.quantity + (dto.quantity || 1),
      });
  }
}
