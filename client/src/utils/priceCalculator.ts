import { EnhancedShoppingCart, ShoppingCart } from '../types';
import { currencyFormatter } from './formatting';

export const enhanceCart = (cartData: ShoppingCart): EnhancedShoppingCart => {
  const itemsWithTotal = cartData.items.map(item => ({
    ...item,
    itemTotal: item.quantity * item.instrument.price,
  }));

  const total = itemsWithTotal.reduce((sum, item) => sum + item.itemTotal, 0);
  const totalItems = itemsWithTotal.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return {
    ...cartData,
    items: itemsWithTotal,
    totalItems,
    total,
  };
};

export const calculateOriginalPrice = (
  discountedPrice: number,
  discountPercentage: number = 10
): string => {
  if (discountPercentage < 0 || discountPercentage >= 100) {
    throw new Error('O desconto deve ser entre 0% e 100%');
  }

  const originalPrice = discountedPrice / (1 - discountPercentage / 100);

  return currencyFormatter.format(parseFloat(originalPrice.toFixed(2)));
};
