import { CartRepository } from '../../../domain/repositories/cart.repository';
import { CustomError } from '../../../shared/errors/custom.error';

export interface DeleteCartUseCase {
  execute(userId: string): Promise<void>;
}

export class DeleteCart implements DeleteCartUseCase {
  constructor(private readonly cartRepository: CartRepository) {}

  async execute(userId: string): Promise<void> {
    const cart = await this.cartRepository.findByUserId(userId);
    if (!cart) throw CustomError.notFound('carrinho não encontrado');

    await this.cartRepository.deleteByUserId(userId, cart.id);
  }
}
