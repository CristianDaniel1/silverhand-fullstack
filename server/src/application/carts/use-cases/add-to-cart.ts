import { CartItemEntity } from '../../../domain/entities/cart-item.entity';
import { CartItemRepository } from '../../../domain/repositories/cart-item.repository';
import { CartRepository } from '../../../domain/repositories/cart.repository';
import { CreateCartItemDto } from '../dtos/create-cart-item.dto';

export interface AddToCartUseCase {
  execute(dto: CreateCartItemDto, userId: string): Promise<CartItemEntity>;
}

export class AddToCart implements AddToCartUseCase {
  constructor(
    private readonly cartRepository: CartRepository,
    private readonly cartItemRepository: CartItemRepository
  ) {}

  private async addOrUpdateItem(
    cartId: number,
    dto: CreateCartItemDto
  ): Promise<CartItemEntity> {
    const existingItem =
      await this.cartItemRepository.findByCartIdAndInstrumentId(
        cartId,
        dto.instrumentId
      );

    if (existingItem) {
      return this.cartItemRepository.updateById({
        id: existingItem.id,
        quantity: existingItem.quantity + (dto.quantity || 1),
      });
    } else {
      return this.cartItemRepository.create(
        {
          instrumentId: dto.instrumentId,
          quantity: dto.quantity,
        },
        cartId
      );
    }
  }

  async execute(
    dto: CreateCartItemDto,
    userId: string
  ): Promise<CartItemEntity> {
    let cart = await this.cartRepository.findByUserId(userId);

    if (!cart) {
      cart = await this.cartRepository.create({
        userId,
        items: [],
      });
    }

    return this.addOrUpdateItem(cart.id, dto);
  }
}
