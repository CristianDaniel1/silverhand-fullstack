import { CartItemRepository } from '../../../domain/repositories/cart-item.repository';
import { CartRepository } from '../../../domain/repositories/cart.repository';
import { CreateCartItemDto } from '../dtos/create-cart-item.dto';

export interface AddToCartUseCase {
  execute(dto: CreateCartItemDto, userId: string): Promise<void>;
}

export class AddToCart implements AddToCartUseCase {
  constructor(
    private readonly cartRepository: CartRepository,
    private readonly cartItemRepository: CartItemRepository
  ) {}

  private async addOrUpdateItem(
    cartId: number,
    dto: CreateCartItemDto
  ): Promise<void> {
    const existingItem =
      await this.cartItemRepository.findByCartIdAndInstrumentId(
        cartId,
        dto.instrumentId
      );

    if (existingItem) {
      await this.cartItemRepository.updateById({
        id: existingItem.id,
        quantity: existingItem.quantity + (dto.quantity || 1),
      });
    } else {
      await this.cartItemRepository.create(
        {
          instrumentId: dto.instrumentId,
          quantity: dto.quantity,
        },
        cartId
      );
    }
  }

  async execute(dto: CreateCartItemDto, userId: string): Promise<void> {
    let cart = await this.cartRepository.findByUserId(userId);

    if (!cart) {
      cart = await this.cartRepository.create({
        userId,
        items: [],
      });
    }

    await this.addOrUpdateItem(cart.id, dto);
  }
}
